---
title: "Flight Discount"
source: "CSES"
link: "https://cses.fi/problemset/task/1195"
difficulty: 10
concept: "graph"
tags: ["graph", "dijkstra's", "shortest paths", "traversal", "directed"]
---

<br>

## Problem Deconstruction

You have ONE discount coupon that can be used to *halve* the price of any single flight on a route.

Determine a minimum-price flight route from city $1$ to $N$ $(2\le N\le 10^5)$ on a graph with $M$ $(1\le M\le 2\cdot 10^5)$ edges from city $a\to b$ that cost $c$ $(1\le a,b\le N, 1\le c\le 10^9)$.

<br>
<br>

## Key Observations

- Using the coupon: on a particular edge $a\to b$, the cost of the route would be $shortest_path(1\to a) + \frac{ab}{2} + shortest_path(b\to N)$.

<br>
<br>

## General Thought Process

1. We're asked to find the minimum cost of a route from point $1$ to point $N$ given an extra, one-time cost-reducing condition.

2. Considering a certain edge $a\to b$, applying the coupon to that edge makes the minimum cost $shortest_path(1\to a) + \frac{ab}{2} + shortest_path(b\to N)$.

3. Thus, we should go through each possible edge to use the coupon on. We'll implement dijkstra's from $1$ and to $N$ to address $sp(1\to a)$ and $sp(b\to N)$.

<br>
<br>

## Details

- Construct 2 adjacency lists: one for the directed graph with given edges $a\to b$ of weight $c$, and another for the reversed edges $b\to a$ of weight c.

- Use Dijkstra's on both graphs to fill the shortest distances from $1$ and from $N$ (in reality, to $N$) respectively.

- After finding the shortest paths from $1$ and to $N$, iterate through every edge $a\to b$ with weight $c$ and find the smallest $from1[a] + \frac{c}{2} + toN[b]$ among them for the result.

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
// suppose coupon is used on edge A->B
// min route would be min(1->A)+(AB/2)+min(B->N)

void dij(ll s,vector<ll>&dist,vector<bool>&vis,vector<vector<pair<ll,ll>>>&adj) {
    ll i; pair<ll,ll> cur;
    priority_queue<pair<ll,ll>> q; q.push({0,s});
    while(!q.empty()) {
        cur=q.top(); q.pop();
        i=cur.second;
        if(vis[i]) continue;
        vis[i]=true;
        for(auto j:adj[i]) {
            if(dist[i]+j.second<dist[j.first]) {
                dist[j.first]=dist[i]+j.second;
                q.push({-dist[j.first],j.first});
            }
        }
    }
}

int main() {
    int N,M; cin>>N>>M;
    // adj[a]: b,c where edge of weight c from a -> b
    vector<vector<pair<ll,ll>>> adj(N+1),radj(N+1);
    vector<vector<ll>> edges;
    for(ll a,b,c,i=0; i<M; i++) {
        cin>>a>>b>>c;
        adj[a].push_back({b,c});
        radj[b].push_back({a,c});
        edges.push_back({a,b,c});
    }

    // dijkstra's
    vector<ll> from1(N+1,1e15),toN(N+1,1e15);
    from1[1]=0; toN[N]=0;
    vector<bool> vis(N+1);
    dij(1,from1,vis,adj); 
    fill(vis.begin(),vis.end(),false);
    dij(N,toN,vis,radj);

    ll a,b,c,res=1e15;
    // for every edge
    for(auto e:edges) {
        a=e[0]; b=e[1]; c=e[2];
        res=min(res,from1[a]+(int)(c/2)+toN[b]);
    }

    cout<<res<<endl;
}
```

---TAKEAWAYS---

## shortest path with one-time cost reduction:

##### ● express general result considering a specific case (in this case, which edge to apply cost reduction on)

##### ● adjust dijkstra's accordingly
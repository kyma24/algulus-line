---
title: "Cycle Finding"
source: "CSES"
link: "https://cses.fi/problemset/task/1197"
difficulty: 10
concept: "graph"
tags: ["graph", "bellman-ford", "cycles", "path reconstruction", "traversal", "directed"]
---

<br>

## Problem Deconstruction

You have a directed graph with $N$ nodes $(1\le N\le 2500)$ and $M$ edges $(1\le M\le 5000)$, each from $a$ to $b$ with weight $c$ $(1\le a,b\le N, -10^9\le c\le 10^9)$.

Find out if it contains a negative cycle. If it does, output one.

<br>
<br>

## Key Observations

- Negative cycles: use Bellman-Ford.

<br>
<br>

## General Thought Process

1. Note that we have a weighted directed graph, potentially with negative cycles

2. Immediate association with Bellman-Ford.

3. Thus, we should use Bellman-Ford to detect a negative cycle.

<br>
<br>

## Details

- Construct the adjacency list of the directed graph using given edges $a\to b$ of weight $c$.

- Use Bellman-Ford on the graph while maintaining shortest distance from arbitrary starting node (I used $1$) to each node.

- "Relax" edges $N-1$ times by considering and updating a new shortest distance going through each $a\to b$

- While "relaxing," keep track of which edge (or which "parent" of the current node) results in the shortest distance from the source. This is for reconstructing the negative cycle later.

- At the end, "relax" edges one more time. If any shortest distances get updated, that indicates anegative cycle; record the node this occurred at. There is no negative cycle if this doesn't happen.

- To reconstruct, trace back through the parent record starting with the node resulting from the last "relaxing" procedure.

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    int N,M; cin>>N>>M;
    vector<vector<ll>> edges;
    for(ll a,b,c,i=0; i<M; i++) {
        cin>>a>>b>>c;
        edges.push_back({a,b,c});
    }

    vector<ll> dist(N+1,1e13),par(N+1); dist[1]=0;
    int pt=0;
    // bellman-ford
    for(ll a,b,c,i=1; i<=N; i++) {
        for(auto e:edges) {
            a=e[0]; b=e[1]; c=e[2];
            if(dist[a]+c<dist[b]) {
                dist[b]=dist[a]+c;
                par[b]=a;
                if(i==N) {
                    // child connected to negative cycle
                    pt=b;
                    break;
                }
            }
        }
    }

    if(pt) {
        cout<<"YES"<<endl;
        vector<bool> vis(N+1); vector<int> cyc;
        // trace from pt along parent array
        cyc.push_back(pt);
        while(!vis[pt]) {
            vis[pt]=true;
            pt=par[pt];
            cyc.push_back(pt);
        }
        // output cycle
        cout<<pt<<" ";
        for(int i=cyc.size()-2; i>=0; i--) {
            cout<<cyc[i]<<" ";
            if(cyc[i]==pt) break;
        }
    } else cout<<"NO"<<endl;
}
```

---TAKEAWAYS---

## outputting negative cycles:

##### ● bellman ford

##### ● store parent array and backtrack from a node in the negative cycle
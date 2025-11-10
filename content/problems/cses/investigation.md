---
title: "Investigation"
source: "CSES"
link: "https://cses.fi/problemset/task/1202"
difficulty: 20
concept: "graph"
tags: ["graph", "dp", "graph modeling", "shortest paths", "traversal", "directed"]
---

<br>

## Problem Deconstruction

You're given a graph of $N$ cities $(1\le N\le 10^5)$ and $M$ one-way edges $(1\le M\le 2\cdot 10^5)$ from city $a$ to $b$ $(1\le a,b\le N)$ of cost $c$ $(1\le c\le 10^9)$.

Determine: 

1. the minimum price of a route from $1$ to $N$
2. the number of minimum-price routes mod $10^9+7$
3. the minimum number of edges on a minimum-price route
4. the maximum number of edges on a minimum-price route

<br>
<br>

## Key Observations

- Get the minimum price from Dijkstra's, everything else from DP.

<br>
<br>

## General Thought Process

1. Note that this requires you to track 4 different values during one run of Dijkstra's.

2. How can we do each of them? (1) is the result; (2), (3), and (4) can be obtained from preceding values (DP).

3. Thus, we can conduct Dijkstra's normally, but consider both equal and smaller cases: if equal, update 2nd-4th, and if a smaller path is found, reset each value accordingly.

<br>
<br>

## Details

- Construct adjacency list of the directed graph given edges $a\to b$ of weight $c$.

- Use Dijkstra's on the graph while maintaining arrays:

    - Shortest distance from $1$ to $a$,

    - Number of routes of that shortest distance to $a$,

    - Min/Max path lengths among those routes.

- During the procedure, consider two cases:

    - The current edge creates a route of **equal** length to the hitherto shortest one.

    - We find a route with a **smaller** distance.

- In the first case, to update each given edge $i\to j$:

    - Add the number of min-length paths of $i$ (parent) to $j$ (child)

    - Compare `(min/max edges in path through i)+1` with `current min/max` to update $j$.

- In the second case, to update each given edge $i\to j$:
    
    - Update the shortest distance

    - Set $j$'s number of min-length paths to $i$'s

    - Set the min/max edges in a path through $j$ to `(min/max edges in path through $i$)+1`

- The result is the value of $N$ for each of these values.

<br>
<br>

## Comments

- The above code is unoptimized; current length of the route in the DP is NOT needed to carry this procedure out.

- Evidently, I was still trying to figure out Dijkstra's when the code was written: visited arrays are needed to make sure we don't update with a smaller, overriden edge later, and get stuck in an infinite loop.

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 1000000007;
using pll = pair<ll,ll>;
const int maxN=100001;

/*
MODIFIED DIJKSTRA: BFS
keep track of the 4 values dist, num, minf, maxf
reset and update accordingly

WHY KEEP VISITED?
Because an edge will be processed before another if its distance from 1 is smaller than the other's.
Take adjacency 1 -a-> 3 -b-> 2 , 1 -c-> 2 where 2 has other children
Cases:
(a+b)>c : might process edge a, but won't process edge b before edge c as a+b is greater than c
(a+b)=c : processing edges a and b is the same as processing edge c, so either way works
(a+b)<c : edges a and b will always be processed earlier than c because they will always be smaller
*/

int main() {
    int N,M; cin>>N>>M;
    vector<pll> adj[N+1];
    while(M--) {
        ll a,b,c; cin>>a>>b>>c;
        adj[a].push_back({c,b});
    }
    
    ll i,j,d,w,l,dist[N+1],num[N+1],minf[N+1],maxf[N+1];
    fill(dist,dist+N+1,1e15);
    fill(num,num+N+1,0);
    fill(minf,minf+N+1,1e15);
    fill(maxf,maxf+N+1,0);
    dist[1]=0; num[1]=1; minf[1]=0; maxf[1]=0;

    // cur dist from 1, cur node, cur length of route
    priority_queue<vector<ll>> q; q.push({0,1,0});
    bool vis[N+1]; fill(vis,vis+N+1,0);
    vector<ll> cur; 
    while(!q.empty()) {
        cur=q.top(); q.pop();
        d=-cur[0]; i=cur[1]; l=cur[2];
        if(vis[i]) continue;
        vis[i]=true;
        for(pll ch:adj[i]) {
            w=ch.first; j=ch.second;
            if((d+w)==dist[j]) { // found equal to min price
                num[j]+=num[i]; num[j]%=mod;
                minf[j]=min(minf[j],minf[i]+1); maxf[j]=max(maxf[j],maxf[i]+1);
                q.push({-dist[j],j,l+1});
            }
            if((d+w)<dist[j]) { // found smaller price
                dist[j]=d+w; 
                num[j]=num[i]; num[j]%=mod;
                minf[j]=minf[i]+1; maxf[j]=maxf[i]+1;
                q.push({-dist[j],j,l+1});
            }
        }
    }

    cout<<dist[N]<<" "<<num[N]<<" "<<minf[N]<<" "<<maxf[N]<<endl;
}
```

---TAKEAWAYS---

## track graph routes info:

##### ● figure out what you can track based on the current node being processed

##### ● pass needed values thru dijkstra's
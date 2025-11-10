---
title: "High Score"
source: "CSES"
link: "https://cses.fi/problemset/task/1673"
difficulty: 20
concept: "graph"
tags: ["graph", "bellman-ford", "connected components", "cycles", "strongly connected components", "traversal", "directed"]
---

<br>

## Problem Deconstruction

You're given $N$ rooms $(1\le N\le 2500)$ and $M$ tunnels $(1\le M\le 5000)$ from $a$ to $b$ $(1\le a,b\le N)$, where the tunnel you go through increases your score by $x$ $(-10^9\le x\le 10^9)$.

Determine the maximum score you can achieve by walking from room $1$ to room $N$, such that a tunnel can be traversed more than once.

<br>
<br>

## Key Observations

- The ability to traverse each edge/tunnel "more than once" implies cycles, and thus infinitely large scores.

<br>
<br>

## General Thought Process

1. Note that if there's a positive cycle that's reachable from $1$ to $N$, then the result is infinite; else, it's just the maximum score from $1$ to $N$ (max path).

2. For there to be a positive cycle on a route from $1$ to $N$, you must be able to reach **every note in the cycle** from **both $1$ and $N$**.

3. Thus, we can use the idea of **strongly connected components** and the presence of cycles and check if both $1$ and $N$ can reach any node in each cycle.

<br>
<br>

## Details

- Construct 2 adjacency lists: one for the directed graph with edges $a\to b$ of weight $x$, and another for the reversed edges $b\to a$ of weight $c$.

- Run DFS through both the normal and reversed graphs, and record which nodes can be reached from $1$ or $N$ for their respective graphs.

- Use Bellman-Ford on the graph while maintaining largest score from starting node $1$ to every other node.

- "Relax" edges $N-1$ times by considering and updating the new largest score going through $a\to b$.

- After finishing, "relax" edges one last time. If any largest scores get updated, that means there is a positive cycle going through edge $i\to j$.

- If there is a positive cycle going through $i\to j$, also check if it can be accessed by both $1$ in the normal graph and $N$ in the reversed graph.

    - Or, if $1$, the cycle, and $N$ are part of the same strongly connected component.

<br>
<br>

## Comments

- Another, perhaps quicker, way to do this is to find each cycle in the graph and test.

    - Bellman-Ford is still much more straightforward in directed graphs, though, as cycles can be one-way-connected to other cycles.

- We also must be able to reach any node in the positive cycle from $1$ and $N$ because:

    - Suppose the cycle is isolated. There is no way to reach $N$ if you go in there, and thus no way to carry the score out of the cycle.

    - Note that if we're able to reach one node in the cycle, the rest of them work too.

- Also, notice the smaller values of $N$ and $M$; this is what makes Bellman-Ford feasible.

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

// TIP: to find positive cycle that connects to a point,
// simply find nodes part of SCC's
// and in BF, if any dist is increasing in the N'th iteration,
// check if it is an SCC connected to N.

struct edge {
    int i;
    int j;
    ll x;
};

int N=2500;
vector<vector<pair<int,int>>> adj(N+1),radj(N+1);
vector<bool> vis(N+1),rvis(N+1);
// perform dfs to find if nodes part of SCC's
void dfs(int i) {
    if(vis[i]) return;
    vis[i]=true;
    for(auto j:adj[i]) dfs(j.first);
}

void rdfs(int i) {
    if(rvis[i]) return;
    rvis[i]=true;
    for(auto j:radj[i]) rdfs(j.first);
}

int main() {
    int M; cin>>N>>M;
    vector<edge> edges; edge tmp;
    while(M--) {
        int a,b; ll x; cin>>a>>b>>x;
        tmp.i=a; tmp.j=b; tmp.x=x;
        edges.push_back(tmp);
        adj[a].push_back({b,x});
        radj[b].push_back({a,x});
    }

    vector<ll> dist(N+1,-1e13);
    dist[1]=0; ll res=-1e13;
    dfs(1); rdfs(N);
    for(int i=1; i<=N; i++) {
        for(auto e:edges) {
            if(dist[e.j]<dist[e.i]+e.x) {
                dist[e.j]=dist[e.i]+e.x;
                // if last iteration, dist changes,
                // and changed node is part of SCC
                if((i==N)&&vis[e.j]&&rvis[e.j]) {
                    res=-1;
                    break;
                }
            }
        }
    }

    if(res==-1e13) res=dist[N];
    cout<<res<<endl;
}
```

---TAKEAWAYS---

## longest path + positive cycles + directed:

##### ● strongly connected components: cycle must be connected to both start and end node

##### ● use bellman-ford for cycle detection + longest path from start to end
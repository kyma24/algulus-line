---
title: "Building Teams"
source: "CSES"
link: "https://cses.fi/problemset/task/1668"
difficulty: 10
concept: "graph"
tags: ["graph", "bipartite", "traversal", "undirected"]
---

<br>

## Problem Deconstruction

There are $N$ students $(1\le N\le 10^5)$ and $M$ connections $(1\le M\le 2\cdot 10^5)$ between them. Divide the students up into two arbitrarily-sized teams such that no two students in the same team have a connection between them.

<br>
<br>

## Key Observations

- If a student is in team $1$, all of their neighboring nodes must be in team $2$.

<br>
<br>

## General Thought Process

1. No two students in the same team can have a connection between them.

2. So no student can be in the same team as any of their neighbors/adjacent nodes.

3. Thus, at each node, we can "color" it differently from its neighbors with alternating ids to differentiate teams.

<br>
<br>

## Details

- Construct the adjacency list of the undirected graph.

- Iterate through all nodes while maintaining labeled visited array: $0=$ unvisited, $1=$ team 1, $2=$ team 2.

- DFS through each node to traverse the graph while alternating visited array's labeling between adjacent nodes.

- During traversal, if a node is already visited, check its current team id; if any occurrence is contradictory, then the graph is not bipartite, so the problem is impossible.

- After traversal, if the graph is bipartite, then output the team for each node that was labeled in the visited array; if it isn't bipartite, output IMPOSSIBLE.

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int N=1e5;
vector<vector<int>> adj(N+1);
vector<int> vis(N+1);

bool dfs(int i, int col) {
    if(vis[i]) {
        if(vis[i]!=col+1) return false;
        return true;
    }
    vis[i]=col+1;
    for(int j:adj[i]) if(!dfs(j,1-col)) return false;
    return true;
}

int main() {
    int M; cin>>N>>M;
    for(int a,b,i=0; i<M; i++) {
        cin>>a>>b;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }

    bool flag=true;
    for(int i=1; i<=N; i++) {
        if(vis[i]) continue;
        if(!dfs(i,0)) {
            flag=false;
            break;
        }
    }
    if(flag) for(int i=1; i<=N; i++) cout<<vis[i]<<" ";
    else cout<<"IMPOSSIBLE";
}
```

---TAKEAWAYS---

## two non-connected groups:

##### ● bipartite graph

##### ● color nodes with alternating labels, contradictions = not bipartite
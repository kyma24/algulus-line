---
title: "Building Roads"
source: "CSES"
link: "https://cses.fi/problemset/task/1666"
difficulty: 10
concept: "graph"
tags: ["graph", "connected components", "traversal", "undirected"]
---

<br>

## Problem Deconstruction

There are $N$ cities $(1\le N\le 10^5)$ and $M$ roads $(1\le M\le 2\cdot 10^5)$ connecting them. Determine what roads and the minimum number of them that need to be built to ensure that there is a route between any two cities.

<br>
<br>

## Key Observations

- There is a route between two cities when they are in the same connected component (for undirected graphs).

<br>
<br>

## General Thought Process

1. Since the graph is undirected, as long as two nodes are in the same connected component, there will be a path between them.

2. To create a path between all nodes, we must connect all connected components in the graph.

3. Thus, the roads we need are ones that connect the connected components, which would total to the $\#$ of connected components $- 1$.

<br>
<br>

## Details

- Construct the adjacency list of the undirected graph.

- Iterate through all nodes while maintaining visited array and counter for number of connected components.

- DFS through each node to traverse its connected component while updating visited array.

- After traversing connected component, choose and store an arbitrary node to use to draw bridges between connecting components.

- After iteration, output ($count-1$) and the $count-1$ pairs of nodes.

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;

// find the connected components
// required roads=cc-1
// pick 2 points from each pair of ccs
int n=1e5;
vector<vector<int>> adj(n+1);
vector<int> vis(n+1);

void dfs(int i) {
    if(vis[i]) return;
    vis[i]=1;
    for(int nxt:adj[i]) dfs(nxt);
}

int main() {
    int m; cin>>n>>m;
    for(int a,b,i=0; i<m; i++) {
        cin>>a>>b;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }
    vector<int>res;
    int count=0;
    for(int i=1; i<=n; i++) {
        if(!vis[i]) {
            dfs(i);
            res.push_back(i);
            count++;
        }
    }
    cout<<count-1<<endl;
    for(int i=0; i<res.size()-1; i++) cout<<res[i]<<" "<<res[i+1]<<endl;
}
```

---TAKEAWAYS---

## connect all nodes in undirected graph:

##### ● make whole graph one connected component
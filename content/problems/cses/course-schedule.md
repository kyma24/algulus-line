---
title: "Course Schedule"
source: "CSES"
link: "https://cses.fi/problemset/task/1679"
difficulty: 10
concept: "graph"
tags: ["graph", "topological ordering", "traversal", "directed"]
---

<br>

## Problem Deconstruction

You have $N$ courses $(1\le N\le 10^5)$ such that there are $M$ requirements $(1\le M\le 2\cdot 10^5)$ of form `course a must be taken before course b` $(1\le a,b\le N)$. 

Determine a valid order in which the courses can be completed.

<br>
<br>

## Key Observations

- Use topological sorting: one node must come before another.

<br>
<br>

## General Thought Process

1. Note that we can create a directed graph s.t. each edge $a\to b$ means $a$ must be taken before $b$.

2. This relationship (scheduling) is reminiscient of topological ordering: for each edge $a\to b$ exists, $a$ must be before $b$ in the ordering.

3. Thus, the topological ordering of the graph is a valid order.

<br>
<br>

## Details

- Construct the adjacency list of the directed graph, where $a$ is the "parent" of $b$, creating edges $a\to b$.

- Iterate through each unprocessed node while maintaining labeled visited array: $0=$ unprocessed, $1=$ processing, $2=$ finished; and a mutable array of the topological ordering.

- DFS over each node. For visited, initially label as $1$; when finished *without any complications* (like cycles), label it as $2$ and add to the topological ordering.

- To get the result, return the **reverse** of the order in the array, since the nodes that *finish processing first* (at the start of the array) are those with *no children*, and thus *no successing courses* (so they should be at the end).

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

// simply construct graph, putting a as parent of b
// then take topo sort, guarantees a is before b if no cycle

const int maxN=1e5;
int vis[maxN+1];
vector<int> res,adj[maxN+1];
bool topo(int i) {
    if(vis[i]==1) return false;
    if(vis[i]==2) return true;
    vis[i]=1;
    for(int j:adj[i]) if(!topo(j)) return false;
    vis[i]=2; res.push_back(i);
    return true;
}

int main() {
    int N,M; cin>>N>>M;
    int a,b;
    while(M--) {
        cin>>a>>b;
        adj[a].push_back(b);
    }
    bool flag=true;
    for(int i=1; i<=N; i++) {
        if(vis[i]==2) continue;
        flag=flag&&topo(i);
        if(!flag) break;
    }

    if(flag) for(int i=N-1; i>=0; i--) cout<<res[i]<<" ";
    else cout<<"IMPOSSIBLE"<<endl;
}
```

---TAKEAWAYS---

## scheduling order requirements:

##### ● topological ordering

##### ● add nodes in order of finish processing time
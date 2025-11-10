---
title: "Game Routes"
source: "CSES"
link: "https://cses.fi/problemset/task/1681"
difficulty: 10
concept: "graph"
tags: ["graph", "dp", "directed"]
---

<br>

## Problem Deconstruction

You have a game with $N$ levels $(1\le N\le 10^5)$ and $M$ $(1\le M\le 2\cdot 10^5)$ teleporters that go from level $a$ to level $b$ $(1\le a,b\le N)$. There are no directed cycles in the graph.

Determine the number of ways to get from level $1$ to level $N$.

<br>
<br>

## Key Observations

- The number of routes to a node is determined by the number of routes to its "parents" that pass through it.

<br>
<br>

## General Thought Process

1. Note that a route to node $i$ can always be expressed as a route to node $j$ + edge $j\to i$.

2. So the number of routes to node $i$ is the sum of the number of routes to all node $j$'s that have an edge to $i$.

3. Thus, using DP, we can find the number of routes to node $i$.

<br>
<br>

## Details

- Construct a "parent" array of the directed graph where, given edges $a\to b$, $a$ would be the parent of $b$.

    - The code uses $b\to a$ for recursion: it starts from $N$ and works its way to $1$, so the edges have to reverse too.

- Do the DP: for each adjacent child $j$ of node $i$, add the number of routes to node $i$ and the number of routes to node $j$.

<br>
<br>

## Comments

- This solution is not optimized. You could turn it into iteration to slightly reduce the time complexity.

<br>
<br>

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 1000000007;
const int maxN=100001;

/*
NUMBER OF PATHS FROM 1->N
paths[i] and f(i): number of paths from 1->i
DP: reverse edges and start from N.
*/

vector<int> par[maxN];
int paths[maxN];

int f(int i) {
    if(paths[i]) return paths[i]%mod;
    for(int j:par[i]) paths[i]=(paths[i]+f(j))%mod;
    return paths[i]%mod;
}

int main() {
    int N,M; cin>>N>>M;
    for(int a,b,i=0; i<M; i++) {
        cin>>a>>b;
        // parent array
        par[b].push_back(a);
    }
    paths[1]=1;
    cout<<f(N)<<endl;
}
```

---TAKEAWAYS---

## count routes in DAG:

##### ● directional lets us do DP

##### ● previous cases = "children", or nodes that come before topologically
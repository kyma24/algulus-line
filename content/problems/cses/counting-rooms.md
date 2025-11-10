---
title: "Counting Rooms"
source: "CSES"
link: "https://cses.fi/problemset/task/1192"
difficulty: 10
concept: "graph"
tags: ["graph", "flood fill", "traversal", "grid"]
---

<br>

## Problem Deconstruction

You have a "floorplan" of size $N\times M$ cells $(1\le N,M\le 1000)$ such that each cell is either floor: `'.'` or wall: `'#'`. Determine the number of rooms in the building.

<br>
<br>

## Key Observations

- Each room can be considered a connected component by adjacency

<br>
<br>

## General Thought Process

1. Note that each cell in a room is "connected" via adjacency, and each room is separated by hashes.

2. So empty nodes and its empty neighbors and those nodes' neighbors ... make up one room.

3. Thus, it's the same as determining connected components in a graph where there is an edge between every pair of 4-way adjacent empty cells.

<br>
<br>

## Details

- Construct the adjacency list of the undirected graph.

- Iterate through all empty grid cells while maintaining count of the number of rooms.

- DFS over each empty cell in the current start cell's room. To mark visited, fill each traversed cell with `'#'` to prevent it from being reconsidered.

- Output counter after traversal.

<br>
<br>

## Code

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int n,m;
void dfs(int i, int j, vector<vector<char>> &mp) {
    if (!(i<0 || i>=n || j<0 || j>=m || mp[i][j]=='#')) {
        mp[i][j]='#';
        dfs(i-1,j,mp);
        dfs(i+1,j,mp);
        dfs(i,j-1,mp);
        dfs(i,j+1,mp);
    }
}

int main() {
    cin >> n >> m;
    vector<vector<char>> mp(n);
    for (int i=0; i<n; i++) {
        string s; cin >> s;
        vector<char> temp(s.begin(),s.end());
        mp[i]=temp;
    }

    int count = 0;
    for (int i=0; i<n; i++) {
        for (int j=0; j<m; j++) {
            if (mp[i][j]=='.') {
                count ++;
                dfs(i,j,mp);
            }
        }
    }
    cout << count << endl;

}
```

---TAKEAWAYS---

## number of separated sections in grid:

##### ● consider each section a connected component

##### ● propogate from each unencountered empty node
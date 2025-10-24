---
title: "Grid Paths"
source: "CSES"
link: "https://cses.fi/problemset/task/1638"
difficulty: 10
concept: "dp"
tags: ["dp", "grid"]
---

<br>

## Problem Deconstruction
You have an $N\times N$ $(1\leq N\leq 1000)$ grid. 

Any blank cell (denoted by ".") on the grid can be moved to. Some have "traps", denoted by "*", which you cannot move to.

Determine the number of paths from the upper-left cell to the lower-right cell such that you can only move right or down, modulo $10^9+7$.

<br>
<br>

## Key Observations

- Try to think backwards! Consider the relationship between the target cell's results and its adjacent cells.

<br>
<br>

## General Thought Process

1. Note that the only directions of movement are right and down. If we think backwards, for a given cell, the only squares we could have come from are those that are up and left.

2. Thus, in a certain path going through cell $(i,j)$, it must pass through either $(i-1,j)$ or $(i,j-1)$.

3. The number of paths going through $(i,j)$ must be the sum of the result for $(i-1,j)$ and $(i,j-1)$, since they are the direct cases that must happen before $(i,j)$.

<br>
<br>

## Details

$dp[i][j]$ denotes the number of valid paths from $(i,j)$ to the lower-right square $(N-1,N-1)$.

<br>

**Base Case:** along the bottom and right edges, the number of paths to $(N-1,N-1)$ is $1$ (you can either only go right, or only go down) if there aren't any obstacles. 

- Wherever there's an asterisk/obstacle, there are $0$ valid paths from that cell.

<br>

**Iteration:** since we're thinking backwards from $(N-1,N-1)$, we iterate through the grid backwards too.

- $i$ from $N-2$ to $0$, $j$ from $N-2$ to $0$.

- We're omitting indices with $N-1$ because that's been addressed in the base case.

<br>

**Relation:** **$dp[i][j]=dp[i+1][j]+dp[i][j+1]$**

- Or, the sum of the paths going through the cells above and to the left of the current square.

<br>

**Answer:** by definition, $dp[0][0]$ contains the distance from $(0,0)$ to $(N-1,N-1)$.

<br>
<br>

## Code

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int mod=1e9+7;
    int n; cin>>n;
    vector<vector<char>> grid(n,vector<char>(n));
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            cin>>grid[i][j];
        }
    }
    vector<vector<long long>> dp(n,vector<long long>(n,0));
    for(int i=0; i<n; i++) {
        dp[i][n-1]=((grid[i][n-1]=='*')?0:1);
        dp[n-1][i]=((grid[n-1][i]=='*')?0:1);
    }
    for(int i=n-2; i>=0; i--) {
        if (dp[i+1][n-1]==0) dp[i][n-1]=0;
        if (dp[n-1][i+1]==0) dp[n-1][i]=0;
    }

    if(grid[0][0]=='*'||grid[n-1][n-1]=='*') cout<<0<<endl;
    else {
        for(int i=n-2; i>=0; i--) {
            for(int j=n-2; j>=0; j--) {
                if(grid[i][j]!='*') {
                    dp[i][j]=dp[i+1][j]+dp[i][j+1];
                    dp[i][j]%=mod;
                }
            }
        }
        cout<<dp[0][0]<<endl;
    }
}
```
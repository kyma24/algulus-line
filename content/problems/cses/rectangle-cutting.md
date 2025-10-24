---
title: "Rectangle Cutting"
source: "CSES"
link: "https://cses.fi/problemset/task/1744"
difficulty: 10
concept: "dp"
tags: ["dp", "geometry", "grid"]
---

<br>

## Problem Deconstruction

You have a $A\times B$ $(1\leq A,B\leq 500)$ rectangle.

On each move, you can select a rectangle and cut it into two with integer side lengths.

Determine the minimum number of moves needed to cut it into only squares.

<br>
<br>

## Key Observations

- The maximums for $A$ and $B$ are relatively small, so we can consider every possible cut.

<br>
<br>

## General Thought Process

1. Note that each cell of the rectangle is indistinguishable from another.

2. This means that we can split the rectangle into other rectangles and solve the problem for those.

3. At each step of the dp, we can split the rectangle into two pieces, and return the sum of the result for those.

<br>
<br>

## Details

$dp[i][j]$ represents the number of splits needed to turn a rectangle of proportions $i\times j$ into only squares.

<br>

**Base Case:** for each $i=j$, $dp[i][j]=0$, since it's already a square.

<br>

**Iteration:** $i$ from $1$ to $A$, $j$ from $1$ to $B$, $k$ from $1$ to $i$ and $1$ to $j$ separately.

- $k$ goes over each of the horizontal and vertical splits, respectively.

<br>

**Relation:** **$dp[i][j] =$** minimum between...

- Horizontal splits: **$1+dp[k][j]+dp[i-k][j]$**

- Vertical splits: **$1+dp[i][k]+dp[i][j-k]$**

<br>

**Answer:** $dp[A][B]$ returns the result for the full rectangle of proportions $A\times B$.

<br>
<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>>dp(501,vector<int>(501));

int f(int h, int l) {
    if(h==l) return 0;
    if(dp[h][l]) return dp[h][l];

    int temp=501;
    for(int i=1; i<l; i++) temp=min(temp,f(h,i)+f(h,l-i));
    for(int i=1; i<h; i++) temp=min(temp,f(i,l)+f(h-i,l));

    return dp[h][l]=temp+1;
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>>dp(501,vector<int>(501));

int main() {
    int a,b; cin>>a>>b;
    
    for(int i=1; i<=a; i++) {
        for(int j=1; j<=b; j++) {
            if(i!=j) {
                dp[i][j]=501;
                for(int k=1; k<j; k++) dp[i][j]=min(dp[i][j],1+dp[i][k]+dp[i][j-k]);
                for(int k=1; k<i; k++) dp[i][j]=min(dp[i][j],1+dp[k][j]+dp[i-k][j]);
            }
        }
    }
    
    cout<<dp[a][b];
}
```
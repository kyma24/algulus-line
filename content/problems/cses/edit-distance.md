---
title: "Edit Distance"
source: "CSES"
link: "https://cses.fi/problemset/task/1639"
difficulty: 10
concept: "dp"
tags: ["dp", "string"]
---

<br>

## Problem Deconstruction

The edit distance is defined as the minimum number of operations (adding, removing, or replacing a character) needed to transform one string to another.

Given two strings of capital letters of length $N$ and $M$ $(1\leq N,M\leq 5000)$, determine the edit distance between them.

<br>
<br>

## Key Observations

- How can we split the problem into smaller subcases?

<br>
<br>

## General Thought Process

1. If we keep splitting a case into smaller portions, we get a letter. They are either the same, or different. What happens when we add a letter to one or the other, or both?

2. To address the individual letter, replacement is sufficient. For different lengths, we must add or remove.

3. Thus, we can use base cases to make up for any differences in length. That way, when doing the dp and considering letters, we only have to worry about replacement.

<br>
<br>

## Details

**Base Case:** where $dp[i][j]$ is the result for the first $i$ letters of $string_1$ and the first $j$ letters of $string_2$ ...

- $dp[i][0] = i$ and $dp[0][j] = j$ (addition or removal operations)

<br>

**Iteration:** looping through the two strings.

- $i$: from $1$ to $N$, $j$: from $1$ to $M$.

<br>

**Relation:** if the $i$th letter of $string_1$ is the same as the $j$th letter of $string_2$, then **$dp[i][j] = dp[i-1][j-1]$**.

- Else, **$dp[i][j] = 1+min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])$**.

<br>

**Answer:** by definition, $dp[N][M]$ stores the minimum number of operations needed to make $string_1$ and $string_2$ equal.

<br>
<br>

## Comments

- Why does this work? The base case makes sense, because we're filling in the array where we otherwise wouldn't cover.

- As for the relation when $string_1[i]\neq string_2[j]$, we simply use...
    - a remove/add operation on $i$ or $j$ for $dp[i-1][j]$ and $dp[i][j-1]$ respectively
    - and a replace operation for $dp[i-1][j-1]$.

- This makes sense because at each point, to try and make the two characters equal, we can either chose to add, remove, or replace a character.

<br>
<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> dp(5001,vector<int>(5001));

int f(int i, int j, string &A, string &B) {
    if(i==0) return j;
    if(j==0) return i;
    if(dp[i][j]) return dp[i][j];

    if(A[i-1]==B[j-1]) return dp[i][j]=f(i-1,j-1,A,B);

    return dp[i][j]=1+min(f(i-1,j,A,B),min(f(i,j-1,A,B),f(i-1,j-1,A,B)));
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> dp(5001,vector<int>(5001));

int main() {
    string s1,s2; cin>>s1>>s2;
    int n; n=s1.length();
    int m; m=s2.length();
    
    for(int i=0; i<=n; i++) {
        dp[i][0]=i;
    } for(int j=0; j<=m; j++) {
        dp[0][j]=j;
    }

    for(int i=1; i<=n; i++) {
        for(int j=1; j<=m; j++) {
            if(s1[i-1]==s2[j-1]) dp[i][j]=dp[i-1][j-1];
            else {
                dp[i][j]=1+min(dp[i-1][j],min(dp[i][j-1],dp[i-1][j-1]));
            }
        }
    }

    cout<<dp[n][m];
}
```
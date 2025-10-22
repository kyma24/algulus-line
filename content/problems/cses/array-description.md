---
title: "Array Description"
source: "CSES"
link: "https://cses.fi/problemset/task/1746"
difficulty: 10
concept: "dp"
tags: ["dp"]
---

<br>

## Problem Deconstruction

The input is an array $X$ with $N$ integers$(1\leq N\leq 105)$, each with a value between $1$ and $M$ $(1\leq M\leq 100)$.

Given that the value $0$ can be replaced with any number, and that the absolute difference between two adjacent values must be at most $1$, determine the **number of arrays that $X$ could be**.

(In other words, how many ways are there to choose numbers to replace the $0$s such that the difference between any two adjacent values is at most $1$?)

<br>
<br>

## Key Observations

- $M$, and thus every value in $X$, is pretty small. We might be able to use this as a parameter in the DP.

<br>
<br>

## General Thought Process

1. DP can be costly, so smaller constraints like $M$ help the time complexity.

2. DP builds off of prefixes very often, especially with arrays. This is a factor of $N=10^5$. 
    - Thus, we'll have enough space to consider the most recently filled-in value (max $M=100$).

3. Our DP relation will be **$dp[i][j] =$ # valid arrays for the first $i$ elements s.t. the previous adjacent value is $j$**.

<br>
<br>

## Details

**Base Case:** the number of valid arrays of $X[0]$. 

- If the first character isn't $0$, then $dp[0][X[0]]=1$, and for nothing else. 

- If it is $0$, $dp[0][j]=1$ for all $j$ from $1$ to $M$.

<br>

**Iteration:** while going through the $N$ prefixes and $M$ values ...

- if the current $X[i]$ is $0$, then go through every possible value of $j$.

- else, only consider $X[i]$ (because its value is already set).

<br>

**Relation:** add all "adjacent" possibilities for each valid value.

- $dp[i][j] += dp[i-1][v]$ for each $v = j-1$, $j$, $j+1$.

    - if $X[i]=0$, then $v$ is every value from $1$ to $M$.

    - else, $v$ is only $X[i]$.

**Answer:** the solution is the sum of all values in $dp[N-1]$, for all the different values a valid array could end in.

<br>
<br>

## Comments

- Remember that if $X[i]!=0$, then the dp array at that prefix should only include valid paths ending in $X[i]$.
    
    - This means that every other ending value should be invalid, or have no valid arrays.

- Note that the only values we're considering in any moment are those in $dp[i]$ and $dp[i-1]$.

    - If space optimization were needed, we could just store them in 1 or 2 arrays to track the values, and replace them as we iterate.

<br>
<br>

## Code

Recursion:
```c++

#include <iostream>
#include <vector>
using namespace std;

int n,m,mod=1e9+7;
vector<vector<int>> dp(1e5,vector<int>(101,0));
vector<int> x(1e5);

int f(int i, int v) {
    if(i==0) {
        if(x[0]==0) return 1;
        else if(x[0]==v) return 1;
        else return 0;
    }
    if(dp[i][v]) return dp[i][v];
    if(x[i]==0) {
        for(int k:{v-1,v,v+1}) {
            if(k>=1&&k<=m) {
                dp[i][v]+=f(i-1,k);
                dp[i][v]%=mod;
            }
        }
    } else {
        if(x[i]!=v) return 0;
        for(int k:{v-1,v,v+1}) {
            if(k>=1&&k<=m) {
                dp[i][v]+=f(i-1,k);
                dp[i][v]%=mod;
            }
        }
    }
    return dp[i][v];
}
```

<br>

DP:
```c++
#include <iostream>
#include <vector>
using namespace std;

int n,m,mod=1e9+7;
vector<vector<int>> dp(1e5,vector<int>(101,0));
vector<int> x(1e5);

int main() {
    cin>>n>>m;
    for(int i=0; i<n; i++) cin>>x[i];

    if(x[0]==0) {
        for(int i=1; i<=m; i++) dp[0][i]=1;
    } else {
        dp[0][x[0]]=1;
    }

    for(int i=1; i<n; i++) {
        if(x[i]==0) {
            for(int v=1; v<=m; v++) {
                for(int k:{v-1,v,v+1}) {
                    if(k>=1&&k<=m) {
                        dp[i][v]+=dp[i-1][k];
                        dp[i][v]%=mod;
                    }
                }
            }
        } else {
            for(int k:{x[i]-1,x[i],x[i]+1}) {
                if(k>=1&&k<=m) {
                    dp[i][x[i]]+=dp[i-1][k];
                    dp[i][x[i]]%=mod;
                }
            }
        }
    }

    int res=0;
    for(int i=1; i<=m; i++) {
        res+=dp[n-1][i];
        res%=mod;
    }
    cout<<res<<endl;
}
```
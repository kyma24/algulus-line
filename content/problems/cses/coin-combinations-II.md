---
title: "Coin Combinations II"
source: "CSES"
link: "https://cses.fi/problemset/task/1636"
difficulty: 10
concept: "dp"
tags: ["dp", "dpendence"]
---

<br>

## Problem Deconstruction

You have a set of $N$ coin values $(1\leq N\leq 100)$ in array $C$ $(1\leq C_i\leq 10^6)$.

Given that the order of the coins you choose **does not matter**, and that you can use as many of each coin as you wish, calculate the number of distinct ways you can produce the sum $X$ $(1\leq X\leq 10^6)$, mod $10^9+7$.

<br>

---

<br>

## Key Observations

- We need to avoid accounting for the same combination of coins multiple times, regardless of the order.

<br>
<br>

## General Thought Process

1. Note that order doesn't matter, so we need to restrict including the coins in some way.

2. In Coin Combinations I, we iterate through all coins each time we consider a new sum.

- What if we flip that? If we iterate through each coin, and within that loop consider each new sum, there won't be any chance for the sum to use the exact same combination more than once. (check comments)

3. So we still keep track of the current sum of money, but we flip our iteration order.

<br>
<br>

## Details

**Base Case:** there is $1$ way to make a sum of $0$ (which is to not include any coins).

<br>

**Memory Optimization:** we can simply disregard the coins in this case. Nothing else needs to change. (check comments)

<br>

**Iteration:** go over each coin in $C$, and for each coin go through each sum $x$ from $1$ to $X$.

<br>

**Relation:** **$ways[i][x] = ways[i-1][x] + ways[i][x-C_i]$**

- Here, $ways[i][x]$ is the number of ways to make sum $x$ considering the first $i$ coins (including $C_i$).

    - With optimization: **$ways[x] = ways[x] + ways[x-C_i]$** (remember to check bounds)

<br>

**Answer:** by definition, at the end of the iteration, $ways[N][X]$ or $ways[X]$ contains the number of ways to make sum $X$ considering the first $N$ coins, so that's the answer.

<br>

- Note that $dp$ is replaced with $ways$ for better readability.

<br>
<br>

## Comments

- So why don't we change anything about the iteration in the optimization?

    - This question mainly translates to why we consider $ways[x-C_i]$'s value after already using $C_i$ on itself.

    - In other words, why aren't we trying to stop the overlap / making sure that we only add values from the previous iteration?

<br>

- The reason is because of "dpendency". 
    - To elaborate, we want to have the option to use each coin multiple times. 

    - If we don't do this, we'd be restricted to using only one of each coin, because the previous iteration can't possibly consider the current coin.
    
    - Thus, we want to be "dependent" on this iteration's values.

<br>

- Different orderings of each combination aren't an issue, even with this implementation.

    - With some deliberation, we can conclude that nowhere during the iteration is the same combination considered twice.

    - Assuming that this condition is already true, if we consider the case for $dp[x]$, we'd only be adding $dp[x-C_i]$ at a time, so by induction the condition also applies to itself.

<br>

---

<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> c(101);
int mod=1e9+7;

int f(int i, int aim) {
    if(aim==0) return 1;
    if(aim<0) return 0;

    long long notTake=((i>0)?f(i-1,aim):0);
    long long take=f(i,aim-c[i]);

    return (long long)(notTake+take)%mod;
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int mod=1e9+7;
    int n,x; cin>>n>>x;

    vector<int>c(n);
    for(int i=0; i<n; i++) cin>>c[i];

    vector<vector<int>> dp(n,vector<int>(x+1));
    for(int i=0; i<n; i++) dp[i][0]=1;

    long long notTake,take;
    for(int i=0; i<n; i++) {
        for(int aim=1; aim<=x; aim++) {
            notTake=((i>0)?dp[i-1][aim]:0);
            take=((c[i]<=aim)?dp[i][aim-c[i]]:0);
            dp[i][aim]=(long long)(notTake+take)%mod;
        }
    }

    cout<<dp[n-1][x];
}
```

<br>

Optimized:
```cpp
int optimized() {
    int mod=1e9+7;
    int n,x; cin>>n>>x;

    vector<ll>c(n);
    for(int i=0; i<n; i++) cin>>c[i];

    vector<ll> dp(x+1);
    dp[0]=1;
    for(int i=0; i<n; i++) {
        for(int aim=1; aim<=x; aim++) {
            if(c[i]<=aim) dp[aim]=(dp[aim]+dp[aim-c[i]])%mod;
        }
    }

    cout<<dp[x];
}
```

---TAKEAWAYS---

## combos of distinct objects (infinite) + sum constraint + order doesn't matter:

##### ● iterate over next object to use, then sum

##### ● use include / don't include method

##### ● build off previous values in same object iteration
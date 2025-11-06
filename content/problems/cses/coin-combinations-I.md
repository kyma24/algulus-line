---
title: "Coin Combinations I"
source: "CSES"
link: "https://cses.fi/problemset/task/1635"
difficulty: 10
concept: "dp"
tags: ["dp"]
---

<br>

## Problem Deconstruction

You have a set of $N$ coin values $(1\leq N\leq 100)$ in array $C$ $(1\leq C_i\leq 10^6)$.

Given that the order of the coins you choose matters, and that you can use as many of each coin as you wish, calculate the number of distinct ways you can produce the sum $X$ $(1\leq X\leq 10^6)$, mod $10^9+7$.

<br>

---

<br>

## Key Observations

- You *have* to track the current sum of money.

<br>
<br>

## General Thought Process

1. Notice that different orders of the same combination of coins are considered different, and we want to produce a sum of $X$.

2. To produce a sum of, say, $x$, the number of ways to do so would be the total number of ways to make $x-C_i$ for each possible coin value $C_i$.

3. Thus, we must keep track of the current sum of money, and in each sum go through all the coins that could be used.

<br>
<br>

## Details

**Base Case:** there is $1$ way to make a sum of $0$ (which is to not include any coins).

<br>

**Memory Optimization:** even though we are iterating over coins as well as the total sum, we actually don't need to track the last included coin.

- The array (at index $x$) only stores the number of ways to make a sum of $x$.

<br>

**Iteration:** go over $X$ coins sums, and for each coin sum $x$ go over each coin in $C$.

<br>

**Relation:** **$ways[i] = ways[i] + ways[i-C_i]$**

- Here, $ways[i-C_i]$ is the number of ways to make sum $x$ s.t. the last coin used was $C_i$.

<br>

**Answer:** by definition, $ways[X]$ contains the number of ways to make sum $X$, so that's the answer.

<br>

- Note that $dp$ is replaced with $ways$ for better readability.

<br>
<br>

## Comments

- You might notice that the same combination of coins might be created multiple times.

    - i.e. making $5$, where coins $2$ and $3$ are options, we do $... + dp[5-2] + dp[5-3] + ...$, which results in $2$ $3$ and $3$ $2$.

    - In this case, because of the order-matters condition, this works. (It won't for Coin Combinations II)

<br>

---

<br>

## Code

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int mod=1e9+7;
    int N; cin>>N;
    int X; cin>>X;

    vector<int> C(N);
    for(int i=0; i<N; i++) cin>>C[i];

    vector<long long> dp(X+1);
    dp[0]=1;
    for(int x=1; x<=X; x++) {
        for(auto coin:C) {
             if(x-coin>=0) dp[x]+=dp[x-coin];
        }
        dp[x]%=mod;
    }
    cout<<dp[X]<<endl;
}
```

---TAKEAWAYS---
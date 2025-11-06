---
title: "Minimizing Coins"
source: "CSES"
link: "https://cses.fi/problemset/task/1634"
difficulty: 10
concept: "dp"
tags: ["dp", "dpendence"]
---

<br>

## Problem Deconstruction

You're given a set of $N$ $(1\leq N\leq 100)$ coins in array $C$ $(1\leq C_i\leq 10^6).

Find the minimum number of coins needed to produce a sum of money $X$ $(1\leq X\leq 10^6).

<br>

---

<br>

## Key Observations

- Each coin can be used multiple times.

<br>
<br>

## General Thought Process

1. Note that the constraints only allow us to consider money in our $dp$ array. So we'll have to memory optimize to remove the factor of $N=100$.

2. To fill the array, we can consider including each coin at each step.

3. This way, each coin can be counted multiple times.

<br>
<br>

## Details

$dp[i]$ represents the minimum coins needed to make a sum of $i$.

<br>

**Base Case:** $dp[0]=0$ (no coins needed to make $0)

<br>

**Iteration:** $i$ from $1$ to $x$, for each coin value $j$ in $C$.

- Even though we removed a dimension, $dp$ doesn't need to be traversed in a different way.

- This is because it's dpendent, so each item can be considered multiple times.

<br>

**Relation:** **$dp[i]=min(dp[i-C_n]+1)$**

<br>

**Answer:** $dp[X]$, or -1 if impossible (for instance, if all coins have a greater value than the target sum)

<br>

---

<br>

## Code

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int mmax=1e6+1;
    int n; cin>>n;
    int x; cin>>x;

    vector<int> c(n);
    for(int i=0; i<n; i++) cin>>c[i];

    vector<int> dp(x+1,mmax);
    dp[0]=0;
    for(int i=1; i<=x; i++) {
        for(auto j:c) {
            if(i-j>=0) dp[i]=min(dp[i],dp[i-j]+1);
        }
    }
    
    cout<<((dp[x]!=mmax)?dp[x]:-1)<<endl;
}
```

---TAKEAWAYS---
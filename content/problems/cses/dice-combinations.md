---
title: "Dice Combinations"
source: "CSES"
link: "https://cses.fi/problemset/task/1633"
difficulty: 10
concept: "dp"
tags: ["dp"]
---

<br>

## Problem Deconstruction

You're allowed to throw a dice with values 1-6 any number of times.

Count the number of ways to construct sum $N$ $(1\leq N\leq 106)$, mod $10^9+7$.

<br>

---

<br>

## Key Observations

- Tracking the current sum is integral to this problem.

<br>
<br>

## General Thought Process

1. Note that there are only 6 numbers each dice can have, and order doesn't matter.

2. Simply going through and including each of the 6 numbers until the current sum reaches $N$ should work.

3. We can make $dp[n]$ equal to the number of ways to create sum $N$ given the 6 numbers.

<br>
<br>

## Details

**Base Case:** there is $1$ way to create a sum of $0$ (roll 0 times)

<br>

**Memory Optimization:** we don't need the last number rolled in our calculations, so we can eliminate that factor from the $dp$ array.

<br>

**Iteration:** from $1$ to $N$ possible sums, from $1$ to $6$ possible dice outcomes.

<br>

**Relation:** **$dp[i]=dp[i]+dp[i-(1$ to $6)]$**

<br>

**Answer:** by definition, $dp[N]$ stores the number of ways to construct $N$.

<br>

---

<br>

## Code

```cpp
#include <iostream>
#include <vector>
using namespace std;
typedef long long ll;

int main() {
    int n; cin>>n;
    int mod=1e9+7;

    vector<ll> dp(n+1,0);
    dp[0]=1;
    for(int i=1; i<n+1; i++) {
        for(int j=0; j<7; j++) {
            if (i-j>=0) dp[i]+=dp[i-j];
        }
        dp[i]%=mod;
    }
    
    cout<<dp[n]<<endl;
}
```

---TAKEAWAYS---
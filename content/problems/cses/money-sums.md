---
title: "Money Sums"
source: "CSES"
link: "https://cses.fi/problemset/task/1745"
difficulty: 10
concept: "dp"
tags: ["dp"]
---

<br>

## Problem Deconstruction

You have $N$ $(1\leq N\leq 100)$ coins with certain values $C_i$​ $(1\leq C_i​\leq 1000)$. There can be repeating values.

If each coin can only be used once, find and output all the money sums you can create using these coins.

<br>

---

<br>

## Key Observations

- Since each coin can only be used once, we have to treat this like a pseudo-knapsack problem.

<br>
<br>

## General Thought Process

1. Note that our task is to find all possible sums of any subset of coins.

2. To make a subset, each value in $C$ can either be included or excluded.

3. So we can turn this into a knapsack probler. We factor in each prefix of coins, rather than iterating through them to build off sums.

- The latter wouldn't work because each coin can only be used once.

<br>
<br>

## Details

$dp[i][x]$ represents if it is possible to create a sum $x$ with the coins $C_{0\to i}$. (true/false)

<br>

**Base Case:** $dp[i][0]=1$ (only one way to make 0: use no coins)

<br>

**Memory Optimization:** since we only reference the $i$th and $i-1$th iterations, we can just keep a 1D $dp$ array and reverse the order of consideration for $x$. (not dpendent)

- This isn't implemented here, though, since we have enough memory.

<br>

**Iteration:** $i$ from $1$ to $N-1$, $x$ from $1$ to the total/maximum sum of all coins.

<br>

**Relation:** **$dp[i][x]=(dp[i-1][x-C[i]]$ $||$ $dp[i-1][x])$**

<br>

**Answer:** to print out all possible sums, just go back through $dp[N][x]$ and output the $x$ values that are marked true.

<br>

---

<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> dp(100,vector<int>(1e5+1));
vector<int> c(100);

int f(int i, int x) {
    if(i==0) {
        if(x==c[0] || x==0) return 1;
        else return 0;
    }
    if(x<0) return 0;
    if(dp[i][x]) return dp[i][x];
    return dp[i][x]=(f(i-1,x-c[i]) || f(i-1,x));
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> dp(100,vector<int>(1e5+1));
vector<int> c(100);

int main() {
    int n; cin>>n;
    int s = 0;

    for(int i=0; i<n; i++) {
        cin>>c[i];
        s+=c[i];
        dp[i][0]=1;
    }

    dp[0][c[0]]=1;
    for(int i=1; i<n; i++) {
        for(int x=1; x<=s; x++) {
            if(x-c[i]>=0) {
                dp[i][x]=(dp[i-1][x-c[i]]||dp[i-1][x]);
            } else {
                dp[i][x]=dp[i-1][x];
            }
        }
    }

    vector<int> res;
    for(int i=s; i>0; i--) {
        if(dp[n-1][i]) {
            res.push_back(i);
        }
    }

    cout<<res.size()<<endl;
    for(int i=res.size()-1; i>=0; i--) {
        cout<<res[i]<<" ";
    }
}
```

---TAKEAWAYS---
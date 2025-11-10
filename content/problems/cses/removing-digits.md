---
title: "Removing Digits"
source: "CSES"
link: "https://cses.fi/problemset/task/1637"
difficulty: 10
concept: "dp"
tags: ["dp"]
---

<br>

## Problem Deconstruction

You're given an integer $N$ $(1\leq N\leq 10^6)$.

In one operation, you can subtract one of its digit from itself.

How many steps are required to make $N$ equal to 0?

<br>

---

<br>

## Key Observations

- As there's a maximum of 7 digits, we can simply consider every digit to subtract during the dp.

<br>
<br>

## General Thought Process

1. Note that in the example ($N=27$), 27 builds off the solution for 20, 20 builds off the solution for 18, etc.

2. There is a clear dp relationship, since subtracting a digit creates an independent subproblem for the next number.

3. Thus, we can build up to $N$, and at each step consider subtracting all digits to see which yields the minimum total number of subtractions.

<br>
<br>

## Details

$dp[x]$ represents the minimum operations needed to reduce $x$ to $0$.

<br>

**Base Case:** $dp[0]=0$, since 0 is already 0.

<br>

**Iteration:** $cur$ from $1$ to $N$, $i$ from $0$ to the number of digits in $cur$ (to go through the digits for subtraction)

<br>

**Relation:** **$dp[cur]=min(dp[cur-digit]+1)$** for each $digit$ in $cur$.

<br>

**Answer:** by definition, $dp[N]$ is the result for number $N$.

<br>

---

<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int f(int cur, vector<int> &dp) {
    if(cur<0) return 1e6+1;
    if(cur==0) return 0;
    if(dp[cur]) return dp[cur];

    string s=to_string(cur);

    int mmin=1e6+1;
    for(int i=0; i<s.length(); i++) {
        if(s[i]!='0') {
            mmin=min(mmin,f(cur-(int)(s[i]-'0'),dp));
        }
    }

    return dp[cur]=mmin+1;
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n; cin>>n;

    vector<int> dp(n+1);
    dp[0]=0;
    for(int cur=1; cur<=n; cur++) {
        string s=to_string(cur);
        int mmin=1e6+1;
        for(int i=0; i<(s.length()); i++) {
            if(s[i]!='0') {
                mmin = min(mmin,dp[cur-(int)(s[i]-'0')]);
            }
        }
        dp[cur]=mmin+1;
    }
    
    cout<<dp[n];
}
```

---TAKEAWAYS---

## number's digits + steps to reach 0:

##### ● iterate over each digit ($log_{10}$) to subtract
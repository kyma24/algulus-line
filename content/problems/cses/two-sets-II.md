---
title: "Two Sets II"
source: "CSES"
link: "https://cses.fi/problemset/task/1093"
difficulty: 10
concept: "dp"
tags: ["dp", "combinatorics", "math"]
---

<br>

## Problem Deconstruction

Count the number of ways the integers from $1\to N$ $(1\leq N\leq 500)$ can be divided into two sets with equal sum, mod $10^9+7$.

<br>

---

<br>

## Key Observations

- The one constant in this problem is that for the two sets to have equal sums, the sum **must be equal to $\frac{total}{2}$**.

<br>
<br>

## General Thought Process

1. Note that by dividing the total into the target sum for the two subsets, we can perform a regular dp on it.

2. We're counting the number of valid sets, so that's 2 times the number of possible divisions.

3. So after doing dp, remember to divide by 2 to get rid of the overcounted cases.

- i.e. counting both the {1,4} {2,3} split and the {2,3} {1,4} split

<br>
<br>

## Details

$dp[i][a]$ represents the number of ways to make a set of sum $a$ given only the integers from $1$ to $i$.

<br>

**Base Case:** for all $i$s, $dp[i][0]=1$, since there's always one way to make an empty set.

<br>

**Memory Optimization:** since we only reference the $i$th and $i-1$th iterations, we can get rid of the factor of $N$ in the $dp$ array.

- We'd have to reverse the iteration f $a$ to prevent using a number more than once.

- Not done here, since it isn't needed.

<br>

**Iteration:** $i$ from $1$ to $N$, $a$ from $1$ to $aim=\frac{total}{2}$.

<br>

**Relation:** **$dp[i][a]=dp[i-1][a]+dp[i-1][a-i]$**

- Remember to address the out-of-bounds reference cases.

<br>

**Answer:** we're only counting the number of divisions, not sets, so the answer will be $\frac{dp[N][aim]}{2}$.

<br>
<br>

## Comments

- Another way to address the overcounting issue is to restrict one number, say, $1$, to its own set, and count how many of those work.

- We can do that in the dp by searching for the number of sets that don't contain $1$.

    - Set $dp[1][1]$ to $0$, so we make sure to not include it.

    - The answer in that case will simply be $dp[N][aim]$, without the $/2$.

<br>

---

<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int mod=1e9+7;
vector<vector<long long>> dp(501,vector<long long>(62626));

long long f(int i, int aim) {
    if(aim==0) return 1;
    if(i==1) {
        if (aim==1) return 1;
        else return 0;
    }

    if(dp[i][aim]) return dp[i][aim];
    return dp[i][aim]=((aim-i<0)?0:f(i-1,aim-i))+f(i-1,aim);
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int mod=1e9+7;
vector<vector<long long>> dp(501,vector<long long>(62626));

int main() {
    int n; cin>>n;
    if((n*(n+1)/2)%2!=0) cout<<0<<endl;
    else {
        int aim=n*(n+1)/4;
        
        for(int i=0; i<=n; i++) {
            dp[i][0]=1;
        }
        
        for(int i=1; i<=n; i++) {
            for(int a=1; a<=aim; a++) {
                dp[i][a]=(((a-i<0)?0:dp[i-1][a-i])+dp[i-1][a])%mod;
            }
        }

        cout<<(dp[n][aim]/2)<<endl;
    }
}
```

---TAKEAWAYS---

## # of ways to split into equal sums:

##### ● target sum for each subset is $\frac{total}{2}$

##### ● count subsets summing to target, / 2
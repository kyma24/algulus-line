---
title: "Counting Towers"
source: "CSES"
link: "https://cses.fi/problemset/task/2413"
difficulty: 10
concept: "dp"
tags: ["dp"]
---

<br>

## Problem Deconstruction

The input contains $T$ test cases $(1\leq T\leq 100)$.

For each of them, you're tasked with building a tower of dimensions $2\times N$ $(1\leq N\leq 10^6)$ out of rectangles with integer widths and heights. Determine the number of different towers that can be built, mod $10^9+7$.

<br>

---

<br>

## Key Observations

- In a grid, rectangles can be defined by the integer number of rows and columns that bound it.

<br>
<br>

## General Thought Process

1. Note that we want to split the rectangle into dp-able parts.

- How we do this is by making smaller cases, then working our way to the solution.

- We can try to build up the rectangle based on properties of the row.

2. What happens when we consider the next row? There are 2 choices: the two cells are separate, or merged.

- Depending on which of these the row is, we can combine them with previous rows in different ways.

3. Thus, we can iterate this relation $N$ times to get the answer considering all rows.

<br>
<br>

## Details

**Base Case:** there is $1$ way for the cells in a row to be separate ($dp[0]$), and $1$ way for them to be merged.

<br>

**Memory Optimization:** because we only access iterations $i$ and $i-1$, we can remove the factor of $N$ from the $dp$ array and store a temporary variable for either $dp[0][i-1]$ or $dp[1][i-1]$, whichever you choose to update first.

<br>

**Iteration:** from $2$ to $N$ rows. (excludes $1$ because of the base case)

- We technically consider columns too, but since there's only two of them, there's no iteration.

<br>

**Relation:** 

- **$dp[0][i] = 4\cdot dp[0][i-1] + dp[1][i-1]$**
- **$dp[1][i] = 2\cdot dp[0][i-1] + dp[1][i-1]$**

<br>

**Answer:** $dp[0][N]$ stores the answer given that the bottom layer is separate, while $dp[1][N]$ stores it for merged. Thus, the answer would be $dp[0][N]+dp[1][N]$.

<br>
<br>

## Comments

- Since the only input is $N$, you *could* optimize further by storing the results for smaller values of $N$ and building up to larger values. 

<br>

---

<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<long long>>dp(2,vector<long long>(1e6+1,0));
long long a,b,mod=1e9+7;

int f(int type, int h) {
    if(h==1) return 1;
    if(dp[type][h]) return dp[type][h];

    a=f(0,h-1); b=f(1,h-1);

    if(type==0) return dp[0][h]=(((4*a)+b)%mod);
    else return dp[1][h]=((a+(2*b))%mod);
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int t,n; cin>>t;
    int mod=1e9+7;
    vector<vector<long long>>dp(2,vector<long long>(1e6+1,0));
    dp[0][1]=dp[1][1]=1;
    for(int _=0; _<t; _++) {
        cin>>n;
        if(dp[0][n]&&dp[1][n]) cout<<(dp[0][n]+dp[1][n])%mod<<endl;
        else {
            for(int i=2; i<=n; i++) {
                if(dp[0][i]&&dp[1][i]) continue;
                dp[0][i]=(((4*dp[0][i-1])%mod+dp[1][i-1])%mod);
                dp[1][i]=((dp[0][i-1]+2*dp[1][i-1]%mod)%mod);
            }
            cout<<(dp[0][n]+dp[1][n])%mod<<endl;
        }
    }
}
```

---TAKEAWAYS---
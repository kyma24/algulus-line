---
title: "Book Shop"
source: "CSES"
link: "https://cses.fi/problemset/task/1158"
difficulty: 10
concept: "dp"
tags: ["dp", "knapsack"]
---

<br>

## Problem Deconstruction

You have $N$ different books $(1\leq N\leq 1000)$, each with its own price $H_i$ $(1\leq H_i\leq 1000)$ and number of pages $S_i$​ $(1\leq S_i\leq 1000)$.

Given that the total price of books is at most $X$ $(1\leq X\leq 105)$, and that each book can be bought at most once, determine the maximum number of pages you can buy.

<br>

---

<br>

## Key Observations

- This is a classic knapsack problem: it asks you to get the maximum value (pages) within a set cost (price).

<br>
<br>

## General Thought Process

1. Notice that this is a knapsack problem.

2. Because of that, consider: for each element, should we **include it or not**?

3. What are the constraints? We have a total price of at most $X$, and there's only one of each book.

4. To avoid buying a book multiple times, we should iterate through the books in a set order, and consider the price as the main factor for the dp instead.

- **$dp[n][x] =$ the maximum number of pages considering only the first $n$ books, and with a leftover budget of $x$.**

<br>
<br>

## Details

**Base Case:** fill the $0$th prefix of the dp array (so when we don't have any money left).

- Considering only the first ($0$th) element, the maximum number of pages for each price from $0$ to $x$ would be $S[0]$, but only if $H[0]$ is less than that price.

<br>

**Memory Optimization**: Since we're only considering the previous prefix during each iteration, we can store dp on cost for just the current prefix.

<br>

**Iteration**: $N$ prefixes.

- Go through the $X$ costs ($w$) **from $X$ to $0$** (backwards).

    - This is because we're using one array, so we're simultaneously updating it and taking values from the previous iteration. 
    
    - In other words, we have to reference values from **before** the current point in the same array.

    - To preserve the $i-1$th iteration's values before we need to use them, we can simply iterate backwards.

    - We know that because $w$ always builds off of a cost $w'$ that's **less** than itself. Thus, we don't need anything greater than it, so we can override those first.

<br>

**Relation**: add the below together for the $i$th iteration's $dp[w]$.

- Include: **$S[i] + dp[w-H[i]]$**

- Not include: **$dp[H[i]]$**

<br>

**Answer**: after the last book is processed (the $N-1$th iteration), what's left in the array considers **all $N$ books**.

- By definition, with a budget of $X$, the answer will be stored in **$dp[N][X]$**, or $dp[X]$ for the last array.

<br>

---

<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> h(1000),s(1000);
vector<vector<int>> dp(1000,vector<int>(100001,0));

int f(int ind, int w) {
    if(ind==0) {
        if (h[0]<=w) return s[0];
        return 0;
    }
    if(dp[ind][w]!=-1) return dp[ind][w];

    int notTake=f(ind-1,w);
    int take=INT_MIN;
    if(h[ind]<=w) take=s[ind]+f(ind-1,w-h[ind]);
    
    return dp[ind][w]=max(notTake,take);
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n,x; cin>>n>>x;

    vector<int>h(n),s(n);
    vector<int>dp(x+1);
    for(int i=0; i<n; i++) cin>>h[i];
    for(int i=0; i<n; i++) cin>>s[i];

    // base case
    for(int i=0; i<=x; i++) {
        if(h[0]<=i) dp[i]=s[0];
    }

    // construct dp array
    for(int i=1; i<n; i++) {
        for(int w=x; w>=0; w--) {
            dp[w]=max(dp[w],((h[i]<=w)?s[i]+dp[w-h[i]]:0));
        }
    }

    cout<<dp[x];
}
```

---TAKEAWAYS---
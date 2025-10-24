---
title: "Increasing Subsequence"
source: "CSES"
link: "https://cses.fi/problemset/task/1145"
difficulty: 20
concept: "dp"
tags: ["dp", "lis", "subsequence"]
---

<br>

## Problem Deconstruction

Given array $A$ $(1\leq A_i\leq 10^9)$ of length $N$ $(1\leq N\leq 2\cdot 10^5)$, determine the longest increasing subsequence of the array.

<br>
<br>

## Key Observations

- If you have a *set length* for an increasing subsequence, the "best" sequence to build off of is the one with the smallest last value.

<br>
<br>

## General Thought Process

1. This is explicitly a LIS question.

2. If we think considering each new element, we can either add it to a previously created subsequence, or start its own if everything before it is greater.

3. Accounting for the our observation, we can create $dp[l]$ such that it is the minimum last value of a subsequence of length $l$.

- This array would be sorted. (check comments)

- So as we process elements, we can either...

    - append (add another value to the back of the subsequence) if the value is larger than everything else thus far,

    - or update the first value that's larger than it (so it becomes "more optimal").

- Then the result would be the final size of the array.

<br>
<br>

## Details

**Base Case:** $l=0$ is an empty vector.

<br>

**Iteration:** go through all elements in order.

- If it's the maximum value so far, append to $dp$. (+1 to length)

- If it isn't, replace it in its place in the sorted order. (+0 to length)

<br>

**Relation:** either **$dp.push\_back(x[i])$** or **$dp[$first larger$]=x[i]$**

<br>

**Answer:** the size of $dp$ at the end.

<br>
<br>

## Comments

- Why does this even work? Well, what we're essentially doing here is "building" the optimal subsequences for several different lengths as we iterate.

- So why do we update it in a sorted order? Let's break it down based on the two ways we account for the current element.

    - Let's say we meet the largest value so far. Why we append it is pretty intuitive: because everything else is smaller, it would still be increasing, and it would add 1 to the length.

    - But what if we meet a smaller value? Why do we insert it in its sorted position?

        - It's because of our key observation: naturally, the optimal ending value is the smallest one we can afford that doesn't break the increasing sequence.

        - Inserting it in its sorted position ensures that everything before it is smaller!

        - Also, it's ALWAYS better to update the end of a longer subsequence than a shorter one. Think of it this way: at a given index, would you rather be able to make a longer sequence with everything before, or a shorter one?

<br>
<br>

## Code

Recursion:
```cpp

#include <iostream>
#include <vector>
using namespace std;

vector<int>x(2*1e5);

// Top-Down: too much memory
vector<vector<int>>dp(2*1e5,vector<int>(2*1e5));
int f(int i, int prev) {
    if(i==0) {
        if(x[0]<x[prev]) return 1;
        else return 0;
    }
    if(dp[i][prev]) return dp[i][prev];
    return dp[i][prev]=max(f(i-1,prev),((x[i]<x[prev])?f(i-1,i)+1:0));
}

// Bottom-Up: allows for 1D DP
vector<int> dp(2*1e5+1,1);
int n;
int f(int i, int prev) {
    if(i>=n) return 0;
    if(dp[prev+1]) return dp[prev+1];
    int take=0;
    if(prev==-1||x[i]>x[prev]) take=f(i+1,i)+1;
    return dp[prev+1]=max(f(i+1,prev),take);
}
```

<br>

Tabulation:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int>x(2*1e5);

int main() {
    int n; cin>>n;
    for(int i=0; i<n; i++) cin>>x[i];

    dp[0]=1;
    int res=0;
    for(int i=0; i<n; i++) {
        for(int prev=0; prev<=i; prev++) {
            dp[i]=max(dp[i],((x[i]>x[prev])?dp[prev]+1:0));
        }
        res=max(res,dp[i]);
    }

    cout<<res<<endl;
}
```

<br>

Special DP:
```cpp

#include <iostream>
#include <vector>
using namespace std;

vector<int>x(2*1e5);

int main() {
    int n; cin>>n;
    for(int i=0; i<n; i++) cin>>x[i];
    
    vector<int> dp;
    for(int i=0; i<n; i++) {
        auto it=lower_bound(dp.begin(),dp.end(),x[i]);
        if(it==dp.end()) dp.push_back(x[i]);
        else dp[it-dp.begin()]=x[i];
    }
    
    cout<<dp.size()<<endl;
}
```
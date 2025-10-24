---
title: "Projects"
source: "CSES"
link: "https://cses.fi/problemset/task/1140"
difficulty: 10
concept: "dp"
tags: ["dp", "coordinate compression"]
---

<br>

## Problem Deconstruction

You have $N$ $(1\leq N\leq 2\cdot 10^5)$ projects, each with a start day $A_i$, end day $B_i$​ $(1\leq A_i\leq B_i\leq 10^9)$, and reward value $P_i$​ $(1\leq P_i\leq 10^9)$ for completion.

Determine the maximum amount of money you can earn if you can only work on one project per day.

<br>
<br>

## Key Observations

- It is far too costly to dp naively, since the constraints for the days are out of range. What if we find a way to turn that factor into something smaller?

<br>
<br>

## General Thought Process

1. Think of the days as if they're placed on a number line. Aside from the relative relationship between them, we don't actually need to know the specific times.

2. Since the value of time doesn't matter, we can compress the given numbers into a smaller range from $0, ..., N-1$.

3. Now, we have a manageable set of coordinates that can be used in our $dp$.

<br>
<br>

## Details

$dp[i]$ represents the maximum amount of money earned considering up to the $i$th coordinate endpoint.

<br>

**Base Case:** since the minimum inputted endpoint is $1$, it's impossible for a project to end on the $0$th day, so $dp[0]=0$.

<br>

**Memory Optimization:** we don't really need to keep track of the last project added, so we don't need that factor in our $dp$ array (even though we're going through it in the iteration).

<br>

**Iteration:** $i$ from $0$ to the number of coordinates, every $p$ in $project[i]$ (considering all projects ending at coordinate $i$)

<br>

**Relation:** **$dp[i]=max(dp[i-1],dp[p.first]+p.second)$**

- $p.first$ is the starting point associated with the current endpoint $i$, and $p.second$ is the reward money.

<br>

**Answer:** $dp[$# of coordinates$-1]$ contains the maximum amount of money earned factoring in all inputted coordinates.

<br>
<br>

## Code
```cpp
#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main() {
    int n;
    cin>>n;

    map<int,int> compress;
    vector<int> a(n),b(n),p(n);
    for(int i=0; i<n; i++) {
        cin>>a[i]>>b[i]>>p[i];
        b[i]++;
        compress[a[i]], compress[b[i]];
    }

    // assigns coordinate values to items in map(sorted)
    int coords=0;
    for(auto&v:compress) {
        v.second=coords++;
    }

    // assign values of start and weight to ending coordinate
    vector<vector<pair<int,int>>> project(coords);
    for(int i=0; i<n; i++) {
        project[compress[b[i]]].emplace_back(compress[a[i]],p[i]);
    }

    vector<long long> dp(coords,0);
    for(int i=0; i<coords; i++) {
        if(i>0) dp[i]=dp[i-1];
        for(auto p:project[i]) {
            dp[i]=max(dp[i],dp[p.first]+p.second);
        }
    }

    cout<<dp[coords-1]<<endl;
}
```
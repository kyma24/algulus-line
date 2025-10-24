---
title: "Elevator Rides"
source: "CSES"
link: "https://cses.fi/problemset/task/1653"
difficulty: 10
concept: "dp"
tags: ["dp", "bitmask"]
---

<br>

## Problem Deconstruction

There are $N$ $(1\leq N\leq 20)$ people, each with their own weight $w_i$.

The maximum weight capacity of the elevator is $X$ $(1\leq w_i​\leq X\leq 10^9)$.

Determine the minimum number of elevator rides needed to send everyone up.

<br>
<br>

## Key Observations

- $N$ is relatively small ($\leq 20$), so this problem could use **bitmask dp**.

<br>
<br>

## General Thought Process

1. Note that the value of $N$ makes $O(2^N)$ or $O(2^N\cdot N)$ viable, which is the usual time complexity for bitmask dp.

2. Because of the nice time complexity, we can iterate through each subset AND each member of each subset.

- Thus, we can simply calculate the answer for each set of people and build up until we get the answer for the whole group.

3. After applying this, it becomes a pseudo-knapsack problem.

- We consider each person and whether to include them in the current or next ride.

<br>
<br>

## Details

$dp=best[i]$ stores...

- the smallest number of rides needed to cover the subset for bitmask $i$

- the weight of the previous ride

<br>

**Base Case:** we are guaranteed that when there are no people, there is one ride, and no weight.

<br>

**Iteration:** $s$ from $1$ to $(1<<N)=2^N$, then $p$ from $1$ to $N$ to go through the bits/subset's children.

- The bitmask $1$ indicates that only the last person is included
- The bitmask $N$ $1$s indicates that everyone is included

<br>

**Relation:** $best[s] =$ for each person in the subset $s$, the sum of the possibilities for fitting into the current elevator and creating a new ride.

<br>

**Answer:** by definition, the result should be stored in $best[(1<<N)-1].first$.

<br>
<br>

## Code
```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    // using bitsets: represent subsets with len-N bit indices
    int N,X; cin>>N>>X;
    int weight[N]; for(int i=0; i<N; i++) cin>>weight[i];

    // dp array of pairs (min rides for subset, weight of prev ride)
    vector<pair<int,int>> best(1<<N);
    best[0]={1,0}; // base case: 1 ride of weight 0

    // s every subset of ppl
    // starting from bitmask=1 to everything included(or N 1's)
    for(int s=1; s<(1<<N); s++) {
        // assign best to max possible rides
        best[s]={N+1,0};

        // for every person
        for(int p=0; p<N; p++) {
            // if included in current subset
            if(s&(1<<p)) {
                // option: current person isn't included in subset s (xor inverts bit, 1-->0)
                auto option=best[s^(1<<p)];

                // if can still fit in ride, continue adding
                if(option.second+weight[p]<=X) {
                    option.second+=weight[p];
                } else { // create new ride, assign weight
                    option.first++;
                    option.second=weight[p];
                }

                // make best the min amount of rides(defaults to pair.first)
                best[s]=min(best[s],option);
            }
        }
    }

    cout<<best[(1<<N)-1].first<<endl;
}
```
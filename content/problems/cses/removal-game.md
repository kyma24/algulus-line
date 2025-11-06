---
title: "Removal Game"
source: "CSES"
link: "https://cses.fi/problemset/task/1097"
difficulty: 20
concept: "dp"
tags: ["dp", "game"]
---

<br>

## Problem Deconstruction

There is a list $X$ $(−10^9\leq X_i\leq 10^9) of $N$ $(1\leq N\leq 5000)$ numbers.

Two players alternate moves. One move is removing either the first or last number from the list, and adding it to the current player's score.

Determine the maximum possible score for the first player when both players play optimally.

<br>

---

<br>

## Key Observations

- Since both players want to maximize their scores, we must factor that into our dp.

<br>
<br>

## General Thought Process

1. Note that at every step, both players play optimally.

2. This means that if player 1 plays the optimal move for the current state of the list, player 2 plays the optimal move for the state after player 1's move.

3. This translates well into our dp:

- To calculate player 1's score, we must factor in player 2's moves as well.

- Since these moves depend on the situation, we can either:

    - precalculate the optimal score for each state of the list and then dp,

    - or track the minimum loss that player 1 builds up relative to the maximum score they could've gotten (the total of the list).

<br>
<br>

## Details

$dp[l][r]$ represents the maximum value gained of the starting player if the current state is the list's subarray $[l,r]$.

<br>

**Base Case:** when $l=r$, $dp[l][r]=X[l]$ (since there's only one value).

<br>

**Iteration:** $l$ from $N-1$ to $0$, $r$ from $l$ to $N-1$.

- We go through $l$ backwards and $r$ forwards because the process of growing the array (dp-ing from smaller cases to bigger cases) involves $l$ going left (decreasing) and $r$ going right (increasing).

<br>

**Relation:** **$dp[l][r]=max(X[l]-dp[l+1][r],$ $X[r]-dp[l][r-1])$

<br>

**Answer:** $(total+dp[0][N-1])/2$

- Because $dp[0][N-1]$ is the maximum value gain, or (max gain - min loss), if we add it to the total sum of the list, or (max gain + min loss), we get ($2\times $ max gain), so divide by 2 for the answer.

<br>
<br>

## Comments

- We can't *just* think about minimum loss or maximum gain because it ignores the part about optimized moves. Each player wants the largest value, so the dp must also consider value.

- In essence, player 1 wants to make the max gain larger, and player 2 wants to make the min loss larger. To address both, we have to think about value.

- Generally, for games, start thinking from a smaller case.

    - Let's take the provided example: 4 5 1 3

    - We notice that by choosing 4 and playing optimally, we lose 5, gain 3, lose 1.

    - If we remove 4 and consider only 5 3 1, we gain 5, lose 3, gain 1.

    - Noticing this alternating pattern should hopefully guide your thought process in the right direction.

<br>

---

<br>

## Code

Recursion:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> x(5000);
vector<vector<long long>> dp(5000,vector<long long>(5000));

long long f(int l, int r) {
    if (l==r) return x[l];
    if(dp[l][r]) return dp[l][r];
    return dp[l][r]=max((long long)(x[l]-f(l+1,r)), (long long)(x[r]-f(l,r-1)));
}
```

<br>

DP:
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> x(5000);
vector<vector<long long>> dp(5000,vector<long long>(5000));

int main() {
    int n; cin>>n;

    long long sum=0;
    for(int i=0; i<n; i++) {
        cin>>x[i];
        sum+=x[i];
    }
    
    for(int l=n-1; l>=0; l--) {
        for(int r=l; r<n; r++) {
            if(l==r) dp[l][r]=x[l];
            else dp[l][r]=max(x[l]-dp[l+1][r],x[r]-dp[l][r-1]);
        }
    }
    
    cout<<(sum+dp[0][n-1])/2<<endl;
}
```

---TAKEAWAYS---
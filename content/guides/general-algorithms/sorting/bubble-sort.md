---
title: "Bubble Sort"
order: 0
---
<br>

## Description

Bubble sort considers **adjacent pairs** of values.

Each iteration, it aims to bring the **largest unsorted value** to the correct position at the end of the array.

(It's kind of like bubbles rising to the surface, one by one.)

<br>

Since there are $N$ values to sort, and in each iteration we go through the entire array ($N$), this algorithm takes $O(N^2)$ time.

Think of it like this: every iteration, we're guaranteed to carry one "bubble"/element, the largest unsorted one, up to its correct position. So we'll need a max of $N$ iterations to carry all $N$ bubbles up, and within each of those iterations, the maximum number of comparisons made would be $N$.

<br>
<br>

## Code

```cpp
vector<int> A = {...};
for(int i=0; i<N; i++) {
    for(int j=0; j<N-1; j++) {
        if(A[j]>A[j+1]) swap(A[j],A[j+1]);
    }
}
```

Note that there are ways to optimize this, i.e. stopping when you know the array is fully sorted (no more swaps), or not considering the last $i$ values (since those are the largest numbers that have already "risen" to the top);
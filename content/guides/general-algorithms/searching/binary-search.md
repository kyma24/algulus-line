---
title: "Binary Search"
order: 0
---
<br>

## Description

Binary search uses the fact that the group of values is **sorted** to significantly speed up the searching process.

<br>

It operates on a simple principle: if I look at an element in the middle, and my target value is *less* than it, then I don't have to look at any value above me, since they're all guaranteed to be *larger* than my target.

That eliminates **half of the data**, and gives us the **same problem** to think about with the remaining half. We halve until we get the correct position, so this algorithm ends up being $O(log N)$ time on its own, without considering the sorting part.

<br>
<br>

## Code

```cpp
vecor<int> A = {...};
int target;

// the current considered range is [lo,hi]
int lo=0, hi=N, mid;
while(lo<=hi) {
    // consider the middle value.
    mid=lo+((hi-lo)/2);
    
    // if the target is below that, consider the left half.
    if(target<A[mid]) hi=mid-1;

    // if the target is above that, consider the right half.
    else lo=mid+1;
}
```

Note that **where you consider the case `target==A[mid]` matters**.

If it's considered when the target is **smaller**, we'll end up finding the **leftmost** case in `lo`.

Meanwhile, if it's considered when the target is **larger**, we'll end up finding the **rightmost** case in `hi`.
---
title: "Big O"
---
<br>

Big O is a measurement used to assess the efficiency of an algorithm for both time and memory complexity.

It represents the algorithm's performance in the "worst case" scenario.

<br>
<br>

The following are the general expressions. Typically, you'd calculate for a specific algorithm by expressing the number of operations in terms of the maximum input amount.

<br>

**Example:** your input is an array with a maximum size of $10^4$. If you loop over once, the efficiency would be $O(10^4)$. If you loop over it twice, it becomes $O(2\cdot 10^4)$. Nest a loop within another, and it'll be $O(10^8)$.

<br>
<br>

## O(1)
Single definitions, comparisons, computations, etc.

Generally used for algorithms with constant time/memory complexity, so when it doesn't depend on input size.

Also known as constant complexity.

```cpp
int a=2;
// or
if(a==2) return 2;
// or
int b=a+2;
```
<br>
<br>

## O(log N)
Operations like binary search. They remove half of the information from consideration each time. 

Also known as logarithmic complexity.

* note: the $log$ refers to $log_2$.

```cpp
// starting with N values
int lo=0, hi=N;
while(lo<=hi) {
    // each time, consider half of previous iteration
    int mid=lo+(hi-lo)/2;
    if(target<A[mid]) hi=mid-1;
    else lo=mid+1;
}
```

<br>
<br>

## O(N)
One-layered loops. Makes sense, because they're running a constant operation $N$ times. 

Also known as linear complexity.

```cpp
for(int i=0; i<N; i++) {
    // constant operations
}
// or
while(i<N) {
    // constant operations
}
```

<br>
<br>

## O(N log N)
Sorting algorithms like quick/merge sort. 

Just as the notation implies, it's a $O(log(N))$ operation nested within a $O(N)$ operation, or vice versa.

```cpp
// see algs/sorting :)
```

<br>
<br>

## O(N^k)
Nested loops. If it's two, it's $O(N^2)$. 

Also known as polynomial complexity.

```cpp
for(int i=0; i<N; i++) {
    for(int j=0; j<N; j++) {
        // ...
    }
}
```

<br>
<br>

## O(2^N)
Typically occurs in recursive operations. 

Also known as expotential complexity.

```cpp
void example(int base, int cur) {
    if(cur==base) return;
    // we run two of these, then each runs two, then two...
    example(base,cur-1)
    example(base,cur-1)
}
```

<br>
<br>

## O(N!)
Typically occurs in combinatorics — for instance, generating permutations. 

Also known as factorial complexity.

```cpp
vector<vector<int>> permutations={};
vector<int> current={};
vector<int> unusedVals={1,2,3,...,N};
int numUnused=N;

void genPerms(int numUnused, vector<int>&current, vector<int>&unusedVals) {
    int length=current.size();

    if(length==N) {
        permutations.push_back(current);
        return;
    }

    // all N possible (unused) starting values
    for(int i=0; i<numUnused; i++) {
        current.push_back(unusedVals[i]);
        removeFromUnusedVals(i);

        // this round iterated N, next will iterate N-1, then N-2, ... to 1!
        genPerms(numUnused-1, current, unusedVals);

        // reset for next starting value
        current.pop_back();
        addBackToUnusedVals(i);
    }
}
```

<br>
<br>
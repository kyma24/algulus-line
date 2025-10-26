---
title: "Array"
order: 0
---
<br>

## Description

A structure used for its ability to **index any element in O(1)**.

<br>

It can either be **static** (cannot allocate more memory after initialization) or **dynamic** (can resize without making a copy).

<br>

You'll find the different uses for static and dynamic arrays in C++ below.

<br>
<br>

## Static Arrays

These are C++'s built in arrays.

Note: when declared in a global scope, they automatically fill with 0.

<br>

Declarations:
```cpp
// defined by type name[length]
int A[5];

// direct assignment
int A[5]={1,2,3,4,5};

// parameterizes/initializes
int A[];

// multi-dimensional
int A[5][5];
```

<br>

Length:
```cpp
// total array bytes / single element bytes
int len=sizeof(A)/sizeof(A[0]);
```

<br>

Fill:
```cpp
// can only fill with value = -1 or 0
memset(A,value,sizeof(A));
```

<br>
<br>

## Dynamic Arrays

These are called vectors.

To use them, you'll need to include this:
```cpp
#include <vector>
```

<br>

Declarations:
```cpp
// defined by vector<type> name(length, fill)
vector<int> V(5,0);

// direct assignment
vector<int> V={1,2,3,4,5};

// parameterizes/initializes
vector<int> V;

// multi-dimensional
vector<vector<int>> V(5,vector<int>(5));
```

<br>

Methods:
```cpp
// appends value to back of vector
V.push_back(value);

// removes value at back of vector
V.pop_back(value);

// resizes vector (new size, optional fill for new spaces when expanded)
V.resize(new_size, value);

// inserts value at V.begin()+i (index i)
V.insert(V.begin()+i, value);

// erases value at V.begin()+i (index i)
V.erase(V.begin()+i);

// erases values from index i to j-1
V.erase(V.begin()+i, V.begin()+j);

// removes all values from vector (size 0)
V.clear()
```

<br>

Properties:
```cpp
// first value in V
V.front();

// last value in V
V.back();

// size of V
V.size();

// if V is empty, returns true
V.empty();
```

<br>

Functions:
```cpp
// removes all adjacent duplicates in range [i,j)
unique(V.begin()+i, V.begin()+j);

// returns index of position marked by iterator it
distance(V.begin(), it);
```

<br>
<br>

## Shared Functions

NOTE: replace `A` with `V.begin()` to use on vectors.

<br>

Modify:
```cpp
// fill range [i,j) with value
fill(A+i, A+j, value);

// fill range [i,j) in increments of 1, starting from start
iota(A+i, A+j, start);

// sorts range [i,j)
sort(A+i, A+j);

// reverses range [i,j)
reverse(A+i, A+j);

// swaps contents of A and B
swap(A, B);

// copies contents of the range [i,j) into B
copy(A+i, A+j, B);
```

<br>

Search:
```cpp
// returns iterator to value's position in range [i,j)
// if it doesn't exist, returns A+N or V.end()
find(A+i, A+j, value);

// returns true if the value is found in range [i,j), else false
// only use when sorted
binary_search(A+i, A+j, value);

// returns the iterator to the first element >= value in range [i,j)
// only use when sorted
lower_bound(A+i, A+j, value);

// returns iterator to the first element > value in range [i,j)
// only use when sorted
upper_bound(A+i, A+j, value);

// returns # occurrences of value in range [i,j)
count(A+i, A+j, value);
```
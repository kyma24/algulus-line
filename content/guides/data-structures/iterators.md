---
title: "Iterators"
order: -1
---
<br>

## Description

Iterators play a key role in using C++'s data structures. 

<br>

They're essentially **pointers** that refer to different positions within a structure, and are used in functions and methods that involve traversal/iteration.

(i.e. sorting, searching, filling, deleting, ...)

<br>

To be more specific, they actually point to places in the memory. 

Some structures, like arrays, take up **contiguous** spaces in the memory, whereas the elements in other structures, like sets, may not be adjacent.

This difference affects how different structures can be traversed using iterators.

<br>
<br>

### (Most) STL Types

Most of the types provided in C++'s standard template library use the following syntax for iterators.

So this would apply to **vectors, sets, maps, and more**. 

In fact, **strings** use this too.

```cpp
vector<int> X = {...};

// points to the first element of X
auto it = X.begin();

// points to the space after the last element of X
auto it = X.end();

// points to the last element of X
auto it = X.rbegin();

// points to the space before the first element of X
auto it = X.rend();
```

<br>

### Built-in Arrays

Unlike other structures, C++'s built-in arrays use the variable as a pointer to its first element.

```cpp
// N is the length of the array
int N = 5;
int X[N] = {...};

// points to the first element of X
auto it = X;

// points to the last element of X
auto it = X+N;
```

<br>

### Exceptions

Some structures, like stacks and queues, are designed to restrict traversal to a specific order (e.g. FIFO, LIFO).

As a result, they can't be referenced using iterators.

<br>
<br>

## Operators

So how can these be used? Here are some common operations.

<br>
<br>

### Moving the Iterator

Depending on what structure you're using, the method of moving iterators can be slightly different.

<br>

For most of the mentioned structures (built-in arrays, vectors, strings, ...) you can simply add the "index" to get the iterator at that position.

Note that subtracting works as well, but make sure not to go out of bounds!

```cpp
// points to X[1]
auto it = A+1;
auto it = V.begin()+1;
```

<br>

However, structures like sets and maps are usually considered **unordered**, and might not be stored **continuously** in the memory like arrays or vectors. So you can't assume that the position right after the current iterator is the next element.

Instead, you'll find the correct expression below.

```cpp
// points to X[1]
auto it = S.begin();
it++;
```

<br>
<br>

### Dereferencing

Given an iterator, you can actually access the value stored at its position.

Reading the value should work regardless of data type, but writing into it isn't allowed for certain structures (e.g. sets, maps).

```cpp
auto it = X.begin()+1;

// value is equivalent to X[1]
auto value = *it;

// assign value to X[1]
*it = value;
```
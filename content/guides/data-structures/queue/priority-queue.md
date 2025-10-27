---
title: "Priority Queue"
order: 0
---
<br>

## Description

A priority queue is a queue that keeps its contents in a **sorted order**.

<br>

By default, it keeps the larger elements on the top. The ordering can be customized in the declaration.

<br>
<br>

Declaration:

(In the following case, RULE would be a comparator function like `greater<int>`.)
```cpp
// defined by priority_queue<type,RULE> name;
priority_queue<int,RULE> PQ;
```

<br>

Length:
```cpp
int N=PQ.size();
```

<br>

Methods:
```cpp
// access value at the top
PQ.top();

// add value to the back
PQ.push(value);

// remove value from the front
PQ.pop();
```
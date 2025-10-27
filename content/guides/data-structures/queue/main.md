---
title: "Queue"
order: 4
---
<br>

## Description

A queue is a FIFO (first-in-first-out) structure. Think of it like a conveyor belt: it travels in one direction, and you can only really take out an element once it gets to the opposite end.

<br>

In C++, think of it as going from right to left: you add things at the back (right), and they are popped from the front (left).

<br>
<br>

Declaration:
```cpp
// defined by queue<type> name;
queue<int> Q;
```

<br>

Length:
```cpp
int N=Q.size();
```

<br>

Methods:
```cpp
// access value at the front
Q.front();

// access value at the back
Q.back();

// add value to the back
Q.push(value);

// remove value from the front
Q.pop();

// returns whether the queue is empty
Q.empty();
```
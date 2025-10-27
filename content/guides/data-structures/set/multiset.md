---
title: "Multiset"
order: 0
---
<br>

## Description

A multiset is a set that allows you to store **multiple instances** of the same value.

<br>

Declarations:
```cpp
// defined by multiset<type> name
multiset<int> M;

// direct assignment
multiset<int> M={1,1,3,4,5};
```

<br>

Length:
```cpp
int N=M.size();
```

<br>

Methods:
```cpp
// adds one instance of a value into the multiset
M.insert(value);

// removes all occurrences of value in the multiset
M.erase(value);

// removes single occurrence of value in the multiset (using iterator)
auto it=M.find(value);
M.erase(it);

// removes all values from multiset
M.clear();
```

<br>

Search:
```cpp
// returns iterator to value's position
M.find(value);

// returns # occurrences of value
M.count(value);
```
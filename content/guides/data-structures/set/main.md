---
title: "Set"
order: 2
---
<br>

## Description

A structure typically used for its ability to **find, insert, and delete unique values in O(log N)**. They're able to do this because they constantly maintain a sorted order. 

<br>

However, unlike with arrays, **individual values cannot be indexed or changed**. To modify an element in a set, you'll have to remove it first, and then replace it with the new value.

<br>

The set is a built-in data structure in C++. To use it, you'll have to use `#include <set>`.

<br>

Declarations:
```cpp
// defined by set<type> name
set<int> S;

// direct assignment
set<int> S={1,2,3,4,5};
```

<br>

Length:
```cpp
int N=S.size();
```

<br>

Methods:
```cpp
// adds value into the set
S.insert(value);

// removes value from set
S.erase(value);

// removes all values from set
S.clear();
```

<br>

Search:
```cpp
// returns iterator to value's position
S.find(value);

// returns # occurrences of value (should be 0/1, since it's a set)
S.count(value);
```
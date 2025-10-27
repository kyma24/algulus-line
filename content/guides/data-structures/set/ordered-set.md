---
title: "Ordered Set"
order: 1
---
<br>

## Description

The ordered set is essentially a set with "indices" that maintains its sorted order. Its operations are **O(log N)**.

<br>
<br>

In reality, it's called an **ordered statistics tree**. We don't need to do any extra implementation, but we will have to add a bit to our header.

```cpp
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
 
typedef __gnu_pbds::tree<TYPE, __gnu_pbds::null_type, less<TYPE>, __gnu_pbds::rb_tree_tag, __gnu_pbds::tree_order_statistics_node_update> ordered_set;
```

Note that this can be quite customizable! Right now, `ordered_set` stores values of type `TYPE`, and sorts them using the `less` comparison (smaller to larger), but either can be redefined.

<br>
<br>

Methods:
```cpp
ordered_set OS;

// number of elements with an "index" smaller than value's "index"
OS.order_of_key(value)

// returns the value at "index" key
OS.find_by_order(key)
```
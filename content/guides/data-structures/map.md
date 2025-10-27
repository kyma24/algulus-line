---
title: "Map"
order: 5
---
<br>

## Description

A map is an unordered structure that contains **key-value** pairs. (They are literally stored in C++ `pair`s.)

It is primarily used to access a value using a different type of "index."

<br>

Note: a map maintains a somewhat sorted order depending on the key type. This can be changed with a comparator(RULE) in the object declaration.

<br>
<br>

Declaration:
```cpp
// defined by map<keyType,valueType,RULE> name;
map<char,int,RULE> M;
```

<br>

Inserting:

A key-value pair does not exist until it has been accessed (e.g. through `M[key]`). 

Even when it's only been referenced, say, in an if statement, the pair will be created, and the value is dependent on the type (so for `int`s, it would start off as `0`).

```cpp
M[key]=value;
// or
M.insert({key,value});
```

<br>

Accessing:

```cpp
// returns value corresponding to key
M[key]
```
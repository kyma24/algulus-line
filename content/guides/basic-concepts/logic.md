---
title: "Logic"
order: 1
---
<br>

Logical operations are used in everything. You'll find the common operations, their truth tables, and C++ notations below. I've also included a few useful properties.

<br>

Keep in mind: the notation for bitwise operators is very similar. 

When it comes to boolean operations, always use the logical operators.

<br>
<br>

## AND

| p | q | p&q |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

```cpp
Logical: (p&&q)
Bitwise: (p&q)
```

<br>
<br>

## OR

| p | q | p\|q |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

```cpp
Logical: (p||q)
Bitwise: (p|q)
```

<br>
<br>

## NOT

| p | !p |
|---|---|
| 0 | 1 |
| 1 | 0 |

```cpp
Logical: (!p)
Bitwise: (~p)
```

<br>
<br>

## NAND

| p | q | !(p&q) |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

```cpp
Logical: !(p&&q)
Bitwise: ~(p&q)
```

<br>
<br>

## NOR

| p | q | !(p\|q) |
|---|---|--------|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

```cpp
Logical: !(p||q)
Bitwise: ~(p|q)
```

<br>
<br>

## XOR

| p | q | p^q |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

```cpp
Logical: !(p==q)
Bitwise: (p^q)
```

<br>
<br>

## XNOR

| p | q | !(p^q) |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

```cpp
Logical: (p==q)
Bitwise: ~(p^q)
```

<br>
<br>

## Properties

<br>
<br>

### De Morgan's
```cpp
!(p&&q) = (!p) || (!q)
!(p||q) = (!p) && (!q)
```
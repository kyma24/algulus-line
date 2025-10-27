---
title: "Operators"
order: 2
---
<br>

## Description

In addition to logical operators, there are assignment, comparison, math/arithmetic, etc. operators.

I'll be listing the basic, must-know ones below.

<br>
<br>

## Assignment

```cpp
// assigns value to variable x
int x=5;

// x = x+2
x+=2;

// x = x-2
x-=2;

// x = x*2
x*=2;

// x = x/2
x/=2;

// the above pattern can be applied to many operators (i.e. bitwise &)
```

<br>
<br>

## Comparison

```cpp
// returns boolean result (true/false)

// equals?
(x==y)

// not equals?
(x!=y)

// less than?
(x<y)

// less than/equal to?
(x<=y)

// greater than?
(x>y)

// greater than/equal to?
(x>=y)
```

<br>
<br>

## Increment/Decrement

This is widely used, even outside of math applications! (e.g. loops, iterators)

```cpp
// adds 1 to x
x++;
++x;

// subtracts 1 from x
x--;
--x;
```

You might notice that you can put the `++` either before or after the variable.

While the two do yield the same final result, what's important is the variable's value in the calculation process.

<br>

For instance,
```cpp
(x++)+1
```
doesn't actually equal `x+2`! Since the `x` is before the `++`, that means that during the calculation, its value isn't updated; it's only after the calculation is completed that `x` turns into `x+1`.

<br>

If you did want a result of `x+2`, you'd swap the operator and the variable like so:
```cpp
(++x)+1
```

<br>
<br>
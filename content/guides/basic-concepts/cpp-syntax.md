---
title: "C++ Syntax Specifics"
order: 3
---
<br>

## Header Section

The header section is where you'd typically have your `#include` statements (like imports), in addition to any custom definitions.

<br>

For instance, here's mine:

```cpp
#include <bits/stdc++.h>
using namespace std;
#define endl '\n'
typedef long long ll;
```

1. `#include <bits/stdc++.h>` includes all the standard library headers. You won't have to worry about including `iostream`, `vector`, `set`, etc. when it's all bundled into one statement.

2. `using namespace std` removes the need to prefix standard operations with `std::`. This is a feature of C++ that addresses possible name overlaps between different classes and their functions, but we won't need that in competitive programming. It's generally considered good practice to keep it elsewhere, though.

3. `#define endl '\n'` redefines `endl` as `'\n'`. There was one CSES question that just wouldn't pass without optimizing the smallest operations, and this happened to be one I tried that I've never really removed. (I don't think it makes a difference, though.)

4. `typedef long long ll` redefines the `long long` type into a nicer shorthand form, `ll`. It definitely makes coding a lot faster.

<br>
<br>

## int main()

When a C++ file is run, it starts at its `int main()` function. All of your code should thus be run there, even if you define an entirely separate `solve()` function.

I like to write most of my code in `main`. Before implementing my logic, though, I have a small header section:
```cpp
ios_base::sync_with_stdio(false);
cin.tie(0); cout.tie(0);
//freopen("jkld.txt","r",stdin);
```

1. `ios_base::sync_with_stdio(false)`

2. and `cin.tie(0); cout.tie(0)` both improve the efficiency of the program in terms of its input and output.

3. To make testing easier, I like to define a separate file to copy and paste a test case into.

<br>
<br>

## Miscellaneous

Sometimes, a competition will give you a number of test cases that you'll have to iterate through.

Here's my preferred way of approaching that:
```cpp
int T = number of test cases;
while(T--) {
    // input test case, calculate answer
}
```
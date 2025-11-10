---
title: "Labyrinth"
source: "CSES"
link: "https://cses.fi/problemset/task/1193"
difficulty: 10
concept: "graph"
tags: ["graph", "grid", "path reconstruction", "traversal"]
---

<br>

## Problem Deconstruction

You're given a map of a labyrinth of height $N$ and width $M$ $(1\le N,M\le 1000)$ such that `'.'` is clear, `'#'` is a wall, `'A'` is the starting cell, and `'B'` is the ending cell.

Find a path from the start `'A'` to the end `'B'`, and print the steps if possible.

<br>
<br>

## Key Observations

- The main issue is getting the **exact path**: since it's too costly to track on its own, we must use path reconstruction.

<br>
<br>

## General Thought Process

1. Note that this is a simple grid BFS problem, but we still need to track the path.

2. We can try to store the previous step instead of the entire path, since the latter will quickly become too costly.

3. Thus, we use path reconstruction after traversal by tracing back through the steps it took to reach the end `'B'`.

<br>
<br>

## Details

- Store the locations of `A` and `B` on the grid (the beginning/end cells).

- Use BFS starting from `A` and considering each of the 4 directions to traverse the grid.

    - Simultaneously, store the previous step (URDL) it took to reach the cell.

- If, after traversal, `B` has been visited, trace back through each previous step by reversing the direction traveled, and output the nodes from `A` to `B`.

<br>
<br>

## Comments

- If you find `B` during BFS, you can simply stop; at every point in the traversal, the previous steps will *always* lead back to `A`, so long as the node has been visited.

<br>
<br>

## Code

Below is **annotated code** from USACO Guide.

```cpp
#include <bits/stdc++.h>
using namespace std;

#define f first
#define s second

char A[1000][1000];
bool vis[1000][1000];

// stores the previous direction that we moved in to arrive that this cell
int prevStep[1000][1000];

// 0 = up, 1 = right, 2 = down, 3 = left
int dx[4] = { -1, 0, 1, 0 };
int dy[4] = { 0, 1, 0, -1 };
string stepDir = "URDL";

int main() {
	int N,M; cin>>N>>M;

	queue<pair<int,int>> q;
	pair<int,int> st, en;
	for(int i=0; i<N; i++) {
		for(int j=0; j<M; j++) {
			cin>>A[i][j];
			if(A[i][j]=='A') {
				st={i,j};
			} else if(A[i][j]=='B') {
				en={i,j};
			}
		}
	}

	q.push(st);
	vis[st.f][st.s]=1;

	while (!q.empty()) {
		pair<int,int> u = q.front(); q.pop();
		for (int i=0; i<4; i++) {
			pair<int,int> v = {u.f+dx[i], u.s+dy[i]};
			if ((v.f<0) || (v.f>=N) || (v.s<0) || (v.s>=M)) continue;
			if (A[v.f][v.s]=='#') continue;
			if (vis[v.f][v.s]) continue;
			
			vis[v.f][v.s]=1;
			prevStep[v.f][v.s]=i;
			q.push(v);
		}
	}

	if (vis[en.f][en.s]) {
		cout<<"YES"<<endl;
		vector<int> steps;
		while (en!=st) {
			int p=prevStep[en.f][en.s];
			steps.push_back(p);
			// undo the previous step to get back to the previous square
			// Notice how we subtract dx/dy, whereas we added dx/dy before
			en={en.f-dx[p], en.s-dy[p]};
		}
		reverse(steps.begin(), steps.end());

		cout<<steps.size()<<endl;
		for (char c:steps) {
			cout<<stepDir[c];
		}
		cout<<endl;
	} else {
		cout<<"NO"<<endl;
	}

	return 0;
}
```

---TAKEAWAYS---

## finding + storing path:

##### ● use path reconstruction to store paths at each state.
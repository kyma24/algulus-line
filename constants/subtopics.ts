import {TopicMap} from "@/utils/generateSubtopics";

 export const topicChildren:TopicMap = {
    "basic-concepts": [
        {
            "name": "Big O",
            "subslug": "basic-concepts/big-o",
            "order": 0
        },
        {
            "name": "Logic",
            "subslug": "basic-concepts/logic",
            "order": 1
        },
        {
            "name": "Operators",
            "subslug": "basic-concepts/operators",
            "order": 2
        },
        {
            "name": "C++ Syntax",
            "subslug": "basic-concepts/cpp-syntax",
            "order": 3
        }
    ],
    "data-structures": [
        {
            "name": "Iterators",
            "subslug": "data-structures/iterators",
            "order": -1
        },
        {
            "name": "Array",
            "subslug": "data-structures/array",
            "order": 0
        },
        {
            "name": "List",
            "subslug": "data-structures/list",
            "order": 1
        },
        {
            "name": "Set",
            "subslug": "data-structures/set",
            "order": 2
        },
        {
            "name": "Stack",
            "subslug": "data-structures/stack",
            "order": 3
        },
        {
            "name": "Queue",
            "subslug": "data-structures/queue",
            "order": 4
        },
        {
            "name": "Map",
            "subslug": "data-structures/map",
            "order": 5
        }
    ],
    "dynamic-programming": [
        {
            "name": "Optimization",
            "subslug": "dynamic-programming/optimization",
            "order": 0
        },
        {
            "name": "Approaches",
            "subslug": "dynamic-programming/approaches",
            "order": 1
        },
        {
            "name": "Knapsack",
            "subslug": "dynamic-programming/knapsack",
            "order": 2
        },
        {
            "name": "Grid",
            "subslug": "dynamic-programming/grid",
            "order": 3
        },
        {
            "name": "LIS",
            "subslug": "dynamic-programming/lis",
            "order": 4
        },
        {
            "name": "Bitmask",
            "subslug": "dynamic-programming/bitmask",
            "order": 5
        },
        {
            "name": "Range",
            "subslug": "dynamic-programming/range",
            "order": 6
        },
        {
            "name": "Digit",
            "subslug": "dynamic-programming/digit",
            "order": 7
        }
    ],
    "general-algorithms": [
        {
            "name": "Sorting",
            "subslug": "general-algorithms/sorting",
            "order": 0
        },
        {
            "name": "Searching",
            "subslug": "general-algorithms/searching",
            "order": 1
        }
    ],
    "graph-theory": [
        {
            "name": "Forms",
            "subslug": "graph-theory/forms",
            "order": 0
        },
        {
            "name": "Traversal",
            "subslug": "graph-theory/traversal",
            "order": 1
        },
        {
            "name": "Connected Components",
            "subslug": "graph-theory/connected-components",
            "order": 2
        },
        {
            "name": "Min/Max Spanning Tree",
            "subslug": "graph-theory/min-max-spanning-tree",
            "order": 3
        },
        {
            "name": "Cycles",
            "subslug": "graph-theory/cycles",
            "order": 4
        },
        {
            "name": "Shortest Path",
            "subslug": "graph-theory/shortest-path",
            "order": 5
        },
        {
            "name": "Topological Order",
            "subslug": "graph-theory/topological-order",
            "order": 6
        },
        {
            "name": "Bipartition",
            "subslug": "graph-theory/bipartition",
            "order": 7
        },
        {
            "name": "Flow",
            "subslug": "graph-theory/flow",
            "order": 8
        }
    ],
    "math": [
        {
            "name": "Bit Manipulation",
            "subslug": "math/bit-manipulation",
            "order": 0
        },
        {
            "name": "Combinatorics",
            "subslug": "math/combinatorics",
            "order": 1
        },
        {
            "name": "Geometry",
            "subslug": "math/geometry",
            "order": 2
        },
        {
            "name": "Modular Arithmetic",
            "subslug": "math/modular-arithmetic",
            "order": 3
        },
        {
            "name": "Number Theory",
            "subslug": "math/number-theory",
            "order": 4
        }
    ],
    "querying": [
        {
            "name": "Structures",
            "subslug": "querying/structures",
            "order": 0
        },
        {
            "name": "Range Queries",
            "subslug": "querying/range-queries",
            "order": 1
        },
        {
            "name": "Point Update Point Query",
            "subslug": "querying/point-update-point-query",
            "order": 2
        },
        {
            "name": "Point Update Range Query",
            "subslug": "querying/point-update-range-query",
            "order": 3
        },
        {
            "name": "Range Update Point Query",
            "subslug": "querying/range-update-point-query",
            "order": 4
        },
        {
            "name": "Range Update Range Query",
            "subslug": "querying/range-update-range-query",
            "order": 5
        }
    ],
    "trees": [
        {
            "name": "Traversal",
            "subslug": "trees/traversal",
            "order": 0
        },
        {
            "name": "Diameter",
            "subslug": "trees/diameter",
            "order": 1
        },
        {
            "name": "Subtrees",
            "subslug": "trees/subtrees",
            "order": 2
        },
        {
            "name": "Binary Tree",
            "subslug": "trees/binary-tree",
            "order": 3
        },
        {
            "name": "Lowest Common Ancestor",
            "subslug": "trees/lowest-common-ancestor",
            "order": 4
        },
        {
            "name": "Decompositions",
            "subslug": "trees/decompositions",
            "order": 5
        }
    ]
};

export const subtopicChildren:TopicMap = {
    "data-structures/queue": [
        {
            "name": "Priority Queue",
            "subslug": "data-structures/queue/priority-queue",
            "order": 0
        }
    ],
    "data-structures/set": [
        {
            "name": "Multiset",
            "subslug": "data-structures/set/multiset",
            "order": 0
        },
        {
            "name": "Ordered Set",
            "subslug": "data-structures/set/ordered-set",
            "order": 1
        }
    ],
    "general-algorithms/searching": [
        {
            "name": "Binary Search",
            "subslug": "general-algorithms/searching/binary-search",
            "order": 0
        }
    ],
    "general-algorithms/sorting": [
        {
            "name": "Bubble Sort",
            "subslug": "general-algorithms/sorting/bubble-sort",
            "order": 0
        },
        {
            "name": "Insertion Sort",
            "subslug": "general-algorithms/sorting/insertion-sort",
            "order": 1
        },
        {
            "name": "Merge Sort",
            "subslug": "general-algorithms/sorting/merge-sort",
            "order": 2
        },
        {
            "name": "Quick Sort",
            "subslug": "general-algorithms/sorting/quick-sort",
            "order": 3
        }
    ],
    "graph-theory/connected-components": [
        {
            "name": "DSU",
            "subslug": "graph-theory/connected-components/dsu",
            "order": 0
        },
        {
            "name": "Kosaraju's",
            "subslug": "graph-theory/connected-components/kosarajus",
            "order": 1
        }
    ],
    "graph-theory/flow": [
        {
            "name": "Ford Fulkerson",
            "subslug": "graph-theory/flow/ford-fulkerson",
            "order": 0
        }
    ],
    "graph-theory/forms": [
        {
            "name": "Undirected",
            "subslug": "graph-theory/forms/undirected",
            "order": 0
        },
        {
            "name": "Directed",
            "subslug": "graph-theory/forms/directed",
            "order": 1
        }
    ],
    "graph-theory/min-max-spanning-tree": [
        {
            "name": "Kruskal's",
            "subslug": "graph-theory/min-max-spanning-tree/kruskals",
            "order": 0
        },
        {
            "name": "Prim's",
            "subslug": "graph-theory/min-max-spanning-tree/prims",
            "order": 1
        }
    ],
    "graph-theory/shortest-path": [
        {
            "name": "Dijkstra's",
            "subslug": "graph-theory/shortest-path/dijkstras",
            "order": 0
        },
        {
            "name": "Bellman Ford",
            "subslug": "graph-theory/shortest-path/bellman-ford",
            "order": 1
        },
        {
            "name": "Floyd Warshall",
            "subslug": "graph-theory/shortest-path/floyd-warshall",
            "order": 2
        }
    ],
    "graph-theory/traversal": [
        {
            "name": "DFS",
            "subslug": "graph-theory/traversal/dfs",
            "order": 0
        },
        {
            "name": "BFS",
            "subslug": "graph-theory/traversal/bfs",
            "order": 1
        }
    ],
    "querying/structures": [
        {
            "name": "Sparse Table",
            "subslug": "querying/structures/sparse-table",
            "order": 0
        },
        {
            "name": "Segment Tree",
            "subslug": "querying/structures/segment-tree",
            "order": 1
        },
        {
            "name": "Fenwick Tree",
            "subslug": "querying/structures/fenwick-tree",
            "order": 2
        }
    ],
    "trees/decompositions": [
        {
            "name": "Heavy-Light Decomposition",
            "subslug": "trees/decompositions/heavy-light",
            "order": 0
        }
    ],
    "trees/traversal": [
        {
            "name": "Preorder",
            "subslug": "trees/traversal/preorder",
            "order": 0
        },
        {
            "name": "Inorder",
            "subslug": "trees/traversal/inorder",
            "order": 1
        },
        {
            "name": "Postorder",
            "subslug": "trees/traversal/postorder",
            "order": 2
        }
    ]
};
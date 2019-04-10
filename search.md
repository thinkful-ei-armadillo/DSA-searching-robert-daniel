# Searching Algorithms
http://thinkful.slides.com/thinkful/search-traversal#/19

* Learn one of the fundamental algorithms in computing: searching
* Understand linear search
* Understand how to implement linear search
* Learn the run time complexity of linear search
* Understand how binary search works on sorted data
* Understand the implementation and run time complexity of Binary search
* Understand tree traversal algorithms

## Some thoughts on searching

* What can we assume about our data?
* In what order will we be accessing it?
* Is there any order to the data already?
* These questions help us determine how we can search.

## Linear Search

* Your most basic search technique, where you know nothing about the data
* Start at the first element
* Iterate through each element on the list until:
* You either find the element - it's there!
* You reach the end of the list - it's not there!
* Every element in the data structure could be visited - O(n)

````js
[Tauhida,	Joe,	Chris,	John,	Jane]
function indexOf(array, value) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};

// In the best case O(1)
// Worst case is O(n)
// Average case is O(n)
````

## Binary Search

* Search through a sorted list
* Cuts down the range of data to search by half each iteration
* Use recursion to implement the search
* It performs better than linear search, but your data needs to be sorted to start with
  * It's not worth sorting data just so you can perform a binary search

[3,	12,	17,	**19**,	26,	38,	45,	62,	69,	83]

* We want to search for 19 in the array. Let's call it target
* The target is compared to the middle element of the array
* 19 < 26 - We can eliminate the right-hand side of the array
* 19 > 12 - We can eliminate the left-hand side of the array
* 19 > 17 - We can eliminate the left-hand side of the array
* 19 == 19 - We have found our element

## Binary vs linear search

* linear will always go straight through each item until it finds the target.
* binary halves the array until it finds the target (based on greater/less than-ness)

## Binary Search example

````js
function binarySearch(array, value, start=0, end=array.length-1) {
    if (start > end) return -1;
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    let item = array[index];
    
    //if the middle element is the target them return that location
    if (item === value) {
        return index;
    }
    //if the middle element is less than the target then the target lies 
    //on the right side so eliminate all left side and only 
    //consider after the middle to the end of the array
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    //if the middle element is greater than the target then the 
    //target is on the left side so the left of the middle 
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

// Best Case: O(1), Worst Case (and Average): O(log(n))
````

## Tree traversal and searching

* Depth first search (DFS) - descendants first
  * Three variants - pre-order, in-order and post-order
* Breadth first search (BFS) - siblings first
* Combinations of three actions
  * process node
  * step right
  * step left

## Depth First Search: Pre-order

* Process node
* Recursively step left
* Recursively step right

````js
dsfPreOrder(){
    // Pre-order
    console.log(this.key);
    if (this.left) {
        this.left.dsfPreOrder();
    }
    if (this.right) {
        this.right.dsfPreOrder();
    }
}
````

**Use-cases:**
* Organizational Charts
* Directory Structures
* HTML, XML, JSON

## DFS: In-order

* Recursively step left
* Process node
* Recursively step right

````js
dsfInOrder(){
    if (this.left) {
        this.left.dsfInOrder();
    }
    console.log(this.key);
    if (this.right) {
        this.right.dsfInOrder();
    }
}
````

**Use-cases:**
* Output BST in-order

## DFS: Post-Order

* Recursively step left
* Recursively step right
* Process node


````js
dsfPostOrder() {
    if (this.left) {
        this.left.dsfPostOrder();
    }
    if (this.right) {
        this.right.dsfPostOrder();
    }
    console.log(this.key);
}
````
**Use-cases:**
* Calculation relationships
* Language Processors


## Breadth First Search

* process node
* step left
* step right

**Use-cases**
* FIFO Queue

````js
function bfs(values) {
    values = values || [];
    const queue = [this];

    while (queue.length) {
        var node = queue.shift();
        values.push(node.value);

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return values;
};
````

## Today

* Work from the repo
* Implement a binary tree and its insertion, then implement in, pre, and post order traversals
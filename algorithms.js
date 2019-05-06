// File of all the different algorithms for CS260

// Quicksort
// Randomised
// Median
// Arbitrary
// Mergesort
// Bubble Sort
// Radix Sort
// Counting Sort

// Binary Search
// Linear Search

// DFS
// BFS
// Djikstras SSSP

function bubblesort(list) {
    for (let i = 0; i < list.length; i++) {
        let current = list[i];
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                let tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
            }
        }
    }
    return list;
}
//console.log(bubblesort([2, 3, 7, 2, 4, 9, 4, 6, 2, 9, 0, 0, 1]));

// function Quicksort(list) {

// }

// function Mergesort(list) {

// }

// function binarySearch(list, searchItem) {

// }

function linearSearch(list, searchItem) {
    list.forEach(i => {
        if (searchItem == list[i]) return "Found " + i;
    });
    for
};

console.log(linearSearch([2, 3, 7, 2, 4, 9, 4, 6, 2, 9, 0, 0, 1], 4));

// Insertion sort
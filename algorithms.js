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
    // console.log("===Bubble Sort===");
    //This is a loop for each pass in the sort
    for (let i = 0; i < list.length; i++) {
        // console.log("Pass " + i);
        let current = list[i];
        for (let j = 0; j < list.length - 1; j++) {
            // console.log("Compare " +list[j]+ " with " + list[j + 1]);
            if (list[j] > list[j + 1]) {
                let tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
            }
        }
        // console.log(list);
    }
    // console.log("=========")
    return list;
}
bubblesort([2, 3, 7, 2, 4, 9, 4, 6, 2, 9, 0, 0, 1]);

const quickSort = (unsortedArray, comparator = defaultComparator) => {
    // Create a sortable array to return.
    const sortedArray = [...unsortedArray];

    // Recursively sort sub-arrays.
    const recursiveSort = (start, end) => {
        // If this sub-array is empty, it's sorted.
        if (end - start < 1) {
            return;
        }

        const pivotValue = sortedArray[end];
        let splitIndex = start;
        for (let i = start; i < end; i++) {
            const sort = comparator(sortedArray[i], pivotValue);

            // This value is less than the pivot value.
            if (sort === -1) {
                // If the element just to the right of the split index,
                //   isn't this element, swap them.
                if (splitIndex !== i) {
                    const temp = sortedArray[splitIndex];
                    sortedArray[splitIndex] = sortedArray[i];
                    sortedArray[i] = temp;
                }

                // Move the split index to the right by one,
                //   denoting an increase in the less-than sub-array size.
                splitIndex++;
            }

            // Leave values that are greater than or equal to
            //   the pivot value where they are.
        }

        // Move the pivot value to between the split.
        sortedArray[end] = sortedArray[splitIndex];
        sortedArray[splitIndex] = pivotValue;

        // Recursively sort the less-than and greater-than arrays.
        recursiveSort(start, splitIndex - 1);
        recursiveSort(splitIndex + 1, end);
    };

    // Sort the entire array.
    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
};

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(mergeSort(left), mergeSort(right));
}
// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

function binarySearch(list, searchItem) {
    const midpointIndex = Math.ceil(list.length / 2);
    const midpoint = list[midpointIndex];
    if (searchItem < midpoint) {
        binarySearch(list.slice(0, midpointIndex - 1), searchItem);
    } else if (searchItem > midpoint) {
        binarySearch(list.slice(midpointIndex + 1), searchItem);
    } else {
        return true;
    }
    return false;
}

console.log(binarySearch(bubblesort([2, 3, 7, 2, 9, 6, 2, 9, 0, 0, 1]), 6));

function linearSearch(list, searchItem) {
    console.log("===Linear Search===");
    for (let i = 0; i < list.length; i++) {
        const curr = list[i];
        if (searchItem == curr) {
            return "Found " + searchItem;
        }
    }
}

// console.log(binarySearch(bubblesort([2, 3, 7, 2, 4, 9, 4, 6, 2, 9, 0, 0, 1]), 4));

// Insertion sort

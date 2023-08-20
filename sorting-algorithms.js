function orderUsingBubbleSort(array, ascending = true) {
	if (array === undefined || array === null || array.length <= 1)
		return;

	let thereWereSwap = false;

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j + 1 < array.length; j++) {
			if (
                (ascending && array[j] > array[j + 1]) ||
                (!ascending && array[j] < array[j + 1])
            ) {
				swap(array, j, j + 1);
				thereWereSwap = true;
			}
		}

		if (!thereWereSwap)
			return;

		thereWereSwap = false;
	}
}

function orderUsingSelectionSort(array, ascending = true) {
    let startIndex = 0;

    while (startIndex < array.length) {
        for (let i = startIndex; i < array.length; i++) {
            let index = ascending
                ? getMinValueIndex(array, startIndex, array.length - 1)
                : getMaxValueIndex(array, startIndex, array.length - 1);
            swap(array, startIndex, index);
        }

        startIndex++;
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function getMaxValueIndex(array, startIndex, endIndex) {
    let maxValueIndex = null;
    for (let i = startIndex; i <= endIndex; i++) {
        if (maxValueIndex === null || array[i] > array[maxValueIndex]) {
            maxValueIndex = i;
        }
    }

    return maxValueIndex;
}

function getMinValueIndex(array, startIndex, endIndex) {
    let minValueIndex = null;
    for (let i = startIndex; i <= endIndex; i++) {
        if (minValueIndex === null || array[i] < array[minValueIndex]) {
            minValueIndex = i;
        }
    }

    return minValueIndex;
}

let myArray = [5, 1, 4, 7, 9, 8];
//orderUsingBubbleSort(myArray, false);
//orderUsingSelectionSort(myArray, false);
console.log(myArray);

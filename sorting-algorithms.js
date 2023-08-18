function bubbleSort(array, ascending = true) {
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
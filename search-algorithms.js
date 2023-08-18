
function findElementUsingLinearSearch(array, searchedElement) {
    const ELEMENT_NOT_FOUND = -1;

    if (array === undefined || array === null || array.length === 0)
        return ELEMENT_NOT_FOUND;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchedElement)
            return i;
    }

    return ELEMENT_NOT_FOUND;
}

function findElementUsingOrderedLinearSearch(array, searchedElement) {
	const ELEMENT_NOT_FOUND = -1;

    if (array === undefined || array === null || array.length === 0)
        return ELEMENT_NOT_FOUND;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchedElement)
            return i;
		
		if (array[i] > searchedElement)
			return;
    }

    return ELEMENT_NOT_FOUND;
}

function findElementUsingBinarySearch(array, searchedElement) {
    const ELEMENT_NOT_FOUND = -1;

    if (array === undefined || array === null || array.length === 0)
        return ELEMENT_NOT_FOUND;

    let startIndex = 0;
    let endIndex = array.length - 1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    while (endIndex >= startIndex) {
        if (searchedElement === array[middleIndex])
            return middleIndex;
        else if (searchedElement < array[middleIndex])
            endIndex = middleIndex - 1;
        else startIndex = middleIndex + 1;

        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    return ELEMENT_NOT_FOUND;
}

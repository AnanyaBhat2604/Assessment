let arr = [1, 2, [3, 4, [5]]];

const flatten = (nestedArray) => {
    const flatArray = [];
    const handleFlat = (array) => {
        let counter = 0
        while (counter < array.length) {
            const val = array[counter];
            if (Array.isArray(val)) {
                handleFlat(val);
            } else {
                flatArray.push(val)
            }
            counter++;
        }
    }
    handleFlat(nestedArray);
    return flatArray;
}
console.log(flatten(arr));
let inputArray = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];

const sortByMaxFrequency = (array) => {
    let countMap = new Map();
    let indexMap = new Map();
    for(let i = 0; i<inputArray.length; i++){
        if(countMap.has(inputArray[i])){
            countMap.set(inputArray[i], countMap.get(inputArray[i]) + 1);
        }
        else{
            countMap.set(inputArray[i], 1);
            indexMap.set(inputArray[i], i);
        }
    }
    let sortByIndex = (n1, n2) => {
        let firstFrequency = countMap.get(n1);
        let secondFrequency = countMap.get(n2);
        if(firstFrequency != secondFrequency) {
            return countMap.get(n2) - countMap.get(n1);
        }
        else{
            return indexMap.get(n1) - indexMap.get(n2);
        }
    }

    array.sort(sortByIndex);
    console.log(array);
}

sortByMaxFrequency(inputArray);
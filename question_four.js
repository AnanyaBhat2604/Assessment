class Stack {
    constructor() {
        this.items = [];
    }

    top() {
        return this.items[this.items.length - 1];
    }

    add(element) {
        return this.items.push(element);
    }

    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(7);
console.log(stack.items);

stack.remove();
this.items = [5];
console.log(stack.items);

console.log(stack.top());

console.log(stack.isEmpty());

console.log(stack.size());

const removeOdd = (myArray) => {
    for (let j = 0; j < stack.size(); j++) {
        if (myArray[j] % 2 === 1) {
            myArray.splice(j, 1)
            break;
        };
    };
    return myArray;
}
resultArray = removeOdd(stack.items)
console.log(resultArray);

const duplicateStack = (myStack) => {
    let duplicate = new Stack();
    for (let i = 0; i < stack.size(); i++) {
        duplicate.add(myStack[i]);
    }
    return duplicate;
}
resultArray = duplicateStack(stack.items)
console.log(resultArray);
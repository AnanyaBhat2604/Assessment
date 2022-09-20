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
stack.add(3);
stack.add(2);
stack.add(4);
stack.add(7);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.top());

console.log(stack.isEmpty());

console.log(stack.size());

const removeOdd = (myStack) => {
    let evenStack = [];
    for (let j = 0; j < stack.size(); j++) {
        if (myStack[j] % 2 === 0) {
            evenStack.push(myStack[j]);
        };
    };
    return evenStack;
}
resultStack = removeOdd(stack.items)
console.log(resultStack);

const duplicateStack = (myStack) => {
    let duplicate = new Stack();
    for (let i = 0; i < stack.size(); i++) {
        duplicate.add(myStack[i]);
    }
    return duplicate;
}
resultStack = duplicateStack(stack.items)
console.log(resultStack);
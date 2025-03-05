class Group {
    list;

    static from(arr) {
        const group = new Group(arr);
        for (const element of arr) {
            group.add(element);
        }
        return group;
    }

    constructor() {
        this.list = [];
    }

    add(el) {
        if (this.list.indexOf(el) === -1) {
            this.list.push(el);
        }
    }

    delete(el) {
        this.list.splice(this.list.indexOf(el), 1);
    }

    has(el) {
        return this.list.indexOf(el) !== -1;
    }

    get length() {
        return this.list.length;
    }
}

class GroupIterator {
    iterIndex = 0;

    constructor(list) {
        this.list = list;
    }

    next() {
        if (this.list === null) {
            return {done: true};
        }

        if (this.iterIndex >= this.list.length) {
            return {done: true};
        }

        const val = this.list.list[this.iterIndex];
        this.iterIndex++;
        return {done: false, value: val};
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// false

let list = Group.from([1, 2, 3]);
for (let element of list) {
    console.log(element);
}
// → 1
// → 2
// → 3
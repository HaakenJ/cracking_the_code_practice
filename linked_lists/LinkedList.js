class LinkedList {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = {
    LinkedList: LinkedList,
    Node: Node
}
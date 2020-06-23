class LinkedList {
    constructor() {
        this.head = null;
    }

    printList = () => {
        let n = this.head;
        while (n.next !== null) {
            console.log(n.data);
            n = n.next;
        }
        console.log(n.data);
    }

    toArray = () => {
        let n = this.head;
        let result = [];
        while (n.next !== null) {
            result.push(n.data);
            n = n.next;
        }
        result.push(n.data);
        return result;
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

// const ll = new LinkedList;
// const first = new Node(1);
// const second = new Node(2);
// const third = new Node(2);
// const fourth = new Node(3);
// const fifth = new Node (4);
// const sixth = new Node(4);

// ll.head = first;
// first.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;
// fifth.next = sixth;

// ll.printList();
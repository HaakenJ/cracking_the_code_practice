const { LinkedList, Node } = require('./LinkedList');

deleteMiddleNode = (node) => {
    let prev = null;
    while (node.next !== null) {
        node.data = node.next.data;
        prev = node;
        node = node.next;
    }
    prev.next = null;
}

module.exports = deleteMiddleNode;

const ll = new LinkedList;
const first = new Node('a');
const second = new Node('b');
const third = new Node('c');
const fourth = new Node('d');
const fifth = new Node ('e');
const sixth = new Node('f');

ll.head = first;
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;

deleteMiddleNode(fifth);

LinkedList.printList(ll.head);
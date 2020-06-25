const { LinkedList, Node } = require('./LinkedList');

const swap = (first, second) => {
    const temp = first.data;
    first.data = second.data;
    second.data = temp;
}

const partitionList = (val, head) => {
    let partition = head;
    let n = head;
    while (n !== null) {
        if (n.data < val) {
            swap(partition, n);
            partition = partition.next;
       }
       n = n.next;
    }
    return head;
}

module.exports = partitionList;

// const ll = new LinkedList;
// const first = new Node(1);
// const second = new Node(6);
// const third = new Node(9);
// const fourth = new Node(10);
// const fifth = new Node (2);
// const sixth = new Node(3);

// ll.head = first;
// first.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;
// fifth.next = sixth;

// const result = partitionList(5, ll.head);

// LinkedList.printList(result);
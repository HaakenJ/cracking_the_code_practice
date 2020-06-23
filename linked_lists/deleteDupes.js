const { LinkedList, Node } = require('./LinkedList');

// deleteDupes = (head) => {
//     let n = head;
//     const hashMap = {};
//     while (n.next !== null) {
//         hashMap[n.data] >= 0 ? hashMap[n.data]++ : hashMap[n.data] = 1;
//         n = n.next;
//     }
//     hashMap[n.data] >= 0 ? hashMap[n.data]++ : hashMap[n.data] = 1;
//     n = head;
//     while (n.next !== null) {
//         if (hashMap[n.next.data] > 1) {
//             hashMap[n.next.data]--;
//             n.next = n.next.next;
//         }
//         n = n.next;
//     }
//     return head;
// }

deleteDupes = (head) => {
    let n = head;
    const hashMap = {};
    let previous = null;
    while (n !== null) {
        if (hashMap[n.data]) {
            previous.next = n.next;
        } else {
            hashMap[n.data] = true;
            previous = n;
        }
        n = n.next;
    }
    return head;
}

module.exports = deleteDupes;

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

// const result = deleteDupes(ll.head);

// LinkedList.printList(result);
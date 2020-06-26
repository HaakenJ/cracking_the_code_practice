const { LinkedList, Node } = require('./LinkedList');

const sumLists = (h1, h2) => {
    if (h2 === null) return h1;
    if (h1 === null) return h2;
    let rem = 0;
    let head = null;
    let n = null;
    while (h1 !== null && h2 !== null) {
        if (head === null) {
            n = new Node(0);
            head = n;
        } else {
            n.next = new Node(0);
            n = n.next;
        }

        let sum = h1.data + h2.data + rem;
        if (sum >= 10) {
            rem = 1;
            n.data = sum % 10;
        } else {
            rem = 0;
            n.data = sum;
        }
        h1 = h1.next;
        h2 = h2.next;
    }

    while (h1 !== null) {
        n.next = new Node(h1.data + rem);
        n = n.next;
        h1 = h1.next;
        rem = 0;
    }
    while (h2 !== null) {
        n.next = new Node(h2.data + rem);
        n = n.next;
        h2 = h2.next;
        rem = 0;
    }

    if (rem > 0) {
        n.next = new Node(rem);
    }

    return head;
}

module.exports = sumLists;

// const head1 = new Node(8);
// head1.next = new Node(9);
// head1.next.next = new Node(2);

// const head2 = new Node(1);
// head2.next = new Node(2);
// head2.next.next = new Node(3);

// LinkedList.printList(sumLists(head1, head2));
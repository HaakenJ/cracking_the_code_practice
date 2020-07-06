const { LinkedList, Node } = require('./LinkedList');

const findIntersection = (head1, head2) => {
    const map = new Map();

    while(head1 !== null) {
        map.set(head1, true);
        head1 = head1.next;
    }

    while(head2 !== null) {
        if (map.has(head2)) return head2;
        head2 = head2.next;
    }

    return false;
}

module.exports = findIntersection;
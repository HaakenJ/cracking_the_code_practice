const { LinkedList, Node } = require('./LinkedList');
const chai = require('chai');
const expect = chai.expect;

const deleteDupes = require('./deleteDupes');
const deleteMiddleNode = require('./deleteMiddleNode');



describe('Linked List Methods', () => {
    it('Should return an array of the linked list contents', () => {
        const ll = new LinkedList;
        const first = new Node(1);
        const second = new Node(2);
        const third = new Node(2);
        const fourth = new Node(3);
        const fifth = new Node (4);
        const sixth = new Node(4);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        expect(LinkedList.toArray(ll.head)).to.deep.equal([1,2,2,3,4,4]);
    })
})

describe('Delete Duplicates', () => {
    it('Should remove duplicates from the linked list', () => {
        const ll = new LinkedList;
        const first = new Node(1);
        const second = new Node(2);
        const third = new Node(2);
        const fourth = new Node(3);
        const fifth = new Node (4);
        const sixth = new Node(4);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        const result = deleteDupes(ll.head);
        expect(LinkedList.toArray(result)).to.deep.equal([1,2,3,4]);
    })

    it('Should not change the list', () => {
        const ll = new LinkedList;
        const first = new Node(1);
        const second = new Node(2);
        const third = new Node(3);
        const fourth = new Node (4);
        const fifth = new Node(5);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;

        const result = deleteDupes(ll.head);
        expect(LinkedList.toArray(result)).to.deep.equal([1,2,3,4,5]);
    })
})

describe('Delete Middle Node', () => {
    it('Should remove any middle node', () => {
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

        deleteMiddleNode(second);

        expect(LinkedList.toArray(ll.head)).to.deep.equal(['a','c','d','e','f']);

        deleteMiddleNode(fourth);

        expect(LinkedList.toArray(ll.head)).to.deep.equal(['a','c','d','f']);

        deleteMiddleNode(third);

        expect(LinkedList.toArray(ll.head)).to.deep.equal(['a','c','f']);
    })
})
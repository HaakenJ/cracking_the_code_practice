const { LinkedList, Node } = require('./LinkedList');
const chai = require('chai');
const expect = chai.expect;

const deleteDupes = require('./deleteDupes');

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

describe('Linked List Methods', () => {
    it('Should return an array of the linked list contents', () => {
        expect(LinkedList.toArray(ll.head)).to.deep.equal([1,2,2,3,4,4]);
    })
})

describe('Delete Duplicates', () => {
    it('Should remove duplicates from the linked list', () => {
        const result = deleteDupes(ll.head);
        expect(LinkedList.toArray(result)).to.deep.equal([1,2,3,4]);
    })
})
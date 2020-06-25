const { LinkedList, Node } = require('./LinkedList');
const chai = require('chai');
const expect = chai.expect;

const deleteDupes = require('./deleteDupes');
<<<<<<< HEAD
const partitionList = require('./partitionList');
=======
const deleteMiddleNode = require('./deleteMiddleNode');
>>>>>>> 44d24759da253472301bcfba0d07c26b9a128a1c



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

<<<<<<< HEAD
describe('Patition Linked List', () => {
    it('Should correctly partition a list', () => {
        let ll = new LinkedList;
        let first = new Node(1);
        let second = new Node(6);
        let third = new Node(9);
        let fourth = new Node(10);
        let fifth = new Node (2);
        let sixth = new Node(3);
=======
describe('Delete Middle Node', () => {
    it('Should remove any middle node', () => {
        const ll = new LinkedList;
        const first = new Node('a');
        const second = new Node('b');
        const third = new Node('c');
        const fourth = new Node('d');
        const fifth = new Node ('e');
        const sixth = new Node('f');
>>>>>>> 44d24759da253472301bcfba0d07c26b9a128a1c

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        let result = partitionList(5, ll.head);

        expect(LinkedList.toArray(result)).to.deep.equal([1,2,3,10,6,9]);

        ll = new LinkedList;
        first = new Node(12);
        second = new Node(2);
        third = new Node(7);
        fourth = new Node(99);
        fifth = new Node (-1);
        sixth = new Node(-5);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        result = partitionList(10, ll.head);

        expect(LinkedList.toArray(result)).to.deep.equal([2,7,-1,-5,12,99]);

        ll = new LinkedList;
        first = new Node(1);
        second = new Node(2);
        third = new Node(3);
        fourth = new Node(-1);
        fifth = new Node (-2);
        sixth = new Node(-3);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        result = partitionList(0, ll.head);

        expect(LinkedList.toArray(result)).to.deep.equal([-1,-2,-3,1,2,3]);
    })

    it('Should not change the list', () => {
        let ll = new LinkedList;
        let first = new Node(1);
        let second = new Node(2);
        let third = new Node(3);
        let fourth = new Node(5);
        let fifth = new Node (6);
        let sixth = new Node(7);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        let result = partitionList(4, ll.head);

        expect(LinkedList.toArray(result)).to.deep.equal([1,2,3,5,6,7]);

        ll = new LinkedList;
        first = new Node(1);
        second = new Node(2);
        third = new Node(3);
        fourth = new Node(5);
        fifth = new Node (6);
        sixth = new Node(7);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        result = partitionList(0, ll.head);

        expect(LinkedList.toArray(result)).to.deep.equal([1,2,3,5,6,7]);

        ll = new LinkedList;
        first = new Node(1);
        second = new Node(2);
        third = new Node(3);
        fourth = new Node(5);
        fifth = new Node (6);
        sixth = new Node(7);

        ll.head = first;
        first.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = fifth;
        fifth.next = sixth;

        result = partitionList(7, ll.head);

        expect(LinkedList.toArray(result)).to.deep.equal([1,2,3,5,6,7]);
        deleteMiddleNode(second);

        expect(LinkedList.toArray(ll.head)).to.deep.equal(['a','c','d','e','f']);

        deleteMiddleNode(fourth);

        expect(LinkedList.toArray(ll.head)).to.deep.equal(['a','c','d','f']);

        deleteMiddleNode(third);

        expect(LinkedList.toArray(ll.head)).to.deep.equal(['a','c','f']);
    })
})
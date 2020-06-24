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

import java.util.*;

public class LinkedList {
    Node head;
    Node last;

    static class Node {
        int data;
        Node next;

        Node(int d) { 
            data = d;
            next = null;
        }
    }

    public void insert(int data)
    {
        // Create a new node given the data.
        Node newNode = new Node(data);
        newNode.next = null;

        // If the list is empty then set head and last as the new node.
        if (this.head == null) {
            this.head = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    public static void deleteMiddleNode(Node node)
    {
        node.data = node.next.data;
        node.next = node.next.next;
    }

    public static void deleteDupes(LinkedList list)
    {
        Node n = list.head;
        Map hashMap = new HashMap();
        Node prev = null;
        while (n != null) {
            if (hashMap.containsKey(n.data)) {
                prev.next = n.next;
            } else {
                hashMap.put(n.data, true);
                prev = n;
            }
            n = n.next;
        }
    }

    public static void printList(LinkedList list)
    {
        Node currNode = list.head;

        while (currNode != null) {
            System.out.print(currNode.data + " -> ");
            currNode = currNode.next;
        }
        System.out.print("\n");
    }

    public static void main(String args[])
    {
        LinkedList list = new LinkedList();

        list.insert(1); 
        list.insert(2); 
        list.insert(4); 
        list.insert(4); 
        list.insert(6); 
        list.insert(6); 
        list.insert(7); 
        list.insert(8);

        printList(list);

        deleteDupes(list);

        printList(list);
    }
}
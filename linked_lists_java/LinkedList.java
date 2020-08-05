import java.util.*;

public class LinkedList {
    Node head;
    Node tail;

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

        // If the list is empty then set head and tail as the new node.
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
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
        HashSet<Integer> set = new HashSet<Integer>();
        Node prev = null;
        while (n != null) {
            if (set.contains(n.data)) {
                prev.next = n.next;
            } else {
                set.add(n.data);
                prev = n;
            }
            n = n.next;
        }
    }

    public static Node findIntersection(LinkedList list1, LinkedList list2)
    {
        if (list1.tail != list2.tail) return null;

        int diff = Math.abs(list1.length() - list2.length());

        Node head1 = list1.head;
        Node head2 = list2.head;

        if (list1.length() > list2.length()) {
            for (int i = 0; i < diff; i++) {
                head1 = head1.next;
            }
        } else {
            for (int i = 0; i < diff; i++) {
                head2 = head2.next;
            }
        }

        while (head1 != head2) {
            head1 = head1.next;
            head2 = head2.next;
        }

        return head1;
    }

    public int length()
    {
        int len = 0;
        Node head = this.head;

        while (head != null) {
            head = head.next;
            len++;
        }
        return len;
    }

    public static void printList(Node head)
    {
        Node currNode = head;

        while (currNode != null) {
            System.out.print(currNode.data + " -> ");
            currNode = currNode.next;
        }
        System.out.print("\n");
    }

    public static void main(String args[])
    {
        LinkedList list = new LinkedList();

        Node one = new Node(3);
        Node two = new Node(3);
        Node three = new Node(3);
        Node four = new Node(4);
        Node five = new Node(5);
        Node six = new Node(6);

        list.head = one;
        one.next = two;
        two.next = three;
        three.next = four;
        four.next = five;
        five.next = six;


        LinkedList list2 = new LinkedList();

        Node la = new Node(1); 
        Node lala = new Node(2); 
        Node lalala = new Node(3);

        list2.head = la;
        la.next = lalala;
        lalala.next = three;

        printList(findIntersection(list, list2));

    }
}
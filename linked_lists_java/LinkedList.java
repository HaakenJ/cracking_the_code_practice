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

    public static Node findIntersection(Node head1, Node head2)
    {
        HashSet<Node> set = new HashSet<Node>();

        while (head1 != null) {
            set.add(head1);
            head1 = head1.next;
        }

        while (head2 != null) {
            if (set.contains(head2)) return head2;
            head2 = head2.next;
        }

        return null;
    }

    public static int getLength(Node head)
    {
        int len = 0;

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
        la.next = lala;
        lala.next = lalala;
        lalala.next = three;

        // printList(findIntersection(list.head, list2.head));

        System.out.println(getLength(list.head));
    }
}
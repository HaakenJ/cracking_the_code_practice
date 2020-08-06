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

        Node() {
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

    public static void swapNodes(Node n1, Node n2)
    {
        int temp = n1.data;
        n1.data = n2.data;
        n2.data = temp;
    }

    public static void partitionList(LinkedList list, int partition)
    {
        Node head = list.head;
        Node lower = list.head;
        
        while (head != null) {
            if (head.data < partition) {
                swapNodes(head, lower);
                head = head.next;
                lower = lower.next;
            } else {
                head = head.next;
            }
        }
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
            System.out.print(currNode.data);
            if (currNode.next != null) System.out.print(" -> ");
            currNode = currNode.next;
        }
        System.out.print("\n");
    }

    static Node addLists(Node l1, Node l2) {
        return addLists(l1, l2, 0);
    }

    static Node addLists(Node l1, Node l2, int rem) {
        if (l1 == null && l2 == null && rem == 0) {
            return null;
        }

        Node result = new Node();

        int value = rem;
        if (l1 != null) {
            value += l1.data;
        }
        if (l2 != null) {
            value += l2.data;
        }

        result.data = value % 10;

        if (l1 != null || l2 != null) {
            Node more = addLists(l1 == null ? null : l1.next,
                                 l2 == null ? null : l2.next,
                                 value >= 10 ? 1 : 0);
            
            result.next = more;
        }
        return result;
    }

    public static void main(String args[])
    {

        Node one = new Node(7);
        Node two = new Node(1);
        Node three = new Node(6);

        Node four = new Node(5);
        Node five = new Node(9);
        Node six = new Node(2);

        one.next = two;
        two.next = three;

        four.next = five;
        five.next = six;

        printList(addLists(one, four));
    }
}
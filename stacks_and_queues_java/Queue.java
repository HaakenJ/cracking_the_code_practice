import java.util.*;
import java.io.*;

public class Queue<Item> implements Iterable<Item>
{
	private Node first; // link to least recently added node
	private Node last;  // link to most recently added node
	private int N;      // number of items on the queue
	
	private class Node 
	{   // nested class to define nodes
		Item item;
		Node next;
	}
	
	public boolean isEmpty() { return N == 0; }
	public int size() 		 { return N; }
	
	public void enqueue(Item item) 
	{   // Add item to the end of the list.
		Node oldLast = last;
		last = new Node();
		last.item = item;
		last.next = null;
		if (isEmpty()) first = last;
		else 		   oldLast.next = last;
		N++;
	}
	
	public Item dequeue() 
	{   // Remove least recently item from list and return.
		Item item = first.item;
		first = first.next;
		if (isEmpty()) last = null;
		N--;
		return item;
	}

	public Iterator<Item> iterator()
	{ return new ListIterator(); }
	
	private class ListIterator implements Iterator<Item>
	{
		private Node current = first;
		
		public boolean hasNext()
		{ return current != null; }
		public void remove() { }
		public Item next()
		{
			Item item = current.item;
			current = current.next;
			return item;
		}
	}
	
	public static void main(String args[])
	{   // Create a queue and enqueue / dequeue strings.
        Queue<String> q = new Queue<String>();
        
        Scanner scanner = new Scanner(System.in);
		String item = null;
		while ((!(item = scanner.nextLine()).isEmpty()))
		{
			item = scanner.nextLine();
			if (!item.equals("-"))
				q.enqueue(item);
			else if (!q.isEmpty()) System.out.println(q.dequeue() + " ");
		}
		System.out.println("(" + q.size() + " left on queue.)");
		scanner.close();
	}
}

import java.util.*;

class Constructors {
    Constructors() {
        System.out.println("This is the default constructor");
    }

    Constructors(String s) {
        System.out.println("This is not the default constructor: " + s);
    }

    public static void main(String[] args) {
        Constructors con = new Constructors();
        Constructors con1 = new Constructors("Yoo hoo!");
    }
}
import java.util.*;

class StringPrac {
    String s = "yo";

    public static void main(String args[]) {
        StringPrac str = new StringPrac();
    
        System.out.println(str.s);

        StringPrac2 str2 = new StringPrac2("yoyo");

        System.out.print(str2.s);
    }
}

class StringPrac2 {
    String s;

    StringPrac2(String str) {
        this.s = str;
    }
}


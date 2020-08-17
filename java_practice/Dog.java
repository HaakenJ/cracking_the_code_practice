class Dog {
    static String s = "Woof wooof";
    static int i;

    static {
        i = 2;
    }

    static void bark() {
        System.out.println(s);
        System.out.println(i);
    }

    public static void main(String[] args) {
        bark();
    }
}
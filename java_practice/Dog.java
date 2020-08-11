class Dog {
    String s = "initial";
    int i = 0;

    Dog(String s) {
        this.s = s;
        System.out.println("String const");
    }

    Dog(int i) {
        this.i = i;
        System.out.println("int const");
    }

    void bark() {
        System.out.println("Bark Bark");
    }

    Dog() {
        this("New string");
        i = 5;
        System.out.println("s is now: " + s);
        System.out.println("i is now: " + i);
    }

    protected void finalize() {
        System.out.println("Dog has been finalized");
    }

    public static void main(String[] args) {
        Dog rex = new Dog();

        rex.bark();
        System.out.println("Post bark");
        System.gc();
    }
}
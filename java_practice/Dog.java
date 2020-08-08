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

    Dog() {
        this("New string");
        i = 5;
        System.out.println("s is now: " + s);
        System.out.println("i is now: " + i);
    }

    public static void main(String[] args) {
        Dog rex = new Dog();
        
    }
}
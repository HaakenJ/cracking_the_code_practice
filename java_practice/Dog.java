class Dog {
    Dog(int i) {
        System.out.println("Woof");
    }

    Dog(float f) {
        System.out.println("Howwwwwwllll");
    }

    Dog(char c, double d) {
        System.out.println("Sniff Sniff");
    }

    Dog(double d, char c) {
        System.out.println("Yelp");
    }

    public static void main(String[] args) {
        Dog fido = new Dog(1);
        Dog rover = new Dog(2.0f);
        Dog rex = new Dog('r', 2.43d);
        Dog harry = new Dog(25.25d, 'r');
    }
}
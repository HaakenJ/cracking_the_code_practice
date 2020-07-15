public class isUnique {
    public static boolean isUniqueChars(String str) {
        if (str.length() > 128) return false;

        boolean[] char_set = new boolean[128];
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i);
            if (char_set[val]) return false; // Already found this char in str
            char_set[val] = true;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isUniqueChars("abcderfs"));
        System.out.println(isUniqueChars("abcderfa"));
        System.out.println(isUniqueChars("a"));
        System.out.println(isUniqueChars("aa"));
    }
}
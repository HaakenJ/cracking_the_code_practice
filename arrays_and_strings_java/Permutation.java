import java.util.Arrays;

public class Permutation {
    public static String sort(String s) {
        char[] content = s.toCharArray();
        java.util.Arrays.sort(content);
        return new String(content);
    }

    public static boolean permutation(String s, String t) {
        if (s.length() != t.length()) return false;
        return sort(s).equals(sort(t));
    }

    public static boolean permutationCharCount(String s, String t) {
        if (s.length() != t.length()) return false; // Strings must be same length

        int[] letters = new int[128]; // Assumption ASCII
        for (int i = 0; i < s.length(); i++) {
            letters[s.charAt(i)]++;
        }

        for (int i = 0; i < t.length(); i++) {
            letters[t.charAt(i)]--;
            if (letters[t.charAt(i)] < 0) return false; 
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(permutation("abc", "cba"));
        System.out.println(permutation("abcd", "dcab"));
        System.out.println(permutation("abfcd", "dscab"));
        System.out.println(permutation("abfcd", "dscab"));
        System.out.println(permutationCharCount("abcd", "dcab"));
        System.out.println(permutationCharCount("abcd", "dcab"));
        System.out.println(permutationCharCount("abcd", "dscab"));
        System.out.println(permutationCharCount("abfcd", "dscab"));
    }
}
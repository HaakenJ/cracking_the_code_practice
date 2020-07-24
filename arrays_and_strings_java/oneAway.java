public class oneAway {
    public static boolean needsOnereplacement(String s1, String s2) {
        boolean foundDiff = false;
        for (int i =0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                if (foundDiff) return false;
                foundDiff = true;
            }
        }
        return true;
    }

    public static boolean needsOneInsert(String s1, String s2) {
        int i = 0;
        int j = 0;
        while (j < s2.length() && i < s1.length()) {
            if (s1.charAt(i) != s2.charAt(j)) {
                if (i != j) return false;
                j++;
            } else {
                i++;
                j++;
            }
        }
        return true;
    }

    public static boolean isOneEditAway(String s1, String s2) {
        if (s1.length() == s2.length()) {
            return needsOnereplacement(s1, s2);
        } else if (s1.length() + 1 == s2.length()) {
            return needsOneInsert(s1, s2);
        } else if (s1.length() - 1 == s2.length()) {
            return needsOneInsert(s2, s1);
        }
        return false;
    }

    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "hellf";
        assert(isOneEditAway(s1, s2));
        s1 = "hello";
        s2 = "hell";
        assert(isOneEditAway(s1, s2));
        s1 = "hello";
        s2 = "hello";
        assert(isOneEditAway(s1, s2));
        s1 = "hemlo";
        s2 = "hello";
        assert(isOneEditAway(s1, s2));
        s1 = "aello";
        s2 = "hello";
        assert(isOneEditAway(s1, s2));

        s1 = "aallo";
        s2 = "hello";
        assert(!isOneEditAway(s1, s2));
        s1 = "llo";
        s2 = "hello";
        assert(!isOneEditAway(s1, s2));

        System.out.println("All tests passed");
    }
}
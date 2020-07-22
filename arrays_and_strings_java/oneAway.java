public class oneAway {
    boolean needsOnereplacement(String s1, String s2) {
        boolean foundDiff = false;
        for (int i =0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                if (foundDiff) return false;
                foundDiff = true;
            }
        }
        return true;
    }

    boolean needsOneInsert(String s1, String s2) {
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

    boolean isOneEditAway(String s1, String s2) {
        if (s1.length == s2.length) {
            return needsOnereplacement(s1, s2);
        } else if (s1.length() + 1 == s2.length()) {
            return needsOneInsert(s1, s2);
        } else if (s1.length() - 1 == s2.length()) {
            return needsOneInsert(s2, s1);
        }
        return false;
    }
}
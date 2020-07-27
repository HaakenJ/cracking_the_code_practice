import java.util.Arrays;

class checkPalindrome {
    public static boolean isPalindrome(String s) 
    {
        if (s.length() > 1) {
            int i, j;
            int len = s.length();

            for (i=0, j=len-1; i < len/2; i++, j--) {
                if (s.charAt(i) != s.charAt(j)) {
                    return false;
                }
            }
        }
        return true;
    }

    public static void main(String[] args)
    {
        assert(!isPalindrome("hello"));
        assert(!isPalindrome("lalalass"));
        assert(isPalindrome("helloh"));
        assert(isPalindrome(" ra ce ca r"));
        assert(isPalindrome("a"));
    }
}
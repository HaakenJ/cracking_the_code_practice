import java.util.Arrays;

class checkPalindrome {
    public static boolean isPalindrome(String s) 
    {
        if (s.length() > 1) {
            String sortedStr = s.toLowerCase();
            sortedStr = sortedStr.replaceAll("\\s+", "");
            Character[] charArray = new Character[sortedStr.length()];
            for (int i=0; i < sortedStr.length(); i++) {
                charArray[i] = sortedStr.charAt(i);
            }
            Arrays.sort(charArray);

            for (char c: charArray) {
                System.out.println(c);
            }
        }
        return true;
    }

    public static void main(String[] args)
    {
        isPalindrome("he l lo");
    }
}
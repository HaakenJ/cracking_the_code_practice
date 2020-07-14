public class Palindrome {
    public static boolean checkPalindrome(String str) {
        if (str.length() > 1) {
            String sortedStr = str.toLowerCase();
            sortedStr = sortedStr.replace(' ', '');

            int singles = 0;
            int occurs = 0;
            char currLetter = '';

            for (char s: sortedStr) {
                if (s.equals(currLetter)) occurs++;
                else if (occurs === 0) {
                    currLetter = s;
                    occurs++;
                }
                else {
                    if (occurs % 2 !== 0) singles++;
                    occurs = 1;
                    currLetter = s;
                }
                if (singles > 1) return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(checkPalindrome("helleh"));
    }
}
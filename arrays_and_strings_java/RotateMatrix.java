class RotateMatrix {
    public static int[][] rotate(int[][] matrix)
    {
        int[][] result = new int[matrix.length][matrix[0].length];
        
        for (int i = 0; i < matrix.length; i++) {
            result[i] = [];
        }

        int len = matrix.length - 1;
        for (int i = len, j = 0; i >= 0; i--, j++) {
            for (int k = 0; k <= len; k++) {
                result[k][i] = matrix[j][k];
            }
        }

        return result;
    }

    public static int[][] rotateInPlace(int[][] matrix)
    {
        if (matrix.length <= 1) return matrix;

        int n = matrix.length - 1;

        for (int first=0, last=n; first<last; first++, last--) {
            for (int offset = 0; first+offset < last; offset++) {
                int temp = matrix[first][first + offset];
                matrix[first][first + offset] = matrix[last - offset][first];
                matrix[last - offset][first] = matrix[last][last - offset];
                matrix[last][last - offset] = matrix[first + offset][last];
                matrix[first + offset][last] = temp;
            }
        }
        return matrix;
    }

    public static void printMatrix(int[][] matrix)
    {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j]);
            }
            System.out.print("\n");
        }
    }

    public static void main (String[] args)
    {
        int[][] matrix = {
            {1,2,3,4},
            {5,6,7,8},
            {9,10,11,12},
            {13,14,15,16}
        };

        printMatrix(rotate(matrix));
        printMatrix(rotateInPlace(matrix));
    }
}
import java.io.*;

public class fileStreamTest {
    
    public static void main(String args[]) {

        try {
            byte bWrite[] = {11,21,3,40,5};
            OutputStream os = new FileOutputStream("test.txt");
            for (int i = 0; i < bWrite.length; i++) {
                os.write( bWrite[i] );
            }
            os.close();

            InputStream is = new FileInputStream("test.txt");
            int size = is.available();

            for (int j = 0; j < size; j++) {
                System.out.print((char)is.read() + " ");
            }
            is.close();
        } catch (IOException e) {
            System.out.println("Exception");
        }
    }
}b
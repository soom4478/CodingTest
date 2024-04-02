import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        char c[] = new char[10];
        
        for(int i=0; i<a.length(); i++) {
            System.out.println(a.charAt(i));
        }
    }
}
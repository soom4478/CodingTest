import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        char c[] = new char[10];    // 제한사항 : 1 <= str <= 10 이므로
        
        for(int i=0; i<a.length(); i++) {
            c[i] = a.charAt(i);
        }
        
        for(int i=0; i<a.length(); i++) {
            System.out.println(c[i]);
        }
        
    }
}
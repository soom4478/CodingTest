import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        char str[] = new char [20];
        
        for(int i=0; i<a.length(); i++) {
            str[i] = a.charAt(i);
            if(str[i]<=90) {
                str[i] += 32;
            }
            else{
                str[i] -= 32;
            }
        }
        
        for(int i=0; i<a.length(); i++) {
            System.out.print(str[i]);
        }
        
    }
}
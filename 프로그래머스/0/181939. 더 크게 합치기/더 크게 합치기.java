class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String s1, s2;
        int num1, num2;
        
        s1 = String.valueOf(a); // int -> String
        s2 = String.valueOf(b);
        
        num1 = Integer.valueOf(s1+s2);    // String -> int
        num2 = Integer.valueOf(s2+s1);
        
        if(num1>=num2) {
            answer = num1;
        }
        else {
            answer = num2;
        }
        
        return answer;
    }
}
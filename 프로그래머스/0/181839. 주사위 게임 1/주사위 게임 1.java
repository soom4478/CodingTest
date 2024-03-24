class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int num1 = a%2;
        int num2 = b%2;
        
        if(num1==1 && num2==1) {
            answer = a*a + b*b;
        }
        else if(num1==1 || num2==1) {
            answer = 2 * (a+b);
        }
        else {
            answer = a - b;
            if(answer<0) {
                answer = -(answer);
            }
        }
        
        return answer;
    }
}
class Solution {
    public int solution(int a, int b) {
        int answer = 2*a*b;
        String string_num = a+""+b;
        int int_num = Integer.parseInt(string_num);
        
        if(int_num > 2*a*b) {
            answer = int_num;
        }
        
        return answer;
    }
}
class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String answer = "";
        
        answer = my_string.substring(0,s) + overwrite_string;
        answer += my_string.substring(answer.length());
        
        return answer;
    }
}
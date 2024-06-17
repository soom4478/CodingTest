function solution(phone_number) {
    var answer = '';
    for (i in phone_number) {
        if(i >= phone_number.length-4) {
            answer += phone_number[i];
        }
        else answer += "*";
    }
    return answer;
}
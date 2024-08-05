function solution(rny_string) {
    var answer = rny_string;
    answer = answer.replace(/m/g, "rn")
    return answer;
}
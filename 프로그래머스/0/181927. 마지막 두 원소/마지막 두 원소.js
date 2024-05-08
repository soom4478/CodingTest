function solution(num_list) {
    var answer = [];
    answer = num_list;
    var num_last = answer[num_list.length-1];
    var num_next = answer[num_list.length-2];
    
    if(num_last>num_next) {
        answer.push(num_last-num_next);
    }
    else {
        answer.push(num_last*2);
    }
    
    return answer;
}
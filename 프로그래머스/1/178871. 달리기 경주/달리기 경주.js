function solution(players, callings) {
    var answer = players;
    let map = new Map();
    for(let i=0; i<players.length; i++) {
        map.set(players[i], i);
    }
    for(let name of callings) {
        let same = map.get(name);
        let temp1 = answer[same-1];
        answer[same-1] = answer[same];
        answer[same] = temp1;
        map.set(answer[same-1], same-1);
        map.set(answer[same], same);
    }
    return answer;
}
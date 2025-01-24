function solution(wallpaper) {
    let maxInt = Number.MAX_SAFE_INTEGER;
    let minInt = Number.MIN_SAFE_INTEGER;
    var answer = [maxInt, maxInt, minInt, minInt];
    for(let x=0; x<wallpaper.length; x++) {
        for(let y=0; y<wallpaper[x].length; y++) {
            if (wallpaper[x][y] === "#") {
                if(answer[0] > x) {
                    answer[0] = x;
                }
                if(answer[1] > y) {
                    answer[1] = y;
                }
                if(answer[2] <= x) {
                    answer[2] = x+1;
                }
                if(answer[3] <= y) {
                    answer[3] = y+1;
                }
            }
        }
    }
    return answer;
}
function solution(name, yearning, photo) {
    var answer = [];
    for(let photoG of photo) {
        let count = 0;
        photoG.forEach((photo_name, photoIndex) => {
            let index = name.indexOf(photo_name);
            if(index !== -1) {
                count += yearning[index];
            }
        });
        answer.push(count);
    }
    return answer;
}
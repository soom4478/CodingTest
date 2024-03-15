class Solution {
    public int solution(int[] bandage, int health, int[][] attacks) {
        int answer = 0;
        
        int att=0;  // 공격을 받은 횟수
        int time = 1;   // 시간(초)
        int max_health = health;    // 최대체력
        int suc = 0;    // 연속성공 시간
        
        while(att != attacks.length) {
            if(time == attacks[att][0]) {   // 시간이 몬스터 공격시간과 같으면 공격을 받음
                health = health - attacks[att][1];
                att++;
                suc = 0;
            }
            else {  // 공격을 받지 않으면 체력을 회복
                health += bandage[1];
                suc++;
                if(suc == bandage[0]) { // 연속으로 성공 시 추가 회복
                    health += bandage[2];
                    suc = 0;
                }
            }
            if(health > max_health) {  // 체력이 최대 체력보다 클 수 없음
                    health = max_health;
                }
            if(health <= 0) {   // 체력이 0 이하면 answer은 -1
                answer = -1;
                break;
            }
            time++;
            answer = health;
        }
        return answer;
    }
}
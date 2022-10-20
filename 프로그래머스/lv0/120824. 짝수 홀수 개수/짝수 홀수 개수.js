function solution(num_list) {
    let answer = []
    let even = num_list.filter(x=>x%2==0).length
    answer.push(even);
    
    let odd = num_list.filter(x=>x%2!==0).length
    answer.push(odd);
    return answer;
}
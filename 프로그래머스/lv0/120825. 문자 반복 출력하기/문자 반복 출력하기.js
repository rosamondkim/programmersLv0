function solution(my_string, n) {
    let answer = [...my_string].map(x=>x.repeat(n)).join("");
    return answer
}
function solution(left, right) {
//     // 이중포문
//     //1) left부터 right까지의 모든 수 구하기
//     for(i=left; i<=right;i++){
//         console.log(i)
//     }
    
//     //2) 약수 구하고 개수 출력하기
//     let count = 0
//     //이걸 안에 넣어야함. 초기화 해주고 약수 개수 판단해야하기 때문에!
//     for(j=1;j<=left;j++){
//         if (left%j ===0){
//             console.log(j)
//             count++
//             //+=1 과의 차이점이 뭘까?
//         }
//     } console.log(count)
    
//     //3) 약수의 개수가 짝수인 수? 홀수인 수 ?
//     let answer = 0
//     count%2===0?;+=;-=
    
//     //4) 누적하기
//     reduce 메서드 사용하기.
    var answer = 0;
    for(let i=left;i<=right;i++){
        let count = 0;
        for(let j=1;j<=i;j++){
            if (i%j ===0){
            count++
            } 
        } count%2===0?answer+=i:answer-=i;     
        
    }
    
    return answer
}
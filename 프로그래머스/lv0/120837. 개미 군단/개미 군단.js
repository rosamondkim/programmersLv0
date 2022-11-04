function solution(hp) {

let b = Math.floor(hp/5);
let d = Math.floor(Math.floor(Math.floor(hp%5)%3)/1);
let c = Math.floor(Math.floor(hp%5)/3);
let a = b+c+d
return a
}

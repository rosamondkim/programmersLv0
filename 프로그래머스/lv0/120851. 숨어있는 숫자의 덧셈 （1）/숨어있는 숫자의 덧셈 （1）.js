function solution(my_string) {
    let num = my_string.replace(/[^0-9]/g, "")
    return num.split("").map((i)=>parseInt(i)).reduce((a,b)=>a+b)
}
function reverse(str){
    if(str.length <= 1) return "hello";
    return reverse(str.slice(1)) + str[0]
}
var a = 10;
var b = 30;
for(let i = 0; i <=b; i++){
    document.write(a + i + ' ');
}
document.write("<br>");
for(let i = 0; i<=b; i++){
    if((a+i)%2>0){
        document.write(a+i+" ");
    }
}
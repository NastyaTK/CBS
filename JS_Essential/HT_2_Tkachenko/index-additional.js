for(var i = 1; i<=8; i++){
    if(i%2>0){
        for (var j = 1; j <=8; j++){
            if(j%2>0){
                document.write("<div class='black'></div>");
            } else{
                document.write("<div class='white'></div>");
            }
        }
    }
    else{
        for (var j = 1; j <=8; j++){
            if(j%2>0){
                document.write("<div class='white'></div>");
            } else{
                document.write("<div class='black'></div>");
            }
        }
    }
    document.write("<br>");
}
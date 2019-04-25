var arr = [];
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        arr[i] = []
        if (j % 2 > 0) {
            arr[i][j] = parseInt(Math.random() * 10);
        }
        else {
            arr[i][j] = -parseInt(Math.random() * 10);
        }
        if (i == j && arr[i][j] > 0) {
            arr[i][j] = 1;
        } else if (i == j && arr[i][j] <= 0) {
            arr[i][j] = 0;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br>")
}
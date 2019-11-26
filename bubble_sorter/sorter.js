function macaroni() {
    var b = String(document.getElementById('mass').value);
    let mass = b.split(' ');
    var arr = [];
    mass.forEach(element => arr.push(parseInt(element)));

    let flag = Boolean;
    flag = true;
    let length = arr.length;
    let k = 1;

    console.log(arr);

    while (flag){
        flag = false;
        let i = 0;
        while (i <= length-k ){
            if (arr[i] > arr[i+1]){
                let c = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = c;
                flag = true;
            }
            i++;
        }
        k++;
    }

    console.log(arr);
};

butt.onclick = macaroni;
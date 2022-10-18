// доп задание
function fibonacci(length) {
    let arr = [0,1]
    for (let i = 0; i <= length; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    console.log(arr);
}
fibonacci(19)

//основа
//1
function max_name(...arr) {
    let logname = ''
    for(let item of arr) {
        if(item.length > logname.length) {
            logname = item
        }
    }
    console.log(logname);
}
max_name('Alex', 'George', 'Michael', 'InstaSamka', 'Moneyken')

//2
function min(a,b){
    if(typeof(a) === 'number'){
        console.log(Math.min(a,b));
    } else if(Array.isArray(a)){
        console.log(Math.min(...a));
    } else if(typeof(a) === 'object'){
        let arr_num = Object.values(a)
        console.log(Math.min(...arr_num));
    }
}

min(1,2)
min([1,2])
min({a:1, b:2})
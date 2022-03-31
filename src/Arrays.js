/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = [];
    data += ',';
    let str = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== ',') {
            str += data[i];
        } else {
            let num = parseInt(str);
            arr.push(num);
            str = '';
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        str += ',';
    }
    str = str.substr(0, str.length - 1);
    return str;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    data = data.filter(function (n) {
        return n <= 100;
    });
    return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array3 = [];
    for (let i = 0; i < 5; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    return array3;
}

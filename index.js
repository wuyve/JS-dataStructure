function dispArr(arr) {
    for(var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + '');
        if(i % 10 == 9) {
            console.log();
        }
    }
    if(i % 10 != 0) {
        console.log();
    }
}
function seqSearch(arr, data) {
    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] == data) {
            return i;
        }
    }
    return -1;
}
function findMin(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; ++i) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}
function findMax(arr) {
    var max = arr[0];
    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var nums = [];
for(var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() *101);
}
var minValue = findMin(nums);
dispArr(nums);
console.log('最小值为', minValue);
// var num = Math.floor(Math.random() * 10);
// console.log('要查找的数为:', num);
// var position = seqSearch(nums, num);
// if(position > -1) {
//     console.log(num + '在这个数组中的索引位置是：' + position);
// } else {
//     console.log(num + '没有出现在这个数组中');
// }
// dispArr(nums);
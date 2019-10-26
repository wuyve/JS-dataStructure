function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}
function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}
function betterHash(str) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < str.length; ++i) {
        total += H * total + str.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}
function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}
function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ': ' + this.table[i]);
        }
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = '';
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}
var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log('Student Data: ');
for (var i = 0; i < students.length; ++i) {
    console.log(students[i].substring(0, 8) + ' ' + students[i].substring(9));
}
console.log('');
console.log('Data distribution: ');
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
    hTable.put(students[i]);
}
hTable.showDistro();
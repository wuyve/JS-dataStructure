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
function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
}
function get(value) {
    return this.table[this.betterHash(key)];
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
var pnumbers = new HashTable();
var name, number;
for(var i = 0; i < 3; i++) {
    console.log('Enter a name (space to quit): ');
    name = readline();
    putstr = ('enter a number: ');
    number = readline();
    pnumbers.put(name, number);
}
name = '';
putstr = ('Name for number (Enter quit to stop): ');
while(name != 'quit') {
    name = readline();
    if (name == 'quit') {
        break;
    }
    console.log(name + "'s number is " + pnumbers.get(name));
    putstr("Name for number (Enter quit to stop):")
}
# JavaScript相关的数据结构
<!-- TOC -->

- [JavaScript相关的数据结构](#javascript相关的数据结构)
    - [列表](#列表)
        - [列表的抽象数据类型定义](#列表的抽象数据类型定义)
        - [实现列表类](#实现列表类)
        - [`append` 给列表添加一个元素](#append-给列表添加一个元素)
        - [`find` 从列表中查找某一个元素](#find-从列表中查找某一个元素)
        - [`remove` 从列表中删除一个元素](#remove-从列表中删除一个元素)
        - [`length` 列表中有多少个元素](#length-列表中有多少个元素)
        - [`toString` 显示列表中的元素](#tostring-显示列表中的元素)
        - [`insert` 向列表中插入一个元素](#insert-向列表中插入一个元素)
        - [`clear` 清空列表中所有的元素](#clear-清空列表中所有的元素)
        - [`contains` 判断给定值是否在列表中](#contains-判断给定值是否在列表中)
        - [遍历列表](#遍历列表)
        - [使用迭代器访问列表](#使用迭代器访问列表)
    - [栈](#栈)
        - [对栈的操作](#对栈的操作)
        - [栈的实现](#栈的实现)
        - [使用Stack类](#使用stack类)
            - [1. 数制间的相互转换](#1-数制间的相互转换)
            - [2. 判断是否为回文](#2-判断是否为回文)
            - [3. 递归演示](#3-递归演示)
    - [队列](#队列)
        - [对队列的操作](#对队列的操作)
        - [用一个数组实现队列](#用一个数组实现队列)
        - [使用队列：方块舞的舞伴分配问题](#使用队列方块舞的舞伴分配问题)
    - [链表](#链表)
        - [定义链表](#定义链表)
        - [设计一个基于对象的链表](#设计一个基于对象的链表)
            - [`Node`类](#node类)
            - [LinkedList类](#linkedlist类)
        - [在链表中删除一个节点](#在链表中删除一个节点)
        - [双向链表](#双向链表)
            - [完整的双向链表LList类](#完整的双向链表llist类)
        - [循环列表](#循环列表)
        - [链表的其他方法](#链表的其他方法)
    - [字典](#字典)
        - [Dictionary类](#dictionary类)
        - [Dictionary类的复制方法](#dictionary类的复制方法)
    - [散列](#散列)
        - [HashTable类](#hashtable类)
        - [选择一个散列函数](#选择一个散列函数)
        - [一个更好的散列函数](#一个更好的散列函数)
        - [散列化整型键](#散列化整型键)
        - [对散列表排序、从散列表中取值](#对散列表排序从散列表中取值)
        - [碰撞处理](#碰撞处理)
            - [开链法](#开链法)
            - [线性探测法](#线性探测法)
    - [集合](#集合)
        - [集合的定义、操作和属性](#集合的定义操作和属性)
            - [集合的定义](#集合的定义)
            - [对集合操作](#对集合操作)
        - [Set类的实现](#set类的实现)
    - [二叉树和二叉查找树](#二叉树和二叉查找树)

<!-- /TOC -->


## 列表

列表是一组有序数据，每个列表中的数据项成为元素。

不包含任何元素的列表称为**空列表**，列表中包含元素的个数成为列表的**length**,在内部实现上，用一个变量**listSize**保存列表中元素的个数。可以在列表末尾**append**一个元素，也可以在一个给定元素后或列表的起始位置**insert**一个元素，使用**remove**方法从列表中删除元素，使用**clear**方法清空列表中所有的元素。使用**toString**方法显示列表中的所有元素，使用**getElement**显示当前元素。使用**next**可以从当前元素移动到下一元素，使用**prev**可以移动到当前元素的前一个元素。使用**moveTo**直接移动到指定位置。**dataStore**表示列表的当前位置。

### 列表的抽象数据类型定义
|属性/方法|描述|
|:---|:---|
|listSize|列表的元素个数|
|pos|列表的当前元素|
|length|返回列表中元素的个数|
|clear|清空列表中的所有元素|
|toString|返回列表的字符串形式|
|getElement|返回当前元素的位置|
|insert|在现有元素后插入新元素|
|append|在列表末尾添加新元素|
|remove|从列表中删除元素|
|front|将列表的当前位置移动到第一个元素|
|end|将列表的当前位置移动到最后一个元素|
|prev|将当前位置后移一位|
|next|将当前位置前移一位|
|hasNext|判断后一位|
|hasPrev|判断前一位|
|currPos|返回列表的当前位置|
|moveTo|将当前位置移动到指定位置|

### 实现列表类

定义一个列表

```javascript
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];  //  初始化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext;
    this.hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}
```

### `append` 给列表添加一个元素

给列表的下一个位置添加一个新元素，这个位置刚好等于变量`listSize`的值：当前元素就位后，`liseSize`加一

```javascript
function append(element) {
    this.dataStore[this.listSize++] = element;
}
```

### `find` 从列表中查找某一个元素

通过对数组对象`dataStore`进行迭代，查找指定元素，如果找到该元素，返回该元素所在的位置，否则返回`-1`。

```javascript
function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
```

### `remove` 从列表中删除一个元素

`remove`方法使用`find`方法返回的位置对数组`dataStore`进行截取，数组改变后，将变量`listSize`的值减一，以反映列表的最新长度。如果元素删除成功，则返回`true`，否则返回`false`。

```javascript
function remove(element) {
    var fountAt = this.find(element);
    if (fountAt > -1) {
        this.dataStore.splice(fountAt, 1);
        --this.listSize;
        return true;
    }
    return  false;
}
```

### `length` 列表中有多少个元素

```javascript
function length() {
    return this.liseSize;
}
```

### `toString` 显示列表中的元素

严格来说，该方法返回的是一个数组，而不是一个字符串。

```javascript
function toString() {
    return this.dataStore;
}
```

### `insert` 向列表中插入一个元素

使用`find()`方法找到元素的位置后，使用`splice()`方法将新元素插入到该位置之后，然后将变量`listSize`加一并返回`true`，表明插入成功。

```javascript
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
```

### `clear` 清空列表中所有的元素

使用`delete`操作符删除数组`dataStore`，接着在下一行创建一个空数组，最后将`listSize`和`pos`的值都设为1，表明这是一个新的空列表。

```javascript
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}
```

### `contains` 判断给定值是否在列表中

```javascript
function contains(elment) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return  false;
}
```

### 遍历列表

```javascript
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize -1;
}

function prev() {
    --this.pos;
}

function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(positon) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function hasNext() {
    return this.pos < this.listSize;
}

function hasPrev() {
    return this.pos >= 0;
}
```

### 使用迭代器访问列表

优点：
1. 访问列表元素时不必担心底层的数据存储结构；
2. 当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器；
3. 可以用不同类型的数据存储方式实现`cList`类，迭代器为访问列表里的元素提供了一种统一的方式。

例如:

从前向后遍历列表：

```javascript
for (names.front(); names.hasNext();names.next()) {
    console.log(names.getElment());
}
```

从后向前遍历列表 

```javascript
for (names.end(); names.hasNext();names.prev()) {
    console.log(names.getElment());
}
```

## 栈

栈是一种高效的数据结构，因为数据只能在栈顶添加或删除，所以这样的操作很快，而且容易实现。

栈是一种**先入后出** *LIFO(last-in-first-out)*的数据结构。

### 对栈的操作

对栈的两种主要操作：将元素压入栈；将元素弹出栈。

入栈使用`push()`方法，出栈使用`pop()`方法。

`pop()`方法虽然可以访问栈顶的元素，但是调用该方法后，栈顶元素也从栈中被永久的删除了。`peek()`方法则只返回栈顶元素，而不删除它。

`clear()`方法清除栈内所有元素，`length`属性记录栈内元素的个数。

### 栈的实现

```javascript
function Stack() {
    this.dataStore = [];  // 保存栈内元素
    this.top = 0;  // 记录栈顶位置
    this.push = push;  // 压入栈
    this.pop = pop;  // 弹出栈
    this.peek = peek;  // 返回栈顶元素
    this.length = length;  // 栈内元素的长度
    this.clear = clear;  // 清空栈
}
```

`push()`方法：当向栈中压入一个新元素时，需要将其保存在数组中变量`top`所对应的位置，然后将`top`值加一，让其指向数组中下一个空位置。

```javascript
function push(element) {
    this.dataStore[this.top++] = element;
}
```

`pop()`方法：返回栈顶的元素，同时将变量`top`的值减一。

```javascript
function pop() {
    return this.dataStore[--this.top];
}
```

`peek()`方法：返回数组的第`top-1`个位置的元素，即栈顶元素。如果这个栈是空的，则返回`undefined`。

```javascript
function peek() {
    return this.dataStore[this.top - 1];
}
```

`length()`方法：通过返回变量`top`的值，返回栈内元素的个数。

```javascript
function length() {
    return this.top;
}
```

`clear()`方法：将变量`top`的值设为0，清空栈。

```javascript
function clear() {
    this.top = 0;
}
```

完整的Stack为：

```javascript
function Stack() {
    this.dataStore = [];  // 保存栈内元素
    this.top = 0;  // 记录栈顶位置
    this.push = push;  // 压入栈
    this.pop = pop;  // 弹出栈
    this.peek = peek;  // 返回栈顶元素
    this.length = length;  // 栈内元素的长度
    this.clear = clear;  // 清空栈
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop() {
    return this.dataStore[--this.top];
}
function peek() {
    return this.dataStore[this.top - 1];
}
function length() {
    return this.top;
}
function clear() {
    this.top = 0;
}
```

### 使用Stack类

#### 1. 数制间的相互转换

假设将数字`n`转换为以`b`为基数的数字，实现转换的算法如下：

1. 最高位为`n%b`， 将此位压入栈。
2. 使用`n/b`代替`n`。
3. 重复步骤1和2，直到`n`等于0，且没有余数。
4. 持续将栈内元素弹出，直到栈空，一次将这些元素排列，就得到转换后的字符串形式。

实现算法如下：

```javascript
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while(num > 0);
    var converted = '';
    while(s.length() > 0) {
        converted += s.pop()
    }
    return converted;
}
```

例如：

将二进制转换为十进制；将十进制转换为八进制。

```javascript
function Stack() {
    this.dataStore = [];  // 保存栈内元素
    this.top = 0;  // 记录栈顶位置
    this.push = push;  // 压入栈
    this.pop = pop;  // 弹出栈
    this.peek = peek;  // 返回栈顶元素
    this.length = length;  // 栈内元素的长度
    this.clear = clear;  // 清空栈
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop() {
    return this.dataStore[--this.top];
}
function peek() {
    return this.dataStore[this.top - 1];
}
function length() {
    return this.top;
}
function clear() {
    this.top = 0;
}
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while(num > 0);
    var converted = '';
    while(s.length() > 0) {
        converted += s.pop()
    }
    return converted;
}
var numBase = 10;
var num = 32;
var base = 2;
var result = mulBase(num, base);
console.log(`${numBase}进制数${num}转换为${base}进制数为${result}`);
```

#### 2. 判断是否为回文

```javascript
function Stack() {
    this.dataStore = [];  // 保存栈内元素
    this.top = 0;  // 记录栈顶位置
    this.push = push;  // 压入栈
    this.pop = pop;  // 弹出栈
    this.peek = peek;  // 返回栈顶元素
    this.length = length;  // 栈内元素的长度
    this.clear = clear;  // 清空栈
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop() {
    return this.dataStore[--this.top];
}
function peek() {
    return this.dataStore[this.top - 1];
}
function length() {
    return this.top;
}
function clear() {
    this.top = 0;
}

// 主要函数：判断是否为回文
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = '';
    while(s.length() > 0) {
        rword += s.pop();
    }
    if(word == rword) {
        return true;
    } else {
        return false;
    }
}

var word = 'arra';
if(isPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
} else {
    console.log(`${word} is not a palindrome`);
}
```

#### 3. 递归演示

阶乘函数

```javascript
function fact(n) {
    var s = new Stack();
    while(n > 1) {
        s.push(n--);
    }
    var product = 1;
    while(s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(fact(5));
```


## 队列

队列是一种列表，队列只能在队尾插入元素，在队首删除元素。

队列是一种**先进先出**的数据结构。队列被用在很多地方：提交操作系统执行的一系列进程、打印任务池等，一些仿真系统用队列来模拟银行或杂货店里排队的顾客。

### 对队列的操作

队列的两种操作时：向队列中插入新元素和删除队列中的元素。插入元素也叫*入队*，删除的操作也叫*出队*。

入队操作在队尾插入新元素，出队操作删除队头的元素。读取队头的元素为`peek()`，该操作返回队头的元素，但不把它从队列中删除。可以使用`length`得知队列中有多少个元素，使用`clear()`方法可以清空队列中的元素。

### 用一个数组实现队列

```javascript
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
```

`enqueue()`方法：向队尾添加一个元素

```javascript
function enqueue(element) {
    this.dataStore.push(element);
}
```

`dequeue()`方法：删除队首元素 

```javascript
function dequeue() {
    return this.dataStore.shift();
}
```

`front()`方法：读取队首元素

```javascript
function front() {
    return this.dataStore[0];
}
```

`back()`方法：读取队尾元素

```javascript
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
```

`toString()`方法：显示队列内的所有元素

```javascript
function toString() {
    var retStr = '';
    for(var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + '\n';
    }
    return retStr;
}
```

`empty()`方法：判断队列是否为空

```javascript
function empty() {
    if(this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}
```

### 使用队列：方块舞的舞伴分配问题

题意描述：当男男女女来到舞池，他们按照自己的性别排成两队。当舞池中有地方空出来时，选两个队列中的第一人组成舞伴，他们身后的人要各自向移动一步，变成新的队首。当一对舞伴迈入舞池时，主持人会大声喊出他们的名字。当一对舞伴走出舞池，且两排队伍中有任意一队没有人时，支持人也会把这个情况告诉大家。

```javascript
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = '';
    for(var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + '\n';
    }
    return retStr;
}
function empty() {
    if(this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}
function getDancers(males,females) {
    var names = read('dancers.txt').split('\n');  // 读取‘dancers.txt’内的人员名单
    for(var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for(var i = 0; i < names.length; ++i) {
        var dancer = names[i].split('');
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == 'F') {
            femaleDancers.enqueue(new Dancer(name, sex));
        } else {
            maleDancers.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log('The dance parents are: ');
    while(!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log('female dancer is ' + person.name);
        person = males.dequeue();
        console.log('and the male dancer is ' + person.name);
    }
}
```

## 链表

js中数组的主要问题是，它们被实现成了对象，与其他语言的数组相比，效率很低。

如果发现数组在实际使用时很慢，可以考虑用链表来替代它。除了对数据的随机访问，俩表几乎可以用在任何可以使用一维数组的情况中。如果需要随机访问，数组仍是最好的选择。

### 定义链表

链表是由一组节点组成的集合，每个节点都使用一个对象的引用指向它的后继，指向另一个节点的引用叫做链。

链表中插入一个节点的效率很高，只需要修改它前面的节点（前驱），使其指向新加入的节点，而新加入的节点则指向原来前驱指向的节点。

从链表中删除一个元素也很简单，将待删除元素的前驱节点指向待删除元素的后继节点，同时将待删除元素指向null，元素就删除成功了。

### 设计一个基于对象的链表

设计的链表包含两个类，Node类用来表示节点，LinkedList类提供了插入节点、删除节点、显示列表元素的方法，以及一些辅助方法。

#### `Node`类

`Node`包含两个属性：`element`用来保存节点上的数据，`next`用来保存下一个节点的链接。

```javascript
function Node(element) {
    this.element = element;
    this.next = null;
}
```

#### LinkedList类

链表之后一个属性，那就是使用一个Node对象来保存该链表的头节点。

```javascript
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}
```


`find()`方法：该方法遍历链表，查找给定数据，如果找到数据，该方法返回保存数据的节点。

首先，创建一个新节点，并将链表的头节点赋给这个新创建的节点，然后在链表上进行循环，如果当前节点的`element`属性和我们要找的信息不符，就从当前节点移动到下一节点。如果查找成功，该方法返回包含该数据的节点，否则返回null。


```javascript
function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
```


`insert()`方法：插入新节点

一旦找到‘后面’的节点，就可以将新节点插入到链表。首先，将新节点的`next`属性设置为‘后面’节点的`next`属性对应的值。然后设置‘后面’节点的`next`属性指向新节点。

```javascript
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next();
    current.next = newNode;
}
```


`display()`方法：显示链表中的元素

先将列表的头节点赋值给一个变量，然后循环遍历链表，当前节点的`next`属性为`null`时循环结束。为了只显示包含数据的节点，程序只访问当前节点的下一个节点中保存的数据：`currNode.next.element`。

```javascript
function display() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
```


LList类和测试程序

```javascript
function Node(element) {
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    // this.remove = remove;
    this.display = display;
}
function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function display() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
// 主程序
var cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Alma', 'Russellville');
cities.display();
```

### 在链表中删除一个节点

从链表中删除节点时，需要先找到待删除节点前面的节点。找到这个节点后，修改它的`next`属性，使其不再指向待删除节点，而是指向带删除节点的下一个节点。

可以定义一个`findPrevious()`来做这件事。该方法遍历链表中的元素，检查每一个节点的下一个节点中是否存储着待删除的数据，如果找到，返回该节点，这样就可以修改他的`next`属性。

```javascript
function findPrevious(item) {
    var currNode = this.head;
    while(!(currNode.element == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}
```

下面是删除节点的方法：

```javascript
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode == null)) {
        prevNode.next = prevNode.next.next;
    }
}
```


### 双向链表

要为`Node`类增加一个`previous`属性:

```javascript
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
```

双向链表的`insert()`方法和单向链表的类似，但是需要设置新节点的`previous`属性，使其指向该节点的前驱。该方法的定义如下：

```javascript
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
```

双向链表的`remove()`方法比单向链表的效率更高，因为不需要再查找前驱结点。首先需要在链表中找出存储待删除数据的节点，然后设置该节点前驱的`next`属性，使其指向待删除节点的后继；设置该节点后继的`previou`s属性，使其指向待删除节点的前驱。

```javascript
function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
```

为了完成以反序显示链表中元素这类任务，需要给双向链表添加一个工具的方法，用来查找最后的节点。`findLast()`方法找出了链表中的最后一个节点，同时避免了从前往后遍历链表：

```javascript
function findLast() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}
```

反向显示双向链表中的元素：

```javascript
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}
```

#### 完整的双向链表LList类

```javascript
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}
function findLast() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item) {
    var currNode = this.find(item);
    if(!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
function display() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

var cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
console.log('');
cities.remove('Carlisle');
cities.display();
console.log('');
cities.dispReverse();
```


### 循环列表

循环链表和单向链表相似，节点类型都是一样的，唯一的区别是，在创建循环链表时，让其头节点的`next`属性指向它本身：`head.next = head`

如果希望从后向前遍历链表，但是又不想付出额外的代价来创建一个双向链表，那么就可以使用循环链表，从循环链表的尾节点向后移动，就等于从后向前遍历链表。

创建循环链表，只需要修改LList类的构造函数：

```javascript
function LList() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}
```

其他地方也需要做一些改动才可以从单向链表变为循环链表，例如`display()`中需要改动的是循环的条件, 原来的方式会使链表陷入死循环，当循环到头节点时退出循环：

```javascript
function display() {
    var currNode = this.head;
    while(!(currNode.next == null) && !(currNode.next.element == 'head')) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
```


### 链表的其他方法

可以通过链表实现以下几个功能：

1. `advance(n)`: 在链表中向前移动n个节点；

2. `back()`: 在双向链表中向后移动几个节点；

3. `show()`: 只显示当前节点。


## 字典

字典是一种以键-值队形式存储数据的数据结构。Javascript中的Object就是以字典的形式设计的。

### Dictionary类

Dictionary类的基础是Array类，而不是Object类。

定义Dictionary类

```javascript
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
function add(key, value) {
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
}
function remove(key) {
    delete this.datastore[key];
}
function showAll() {
    var datakeys = Array.prototype.slice.call(Object.keys(this.datastore));
    for(var key in datakeys) {
        console.log(datakeys[key] + ' ->' + this.datastore[datakeys[key]]);
    }
}
```

使用Dictionary:

```javascript
var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '456');
pbook.add('Cynthia', '789');
pbook.add('apple', '235');
console.log("David's extension: " + pbook.find('David'));
pbook.remove('David');
pbook.showAll();
```

### Dictionary类的复制方法

返回会字典中的元素个数：

```javascript
function count() {
    var n = 0;
    for each(var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}
```

清除字典：

```javascript
function clear() {
    for each(var key in Object) {
        delete this.datastore[key];
    }
}
```

对字典进行排序：

```javascript
function showAll() {
    for(var key in Object.keys(this.datastore).sort()) {
        console.log(key + ' ->' + this.datastore[key]);
    }
}
```


## 散列

散列是一种常用的数据存储技术，散列后的数据可以快速的插入或取用。散列使用的数据结构叫做散列表。在散列表上杀入、删除和取用数据都非常快，但是对于查找操作来说效率比较低。

散列表是基于数组进行设计的的。数组的长度是预先设定的，如有需要，可以随时增加。所有元素根据和该元素对应的键，保存在数组的特定位置。使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是0到散列列表的长度。

理想情况下，散列函数会将每个键值映射为一个唯一的数组索引。如果存在两个键映射为一个值，这种现象称为**碰撞**。

### HashTable类

HashTable 类的构造函数定义如下：

```javascript
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
}
```

### 选择一个散列函数

散列函数的选择依赖于键值的数据类型。如果键是整型，最简单的散列函数就是以数组的长度对键取余。在一些情况下，比如数组的长度是10，而键值都是10的倍数的时候，就不推荐使用这种方式。这也是数组的长度是质数的原因。如果键是随机的整数，则散列函数应该更均匀地分布这些键。这种散列方式称为**除留余数法**

完整的HashTable类定义如下：

```javascript
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
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
function put(data) {
    var pos = this.simpleHash(data);
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
```

例子：

```javascript
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
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
function put(data) {
    var pos = this.simpleHash(data);
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
var arr = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable = new HashTable();
for (var i = 0; i < arr.length; ++i) {
    hTable.put(arr[i]);
}
hTable.showDistro();
```

程序输出为：

35: Cynthia
45: Clayton
57: Donnie
77: David
95: Danny
116: Mike
132: Jennifer
134: Jonatha

其中没有`Raymond`，只因为散列函数发生了碰撞，通过在`simpleHash`函数中添加一句`console.log('Hash value: ' + data + ' -> ' + total);`语句，可以发现`Raymond`和`Clayton`的散列值是一样的，都为730，因为碰撞，只有`Clayton`存入了散列表。可以通过改善散列函数来避免发生碰撞。

### 一个更好的散列函数

为了避免碰撞，首先要确保散列表中用来存储数据的数组其大小是个质数。数组的长度应该是100以上，这是为了让数据在散列表中分布的更加均匀。

为了避免碰撞，在给散列表一个合适的大小之后，接下来要有一个计算散列的更好的办法：霍纳算法。在此算法中，新的散列函数仍先计算字符串中各字符的ASCII码，不过求和时每次要乘以一个质数。

使用霍纳算法的散列函数：

```javascript
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
```

然后将 `put()`方法中的`simpleHash`替换为`betterHash`.

这次所有的任命都显示出来了，没有碰撞。

### 散列化整型键

例如：使用前面定义的 函数存储一组学生和他们的成绩信息。

```javascript
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
```

### 对散列表排序、从散列表中取值

修改`put()`和`get()`方法：使得可以同时接受键和数据作为参数，对键值散列后，将数据存储到散列中；读取存储在散列表中的数据。

```javascript
function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
}
function get(value) {
    return this.table[this.betterHash(key)];
}
```

例子： 提示用户输入三个人名和 电话号码，然后根据人名获取其电话号码，键入`quit`程序退出

```javascript
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
    putstr("Name for number (Enter quit to stop): ");
}
```

### 碰撞处理

碰撞处理的方法有两种：开链法 和 线性探测法。

#### 开链法

当碰撞发生时，我们仍然希望将键存在通过散列算法产生索引的位置上，但实际上，不可能将多份数据存储到一个数组单元中。开链法是指实现散列表的底层数组中，每个数组元素又是一个新的数据结构。

实现开链法的方法是：在创建存储散列过的键值的数组时，通过调用一个函数创建一个空数组时，通过调用一个函数创建一个空的数组，然后将该数组赋值给散列表里的每个数组元素。这样就创建了一个二维数组。

下面代码定义了一个函数`buildChains()`，用来创建第二组数组，也称 这个数组为链。

```javascript
function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}
```

需要对`showDistro()`方法做如下修改：

```javascript
function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}
```

重新定义`put()`方法和`get()`方法。`put()`方法将键值散列，散列后的值对应数组中的一个位置，先尝试将数据放到该位置上的数组中的第一个单元格，如果该单元格里已经有数据了，`put()`方法会搜索下一个位置，直到找到能放置数据的单元格，并把数据存储进去。实现`put()`方法的代码如下：

```javascript
function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.table[pos][index] == undefined) {
        this.table[pos][index] = data;
        ++index;
    } else {
        while(this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index + 1] = data;
    }
}
```

`get()`方法先对键值散列，根据散列后的值找到散列表中相应的位置，然后搜索该位置上的链，直到找到键值。如果找到，就将紧跟在键值后面的数据返回；如果没找到，就返回undefined。代码如下：

```javascript
function get(key) {
    var index = 0;
    var hash = this.betterHash(key);
    if (this.table[pos][index] == key) {
        return this.table[pos][index + 1];
        index += 2;
    } else {
        while(this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }
    return undefined;
}
```

#### 线性探测法

线性探测法隶属于一种更一般化的散列技术：开放寻址数列。当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。该技术是基于这样一个事实：每个散列表都会有很多单元格，可以使用他们来存储数据。

当存储数据使用的数组特别大，选择线性探测法要比开链法好。如果数组的大小是待存储数据个数的1.5倍，则使用开链法；如果数组的大小 是待存储数据的两倍及两倍以上时，那么使用线性探测法。

为了实现一个真实的数据存储系统，需要为HashTable类增加一个新的数组，用来存储数据。数组table和values并行工作，当将一个简直保存到数组table中时，将数据存入数组values中相应的位置上。

在HashTable的构造函数中加入下面一行代码：`this.values = []`.

在`put()`方法中使用线性探测技术：

```javascript
function put(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    } else {
        while(this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
}
```

`get()`方法先搜索键在散列表中的位置，如果找到，则返回数组values中对应位置上的数据；如果没有找到，则循环搜索，直到找到对应的键或者数组中的单元为undefined时，后者表示改键没有被存入散列表。代码如下：

```javascript
function get(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}
```

## 集合

集合是一种包含不同元素的数据结构。集合中的元素称为成员，集合有两个最重要的特性：集合中的成员是无序的；集合中没有相同的成员。

### 集合的定义、操作和属性

集合是一组无序但彼此之间又有一定相关性的成员构成，每个成员在集合中只能出现一次。

#### 集合的定义

1. 不把韩任何成员的集合称为空集，全集则是包含一切可能成员的集合。
2. 如果两个集合的成员完全相同，则称两个集合相等。
3. 如果一个集合中所有成员都属于另一个集合，则前一集合称为后一集合的子集。

#### 对集合操作

对集合的操作有下面几种：

1. 并集： 讲两个集合的成员进行合并，得到一个新集合。
2. 交集： 两个集合中共同存在的成员组成一个新的集合。
3. 补集： 属于一个集合而不属于另一个集合的成员组成的集合。

### Set类的实现

Set类的实现基于数组，数组用来存储数据。

```javascript
function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}
```


将数据存入数组，先使用`indexOf`检查新加入的元素在数组中是否存在，如果找到，则返回该元素所在的数组中的位置，否则返回-1.

如果数组中还未包含该元素，`add()`方法会将新加元素保存到数组中并返回true，否则返回false

```javascript
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}
```


`remove()`方法：首先检查待删除元素是否存在在数组中，如果在，则使用数组的`splice()`方法删除该元素并返回true，否则返回false，表示这个几何中并不存在这个元素。

```javascript
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}
```


`show()`方法：显示结合中的成员。

```javascript
function show() {
    return this.dataStore;
}
```


`contains()`方法：检查一个成员是否属于该集合。

```javascript
function contains(data) {
    if(this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}
```


`union()`方法执行并集操作，将两个集合合并成一个。该方法首先将第一个集合里的成员悉数加入一个临时集合，然后检查第二个集合 中的成员，看它们是否也同时属于第一个集合。如果属于，则跳过该成员，否则就将该成员加入临时集合。

```javascript
function union(set) {
    var tempSet = new Set();
    for(var i = 0; i < set.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for(var i = 0; i < set.dataStore.length; ++i) {
        if(!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}
```


`size()`方法：对比两个集合的大小

```javascript
function size() {
    return this.dataStore.length;
}
```


`subset()`方法执行交集操作，首先要确定该集合的长度是否小于待比较集合，如果该集合比特定比较集合还要大，那么该集合肯定不会是待比较集合的一个子集；当该集合的长度小于待比较集合时，再判断该集合内的成员是否都属于待比较集合。如果有任意一个成员不属于待比较集合，则返回false，程序终止。如果一直比较完该集合的最后一个元素，所有元素都属于待比较集合，那么该集合就是待比较集合的一个子集，该方法返回true。

```javascript
function subset(set) {
    if(this.size() > set.size()) {
        return false;
    } else {
        forEach(var member in this.dataStore) {
            if(!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}
```


`difference()`方法：返回一个新集合，该集合包含的是那些属于第一个集合但不属于第二个集合的成员。

```javascript
function difference(set) {
    var tempSet = new Set();
    for(var i = 0; i < this.dataStore.length; ++i) {
        if(!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}
```


## 二叉树和二叉查找树


未更新完。。。

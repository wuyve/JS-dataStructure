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
        - [树的定义](#树的定义)
        - [二叉树与二叉查找树](#二叉树与二叉查找树)
            - [实现二叉查找树](#实现二叉查找树)
            - [遍列二叉查找树](#遍列二叉查找树)
                - [中序遍历](#中序遍历)
                - [先序遍历](#先序遍历)
                - [后序遍历](#后序遍历)
        - [在二叉查找树上进行查找](#在二叉查找树上进行查找)
            - [查找最小值和最大值](#查找最小值和最大值)
            - [查找给定值](#查找给定值)
        - [从二叉树上删除节点](#从二叉树上删除节点)
        - [计数](#计数)
    - [图和图算法](#图和图算法)
        - [图的定义](#图的定义)
        - [图类](#图类)
            - [表示顶点](#表示顶点)
            - [表示边](#表示边)
            - [构件图](#构件图)
            - [一个完整的Graph类的完整定义](#一个完整的graph类的完整定义)
        - [搜索图](#搜索图)
            - [深度优先搜索](#深度优先搜索)
            - [广度优先搜索](#广度优先搜索)
        - [查找最短路径](#查找最短路径)
            - [广度优先搜索对应的最短路径](#广度优先搜索对应的最短路径)
            - [确定路径](#确定路径)
        - [拓扑排序](#拓扑排序)
            - [拓扑排序算法](#拓扑排序算法)
            - [实现拓扑排序算法](#实现拓扑排序算法)
    - [排序算法](#排序算法)
        - [数组测试平台](#数组测试平台)
        - [基本排序算法](#基本排序算法)
            - [冒泡排序](#冒泡排序)
            - [选择排序](#选择排序)
            - [插入排序](#插入排序)
            - [基本排序算法的计时比较](#基本排序算法的计时比较)
        - [高级排序](#高级排序)
            - [希尔排序](#希尔排序)
                - [计算动态间隔序列](#计算动态间隔序列)
            - [归并排序](#归并排序)
                - [自顶向下的归并排序](#自顶向下的归并排序)
                - [自底向上的归并排序](#自底向上的归并排序)
            - [快速排序](#快速排序)
    - [检索算法](#检索算法)
        - [顺序查找](#顺序查找)
            - [查找最小值和最大值](#查找最小值和最大值-1)

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

树是计算机科学中经常用到的一种数据结构。树是一种非线性的数据结构，以分层的方式存储数据。

### 树的定义

树由一组以边连接的节点组成。一棵树最上面的节点称为根节点，如果一个节点下面连接多个节点，那么该节点称为父节点，它下面的节点称为子节点，没有任何子节点的节点称为叶子节点。

### 二叉树与二叉查找树

二叉查找树是一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右结点中。这一特性使得查找的效率很高，对于数值型和非数值型的数据，比如单词和字符串，都是如此。

#### 实现二叉查找树

二叉查找树是由节点组成，所以要定义的第一个对象就是Node。

首先定义一个Node对象，用来保存数据，也保存和其他节点的连接（left和right）。

```javascript
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
```

show()方法用来显示保存在节点中的数据。

```javascript
function show () {
    return this.data;
}
```

然后创建一个类,用来表示二叉查找树(BST).类中只包含一个数据成员: 一个表示二叉查找树根节点的Node对象.该类的构造函数将根节点初始化为null,以此创建一个空节点.

1. BST首先要有一个insert()方法,用来向树中加入新的节点;
2. 其次检查BST是否有根节点,如果没有,那么这是棵新树,该节点就是根节点,这个方法到此也就完成了,否则进入下一步;
3. 如果待插入节点不是根节点,那么就要遍历BST,找到插入的适当位置.该过程类似于遍历链表,用一个变量存储当前节点,一层层地遍历BST.
4. 进入到BST之后,下一步就要决定将这个节点放在哪个地方.找到正确的插入点时,会跳出循环.


查找正确的插入点的算法如下:

1. 设根节点为当前节点;
2. 如果待插入节点保存的数据小于当前节点,则设新的当前节点为原节点的左节点;反之,执行第4步; 
3. 如果当前节点的左节点为null,就将新的节点插入到这个位置退出循环;否则继续执行下一次循环;
4. 设新的当前节点为原节点的右节点;
5. 如果当前节点的右节点为null,就将新的节点插入到这个位置,退出循环;否则继续执行下一次循环.

```javascript
function BST () {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOther;
}
function insert (data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
```

#### 遍列二叉查找树

由三种遍历BST的方式：中序、先序和后序。中序遍历按照节点上的键值，以升序访问BST上的所有节点。先序遍历先访问根节点，然后以同样的方式访问左子树和右子树。后序遍历先访问叶子节点，从左子树到右子树，再到根节点。

##### 中序遍历

中序遍历使用递归的方式最容易实现。该方法需要以升序访问树中所有节点，先访问左子树，再访问根节点，最后访问右子树。

```javascript
function inOrder(node) {
    if(!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + ' ');
        inOrder(node.right);
    }
}
```

测试BST的中序遍历：

```javascript
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show () {
    return this.data;
}
function BST () {
    this.root = null;
    this.insert = insert;
    // this.inOrder = inOther;
}
function insert (data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function inOrder(node) {
    if(!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + ' ');
        inOrder(node.right);
    }
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
```

测试结果如下：

>3

>16

>22

>23

>37

>45

>99


##### 先序遍历

先序遍历的定义如下：

```javascript
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show () {
    return this.data;
}
function BST () {
    this.root = null;
    this.insert = insert;
    // this.inOrder = inOther;
}
function insert (data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function preOrder(node) {
    if(!(node == null)) {
        console.log(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
preOrder(nums.root);
```

测试结果：

>23

>16

>3

>22

>45

>37

>99

##### 后序遍历

后序遍历的定义：

```javascript
function postOrder(node) {
    if(!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}
```

测试例子：

```javascript
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show () {
    return this.data;
}
function BST () {
    this.root = null;
    this.insert = insert;
    // this.inOrder = inOther;
}
function insert (data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function postOrder(node) {
    if(!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
postOrder(nums.root);
```

测试结果：

>3

>22

>16

>37

>99

>45

>23


### 在二叉查找树上进行查找

对BST通常有下列三种类型的值：

1. 查找给定值
2. 查找最小值
3. 查找最大值

#### 查找最小值和最大值

因为较小的值总是在左节点上，在BST上查找最小值，只需要遍历左子树，直到找到最后一个节点。

查找最小值的方法定义如下：

```javascript
function getMin() {
    var current = this.root;
    while(!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}
```

在BST上查找最大值，只需要遍历右子树，直到找到最后一个节点，该节点上保存的值为最大值。

该方法定义如下：

```javascrpt
function getMax() {
    var current = this.root;
    while(!(current.right == null)) {
        current = current.right;
    }
    return current.right;
}
```

测试getMin方法和getMax方法：

```javascript
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
console.log('the min is: ' + min);
var max = nums.getMax();
console.log('the max is: ' + max);
```

测试结果：

>the min is: 3

>the max is: 99


#### 查找给定值

在BST上查找给定值，需要比较该值和当前节点上的值的大小。通过比较，就能确定如果给定值不在当前结点时，是向左遍历还是向右遍历。

该方法定义为：

```javascript
function getMax() {
    var current = this.root;
    while(!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}
function find(data) {
    var current = this.root;
    while(current != null) {
        if(current.data == data) {
            return current;
        } else if(data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}
```

### 从二叉树上删除节点

从BST中删除节点的第一步是判断当前结点是否包含带删除数据，如果包含，则删除该节点；如果不包含，则比较当前节点上的数据和待删除节点的数据：如果待删除数据小于当前节点的数据，则移至当前节点的左节点进行比较；如果删除数据大于当前节点的数据，则移至当前节点的右结点进行比较。

如果待删除节点是叶子节点，那么只需要将从父节点指向它的链接指向null。

如果待删除节点只包含一个节点，那么原本指向它的节点就得做些调整，使其指向它的子节点。

如果待删除节点包含两个字节点，正确的方法有两种：查找待删除节点左子树上的最大值；查找待删除节点右子树上的最小节点。

```javascript
function remove(data) {
    root = removeNode(this.root, data);
}
function removeNode(node, data) {
    if(node == null) {
        return null;
    }
    if(data == node.data) {
        // 如果没有子节点的节点（叶子节点）
        if(node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if(node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if(node.right == null) {
            return node.left;
        }
        // 有两个子节点的节点
        var tempNode = getSmalllest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}
```

### 计数

使用BST记录 考试成绩的分布：给定一组考试成绩，可以写一段程序将它们加入一个BST，如果某成绩尚未在BST中出现，就将其加入BST；如果已经出现，就将出现的次数加1.

先修改Node对象的定义，为其增加记录成绩出现次数的成员。

```javascript
function Node (data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}
```

当向BST插入一条成绩（Node对象）时，将出现频次设为1。此时BST的`insert()`方法还能正常工作，但是，当次数增加时，就需要一个新方法来更新BST中的节点。

```javascript
function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}
```

## 图和图算法

### 图的定义

图是由边的集合及顶点的集合组成。

如果一个图的顶点对是有序的，则称之为**有向图**。在对有向图中的顶点对排序后，便可以在两个顶点之间绘制一个箭头，有向图表明了顶点的流向。

如果图是无序的，则称之为无序图。

图中的一系列顶点构成路径，路径中所有的顶点都由边连接。路径的长度用路径中第一个顶点到最后一个顶点之间边的数量表示。由指向自身的顶点组成的路径称之为**环**，环的长度为0.

**圈**是至少有一条边的路径，且路径的第一个顶点和最后一个顶点相同。无论是有向图还是无向图，只要是没有重复边或重复顶点的圈，就是一个简单圈。除了第一个和最后一个顶点外，路径的其他顶点有重复的圈称为**平凡圈**。

如果两个顶点之间有路径，那么这两个顶点就是**强连通**的，反之亦然。如果有向图的所有的顶点都是强连通的，那么这个有向图也是强连通的。

### 图类

#### 表示顶点

创建一个`Vertex`类来保存顶点和边。Vertex类有两个数据成员：一个用于标识顶点，另一个是表明这个顶点是否被访问过的布尔值。

```javascript
function Vertex(label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
}
```

将所有的顶点保存到数组中，在图类里，可以通过他们在数组中的位置引用他们。

#### 表示边

将表示图的边的方法称为**邻接表**或**邻接表数组**。这种方法是将边存储为由顶点的相邻顶点列表构成的数组，并以此顶点为索引。

另一种表示图边的方法称为**邻接矩阵**。它是一个二维数组，其中的元素表示两个顶点之间是否由一条边。

#### 构件图

```javascript
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
// 添加顶点函数
// 当调用这个函数并传入顶点A和B时，函数会先查找顶点A的邻接表，将顶点B添加到列表中，然后再查找顶点B的邻接表，将顶点A加入列表。最后，这个函数会将边数加1
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
// 打印所有顶点及其相邻顶点列表
function showGraph() {
    for(let i = 0; i < this.vertices; ++i) {
        console.log(i + '->');
        for(let j = 0; j < this.vertices; ++j) {
            if(this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + '');
            }
            console.log('');
        }
    }
}
```

#### 一个完整的Graph类的完整定义

```javascript
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
// 添加顶点函数
// 当调用这个函数并传入顶点A和B时，函数会先查找顶点A的邻接表，将顶点B添加到列表中，然后再查找顶点B的邻接表，将顶点A加入列表。最后，这个函数会将边数加1
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
// 打印所有顶点及其相邻顶点列表
function showGraph() {
    for(let i = 0; i < this.vertices; ++i) {
        console.log(i + '->');
        for(let j = 0; j < this.vertices; ++j) {
            if(this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + '');
            }
            console.log('');
        }
    }
}

// 测试
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
```

运行结果：

`
0-> 1 2
1-> 0 3
2-> 0 4
3-> 1
4-> 2
`

### 搜索图

在图上可以执行两种基础搜索：深度优先搜索和广度优先搜索。

#### 深度优先搜索

深度优先搜索包括从一条路径的起始顶点开始追溯，直到到达最后一个顶点，然后回溯，继续追溯下一条路径，直到到达最后的定点，如此往复，直到没有路径为止。

完整代码:

```javascript
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
}
// 添加顶点函数
// 当调用这个函数并传入顶点A和B时，函数会先查找顶点A的邻接表，将顶点B添加到列表中，然后再查找顶点B的邻接表，将顶点A加入列表。最后，这个函数会将边数加1
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
// 打印所有顶点及其相邻顶点列表
function showGraph() {
    for(let i = 0; i < this.vertices; ++i) {
        console.log(i + '->');
        for(let j = 0; j < this.vertices; ++j) {
            if(this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + '');
            }
            console.log('');
        }
    }
}
function dfs(v) {
    this.marked[v] = true;
    if(this.adj[v] != undefined) {
        console.log('visted vertex: ' + v);
    }
    for(let w in this.adj[v]) {
        if(!this.marked[w]) {
            this.dfs(w)
        }
    }
}
```

#### 广度优先搜索

广度优先搜索算法使用了抽象的队列而不是数组来对已访问过的顶点进行排序。其算法工作原理如下：

1. 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中；
2. 从图中取下一个顶点v，添加到已访问的顶点列表；
3. 将所有与v相邻的未访问顶点添加到队列。

以下是广度优先搜索函数的定义 

```javascript
function dfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);  // 添加到队尾
    while(queue.length > 0) {
        var v = queue.shift();  // 从队首移除
        if(this.adj[v] != undefined) {
            console.log('visited vertex: ' + v);
        }
        for(let w in this.adj[v]) {
            if(!this.marked[w]) {
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}
```

### 查找最短路径

#### 广度优先搜索对应的最短路径

在执行广度优先搜索时，会自动查找从一个顶点到另一个相连顶点的最短路径。

#### 确定路径

首先，需要一个数组来保存从一个顶点到下一个顶点的所有边，将这个数组命名为`edgeTo`。因为从始至终使用的都是广度优先搜索函数，所以每次都会遇到一个没有标记的顶点，除了对它进行标记外，还会从邻接表列表中我们正在探索的那个顶点添加一条边到这个顶点。

下面是确定最短路径的完整程序：

```javascript
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for(var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.bfs = bfs;
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathto = hasPathto;
}
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function showGraph() {
    for(var i = 0; i < this.vertices; ++i) {
        console.log(i + '->');
        visited.push(this.vertexList[i]);
        for(var j = 0; j < this.vertices; ++j) {
            if(this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + '');
            }
            console.log('');
        }
    }
}
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0) {
        var v = queue.shift();
        if(v == undefined) {
            console.log('visited vertex: ' + v);
        }
        for(let w in this.adj[v]) {
            if(!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.unshift(w);
            }
        }
    }
}
function dfs(v) {
    this.marked[v] = true;
    if(this.adj[v] != undefined) {
        console.log('Visited vertex: ' + v);
    }
    for(var w in this.adj[v]) {
        if(this.marked[w]) {
            this.dfs(w);
        }
    }
}
function pathTo(v) {
    var source = 0;
    if(!this.hasPathto(v)) {
        return undefined;
    }
    var path = [];
    for(var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}
function hasPathto(v) {
    return this.marked[v];
}

// 测试
g = new Graph(5);
g.bfs(0);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
var vertex = 4;
var paths = g.pathTo(vertex);
while(paths.length > 0) {
    if(paths.length > 1) {
        console.log(paths.pop() + '-');
    } else {
        console.log(paths.pop());
    }
}
```

### 拓扑排序

**拓扑排序**会对有向图的所有顶点进行排序，使有向边从前面的顶点指向后面的顶点。

#### 拓扑排序算法
拓扑排序算法与深度优先搜索类似，不同的是，拓扑排序算法不会立即输出已访问的顶点，而是访问当前顶点邻接表中的所有相邻顶点，直到这个列表穷尽，才将当前顶点压入栈中。

#### 实现拓扑排序算法

拓扑排序算法被拆为两个函数，第一个函数`topSort()`，会设置排序进程并调用一个辅助函数`topSortHelper()`，然后会显示排序好的顶点列表。

主要工作是在递归函数`topSortHelper()`中完成的。这个函数会将当前顶点标记为已访问，然后递归访问当前顶点邻接表中的每个相邻顶点，标记这些顶点为已访问，最后，将当前顶点压入栈。

```javascript
function topSort() {
    var stack = [];
    var visited = [];
    for(var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for(var i = 0; i < stack.length; i++) {
        if(visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for(var i = 0; i < stack.length; i++) {
        if(stack[i] != undefined && stack[i] != false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
}
function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for(var w in this.adj[v]) {
        if(!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}
```

下面是整个部分的完整定义：

```javascript
function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for(var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.bfs = bfs;
    this.edgeTo = [];
    this.hasPathto = hasPathto;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function showGraph() {
    var visited = [];
    for(var i = 0; i < this.vertices; ++i) {
        console.log(this.vertexList[i] + '->');
        visited.push(this.vertexList[i]);
        for(var j = 0; j < this.vertices; ++j) {
            if(this.adj[i][j] != undefined) {
                if(visited.indexOf(this.vertexList[j]) < 0) {
                    console.log(this.vertexList[j] + '');
                }
            }
        }
        console.log('');
        visited.pop();
    }
}
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.unshift(s);
    while(queue.length > 0) {
        var v = queue.shift();
        if(typeof(v) != 'string') {
            console.log('visited vertex: ' + v);
        }
        for(let w in this.adj[v]) {
            if(!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.unshift(w);
            }
        }
    }
}
function dfs(v) {
    this.marked[v] = true;
    if(this.adj[v] != undefined) {
        console.log('Visited vertex: ' + v);
    }
    for(var w in this.adj[v]) {
        if(this.marked[w]) {
            this.dfs(w);
        }
    }
}
function pathTo(v) {
    var source = 0;
    if(!this.hasPathto(v)) {
        return undefined;
    }
    var path = [];
    for(var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}
function hasPathto(v) {
    return this.marked[v];
}
function topSort() {
    var stack = [];
    var visited = [];
    for(var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for(var i = 0; i < stack.length; i++) {
        if(visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for(var i = 0; i < stack.length; i++) {
        if(stack[i] != undefined && stack[i] != false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
}
function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for(var w in this.adj[v]) {
        if(!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}
// 测试
g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ['cs1', 'cs2', 'Data Structures', 'Assembly Language', 'Operating Systems', 'Algorithms'];
g.showGraph();
g.topSort();
```

## 排序算法

### 数组测试平台

创建一个数组类和一些封装常规数组操作的函数：插入新数据，显示数组数据集调用不同的排序算法，这个类还包含了一个`swap()`函数，用于交换数组元素。

```javascript
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    for(var i  = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}
function setData() {
    for(var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}
function clear() {
    for(var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    var restr = '';
    for(var i = 0; i < this.dataStore.length; ++i) {
        restr += this.dataStore[i] + ' ';
        if(i > 0 & i % 10 == 0) {
            restr += '\n';
        }
    }
    return restr;
}
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
```

测试程序：

```javascript
var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
```

运行结果：

`3 59 95 98 94 44 84 9 100 9 85 18 52 56 20 85 50 78 55 22 33 79 66 8 65 1 95 44 28 34 93 61 92 23 17 8 99 41 92 61 62 23 25 14 53 79 36 91 73 54 8 21 43 25 2 81 51 15 36 31 23 22 12 39 32 78 94 0 41 75 93 6 16 77 97 53 75 78 41 32 71 73 39 58 71 22 72 0 87 91 11 51 16 58 46 15 56 34 55 33`

### 基本排序算法

#### 冒泡排序

冒泡排序算法是最慢的排序算法之一，但也是最容易实现的排序算法。

原理：比较两个相邻的元素，将值大的元素交换到右边。

思路：

1. 第一次比较：首先比较第一和第二个数，将小数放在前面，将大数放在后面。
2. 比较第2和第3个数，将小数 放在前面，大数放在后面。
3. 如此继续，知道比较到最后的两个数，将小数放在前面，大数放在后面，重复步骤，直至全部排序完成
4. 在上面一趟比较完成后，最后一个数一定是数组中最大的一个数，所以在比较第二趟的时候，最后一个数是不参加比较的。
5. 在第二趟比较完成后，倒数第二个数也一定是数组中倒数第二大数，所以在第三趟的比较中，最后两个数是不参与比较的。
6. 依次类推，每一趟比较次数减少依次

冒泡排序函数：

```javascript
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for(var outer = numElements; outer >= 2; --outer) {
        for(var inner = 0; inner <= outer - 1; ++inner) {
            if(this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}
```


使用`bubbleSort()`对10个数字进行排序：

```javascript
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    for(var i  = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}
function setData() {
    for(var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}
function clear() {
    for(var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    var restr = '';
    for(var i = 0; i < this.dataStore.length; ++i) {
        restr += this.dataStore[i] + ' ';
        if(i > 0 & i % 10 == 0) {
            restr += '\n';
        }
    }
    return restr;
}
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for(var outer = numElements; outer >= 2; --outer) {
        for(var inner = 0; inner <= outer - 1; ++inner) {
            if(this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
myNums.bubbleSort();
console.log();
console.log(myNums.toString());
```

运行结果：

`8 2 6 4 6 9 10 3 1 9`

`1 2 3 4 6 6 8 9 9 10`


在`bubbleSort()`函数中添加对`toString()`函数的调用：

```javascript
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for(var outer = numElements; outer >= 2; --outer) {
        for(var inner = 0; inner <= outer - 1; ++inner) {
            if(this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
        console.log(this.toString());
    }
}
```

重新执行上述函数：

`2 7 10 1 3 9 5 3 0 6`

`2 7 1 3 9 5 3 0 6 10`

`2 1 3 7 5 3 0 6 9 10`

`1 2 3 5 3 0 6 7 9 10`

`1 2 3 3 0 5 6 7 9 10`

`1 2 3 0 3 5 6 7 9 10`

`1 2 0 3 3 5 6 7 9 10`

`1 0 2 3 3 5 6 7 9 10`

`0 1 2 3 3 5 6 7 9 10`

`0 1 2 3 3 5 6 7 9 10`


`0 1 2 3 3 5 6 7 9 10`


#### 选择排序

选择排序的思想：选择排序，从头至尾扫描序列，找出最小的一个元素，和第一个元素交换，接着从剩下的元素中继续这种选择和交换方式，最终得到一个有序序列。

选择排序会用到嵌套循环。外循环从数组的第一个元素移动到倒数第二个元素；内循环从第二个数组元素移动到最后一个元素，查找比当前外循环所指向的元素小的元素。每次内循环迭代后，数组中最小的值都会被赋值到合适的位置。

下面是选择排序函数`selectionSort()`的代码：

```javascript
function selectionSort() {
    var min,temp;
    for(var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for(var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if(this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
            swap(this.dataStore, outer, min);
        }
    }
}
```

运行程序：

`3 6 10 4 2 1 10 7 0 0`

`0 6 10 4 3 2 10 7 1 0`

`0 0 10 6 4 3 10 7 2 1`

`0 0 1 10 6 4 10 7 3 2`

`0 0 1 2 10 6 10 7 4 3`

`0 0 1 2 3 10 10 7 6 4`

`0 0 1 2 3 4 10 10 7 6`

`0 0 1 2 3 4 6 10 10 7`

`0 0 1 2 3 4 6 7 10 10`

`0 0 1 2 3 4 6 7 10 10`


`0 0 1 2 3 4 6 7 10 10`


#### 插入排序

插入排序的思想：将数组的第一个数认为是有序数组，从后往前（从前往后）扫描该有序数组，把数组中其余n-1个数，根据数值的大小，插入到有序数组中，直至数组中的所有数有序排列为止。这样的话，n个元素需要进行n-1趟排序。

插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置。

下面是插入排序`insertionSort()`的代码

```javascript
function insertionSort() {
    var temp, inner;
    for(var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while(inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
        console.log(this.toString());
    }
}
```

运行程序：

`4 10 7 6 3 1 9 8 6 0`

`4 10 7 6 3 1 9 8 6 0`

`4 7 10 6 3 1 9 8 6 0`

`4 6 7 10 3 1 9 8 6 0`

`3 4 6 7 10 1 9 8 6 0`

`1 3 4 6 7 10 9 8 6 0`

`1 3 4 6 7 9 10 8 6 0`

`1 3 4 6 7 8 9 10 6 0`

`1 3 4 6 6 7 8 9 10 0`

`0 1 3 4 6 6 7 8 9 10`


`0 1 3 4 6 6 7 8 9 10`


#### 基本排序算法的计时比较

计时系统是基于Javascript Data对象的`getTime()`函数来取得系统时间，这个函数的运行方式如下:`var start = new Date().getTime();`

要记录代码执行的时间，首先启动计时器，执行代码，然后在代码执行结束时停止计时器。计时器停止时记录的时间与计时器启动时记录的时间之差就是排序所花费的时间。

为排序函数计时（对长度为100的数组进行排序）：

```javascript
var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();

/**对冒泡排序进行计时**/
// 开始计时：
var start = new Date().getTime();
myNums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('对' + numElements + '个元素执行冒泡排序所消耗的时间为：' + elapsed + '毫秒');

/**对选择排序进行计时**/
// 开始计时：
start = new Date().getTime();
myNums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log('对' + numElements + '个元素执行选择排序所消耗的时间为：' + elapsed + '毫秒');

/**对插入排序进行计时**/
// 开始计时：
start = new Date().getTime();
myNums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log('对' + numElements + '个元素执行插入排序所消耗的时间为：' + elapsed + '毫秒');
```

运行结果：

对100个元素执行冒泡排序所消耗的时间为：1毫秒

对100个元素执行选择排序所消耗的时间为：5毫秒

对100个元素执行插入排序所消耗的时间为：0毫秒


对1000个数字进行排序，运行结果：

对1000个元素执行冒泡排序所消耗的时间为：10毫秒

对1000个元素执行选择排序所消耗的时间为：10毫秒

对1000个元素执行插入排序所消耗的时间为：0毫秒


对10000个数字进行排序，运行结果：

对10000个元素执行冒泡排序所消耗的时间为：322毫秒

对10000个元素执行选择排序所消耗的时间为：133毫秒

对10000个元素执行插入排序所消耗的时间为：3毫秒


### 高级排序

高级排序包括快速排序、希尔排序、归并排序和堆排序。

#### 希尔排序

希尔排序的工作原理：通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。

下面是希尔排序算法`shellSort()`的代码：

```javascript
function shellSort() {
    for(var g = 0; g < this.gaps.length; ++g) {
        for(var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for(var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
        console.log(this.dataStore);

    }
}
```

然后将`this.gaps = [5, 3, 1];`添加到`CArray()`函数中。

然后再添加一个函数：

```javascript
function setGraps(arr) {
    this.gaps = arr;
}
```

对小数据集合执行希尔排序：

```javascript
var myNums = new CArray(10);
myNums.setData();
console.log('希尔排序前：');
console.log(myNums.toString());
console.log('希尔排序中：');
myNums.shellSort();
console.log('希尔排序后：');
console.log(myNums.toString());
```

运行结果：

希尔排序前：

`3 3 7 4 10 8 2 5 7 6`

希尔排序中：

`[ 3, 2, 5, 4, 6, 8, 3, 7, 7, 10 ]  // 间隔5`

`[ 3, 2, 5, 3, 6, 7, 4, 7, 8, 10 ]  // 间隔3`

`[ 2, 3, 3, 4, 5, 6, 7, 7, 8, 10 ]  // 间隔1`

希尔排序后：

`2 3 3 4 5 6 7 7 8 10`


##### 计算动态间隔序列

Robert Sedgewick定义了一个`shellsort()`函数，在这个函数中可以通过一个公式来对希尔排序用到的间隔序列进行动态计算。

`Sedgewick`的算法是通过下面的代码片段来决定初始间隔值的：

```javascript
var N = this.dataStore.length;
var h = 1;
while(h < N / 3) {
    h = 3 * h + 1;
}
```

间隔值确定好后，这个函数就可以像之前定义的`shellsort()`函数一样运行了，唯一的区别就是，回到外循环之前的最后一条语句会计算一个新的间隔值：`h = (h - 1) / 3`

动态计算间隔序列的希尔排序：

```javascript
// 动态希尔排序算法：
function shellSort1() {
    var N = this.dataStore.length;
    var h = 1;
    while(h < N / 3) {
        h = 3 * h + 1;
    }
    while(h >= 1) {
        console.log('间隔为：' + h);
        for(var i = h; i < N; i++) {
            for(var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                swap(this.dataStore, j, j -h);
            }
        }
        h = (h - 1) / 3;
        console.log('排序后为：' + this.dataStore);
    }
}
```

执行下列程序：

```javascript
var myNums = new CArray(100);
myNums.setData();
console.log('希尔排序前1：');
console.log(myNums.toString());
console.log('希尔排序中1：');
myNums.shellSort1();
console.log('希尔排序后1：');
console.log(myNums.toString());
```

运行结果：

希尔排序前1：

65 31 51 85 0 35 7 90 31 40 28

78 75 39 37 72 22 15 31 2 21

100 15 98 87 44 40 35 32 46 57

2 55 27 10 56 6 39 8 37 6

26 18 41 99 86 14 93 31 82 100

12 16 29 26 47 73 52 34 18 22

41 32 19 57 35 79 25 55 86 15

79 69 57 66 79 0 5 51 57 90

43 61 52 47 12 36 77 22 29 40

0 79 63 5 76 87 17 88 19

希尔排序中1：

间隔为：40,排序后为：6,26,18,41,0,12,7,77,22,29,28,0,16,29,5,47,22,15,31,2,21,41,15,19,57,35,40,25,32,46,15,2,55,27,10,56,0,5,8,37,65,31,51,52,47,35,14,90,31,40,40,12,75,39,26,72,73,17,34,18,22,100,32,98,87,44,79,35,55,86,57,79,69,57,66,79,6,39,51,57,90,43,61,85,99,86,36,93,31,82,100,78,79,63,37,76,87,52,88,19

间隔为：13,排序后为：6,5,18,22,0,2,2,14,10,15,0,0,8,29,25,26,37,15,12,7,18,19,29,19,5,12,37,26,31,41,15,17,34,21,22,31,28,6,16,40,39,32,43,52,31,35,27,22,56,31,40,35,44,57,35,46,61,47,52,69,36,66,32,57,39,51,65,47,51,73,57,55,77,41,93,40,82,87,75,79,63,55,76,85,79,86,57,100,79,98,100,78,79,90,72,86,87,99,88,90

间隔为：4,排序后为：0,2,0,0,5,5,2,7,6,6,12,14,8,12,15,17,10,15,16,19,18,15,18,22,28,19,22,22,31,21,25,26,31,29,27,26,34,31,29,31,36,32,32,35,37,35,35,40,39,41,37,40,39,41,40,46,44,47,43,47,51,51,52,52,56,55,57,55,61,57,57,57,63,66,65,69,77,73,72,78,79,86,75,79,79,87,76,85,79,90,88,86,82,98,93,90,87,99,100,100

间隔为：1,排序后为：0,0,0,2,2,5,5,6,6,7,8,10,12,12,14,15,15,15,16,17,18,18,19,19,21,22,22,22,25,26,26,27,28,29,29,31,31,31,31,32,32,34,35,35,35,36,37,37,39,39,40,40,40,41,41,43,44,46,47,47,51,51,52,52,55,55,56,57,57,57,57,61,63,65,66,69,72,73,75,76,77,78,79,79,79,79,82,85,86,86,87,87,88,90,90,93,98,99,100,100

希尔排序后1：

0 0 0 2 2 5 5 6 6 7 8

10 12 12 14 15 15 15 16 17 18

18 19 19 21 22 22 22 25 26 26

27 28 29 29 31 31 31 31 32 32

34 35 35 35 36 37 37 39 39 40

40 40 41 41 43 44 46 47 47 51

51 52 52 55 55 56 57 57 57 57

61 63 65 66 69 72 73 75 76 77

78 79 79 79 79 82 85 86 86 87

87 88 90 90 93 98 99 100 100


比较`shellSort()`算法：

```javascript
var myNums = new CArray(10000);
myNums.setData();

/**计算硬编码间隔序列的希尔排序**/
var start = new Date().getTime();
myNums.shellSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('硬编码间隔序列的希尔排序消耗的时间为：' + elapsed + '毫秒');

/**计算动态间隔序列的希尔排序**/
start = new Date().getTime();
myNums.shellSort1();
stop = new Date().getTime();
elapsed = stop - start;
console.log('动态间隔序列的希尔排序消耗的时间为：' + elapsed + '毫秒');
```

运行结果：

硬编码间隔序列的希尔排序消耗的时间为：31毫秒

动态间隔序列的希尔排序消耗的时间为：4毫秒


#### 归并排序

实现原理：把一系列排好序的子序列合并成一个大的完整有序序列。

##### 自顶向下的归并排序

通常来说，归并排序会使用递归的算法来实现，然而，在JS中这种方法不太可行，因为这个算法的递归深度对它来讲太深了，所以使用一种非递归的方式来实现这个算法：自底向上的归并排序。

##### 自底向上的归并排序

这个算法首先将数据集分解为一组只有一个元素的数组，然后通过创建一组左右子数组将它们慢慢合并起来，每次合并都保存一部分排好序的数据，直到最后剩下的这个数组所有的数据都已完美排序。

JS实现的自底向上归并排序算法：

```javascript
function mergeSort(arr) {
    if(arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while(step < arr.length) {
        left = 0;
        right = step;
        while(right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if(right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for(var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for(var i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length - 1] = Infinity;  // 哨兵值
    leftArr[leftArr.length - 1] = Infinity;  // 哨兵值
    var m = 0; 
    var n = 0;
    for(var k = startLeft; k < stopRight; ++k) {
        if(leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log('left array - ', leftArr);
    console.log('right array - ', rightArr);
}

var nums = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
console.log(nums);
console.log();
mergeSort(nums);
console.log();
console.log(nums);
```

运行结果：

`[ 6, 10, 1, 9, 4, 8, 2, 7, 3, 5 ]`


`left array -  [ 6, Infinity ]`

`right array -  [ 10, Infinity ]`

`left array -  [ 1, Infinity ]`

`right array -  [ 9, Infinity ]`

`left array -  [ 4, Infinity ]`

`right array -  [ 8, Infinity ]`

`left array -  [ 2, Infinity ]`

`right array -  [ 7, Infinity ]`

`left array -  [ 3, Infinity ]`

`right array -  [ 5, Infinity ]`

`left array -  [ 6, 10, Infinity ]`

`right array -  [ 1, 9, Infinity ]`

`left array -  [ 4, 8, Infinity ]`

`right array -  [ 2, 7, Infinity ]`

`left array -  [ 1, 6, 9, 10, Infinity ]`

`right array -  [ 2, 4, 7, 8, Infinity ]`

`left array -  [ 1, 2, 4, 6, 7, 8, 9, 10, Infinity ]`

`right array -  [ 3, 5, Infinity ]`


`[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]`


已添加归并排序的CArray类：

```javascript
function CArray(numElements) {
    this.gaps = [5, 3, 1];
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.shellSort = shellSort;
    this.shellSort1 = shellSort1;
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
    for(var i  = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function mergeSort() {
    if(this.dataStore.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while(step < this.dataStore.length) {
        left = 0;
        right = step;
        while(right + step <= this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if(right < this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
        }
        step *= 2;
    }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for(var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for(var i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length - 1] = Infinity;  // 哨兵值
    leftArr[leftArr.length - 1] = Infinity;  // 哨兵值
    var m = 0; 
    var n = 0;
    for(var k = startLeft; k < stopRight; ++k) {
        if(leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log('left array - ', leftArr);
    console.log('right array - ', rightArr);
}

var myNums = new CArray(10);
myNums.setData();
console.log(myNums.toString());
myNums.mergeSort();
console.log(myNums.toString());
```

运行结果：

`5 4 2 3 7 0 5 6 5 2`

`left array -  [ 5, Infinity ]`

`right array -  [ 4, Infinity ]`

`left array -  [ 2, Infinity ]`

`right array -  [ 3, Infinity ]`

`left array -  [ 7, Infinity ]`

`right array -  [ 0, Infinity ]`

`left array -  [ 5, Infinity ]`

`right array -  [ 6, Infinity ]`

`left array -  [ 5, Infinity ]`

`right array -  [ 2, Infinity ]`

`left array -  [ 4, 5, Infinity ]`

`right array -  [ 2, 3, Infinity ]`

`left array -  [ 0, 7, Infinity ]`

`right array -  [ 5, 6, Infinity ]`

`left array -  [ 2, 3, 4, 5, Infinity ]`

`right array -  [ 0, 5, 6, 7, Infinity ]`

`left array -  [ 0, 2, 3, 4, 5, 5, 6, 7, Infinity ]`

`right array -  [ 2, 5, Infinity ]`

`0 2 2 3 4 5 5 5 6 7`


#### 快速排序

快速排序是处理大数据集最快的排序算法之一。它是通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列，该算法不断重复这个步骤直到所有数据都是有序的。

这个算法首先要在列表中选择一个元素作为**基准值**。数据排序围绕基准值进行，将列表中小于基准值的元素移到数据的底部，将大于基准值的元素移到数组的顶部。

快速排序的算法如下：

1. 选择一个基准元素，将列表分割成两个子序列；
2. 对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面；
3. 分别对较小元素的子序列和较大元素的子序列重复步骤1和2.

这个算法的JS程序如下：

```javascript
function qSort(list) {
    if(list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for(var i = 1; i < list.length; i++) {
        if(list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, aSort(greater));
}
```

这个函数首先检查数组的长度是否为0，如果是，那么这个数组就不需要任何排序，函数直接返回。否则创建两个数组，一个用来存放比基准值小的元素，另一个用来存放比基准值大的元素。这里的基准值取自数组的第一个元素。接下来，这个函数对原始数组的元素进行遍历，根据他们与基准值的关系将它们放在合适的数组中。然后对于较小的数组和较大的数组分别递归调用这个函数。当递归结束时，再将较大的数组和较小的数组连接起来，最终形成一个有序数组并将结果返回。

使用快速排序算法对数据进行排序：

```javascript
function qSort(list) {
    if(list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for(var i = 1; i < list.length; i++) {
        if(list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}
var a = [];
for(var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}
console.log(a);
console.log();
console.log(qSort(a));
```

运行结果：

`[ 18, 48, 74, 10, 91, 14, 90, 42, 1, 16 ]`

`[ 1, 10, 14, 16, 18, 42, 48, 74, 90, 91 ]`

快速排序算法非常适用于大型数据集合；在处理小数据集合时性能反而会下降。


## 检索算法

在列表中查找数据有两种方式：顺序查找和二分查找。顺序查找适用于元素随机排列的列表；二分查找适用于元素已排序的列表。二分查找效率更高，但是在查找之前要对列表进行排序。

### 顺序查找

顺序查找：从列表的第一个元素开始对列表元素逐个进行判断，直到找到了想要的结果，或者直到列表结尾也没有找到。

有时也被称为线性查找。它属于暴力查找的一种，在执行查找时可能会访问到数据结构里的所有元素。

测试顺序查找的代码：

```javascript
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
var nums = [];
for(var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() *101);
}
var num = Math.floor(Math.random() * 10);
console.log('要查找的数为:', num);
var position = seqSearch(nums, num);
if(position > -1) {
    console.log(num + '在这个数组中的索引位置是：' + position);
} else {
    console.log(num + '没有出现在这个数组中');
}
dispArr(nums);
```

运行结果：

`要查找的数为: 3`

`3在这个数组中的索引位置是：12`

`9 57 26 59 90 25 83 91 14 26`

`76 19 3 40 44 98 89 70 68 7`

`92 79 78 21 48 50 23 83 73 7`

`93 94 93 51 75 97 77 77 11 72`

`45 26 43 45 11 18 58 44 91 85`

`36 62 89 15 82 25 71 66 23 10`

`80 84 35 83 51 75 52 40 86 18`

`84 76 72 75 73 1 98 100 55 10`

`91 38 55 5 13 71 10 99 38 84`

`61 0 72 54 74 94 79 4 20 77`


#### 查找最小值和最大值

如何数组中查找最小值：

1. 将数组第一个元素赋值给一个变量，把这个变量作为最小值；
2. 开始遍历数组，从第二个元素开始依次同当前最小值进行比较；
3. 如果当前元素数值小于当前最小值，则将当前元素设为新的最小值；
4. 移动到下一个元素，并且重复步骤3；
5. 当程序结束时，这个变量中存储的就是最小值。

同理，查找最大值也与此相似。

查找最小值的代码：

```javascript
function findMin(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; ++i) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}
var nums = [];
for(var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() *101);
}
var minValue = findMin(nums);
dispArr(nums);
console.log('最小值为', minValue);
```

查找最大值函数：

```javascript
function findMax(arr) {
    var max = arr[0];
    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

未更新完。。。

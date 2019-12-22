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

未更新完。。。

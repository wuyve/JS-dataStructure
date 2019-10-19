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
3. 可以用不同类型的数据存储方式实现cList类，迭代器为访问列表里的元素提供了一种统一的方式。

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

栈是一种**先入后出*****LIFO(last-in-first-out)***的数据结构。

### 对栈的操作

未更新完。。。
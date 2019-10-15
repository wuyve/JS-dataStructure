// 实现二叉查找树

// 首先定义一个Node对象，用来保存数据，也保存和其他节点的连接（left和right）
// show()方法用来显示保存在节点中的数据
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show () {
    return this.data;
}
// 然后创建一个类,用来表示二叉查找树(BST).类中只包含一个数据成员: 一个表示二叉查找树根节点的Node对象.该类的构造函数将根节点初始化为null,以此创建一个空节点.
// 1. BST首先要有一个insert()方法,用来向树中加入新的节点;
// 2. 其次检查BST是否有根节点,如果没有,那么这是棵新树,该节点就是根节点,这个方法到此也就完成了,否则进入下一步;
// 3.如果待插入节点不是根节点,那么就要遍历BST,找到插入的适当位置.该过程类似于遍历链表,用一个变量存储当前节点,一层层地遍历BST.
// 4. 进入到BST之后,下一步就要决定将这个节点放在哪个地方.找到正确的插入点时,会跳出循环.
// 查找正确的插入点的算法如下:
// 1. 设根节点为当前节点;
// 2. 如果待插入节点保存的数据小于当前节点,则设新的当前节点为原节点的左节点;反之,执行第4步; 
// 3. 如果当前节点的左节点为null,就将新的节点插入到这个位置退出循环;否则继续执行下一次循环;
// 4. 设新的当前节点为原节点的右节点;
// 5. 如果当前节点的右节点为null,就将新的节点插入到这个位置,退出循环;否则继续执行下一次循环.
function BST () {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOther;
}
function insert () {
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
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
    this.getMin = getMin;
    this.getMax = getMax;
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
function getMin() {
    var current = this.root;
    while(!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}
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

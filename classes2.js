var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.add('John');
queue.add('Doe');
queue.remove();
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.data = [];
    }
    Queue2.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue2.prototype.addName = function (item) {
        this.data.push(item);
    };
    Queue2.prototype.addCondition = function (item) {
        this.data.push(item);
    };
    Queue2.prototype.remove = function () {
        this.data.shift();
    };
    return Queue2;
}());
var queue2 = new Queue2();
queue2.add('John');
queue2.add(false);
queue2.addName('Doe');
queue2.addCondition(true);
queue2.remove();

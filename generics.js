var Queue3 = /** @class */ (function () {
    function Queue3() {
        this.data = [];
    }
    Queue3.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue3.prototype.remove = function () {
        this.data.shift();
    };
    return Queue3;
}());
var queue3 = new Queue3();
queue3.add(1);
queue3.add(2);
queue3.add(3);
queue3.remove();
var queue4 = new Queue3();
queue4.add('John');
queue4.add('Doe');
queue4.add('Eren');
queue4.add('Yeager');
queue4.remove();
var queue5 = new Queue3();
queue5.add('John');
queue5.add('Doe');
queue5.remove();

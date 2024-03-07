class Queue {
    private data: string[] = [];
    add(item: string) {
        this.data.push(item);
    }

    remove() {
        this.data.shift();
    }
}

const queue = new Queue();

queue.add('John');
queue.add('Doe');

queue.remove();






class Queue2 {
    private data: (string | boolean)[] = [];
    add(item: string | boolean) {
        this.data.push(item);
    }

    addName(item: string) {
        this.data.push(item);
    }

    addCondition(item: boolean) {
        this.data.push(item);
    }
    remove() {
        this.data.shift();
    }
}

const queue2 = new Queue2();

queue2.add('John');
queue2.add(false);
queue2.addName('Doe');
queue2.addCondition(true);

queue2.remove();




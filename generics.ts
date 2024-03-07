class Queue3<T> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove() {
        this.data.shift();
    }
}



const queue3 = new Queue3<number>();
queue3.add(1);

queue3.add(2);

queue3.add(3);

queue3.remove();



const queue4 = new Queue3<string>();

queue4.add('John');
queue4.add('Doe');

queue4.add('Eren');
queue4.add('Yeager');

queue4.remove();




const queue5 = new Queue3();

queue5.add('John');
queue5.add('Doe');

queue5.remove();
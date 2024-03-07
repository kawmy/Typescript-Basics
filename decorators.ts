

function MenuItem(value) {
    return class extends value {
        id = 'abc';
    }
}


function MenuItem2(itemId: string) {
    return function (value) {
        return class extends value {
            id = itemId;
        }
    }
}

// @MenuItem
@MenuItem2('abcd')
class Pizza {
    id: string;
}

class Hamburger {
    id: string;
}

console.log(new Pizza().id)
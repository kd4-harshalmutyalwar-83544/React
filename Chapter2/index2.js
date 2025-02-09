const obj = {
    firstName : "Harshal",
    printName : () => {
        console.log(this.firstName);
    },
    printName2 : function () {
        console.log(this.firstName);
    },
};

const obj2 = {
    firstName: "Akshay",
};

obj.printName(); //undefined
obj.printName2(); // Harshal

obj.printName.call(); // undefined


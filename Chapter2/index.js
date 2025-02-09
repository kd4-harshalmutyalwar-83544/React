const person = {
    name : "Harshal",
    print: function () {
        console.log(this);
    },
};
const person2 = {
    name: "Akshay",
};

person.print();
person.print.call();
person.print.call(this);
person.print.call(person2);
//call
let obj = { name: "Ayushee" };
let greeting = function (a, b, c) {
  return "Welcome" + " " + this.name + " " + a + " to " + b + " in " + c;
};

console.log(greeting.call(obj, "Shrivastava", "Indore", "Madhya Pradesh"));

//apply
let car = { model: "civic", Companyname: "Honda", purchased: 2020 };
let details = function (a, b) {
  return (
    "I purchased" +
    " " +
    this.model +
    " from " +
    this.Companyname +
    "  in " +
    this.purchased +
    " ." +
    " color is " +
    a +
    " which is " +
    b
  );
};
console.log(details.apply(car, ["black", "automatic"]));

//bind
const fordFocus = {
    make: 'Ford',
    model: 'Focus',
    inflateTyre(wheel, pressure) {
        console.log(
            `Inflating wheel ${wheel} on the ${this.make} ${this.model} to a pressure of ${pressure}.`
        );
    },
};

const toyotaHilux = {
    make: 'Toyota',
    model: 'Hilux',
};
const boundInflateToyotaTyre2 = fordFocus.inflateTyre.bind(toyotaHilux);
boundInflateToyotaTyre2(3, 30);



type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type elevatedEmployee = Admin & Employee;

const e1: elevatedEmployee = {
  name: "Zorana",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number; //overload
function add(a: string, b: string): string; //overload
function add(a: number, b: string): string; //overload
function add(a: string, b: number): string; //overload
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, " Lazarevic"); //here it recognizes overload
result.split(" ");

// uncertanty when fetched
const fetchedUserData = {
  id: "u1",
  name: "Zox",
  job: { title: "Frontend developer", description: "UI and UX developer" },
};

console.log(fetchedUserData?.job?.title); // optional chaining

// nullish coalescing 

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT'; // ?? - optional chaining operator

console.log(storedData);


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printEmployeeInfo({ name: "manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving a car...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const t1 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //   if ("loadCargo" in vehicle) {
//   //     vehicle.loadCargo(1000);
//   //   }
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(t1);

// // discriminated unions work mostly with object types

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   //   if ("flyingSpeed" in animal) {
//   //     console.log("Moving with speed " + animal.flyingSpeed);
//   //   }
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 200 });

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; //type casting
// const userInputElement = document.getElementById("user-input"); //perfect for JSX
// // ! - Will never be null

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   //{email: "not a valid email", username: "username is incorrect"}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with the capital character'
// }

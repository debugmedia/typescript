"use strict";
// Infer types (Implicit Types)
// let userName = "Debug Media";
// let subscribers = 30_000;
// subscribers = "Debug"
// const userDetails: Readonly<Users> = {
//    name: "debug media",
//    age: 20,
// };
// const userDetails: Partial<Users> = {
//    name: "debug media",
//    age: 20,
// };
// const userDetails: Required<Users> = {
//    name: "debug media",
//    age: 20,
// };
// const user: Pick<Users, "name" | "age"> = {
//    name: "debug media",
//    age: 20,
// };
// const user: Omit<Users, "salary"> = {
//    name: "debug media",
//    age: 20,
// };
// type StatusType = "pending" | "completed" | "failed";
// const status: Exclude<StatusType, "pending"> = "";
// type Food = {
//    KFC: string;
//    PIZZA: string;
//    CHICKEN: string;
// };
// type Food = Record<string, any>;
// type Food = {
//    [index: string]: any;
// };
// const food: Food = {
//    PIZZA: "sdas",
//    CHICKEN: {
//       ssd: "sds",
//    },
// };
// any/unknown/never/void/null
let userName = null;
function get() {
    if (userName) {
        return "sdasa";
    }
    else if (userName === null) {
        return "sadsa";
    }
}
// function throwError(message: string): never {
//    throw new Error(message);
// }
// function logMessage(message: string): void {
//    console.log(message);
// }
// type User = {
//    name: string;
//    getUserName: (message: string) => void;
// };
// const currentObj: User = {
//    name: "debug media",
//    getUserName(message) {
//       console.log(message);
//    },
// };
// currentObj.getUserName("siadjisa");

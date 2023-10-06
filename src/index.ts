// Infer types (Implicit Types)
// let userName = "Debug Media";
// let subscribers = 30_000;
// subscribers = "Debug"

// Defining Types (Explicit Types)
// let userName: string = "Debug Media";
// let subscribers: number = 30_000;
// let isSubscribed: boolean = true;
// let skills: string[] = ["JS", "CSS", "TS"];
// let count: number[] = [1, 2, 3, 4];
// let emptyArray: [] = [];
// let userDetail: { name: string; age: number; salary: number } = {
//    name: "Debug Media",
//    age: 20,
//    salary: 100,
// };

// userDetail.age = 20;

// Interface

// interface Details {
//    name: string;
//    age: number;
//    salary: number;
//    getName: () => void;
// }

// let userDetail: Details = {
//    name: "Debug Media",
//    age: 20,
//    salary: 100,
//    getName() {
//       console.log(this.name);
//    },
// };

// Type

// type Details = {
//    name: string;
//    age: number;
//    salary: number;
//    getName: () => void;
// };

// let userDetail: Details = {
//    name: "Debug Media",
//    age: 20,
//    salary: 100,
//    getName() {
//       console.log(this.name);
//    },
// };

// Union/Optional
// type Details = {
//    name: string;
//    age: number | string;
//    salary?: number;
//    getName?: () => void;
// };

// let userDetail: Details = {
//    name: "Debug Media",
//    age: 20,
//    salary: 100,
// };

// Functions

// type Details = {
//    name: string;
//    age: number | string;
//    salary?: number;
//    getName?: () => void;
// };
// let userDetail: Details = {
//    name: "Debug Media",
//    age: 20,
//    salary: 100,
// };

// type GetUserName = {
//    firstName: string;
//    age: number | string;
// };

// function getUserName(userDetail: Details): GetUserName {
//    return { firstName: userDetail.name, age: userDetail.age };
// }

// getUserName(userDetail);

// Named Types
// type StatusType = "pending1" | "completed1" | "failed1" | "";
// type ToggleSwitch = "on" | "off";

// let currentStatus: StatusType = "";
// let toggleSwitch: ToggleSwitch = "off";

// toggleSwitch =true

// Function Overloading

// function add1(num1: number | string, num2: number | string): number | string {
//    if (typeof num1 === "string" || typeof num2 === "string") {
//       return num1 + "" + num2;
//    }
//    return num1 + num2;
// }

// function add(num1: number, num2: number): number;
// function add(num1: string, num2: string): string;

// Generics
// function getAge<T>(age: T): T {
//    return age;
// }

// getAge<string>("20");
// getAge<number>(20);

// type UserDetail = {
//    name: string;
//    age: number;
// };

// type AdminDetail = {
//    firstName: string;
//    role: string;
// };

// const userDetail: UserDetail = {
//    name: "Debug Media",
//    age: 20,
// };
// const adminDetail: AdminDetail = {
//    firstName: "Debug Media",
//    role: "admin",
// };

// function getDetails<T>(details:T):T {
//    return details;
// }

// const userValue = getDetails<UserDetail>(userDetail);
// const adminValue = getDetails<AdminDetail>(adminDetail);

// userValue.name
// adminValue.firstName

// type UserDetail = {
//    name: string;
//    age: number;
// };

// type AdminDetail = UserDetail & {
//    role: string;
// };
// type AdminDetails = UserDetail;

// interface UserDetail {
//    name: string;
//    age: number;
// }

// interface AdminDetail extends UserDetail {}

// const userDetail: UserDetail = {
//    name: "Debug Media",
//    age: 20,
// };
// const adminDetail: AdminDetail = {
//    name: "Debug Media",
//    age: 20,
// };

// Enums
// type StatusType = "pending" | "completed" | "failed";

// const enum StatusType {
//    PENDING = "pending",
//    COMPLETED = "completed",
//    FAILED = "failed",
// }

// function getStatus(orderID: string, status: StatusType) {
//    console.log(orderID, "==", status);
// }

// getStatus("12345", StatusType.COMPLETED);

// as const
// let userName = "debug media" as const;

// userName = "debug media";

// keyof typeOf
// const StatusType = {
//    PENDING: "pending",
//    COMPLETED: "completed",
//    FAILED: "failed",
// } as const;

// function getStatus(orderID: string, status: keyof typeof StatusType) {
//    StatusType.PENDING = "Hello";
//    console.log(orderID, "==", StatusType[status]);
// }

// getStatus("12345", "PENDING");

// Utility Types

type Users = {
   name: string;
   age: number;
   salary: number;
};

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

let userName: string | null = null;

function get() {
   if (userName) {
      return "sdasa";
   } else if (userName === null) {
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

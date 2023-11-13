export interface users {
    id ?:number,
    name:string,
    email:string,
    password:string,
    age:number
    phone:string
}

export interface expense {
    sno?:number,
    type:string,
    money:number,
    date:string,
    uid:number
}

// "styles": [
//     ...
//     "node_modules/bootstrap/dist/css/bootstrap.min.css"
// ],
// "scripts": [
//     ...
//      "node_modules/bootstrap/dist/js/bootstrap.min.js"
// ]
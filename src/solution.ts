const formatValue = (input:number|string|boolean):number|string|boolean => {
    if(typeof(input)=== "string"){
        return input.toUpperCase();
    }else if(typeof(input)=== "number"){
        return input*10;
    }
    else{
        if(input===true){
            return false;
        }else{
            return true;
        }
    }
}

const getLength = (input:string|Array<number>):number =>{
    return input.length;
}

class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return (`'Name: ${this.name}, Age: ${this.age}'`);
    }
}

type book={
    title:string;
    rating:number;
}

const filterByRating = (books:Array<book>):Array<book> =>{
    const result:Array<book> = [];
    books.map(book => {
    if(book.rating>=4){
        result.push(book)
    }
    })
    return result;
}

type User ={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

const filterActiveUsers=(users:Array<User>):Array<User> =>{
    const result:Array<User> = [];
    users.map((user)=>{
        if(user.isActive===true){
            result.push(user)
        }
    })
    return result;
}

interface Book {
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
};

const printBookDetails=(book:Book)=>{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable?"Yes":"No"}`)
    return 0;
};

const getUniqueValues = (array1: Array<number>, array2: Array<number>): Array<number> => {
    const unique: number[] = [];
    const exist = (value: number) => {
        for (let i = 0; i < unique.length; i++) {
            if (value === unique[i]) {
                return true;
            }
        }
        return false;
    }
    // first array
    for (let i = 0; i < array1.length; i++) {
        const value = array1[i];
        if (value !== undefined) {
            if (!exist(value)) {
                unique.push(value);
            }
        }
    }
    // second array
    for (let i = 0; i < array2.length; i++) {
        const value = array2[i];
        if (value !== undefined) {
            if (!exist(value)) {
                unique.push(value);
            }
        }
    }
    return unique;
}

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Array<Product>): number => {
    let totalPrice = 0;
    if (products.length != 0) {
        products.map((product) => {
            let productPrice = product.quantity * product.price;
            totalPrice += productPrice;
            if (product.discount) {
                let discountPrice = product.quantity * (product.price * (product.discount / 100));
                totalPrice -= discountPrice;
            }

        })
    }

    return totalPrice;
}
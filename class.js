class student{
    constructor(sId,sName,sAge){
        this.id=sAge;
        this.name=sName;
        this.age=sAge;
    }
}
const student1=new student(1,"mahi",22);
const student2=new student(2,"mahiya",24);
const student3=new student(3,"Bappi",25);


console.log(student1.name,student2,student3.age);


class car{
    constructor(carColor,carBrand,carPrice,canMadeIn){
        this.color=carColor;
        this.brand=carBrand;
        this.price=carPrice;
        this.madeIn=canMadeIn;
    }
}
const car1 = new car("Red","Toyota",500000,"china");
const car2 = new car("Blue","Ferare",500000,"japan");
console.log("Car1",car1);
console.log("Car2",car2);
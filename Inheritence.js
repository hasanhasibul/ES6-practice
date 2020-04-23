
class Parent{
    constructor(pName,pOcupation){
        this.fName = "jolil Uddin";
        this.fOcupation = "Business Man";

    }
}
class Student extends Parent{
    constructor(sName,sId,sAge){
        super();
        this.name = sName;
        this.id = sId;
        this.age = sAge;
    }
}
const student1 = new Student("hasib",1,22);
console.log(student1.fName);
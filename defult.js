function add(num1,num2 = 20){
    // num2 =num2 || 0 ;
    // if(num2==undefined){
    //     num2=40;
    // }
    sum = num1 + num2;
}
add(15,15);
console.log(sum);


function createUser(name, age = 18){
        const user = {};
        user.name = name;
        user.age = age;
        return user;
    }

   const fun = createUser("jhanker");
   console.log(fun);
   
    
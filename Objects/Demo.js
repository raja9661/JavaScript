// 1
// let obj={name:'raja',Roll:2820070,section:'c'};
// console.log(obj);
// console.log(obj.Roll);
// obj.class='B.tech';
// console.log(obj);

//2
// let ref=new Object();
// console.log(ref);
// ref.id=34;
// ref.name='raja';
// console.log(ref);

//3 
// function emp(name,id,salary)
// {
//     this.name=name;
//     this.id=id;
//     this.salary=salary;
// }
// let obj=new emp('raja',70,50000);
// console.log(obj);

//inbuild functions of object and this method return object of array type.
let obj={
    name:'Raja',
    roll:70,
    section:'c'
}

// let arr=Object.keys(obj);
// console.log(arr);
// let arr1=Object.values(obj);
// console.log(arr1);
// let arr2=Object.entries(obj);
// console.log(arr2);
console.log("before freeze");
obj.section='a';
console.log(obj);
Object.freeze(obj); //to stop the new entry
obj.roll=90;
console.log("after freeze ,updating value of rool 90");
console.log(obj);







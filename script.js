const person = [
    { name: 'john', age: 35, phone: 10302, house: "123a" },
    { name: "doe", age: 18, phone: 103, house: '12a' },
    { name: "mitchel", age: 55, phone: 10, house: '1a' },
    { name: "tony", age: 70, phone: 103022323, house: '12355a' }
]
 
 
 
let userData;
 
function loadId(){};
 
function fetchData(){
    userData= person;
}
 
fetchData();
 
function displayData(){
    userData.forEach(element => {
        console.log(element);
    });
}
 
function sortValue(){
    userData.sort((a,b) => {
        return a.age - b.age;
    })
}
 
sortValue();
displayData();
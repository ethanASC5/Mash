function mash(){
homeVar = Math.random()
homeVar = homeVar * 6
homeVar = Math.floor(homeVar)

const homeArray = [
    "a cardboard box",
    "a shack",
    "a trailer",
    "an apartment",
    "a house",
    "a mansion"
]
return "You will live in a" + getHome() + ",and you will have" + getChildrenCount() +  "kids!"
}


let Mash = mash();
console.log(Mash);


let array = ["mansion","house","shack","apartment"]
function gethome(){
    let random = Math.random()*array.length;
    let wholenumber = Math.floor(random);
   // return(carArray[carVar])
let randomhome = array[wholenumber]
return randomhome
} 
function getChildrencount(){
let random = Math.random()*100;
let wholenumber = Math.floor(random);
console.log(wholenumber)
} getChildrencount();

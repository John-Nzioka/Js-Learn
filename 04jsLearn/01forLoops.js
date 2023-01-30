for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}

const myStates = [
"Nairobi",
"Mombasa",
"Kitale",
2000,
"Nakuru",
"Eldoret",

];

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !=="string") break;
        
    
    console.log(myStates[i]);
    }
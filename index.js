const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersabc=characters.filter(elem =>typeof elem==='string'&& /^[a-zA-Z]$/.test(elem));

let passwordOne = document.getElementById("psone")
let passwordTwo = document.getElementById("pstwo")


function generatePassword(){
    let charNumber = document.getElementById("passwordlength").value
    const checkbox = document.getElementById("specialnumbers")
   
    passwordOne.textContent=" "
    passwordTwo.textContent=" "
    if(checkbox.checked ){
    for (let i=0; i<charNumber ; i++){
    let char = Math.floor(Math.random() * characters.length )
    passwordOne.textContent+=characters[char]
    

    let chars = Math.floor(Math.random() * characters.length )
    passwordTwo.textContent+=characters[chars]
    }
} 
    else
    for (let i=0; i<charNumber ; i++){
        let char = Math.floor(Math.random() * charactersabc.length )
        passwordOne.textContent+=charactersabc[char]
        
    
        let chars = Math.floor(Math.random() * charactersabc.length )
        passwordTwo.textContent+=charactersabc[chars]
}
}
function copyone(){
    navigator.clipboard.writeText(passwordOne.innerText)
    .then(() => {
      alert("Password copied!!!");
    })
}
function copytwo(){
    navigator.clipboard.writeText(passwordOne.innerText)
    .then(() => {
      alert("Password copied!!!");
    })
}
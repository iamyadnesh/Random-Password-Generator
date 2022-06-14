
let passBtn =  document.getElementById("passbtn_generator")           //PASSWORD BTN GENERATOR 
let inputEls = document.getElementsByClassName("randompass_field")     //INPUTFIELDS


 function generatePassword(){
        let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";        
        let passwordLength = 8
        let password = ''
   
        for (let i = 0; i <= passwordLength; i++){
            let randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber + 1)
            
        }

        return password
}

passBtn.addEventListener("click", function () {
     let passwords = []                                                     //Create Array
     for(let i=0; i < inputEls.length; i++) {                               // Run Loop for amount of Input field
        password = generatePassword()                                       //  Call Function for 4 times and store 
        passwords.push(password)                                             // Store Value is pushed in Array   
        console.log(passwords.length)                                      
     }

     for (let i = 0; i < passwords.length; i++) {                    // inputEls.length == passwords.length == 4
        inputEls[i].value = passwords[i]                             // storing the value from aaray to input field
     }

})
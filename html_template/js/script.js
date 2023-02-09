function askName() {
    let userName = prompt("Please entre your names")

    let welcomeMessage = "Bonjour " + userName
    console.log(welcomeMessage)

    document.getElementById("message").innerHTML = welcomeMessage
}

function askBirthYear() {
    let birthDayString = prompt("Please give your birthday")
    let monthString = prompt("Please give your month of birth")

    let birthDay = parseInt(birthDayString)
    let month = parseInt(monthString)
    console.log(birthDay)
    
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthDay
    console.log(age)

    let currentMonth = new Date().getMonth();
    console.log(currentMonth)

    if(month > currentMonth) {
        age--
    }
    
    document.getElementById("age").innerHTML = "Vous avez " + age + " ans"    
}

askName()
askBirthYear()
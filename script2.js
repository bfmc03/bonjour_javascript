function sayHello(naim,hour) { 
        if (hour >= 18) {
            let message = "Bonsoir " + naim
            console.log(message)
        } else {
            let message = "Bonjour " + naim
            console.log(message)
        }
    }
    
    let firstname = "beyonce !" 
    
    sayHello(firstname)  
    sayHello("beyonce", 11)
    sayHello("beyonce", 18)
    sayHello("Beyonce", 17)
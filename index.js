//prompt to get user details
// be able to create, and push
//use splice to delete
//list names using forEach
//update uses find


//first create the array of objects
let dealership = [
    {
        carModel: "Civic",
        carMake: "Honda",
        carMiles: 250489,
    },

    {
        carModel: "R8",
        carMake: "Audi",
        carMiles: 501,
    },
    
    {
        carModel: "Tahoe",
        carMake: "Chevy",
        carMiles: 38746,
    },

    {
        carModel: "Hilux",
        carMake: "Toyota",
        carMiles: 48562,
    },

    {
        carModel: "Accord",
        carMake: "Honda",
        carMiles: 75005,
    },
]

const command = () => {
    let action = document.querySelector("#choice").value

    switch (action) {
        case "A":
            createCar();
            break;
        case "B":
            readCar();
            break;
        case "C": 
            changeCar();
            break;
        case "D":
            deleteCar();
            break;
        default:
    }
}   





//now that we have the array of objects let's display the cars
// to do so we need to go within scope of each car object and we want to display the most specific information (model)
// if user wants more info about the model they can put it in
const listCars = () => {
    let carListRef = document.querySelector(".carList")
    let displayStr = ""
    dealership.forEach((car) => {
        displayStr += `${car.carModel} <br>`
    })
    carListRef.innerHTML = displayStr;
}
//now that we have made a list, we want to be able to add a new object to it
const createCar = () => {
    let model = prompt("Car Model: ");
    let make = prompt("Car make: ");
    let miles = prompt("Car miles: ");

    dealership.push ({
        carModel: model,
        carMake: make,
        carMiles: parseInt(miles),
    })  

    //now we want to list the cars again 
    listCars();
}

//now we want to retrieve a car's information based on the model given
const readCar = () => {
    let desiredCarInformationRef = document.querySelector(".desiredCarInformation")
    let carInfoStr = " ";
    let modelOfDesiredCar = prompt("Enter the model of the car you want more information on, type exactly as it's shown please: ")
    // now we want to use find to retrieve that specified information
    let foundCar = dealership.find((car) => {
        if(car.carModel == modelOfDesiredCar) {
            return car
        }
    })
    // now we have defined foundCar boolean which if true will be equal to car returned
    
   carInfoStr = `The ${foundCar.carModel} is of ${foundCar.carMake} make with ${foundCar.carMiles} miles on it`
    desiredCarInformationRef.innerHTML = carInfoStr
}

const changeCar = () => {
    
}

const deleteCar = () => {
    let deletedCarInformationRef = document.querySelector("deletedCarInformation");
    let deletedCarStr = "";
    let carToDelete = prompt("What number on the list do you want to delete: ")
    carToDelete = parseInt(carToDelete);
    carToDelete =- 1;
    
    let deletedCar = dealership.splice(carToDelete, 1)
    console.log (`${deletedCar}`)
    
}



//listCars();

//readCar();


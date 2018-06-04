// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// The seam ripper is a craft data item
const seamRipper = {
    name: "Seam Ripper",
    location: "Sewing Storage",
    description: "This seam ripper is special to me because my father made it out of a deer antler."
  }
  
  // The sewing machine is a furniture data item
  const sewingMachine = {
    name: "Sewing Machine",
    location: "Craft Room",
    description: "This sewing machine is special to me because I am able to create and repair things for myself, my friends, and my family."
  }

// The sepeakers are an electronic data item
const speakers = {
    name: "Speakers",
    location: "Bonus Room",
    description: "These speakers are special to me because they were the speakers Darren and Chris used in their band."
    }

// The button collection is a craft data item
const buttonCollection = {
    name: "Button Collection",
    location: "Sewing Storage",
    description: "This jar of button is special because it once belonged to my grandmother."
  }
  
  // The sectional is a furniture data item
  const sectional = {
    name: "Sectional",
    location: "Bonus Room",
    description: "This sectional is important to me because my boyfriend loves sitting on it."
  }

// The macbook pro is an electronic data item
const macBookPro = {
    name: "MacBook Pro",
    location: "Craft Room",
    description: "This laptop is important to me because it started my coding lifestyle."
    }

// The dress form is a craft data item
const dressForm = {
    name: "Dress Form",
    location: "Craft Room",
    description: "The dress form is important to me because my boyfriend gave it to me for our first Christmas."
  }
  
  // The germany painting is a furniture data item
  const germanyPainting = {
    name: "Germany Painting",
    location: "Living Room",
    description: "This painting is important to me because it was given to us by Darren's parents."
  }

// The coffee maker is an electronic data item
const coffeeMaker = {
    name: "coffee maker",
    location: "Kitchen",
    description: "The coffee maker is important to me because I love drinking coffee every day."
    }

// The toaster is an electronic data item
const toaster = {
    name: "Toaster",
    location: "Kitchen",
    description: "The toaster is important to me because I love peanut butter toast."
    }

HomeInventoryDatabase.crafts.push(seamRipper)
HomeInventoryDatabase.furniture.push(sewingMachine)
HomeInventoryDatabase.electronics.push(speakers)
HomeInventoryDatabase.crafts.push(buttonCollection)
HomeInventoryDatabase.furniture.push(sectional)
HomeInventoryDatabase.electronics.push(macBookPro)
HomeInventoryDatabase.crafts.push(dressForm)
HomeInventoryDatabase.furniture.push(germanyPainting)
HomeInventoryDatabase.electronics.push(coffeeMaker)
HomeInventoryDatabase.electronics.push(toaster)

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")
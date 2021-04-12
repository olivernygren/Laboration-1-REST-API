const express = require('express');
const app = express();
const port = 8000;

// Array of product-objects
let products = 
[
  {
    id: 1,
    name: 'Potato',
    calories: 76,
    price: 11
  },
  {
    id: 2,
    name: 'Steak',
    calories: 116,
    price: 249
  },
  {
    id: 3,
    name: 'Orange',
    calories: 49,
    price: 20
  },
  {
    id: 4,
    name: 'Spinach',
    calories: 16,
    price: 135
  },
  {
    id: 5,
    name: 'Rice',
    calories: 354,
    price: 22
  },
  {
    id: 6,
    name: 'Egg',
    calories: 155,
    price: 45
  },
  {
    id: 7,
    name: 'Milk',
    calories: 60,
    price: 9
  },
  {
    id: 8,
    name: 'Cheese',
    calories: 402,
    price: 129
  },
  {
    id: 9,
    name: 'Carrot',
    calories: 36,
    price: 15
  },
  {
    id: 10,
    name: 'Butter',
    calories: 716,
    price: 99
  }
]

// app.use(express.static('./public'))
app.use(express.json());


// Gets all objects from the product array
app.get('/', (req, res) => {
  res.json(products)
})

// Get product with specific ID
app.get('/product/:id', (req, res) => {
  const id = req.params.id;

  const foundProduct = products.find((product) => {
    return product.id == id
  })

  if (!foundProduct) {
    res.json({ "error": "No product matches this ID. Try again" })
  }

  res.json(foundProduct)
})


// Adds new object to array with unique id 
app.post('/', (req, res) => {

  const nameToSave = req.body.name;
  const caloriesToSave = req.body.calories;
  const priceToSave = req.body.price;
  let idToSave = 0;

  // loops through products to give new product unique id
  products.forEach((product) => {
    if (product.id > idToSave) {
      idToSave = product.id;
    }
  })
  idToSave++

  // Pushes new product into array
  products.push({
    id: idToSave,
    name: nameToSave,
    calories: caloriesToSave,
    price: priceToSave
  })

  res.status(201).send(`Saved new product with ID ${idToSave}`)
})


// Deletes rice from the product array
app.delete('/', (req, res) => {
  const itemID = 4
  const deletedProduct = products.splice(itemID, 1)[0] // saves the spliced product object
  res.json(deletedProduct) // outputs the object
})


// Updates the price of a product
app.put('/', (req, res) => {
  const newPrice = 149
  const itemID = 1

  const updatedProduct = {
    id: 2,
    name: "Steak",
    calories: 116,
    price: newPrice
  }

  // saves the spliced product object
  const updatedProductObject = products.splice(itemID, 1, updatedProduct)[0] 

  res.json(updatedProductObject)
})



app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost${port}`)
})




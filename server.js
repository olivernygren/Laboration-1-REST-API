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

app.use(express.json());


// Gets all objects from the product array
app.get('/products/all', (req, res) => {
  res.json(products)
})

// app.use(express.static('./public'))

// Get product with specific ID
app.get('/product/:id', (req, res) => {
  const id = req.params.id;

  const foundProduct = products.find((product) => {
    return product.id == id
  })

  if (!foundProduct) {
    res.status(404).json("Error: No product matches the specified ID")
  }

  res.json(foundProduct)
})


// Adds new object to array with unique id 
app.post('/products', (req, res) => {

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


// Deletes object from the product array
app.delete('/products/:id', (req, res) => {
  const id = req.params.id
  
  const productToDelete = products.find(p => p.id == id)
  if (!productToDelete) {
    return res.status(404).json("There appears to be no product with that ID")
  } else {
    const deletedProduct = products.splice(productToDelete, 1)[0] // saves the spliced product object
    res.json(deletedProduct) // outputs the object
  }
})


// Updates the price of a product
app.put('/products/:id', (req, res) => {

  const id = req.params.id
  const productToUpdate = products.findIndex((product) => {
    return product.id == id
  })
  const doesProductIDExist = products.find(p => p.id == id)

  if (!doesProductIDExist) {
    return res.status(404).json("There appears to be no product with that ID")
  }

  const updatedProduct = req.body
  products.splice(productToUpdate, 1, updatedProduct)[0]
  res.json(products)
})




app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost${port}`)
})




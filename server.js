const express = require('express');
const app = express();

const port = 8000;

let products = 
[
  {
    name: 'Potato',
    calories: 76,
    price: 11,
    id: 1
  },
  {
    name: 'Steak',
    calories: 116,
    price: 249,
    id: 2
  },
  {
    name: 'Orange',
    calories: 49,
    price: 20,
    id: 3
  },
  {
    name: 'Spinach',
    calories: 16,
    price: 135,
    id: 4
  },
  {
    name: 'Rice',
    calories: 354,
    price: 22,
    id: 5
  },
  {
    name: 'Egg',
    calories: 155,
    price: 45,
    id: 6
  },
  {
    name: 'Whole Milk',
    calories: 60,
    price: 9,
    id: 7
  },
  {
    name: 'Cheese',
    calories: 402,
    price: 129,
    id: 8
  },
  {
    name: 'Carrot',
    calories: 36,
    price: 15,
    id: 9
  },
  {
    name: 'Butter',
    calories: 716,
    price: 99,
    id: 10
  }
]

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

  // loop through products to give new product unique id
  products.forEach((product) => {
    if (product.id > idToSave) {
      idToSave = product.id;
    }
  })
  idToSave++

  // push new product into array
  products.push({
    id: idToSave,
    name: nameToSave,
    calories: caloriesToSave,
    price: priceToSave
  })

  res.json({
    status: "Saved new product"
  })
})


// Deletes rice from the product array
app.delete('/', (req, res) => {
  const itemID = 4
  const deletedProduct = products.splice(itemID, 1) // saves the spliced product array
  res.json(deletedProduct) // outputs the array
})


// Updates the price of a product
app.put('/', (req, res) => {
  const newPrice = 149

  products.forEach((product) => {
    if (product.name === "Steak") {
      product.price = newPrice
      // console.log('I found Steak')
    }
  })

  res.json(products)
})



app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost${port}`)
})




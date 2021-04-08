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
app.get('/product', (req, res) => {
  const itemID = 3
  const item = products.find(p => p.id === itemID);
  res.json(item)
})

// Pushes a new object (Yoghurt) into the product array
app.post('/', (req, res) => {
  products.push(req.body)
  res.status(201).json(req.body)
})

// Deletes rice from the product array
app.delete('/', (req, res) => {
  const deletedProduct = products.splice(4, 1) // saves the spliced product array
  res.json(deletedProduct) // outputs the array
})

app.put('/', (req, res) => {

})

app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost${port}`)
})




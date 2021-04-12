window.addEventListener('load', init)

async function init() {
  const seeAllProductsBtn = document.getElementById('get');
  const addNewProductBtn = document.getElementById('post');
  const updateProductBtn = document.getElementById('put');
  const deleteProductBtn = document.getElementById('delete');

  seeAllProductsBtn.addEventListener('click', () => {
    console.log('get')
  })

  addNewProductBtn.addEventListener('click', () => {
    console.log('post')
  })

  updateProductBtn.addEventListener('click', () => {
    console.log('put')
  })

  deleteProductBtn.addEventListener('click', () => {
    console.log('delete')
  })

  const allProducts = await getAllProducts()
  const addedProduct = await addNewProduct("Yoghurt", 60, 14)
  const updatedProduct = await updateProduct(149)
  const removedProduct = await deleteProduct()
}

async function getAllProducts() {
  const products = await makeRequest('/', 'GET')
  console.log(products)
  return products
}

async function addNewProduct(name, calories, price) {

  const body = {
    name: name,
    calories: calories,
    price: price
  }

  const newProduct = await makeRequest('/', 'POST', body)
  return newProduct
}

async function updateProduct(price) {
  const updatedProduct = await makeRequest('/', 'PUT')
}

async function deleteProduct() {
  const deletedProduct = await makeRequest('/', 'DELETE')
}



async function makeRequest(url, method, body) {
  
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const result = await response.json()

  return result
}
//Object property shorthand

const name ='Selva'
const location = 'SanAntonio'

const user = {
    name,
    location
}
console.log(user)

//Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined
}

// const {label, stock} = product
// console.log(label)
// console.log(stock)

const transaction = (type, { label, stock}) => {
    console.log(type, label, stock)
}
transaction('order', product)
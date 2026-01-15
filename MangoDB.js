// 1. All product info
db.products.find({})

// 2. Product price between 400 to 800
db.products.find({ product_price: { $gte: 400, $lte: 800 } })

// 3. Product price NOT between 400 to 600
db.products.find({ product_price: { $not: { $gte: 400, $lte: 600 } } })

// 4. List 4 products with price > 500
db.products.find({ product_price: { $gt: 500 } }).limit(4)

// 5. Product name and material
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 })

// 6. Product with id 10
db.products.find({ id: "10" })

// 7. Only name and material (same as 5)
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 })

// 8. Products with material "Soft"
db.products.find({ product_material: "Soft" })

// 9. Products with color "indigo" AND price 492.00
db.products.find({ product_color: "indigo", product_price: 492.00 })

// 10. Delete products with price 28
db.products.deleteMany({ product_price: 28 })

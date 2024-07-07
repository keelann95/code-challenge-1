const products = [
  { name: "Banana", price: 10, quantity: 15 },
  { name: "toothbrush", price: 70, quantity: 5 },
  { name: "soap", price: 230, quantity: 5 },
  { name: "salt", price: 35, quantity: 5 },
  { name: "apple", price: 12, quantity: 5 },
  { name: "milk", price: 90, quantity: 5 },
  { name: "blueband", price: 400, quantity: 5 },
  { name: "egg", price: 20, quantity: 5 },
  { name: "spoon", price: 45, quantity: 5 },
  { name: "bread", price: 80, quantity: 5 },
  { name: "cup", price: 60, quantity: 5 },
  { name: "jacket", price: 990, quantity: 5 },
  { name: "sandals", price: 600, quantity: 5 },
  { name: "dish", price: 400, quantity: 5 },
];
const ul = document.createElement("ul");
products.forEach((products) => {
  const li = document.createElement("li");
  li.textContent = products;
  ul.appendChild(ul);

  products.forEach(function (products) {
    console.log(`product: ${products.name}, price:${products.price}, quantity: ${products.quantity}`);
  })
});

document.body.appendChild(ul);
import { v4 as uuid } from "uuid";

export const products = [
  {
    id: uuid(),
    image:"/static/images/products/product_1.png",
    category: "Groceries",
    subcategory: "Fruits",
    name: "Orange",
    variableName: "Small-Sized",
    price: 100,
    qty: 5,
    unit: "pcs",
  }
];

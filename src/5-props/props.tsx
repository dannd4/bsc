import Profile from "./profile";
import Card from "./card";
import Product from "./product";

import "./style.css";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Iphone 15", brand: "Apple", price: 1500 },
  { id: 2, name: "Samsung S23", brand: "Samsung", price: 1300 },
  { id: 3, name: "Xiaomi 14", brand: "Xiaomi", price: 900 },
];

export default function Props() {
  const handleSelectProduct = (product: Product) => {
    alert(product.name);
  };

  return (
    <>
      <h1>Props</h1>

      <Card>
        <Profile name="Alice" avatar="https://i.pravatar.cc/300" isAdmin />
      </Card>

      <hr />

      {products.map((product) => (
        <Card key={product.id}>
          <Product data={product} onSelect={handleSelectProduct} />
        </Card>
      ))}
    </>
  );
}

interface ProductProps {
  data: {
    id: number;
    name: string;
    brand: string;
    price: number;
  };
  onSelect: (product: { id: number; name: string; brand: string; price: number }) => void;
}

export default function Product({ data, onSelect }: ProductProps) {
  return (
    <div>
      <h3>Name: {data.name}</h3>
      <p>Brand: {data.brand}</p>
      <p>Price: {data.price}</p>
      <button onClick={() => onSelect(data)}>Select</button>
    </div>
  );
}

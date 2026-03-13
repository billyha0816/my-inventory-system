import { useState } from "react";

export default function ProductForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [currentStock, setCurrentStock] = useState(0);
  const [minStock, setMinStock] = useState(10);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, sku, current_stock: currentStock, min_stock: minStock, price });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded bg-white shadow">
      <label>
        상품명
        <input type="text" value={name} onChange={e => setName(e.target.value)} required className="input input-bordered w-full" />
      </label>
      <label>
        SKU (고유번호)
        <input type="text" value={sku} onChange={e => setSku(e.target.value)} required className="input input-bordered w-full" />
      </label>
      <label>
        현재 재고량
        <input type="number" value={currentStock} onChange={e => setCurrentStock(Number(e.target.value))} className="input input-bordered w-full" />
      </label>
      <label>
        최소 재고량
        <input type="number" value={minStock} onChange={e => setMinStock(Number(e.target.value))} className="input input-bordered w-full" />
      </label>
      <label>
        단가
        <input type="number" step="0.01" value={price} onChange={e => setPrice(Number(e.target.value))} className="input input-bordered w-full" />
      </label>
      <button type="submit" className="btn btn-primary">상품 등록</button>
    </form>
  );
}

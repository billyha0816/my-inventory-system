import ProductForm from "../components/ProductForm";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  async function handleSubmit(data: any) {
    const { error } = await supabase.from("products").insert([data]);
    if (error) {
      alert("상품 등록 실패: " + error.message);
    } else {
      alert("상품이 등록되었습니다.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">상품 등록</h1>
      <ProductForm onSubmit={handleSubmit} />
    </main>
  );
}

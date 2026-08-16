import { notFound } from "next/navigation";
import { categories, questions, getTotalCount } from "@/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CategoryView } from "@/components/categories/category-view";

export function generateStaticParams() {
  return categories.map((cat) => ({
    id: cat.id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);
  const categoryQuestions = questions[id];

  if (!category || !categoryQuestions) {
    notFound();
  }

  const count = getTotalCount();

  return (
    <main className="mx-auto max-w-[960px] px-5 sm:px-8 flex flex-col min-h-screen">
      <Navbar />
      <CategoryView category={category} questions={categoryQuestions} />
      <Footer count={count} />
    </main>
  );
}

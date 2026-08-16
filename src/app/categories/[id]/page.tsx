import { notFound } from "next/navigation";
import { categories, getQuestionsByCategory, getTotalCount } from "@/data";
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
  const categoryQuestions = await getQuestionsByCategory(id);

  if (!category || categoryQuestions.length === 0) {
    notFound();
  }

  const count = getTotalCount();

  return (
    <main className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col min-h-screen">
      <Navbar />
      <CategoryView category={category} questions={categoryQuestions} />
      <Footer count={count} />
    </main>
  );
}

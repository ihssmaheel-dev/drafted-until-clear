import { categories, getAllQuestionsMetadata, getTotalCount } from "@/data";
import { Header } from "@/components/layout/header";
import { HeroDiagram } from "@/components/layout/hero-diagram";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CategoryGrid } from "@/components/home/category-grid";
import { Features } from "@/components/home/features";

export default function HomePage() {
  const count = getTotalCount();
  
  const metadata = getAllQuestionsMetadata();
  const counts: Record<string, number> = {};
  metadata.forEach((q) => {
    counts[q.categoryId] = (counts[q.categoryId] || 0) + 1;
  });

  return (
    <main className="mx-auto max-w-[960px] px-5 sm:px-8 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col gap-12 sm:gap-16 py-6 sm:py-10">
        <Header />
        <HeroDiagram />
        <CategoryGrid categories={categories} counts={counts} limit={5} />
        <Features />
      </div>
      <Footer count={count} />
    </main>
  );
}

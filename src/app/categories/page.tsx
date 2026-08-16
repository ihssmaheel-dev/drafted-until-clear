import { categories, getAllQuestionsMetadata, getTotalCount } from "@/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CategoryGrid } from "@/components/home/category-grid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AllCategoriesPage() {
  const count = getTotalCount();
  
  const metadata = getAllQuestionsMetadata();
  const counts: Record<string, number> = {};
  metadata.forEach((q) => {
    counts[q.categoryId] = (counts[q.categoryId] || 0) + 1;
  });

  return (
    <main className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex flex-col gap-6 py-6">
        <div className="flex flex-col gap-4 border-b border-border pb-4 w-full sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex size-9 items-center justify-center rounded-full border border-border bg-secondary/50 text-text-muted hover:bg-foreground hover:text-background hover:border-foreground transition-all group"
            >
              <ArrowLeft className="size-4" />
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <h1 className="font-sans text-2xl font-bold tracking-tight text-foreground">
                All Categories
              </h1>
              <span className="text-[14px] font-medium text-text-muted">
                Browse all our carefully drafted interview questions.
              </span>
            </div>
          </div>
        </div>
        
        <CategoryGrid categories={categories} counts={counts} hideTitle />
      </div>
      <Footer count={count} />
    </main>
  );
}

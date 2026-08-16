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
    <main className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex flex-col gap-8 py-6 sm:py-8">
        <div className="flex flex-col gap-4 border-b border-border pb-6 w-full">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-foreground transition-colors outline-none group self-start"
          >
            <div className="flex size-6 items-center justify-center rounded-full bg-secondary border border-border transition-colors group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
              <ArrowLeft className="size-3" />
            </div>
            Back to Home
          </Link>
          <div className="flex flex-col">
            <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              All Categories
            </h1>
            <p className="mt-2 text-[15px] text-text-muted">
              Browse all our carefully drafted interview questions.
            </p>
          </div>
        </div>
        
        <CategoryGrid categories={categories} counts={counts} hideTitle />
      </div>
      <Footer count={count} />
    </main>
  );
}

import { categories, questions, getTotalCount } from "@/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CategoryGrid } from "@/components/home/category-grid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AllCategoriesPage() {
  const count = getTotalCount();
  
  const counts: Record<string, number> = {};
  Object.entries(questions).forEach(([catId, qs]) => {
    counts[catId] = qs.length;
  });

  return (
    <main className="mx-auto max-w-[960px] px-5 sm:px-8 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col gap-16 py-12 sm:py-16">
        <div className="border-b border-border pb-8 flex flex-col items-start w-full">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-foreground transition-colors outline-none mb-6 group"
          >
            <div className="flex size-6 items-center justify-center rounded-full bg-secondary border border-border transition-colors group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
              <ArrowLeft className="size-3" />
            </div>
            Back to Home
          </Link>
          <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            All Categories
          </h1>
          <p className="mt-3 text-[16px] text-text-muted">
            Browse all our carefully drafted interview questions.
          </p>
        </div>
        
        <CategoryGrid categories={categories} counts={counts} hideTitle />
      </div>
      <Footer count={count} />
    </main>
  );
}

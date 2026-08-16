"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { RichText } from "@/lib/rich-text";

interface TakeawayProps {
  text: string;
}

export function Takeaway({ text }: TakeawayProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="mt-10 flex items-start gap-4 rounded-lg border border-green/30 bg-green/5 p-5 sm:p-6"
    >
      <div className="flex-shrink-0 mt-0.5">
        <CheckCircle2 className="size-5 text-green" />
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-green mb-1.5 block">
          The Takeaway
        </span>
        <div className="text-[14.5px] font-medium leading-relaxed text-foreground">
          <RichText text={text} />
        </div>
      </div>
    </motion.div>
  );
}

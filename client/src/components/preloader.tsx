import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/20 backdrop-blur-sm" />
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className={cn(
          "rounded-full p-8 flex items-center justify-center bg-white text-primary animate-spin-burst animate-glow",
        )}>
          <Zap className="h-24 w-24" />
        </div>
      </motion.div>
    </motion.div>
  );
}

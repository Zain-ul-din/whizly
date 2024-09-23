import React from "react";
import { Cover } from "@/components/ui/cover";

export function Hero() {
  return (
    <div className="my-32">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Automate your business <br /> at <Cover>Whizly</Cover>
      </h1>
    </div>
  );
}

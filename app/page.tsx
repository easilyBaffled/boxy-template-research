"use client";

import React from "react";
import Logo from "./Logo";

/**
 * ✨ Try selecting this function and ask questions about it! 👇
 */
function inefficientFunction() {
  [1, 2, 3, 4, 5, 6].filter((i) => i % 2 === 0);
}

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="py-4 w-3/4">{children}</div>;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex items-center mb-6 p-12 bg-neutral-900/50">
        <Logo />
        <h1 className="ml-3 block">CodeSandbox AI Playground</h1>
      </div>

      <div className="px-12">
        <Card>
          <h3 className="text-lg mb-2">Refactor a component</h3>
        </Card>

        <Card>
          <h3 className="text-lg mb-2">Ask for explanations</h3>
        </Card>

        <Card>
          <h3 className="text-lg mb-2">Generate code</h3>
        </Card>
      </div>

      <p className="absolute right-[108px] top-2">👆</p>
    </main>
  );
}

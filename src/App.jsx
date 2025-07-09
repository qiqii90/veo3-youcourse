import React, { useState, useEffect } from "react";
import PromptBox from "./components/PromptBox";
import Playground from "./components/Playground";
import Evaluator from "./components/Evaluator";

export default function App() {
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const proStatus = localStorage.getItem("isProUser");
    setIsPro(proStatus === "true");
  }, []);

  const handleProFeatureClick = () => {
    const modal = document.getElementById("pro-modal");
    if (modal) modal.classList.remove("hidden");
  };

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        VEO3 Prompt Generator By YouCourse.id
      </h1>

      <PromptBox onProAttempt={handleProFeatureClick} isPro={isPro} />

      <div className="mt-8">
        {isPro ? <Playground /> : (
          <button onClick={handleProFeatureClick} className="w-full bg-gray-300 text-gray-600 py-2 rounded hover:bg-gray-400">
            🔒 Playground Mode (PRO)
          </button>
        )}
      </div>

      <div className="mt-4">
        {isPro ? <Evaluator /> : (
          <button onClick={handleProFeatureClick} className="w-full bg-gray-300 text-gray-600 py-2 rounded hover:bg-gray-400">
            🔒 Evaluator (PRO)
          </button>
        )}
      </div>
    </div>
  );
}

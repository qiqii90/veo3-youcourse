import React from "react";

export default function PromptResult({ result }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-yellow-300">
      <h3 className="text-lg font-bold text-blue-700 mb-2">🎯 Hasil Prompt</h3>
      <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed font-mono">
        {result}
      </pre>
    </div>
  );
}

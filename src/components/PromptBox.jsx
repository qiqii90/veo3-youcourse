import React, { useState } from "react";
import PromptResult from "./PromptResult";

export default function PromptBox({ onProAttempt, isPro }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    if (!input.trim()) return;
    const result = `🎬 Prompt:\n\n"${input.trim()}"\n\n✨ Gaya sinematik, natural, dan berformat rapi.`;
    setOutput(result);
  };

  const handleRandom = () => {
    const examples = [
      "Seorang anak menemukan robot tua di gudang ayahnya",
      "Misi rahasia di bulan yang berubah menjadi bencana",
      "Seorang guru misterius dengan kekuatan luar biasa"
    ];
    const random = examples[Math.floor(Math.random() * examples.length)];
    setInput(random);
    setOutput("");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleTranslate = () => {
    if (!isPro) return onProAttempt();
    const translated = `🌐 English Translation:\n\n"${input.trim()}" => "A cinematic and natural English version here."`;
    setOutput(translated);
  };

  const handleExport = () => {
    if (!isPro) return onProAttempt();
    const blob = new Blob([output], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "prompt.pdf";
    link.click();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    alert("Hasil prompt berhasil disalin.");
  };

  return (
    <div>
      <textarea
        className="w-full p-3 rounded border mb-3"
        rows={5}
        placeholder="Tulis ide prompt kamu di sini..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        <button onClick={handleGenerate} className="bg-blue-700 text-white py-2 rounded hover:bg-blue-600">
          🎬 Generate
        </button>
        <button onClick={handleRandom} className="bg-yellow-300 text-gray-900 py-2 rounded hover:bg-yellow-200">
          🎲 Random
        </button>
        <button onClick={handleClear} className="bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400">
          🧹 Cleaner
        </button>
        <button onClick={handleTranslate} className="bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400">
          🌐 Translate (PRO)
        </button>
        <button onClick={handleExport} className="bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400">
          📄 Export PDF (PRO)
        </button>
        <button onClick={handleCopy} className="bg-green-500 text-white py-2 rounded hover:bg-green-400">
          📋 Copy
        </button>
      </div>

      {output && <PromptResult result={output} />}
    </div>
  );
}

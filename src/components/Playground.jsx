import React, { useState } from "react";

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [styledPrompt, setStyledPrompt] = useState("");

  const handleStyle = () => {
    if (!prompt.trim()) return;
    const result = `🎥 Styled Prompt (Playground Mode):\n\n"${prompt.trim()}"\n\nDengan tone: sinematik, naratif, dan mendalam.`;
    setStyledPrompt(result);
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow border border-blue-300">
      <h3 className="text-lg font-bold text-blue-700 mb-3">🧪 Playground Mode (PRO)</h3>
      <textarea
        className="w-full border p-3 rounded mb-3"
        rows={4}
        placeholder="Ketik ide mentah untuk diolah..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button onClick={handleStyle} className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-300">
        🎬 Gaya Sinematik
      </button>

      {styledPrompt && (
        <pre className="mt-4 p-3 bg-gray-100 rounded whitespace-pre-wrap font-mono text-gray-800">
          {styledPrompt}
        </pre>
      )}
    </div>
  );
}

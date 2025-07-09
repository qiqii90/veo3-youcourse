import React, { useState } from "react";

export default function Evaluator() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleEvaluate = () => {
    if (!input.trim()) return;
    const lengthScore = input.length > 120 ? "✅ Panjang cukup" : "⚠️ Terlalu singkat";
    const styleCheck = /siapa|bagaimana|mengapa/i.test(input) ? "✅ Unsur naratif ada" : "⚠️ Kurang naratif";

    const result = `📊 Evaluasi Prompt:\n\n- ${lengthScore}\n- ${styleCheck}\n\n💡 Saran:\nGunakan struktur 'siapa', 'apa', 'di mana', 'mengapa', dan 'bagaimana' untuk memperkuat prompt.`;

    setFeedback(result);
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow border border-pink-300">
      <h3 className="text-lg font-bold text-pink-700 mb-3">📈 Evaluator (PRO)</h3>
      <textarea
        className="w-full border p-3 rounded mb-3"
        rows={4}
        placeholder="Tempel prompt yang ingin dievaluasi..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button onClick={handleEvaluate} className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-400">
        🧠 Evaluasi Sekarang
      </button>

      {feedback && (
        <pre className="mt-4 p-3 bg-gray-100 rounded whitespace-pre-wrap font-mono text-gray-800">
          {feedback}
        </pre>
      )}
    </div>
  );
}

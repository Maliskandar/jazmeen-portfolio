"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend } from "react-icons/fi";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

const SYSTEM_PROMPT = `The chatbot must know this about me:

NAME: Jazmeen Adilla
ROLE: Data Analyst, actively seeking opportunities
EMAIL: jazmeenadilla01@gmail.com
LINKEDIN: https://www.linkedin.com/in/jazmeen-adilla-8b8a462a4
PORTFOLIO: https://jazmeenadilla-portfolio.vercel.app/

EDUCATION:
- Universitas Diponegoro (2021–2025), Bachelor of Mathematics (S.Mat)
- RevoU Full Stack Data Analytics (2025–2026), graduated with Distinction

SKILLS: Python (Pandas, NumPy), SQL, BigQuery, Tableau, Power BI, Excel, Statistics

PROJECTS:
1. Balaji Fast Food Sales Analysis — F&B, identified 15% revenue growth opportunity. Tools: Tableau, Python.
2. RevoGrocers Sales Performance Analysis — Retail, discovered top 34% revenue drivers. Tools: BigQuery (SQL), Power BI.
3. TokoBli A/B Testing & Campaign Evaluation — E-commerce, proved 59x Promo ROI and validated UI design change. Tools: Excel.
4. RevoFin Loan Portfolio Analysis — Financial Analytics, risk mitigation and credit trend analysis. Tools: Tableau, BigQuery, Python.
5. Analyzing & Evaluating App Funnel E-CommerceU Platform — App Funnel Analytics, improved conversion rates by analyzing funnel drop-offs. Tools: Tableau, Python.
6. RevoBank Customer Segmentation — analyzed user and card datasets to define actionable customer segments. Tools: Python, Excel.
7. RevoFinance Expense and Budget — Interactive Tableau dashboard for expense and budget tracking. Tools: Tableau, Excel.
8. Unified Channel Performance Reporting (OCA Blast) — Part 1 of the RevoU x Telkom Indonesia Virtual Internship project. Omnichannel Analytics: integrated SMS, Email, WhatsApp campaign logs, built a unified Tableau dashboard, achieved up to +20% cost efficiency. Tools: Tableau, Python. Pitch deck: https://docs.google.com/presentation/d/1WJz6MudjtyFxoUb_jxW3FTJBKULiAscvA6-y03ZelJc/edit?usp=sharing
9. OCA Blast: Active Client Usage Behavior Analysis & B2B Segmentation (RevoU x Telkom Indonesia) — B2B client segmentation and churn analysis for OCA Blast mass messaging CPaaS to resolve the Uniform Treatment Trap, shifting to a personalized, data-driven approach. June 2026. Tools: Python, pandas, scikit-learn, matplotlib. Pitch deck: https://docs.google.com/presentation/d/1Xjtac05GgQokuldWUKg092-_zgYu8Fm6aBRK7q5VuHA/edit?usp=sharing | Google Colab: https://colab.research.google.com/drive/18iuaFbik4V_g8ytroTy8UbFni6XXUfDS?usp=sharing

NOTE ON DATA: All projects use data that is a representation of the original data which has been adjusted in amount. The data is NOT a direct representation of original data and has been adjusted for educational purposes. It does not reflect the actual business condition of any company.

PERSONALITY: Honest, disciplined, analytical, driven by data and logic. Calm but highly engaged in intellectual discussions.

AVAILABILITY: Open to work, happy to discuss opportunities via email or LinkedIn.

The bot must reply in the same language as the user (Indonesian or English). Keep answers concise (2–4 sentences). Never fabricate info not listed above.`;

const SUGGESTIONS = [
  "Apa skill utama Jazmeen?",
  "Ceritakan proyek terbaik Jazmeen",
  "Apakah Jazmeen open to work?",
  "Apa latar belakang pendidikannya?",
  "Tool apa yang dikuasai Jazmeen?"
];

export default function AskMeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/askme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Server Error Details:", data);
        throw new Error(data?.error?.message || "API request failed");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.text }
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-[28px] right-[28px] z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[76px] right-0 w-[360px] h-[520px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            {/* Header */}
            <div className="bg-[#534AB7] p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold">
                    JA
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#534AB7]"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[15px]">Ask Jazmeen's Portfolio</h3>
                  <p className="text-xs text-white/80">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="text-center text-sm text-gray-500 mb-4">
                    Hi! I'm Jazmeen's AI assistant. Ask me anything about her portfolio, skills, or experience!
                  </div>
                  <div className="flex flex-col gap-2">
                    {SUGGESTIONS.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(suggestion)}
                        className="text-left text-sm p-3 rounded-xl bg-white dark:bg-gray-800 border border-[#7F77DD]/30 text-[#534AB7] dark:text-[#7F77DD] hover:bg-[#534AB7] hover:text-white dark:hover:bg-[#534AB7] dark:hover:text-white transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                      msg.role === "user" 
                        ? "bg-[#534AB7] text-white rounded-br-none" 
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shrink-0">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-gray-100 dark:bg-gray-800 border-none outline-none rounded-full px-4 py-2 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#7F77DD]/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 bg-[#534AB7] text-white rounded-full hover:bg-[#7F77DD] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <FiSend size={16} className="-ml-0.5 mt-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#534AB7] hover:bg-[#7F77DD] text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
      >
        {isOpen ? <FiX size={24} /> : <span className="text-2xl">💬</span>}
      </button>
    </div>
  );
}

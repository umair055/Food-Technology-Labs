"use client";
import { useState, useEffect, useRef } from "react";
import { Pizza, Send, X, Utensils, Coffee } from "lucide-react";

const foodEmojis = [
  "🍕",
  "🍔",
  "🍟",
  "🌭",
  "🍿",
  "🥓",
  "🥞",
  "🧇",
  "🥪",
  "🌮",
  "🌯",
  "🥙",
  "🧆",
  "🥚",
  "🍳",
  "🥘",
  "🍲",
  "🥣",
  "🥗",
  "🍿",
  "🧈",
  "🧂",
  "🥫",
  "🍱",
  "🍘",
  "🍙",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍠",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🥠",
  "🥡",
  "🦪",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍼",
  "🥛",
  "☕",
  "🍵",
  "🍶",
  "🍾",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🥂",
  "🥃",
  "🥤",
  "🧃",
  "🧉",
  "🧊",
  "🥢",
  "🍽️",
  "🍴",
  "🥄",
];

export default function CrazyFoodChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your crazy food assistant. What deliciousness can I help you with today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const [currentEmoji, setCurrentEmoji] = useState("🍕");

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(
        foodEmojis[Math.floor(Math.random() * foodEmojis.length)]
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput("");
      // Simulate bot response (replace with actual chatbot logic)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: `Yum! That sounds delicious. Here's a random food fact: Did you know that the world's largest pizza was 122 feet in diameter? 🍕`,
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="chat-toggle-button"
        aria-label="Open chat"
      >
        <div className="relative">
          <Pizza className="h-6 w-6 animate-spin" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
            {currentEmoji}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-0 right-0 m-4 bg-white border rounded-lg shadow-lg w-80">
          <div className="flex justify-between items-center bg-gray-800 text-white p-2 rounded-t-lg">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Utensils className="h-5 w-5 animate-wobble" />
              Crazy Food Chat
              <Coffee className="h-5 w-5 animate-wiggle" />
            </h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-orange-200 animate-pulse"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="chat-content p-4 h-60 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.isUser ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.isUser ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer p-2">
            <form onSubmit={handleSubmit} className="w-full flex gap-2">
              <input
                type="text"
                placeholder="Type your food query..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-gray-100 p-2 rounded"
              />
              <button
                type="submit"
                className="p-2 rounded bg-blue-500 text-white"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me about Shahid's skills or projects 🚀", bot: true },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { text: input, bot: false };
    let botReply = "Thanks for asking! Shahid is a skilled full stack developer.";

    if (input.toLowerCase().includes("skills"))
      botReply = "He works with React, JavaScript, Python, SQL & Tailwind CSS.";
    if (input.toLowerCase().includes("projects"))
      botReply = "Check the projects section to see his work!";
    if (input.toLowerCase().includes("contact"))
      botReply = "You can contact him through the contact form.";

    setMessages([...messages, userMsg, { text: botReply, bot: true }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6">
      {open && (
        <div className="bg-white w-72 h-96 rounded-xl shadow-lg flex flex-col">
          <div className="bg-indigo-600 text-white p-3 rounded-t-xl flex justify-between">
            <span>AI Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${msg.bot ? "text-left" : "text-right"}`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.bot ? "bg-gray-200" : "bg-indigo-500 text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-l px-2"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-3 rounded-r"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBot;

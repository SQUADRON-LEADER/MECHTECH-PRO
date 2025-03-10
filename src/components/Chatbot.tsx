import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Mic, Paperclip, ChevronDown, Globe } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  quickReplies?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hi there! I'm MechBot, your virtual assistant. How can I help you with your vehicle today?",
      sender: "bot",
      timestamp: new Date(),
      quickReplies: ["Book a service", "Track my service", "Talk to a mechanic"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("English");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languageOptions = ["English", "Spanish", "French", "German", "Chinese", "Hindi"];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = (text: string) => {
    if (text.trim() === "") return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        {
          text: "I understand you're having an issue with your vehicle. Could you provide more details about the problem?",
          quickReplies: ["Battery issue", "Engine problem", "Flat tire"],
        },
        {
          text: "Based on your description, it sounds like it might be a battery issue. Would you like me to help you book a battery jumpstart service?",
          quickReplies: ["Yes, please", "No, thanks"],
        },
        {
          text: "Our nearest mechanic can reach your location in about 30 minutes. Would you like me to dispatch them?",
          quickReplies: ["Yes, dispatch", "No, wait"],
        },
        {
          text: "I've found 3 mechanics specializing in engine repair near your location. Would you like to see their profiles?",
          quickReplies: ["Show profiles", "Not now"],
        },
        {
          text: "You can track your service using the tracking ID that will be sent to your phone once the mechanic is dispatched.",
          quickReplies: ["Track service", "Cancel service"],
        },
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse.text,
        sender: "bot",
        timestamp: new Date(),
        quickReplies: randomResponse.quickReplies,
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 z-40 bg-deep-green text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-200"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 left-6 z-50 bg-dark-gray rounded-lg shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen
            ? isMinimized
              ? "w-72 h-14"
              : "w-80 md:w-96 h-[500px] max-h-[80vh]"
            : "w-0 h-0 opacity-0"
        }`}
      >
        {/* Chat Header */}
        <div
          className="bg-deep-green p-3 flex items-center justify-between cursor-pointer"
          onClick={minimizeChat}
        >
          <div className="flex items-center">
            <MessageSquare size={20} className="text-neon-yellow mr-2" />
            <h3 className="font-medium text-white">MechBot Assistant</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="text-gray-200 hover:text-neon-yellow transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Language Selector */}
            <div className="bg-primary-black p-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center text-sm text-gray-300">
                <Globe size={14} className="mr-1 text-neon-yellow" />
                <span>Language:</span>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-dark-gray text-gray-300 text-sm py-1 px-2 rounded border border-gray-700 focus:outline-none focus:ring-1 focus:ring-neon-yellow"
              >
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Chat Messages */}
            <div className="p-3 h-[calc(100%-160px)] overflow-y-auto bg-primary-black">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-deep-green text-white rounded-tr-none"
                        : "bg-dark-gray text-gray-200 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block text-right">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {message.quickReplies && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {message.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickReply(reply)}
                            className="bg-neon-yellow text-primary-black text-xs py-1 px-2 rounded-full hover:bg-opacity-90 transition-all duration-200"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div className="bg-dark-gray text-gray-200 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-gray-700 bg-primary-black">
              <div className="flex items-center">
                <button className="text-gray-400 hover:text-neon-yellow mr-2">
                  <Paperclip size={18} />
                </button>
                <div className="relative flex-grow">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full pl-3 pr-10 py-2 bg-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-neon-yellow text-gray-200 max-h-20 resize-none"
                    rows={1}
                  />
                </div>
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={inputValue.trim() === ""}
                  className={`ml-2 p-2 rounded-full ${
                    inputValue.trim() === ""
                      ? "bg-gray-700 text-gray-500"
                      : "bg-neon-yellow text-primary-black"
                  } transition-colors duration-200`}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <button className="flex items-center hover:text-neon-yellow transition-colors duration-200">
                  <Mic size={14} className="mr-1" />
                  Voice input
                </button>
                <span>Powered by MechFixPro AI</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Chatbot;
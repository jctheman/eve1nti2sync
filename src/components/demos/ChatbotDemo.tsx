
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SendIcon, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const predefinedResponses: Record<string, string> = {
  "hello": "Hello! I'm the EventSync AI assistant. How can I help you with your event today?",
  "hi": "Hi there! I'm the EventSync AI assistant. How can I help you with your event today?",
  "event date": "The TechConf Global event is scheduled for October 15-17, 2023, at the San Francisco Convention Center.",
  "registration": "Registration for TechConf Global is open until September 30. Early bird tickets are available until August 15 with a 20% discount.",
  "discount": "Yes, we offer early bird discounts of 20% until August 15. We also have group discounts for teams of 5 or more attendees.",
  "speakers": "We have over 50 speakers confirmed for TechConf Global, including industry leaders from Microsoft, Google, and Amazon. The full speaker list is available on the event website.",
  "schedule": "The event schedule includes keynote sessions in the morning, breakout sessions throughout the day, and networking events in the evening. The detailed schedule will be published by August 31.",
  "hotel": "We have negotiated special rates with several hotels near the convention center. The Marriott Downtown and Hilton Convention Center are offering 15% off their standard rates for attendees.",
  "help": "I can help with event information, registration details, scheduling, accommodations, and more. Just ask me what you'd like to know!",
};

const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm the EventSync AI assistant. How can I help you with your event today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      let responseText = "I'm sorry, I don't have specific information about that. Could you please try asking something about event dates, registration, discounts, speakers, schedule, or hotels?";
      
      // Check for keywords in the input
      const lowercaseInput = input.toLowerCase();
      for (const [keyword, response] of Object.entries(predefinedResponses)) {
        if (lowercaseInput.includes(keyword)) {
          responseText = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Card className="w-full h-[500px] max-w-lg mx-auto shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-brand-purple text-white py-4 px-6">
        <CardTitle className="flex items-center">
          <Bot className="mr-2" size={24} />
          EventSync AI Chatbot
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-[calc(100%-68px)]">
        <div className="flex-grow overflow-auto p-4 bg-gray-50">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="w-8 h-8">
                    {message.sender === 'bot' ? (
                      <AvatarImage src="https://images.unsplash.com/photo-1676372971792-b43b29f39b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" />
                    ) : (
                      <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" />
                    )}
                    <AvatarFallback>{message.sender === 'bot' ? 'AI' : 'You'}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-2xl px-4 py-2 break-words ${
                      message.sender === 'bot'
                        ? 'bg-white border border-gray-200 text-gray-800'
                        : 'bg-brand-purple text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex mb-4 justify-start"
              >
                <div className="flex gap-2 max-w-[80%]">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1676372971792-b43b29f39b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="rounded-2xl px-4 py-2 bg-white border border-gray-200 text-gray-800">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </AnimatePresence>
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
          <div className="flex">
            <Input
              className="flex-grow mr-2"
              placeholder="Ask about event dates, registration, speakers..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" className="bg-brand-purple hover:bg-brand-lightPurple">
              <SendIcon size={18} />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChatbotDemo;

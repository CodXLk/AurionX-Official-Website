"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { chatbotForServiceInformation } from "@/ai/flows/chatbot-for-service-information";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, Bot, User, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { role: 'bot', content: "Hello! I'm the AurionX assistant. How can I help you with our services today?" }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // A slight delay to allow the DOM to update before scrolling
    setTimeout(() => {
        const scrollArea = scrollAreaRef.current;
        if (scrollArea) {
            const viewport = scrollArea.querySelector('div[data-radix-scroll-area-viewport]');
            if (viewport) {
              viewport.scrollTop = viewport.scrollHeight;
            }
        }
    }, 100);
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { response } = await chatbotForServiceInformation({ query: input });
      const botMessage: Message = { role: 'bot', content: response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center animate-bounce"
          size="icon"
          aria-label="Open chatbot"
        >
          <MessageSquare className="w-8 h-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full w-full sm:w-[440px] sm:max-w-none p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="font-headline flex items-center gap-2"><Bot /> AurionX Assistant</SheetTitle>
          <SheetDescription>Get instant answers about our services.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'bot' && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback><Bot className="w-5 h-5"/></AvatarFallback>
                  </Avatar>
                )}
                <div className={`rounded-lg px-4 py-2 max-w-[80%] text-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback><User className="w-5 h-5"/></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8">
                    <AvatarFallback><Bot className="w-5 h-5"/></AvatarFallback>
                </Avatar>
                <div className="rounded-lg px-4 py-2 bg-muted flex items-center">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <SheetFooter className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our POS systems..."
              disabled={isLoading}
              autoComplete="off"
            />
            <Button type="submit" disabled={isLoading || !input.trim()} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

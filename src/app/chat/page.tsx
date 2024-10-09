"use client";

import {
  ChatBubble,
  ChatBubbleAction,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { Button } from "@/components/ui/button";
import { CopyIcon, CornerDownLeft, Mic, RefreshCcw } from "lucide-react";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Coffee, Bot } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatAiIcons = [
  {
    icon: CopyIcon,
    label: "Copy",
  },
  {
    icon: RefreshCcw,
    label: "Refresh",
  },
];

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    reload,
    append,
    error,
  } = useChat({
    onResponse(response) {
      if (response) {
        console.log(response);
        setIsGenerating(false);
      }
    },
    onError(error) {
      if (error) {
        setIsGenerating(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now().toString(),
            role: "assistant",
            content:
              "Oops! Ken Chan AI needs a coffee break! 😴☕️\n\nWe've hit our daily limit (Ken's brain can only handle so much awesomeness in one day). Please come back tomorrow for more witty banter and tech wisdom!\n\nIn the meantime, why not ponder life's greatest mystery: why do programmers prefer dark mode? 🤔💻",
          },
        ]);
      }
    },
  });

  const messagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    handleSubmit(e);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (isGenerating || isLoading || !input) return;
      setIsGenerating(true);
      onSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const handleAskQuestion = (messages: string) => {
    append({
      role: "user",
      content: messages,
    });
  };

  const handleActionClick = async (action: string, messageIndex: number) => {
    console.log("Action clicked:", action, "Message index:", messageIndex);
    if (action === "Refresh") {
      setIsGenerating(true);
      try {
        await reload();
      } catch (error) {
        console.error("Error reloading:", error);
      } finally {
        setIsGenerating(false);
      }
    }

    if (action === "Copy") {
      const message = messages[messageIndex];
      if (message && message.role === "assistant") {
        navigator.clipboard.writeText(message.content);
      }
    }
  };

  return (
    <div className="bg-[#1e2540]">
      <main className="flex bg-[#1e2540] h-screen w-full max-w-4xl flex-col items-center mx-auto py-6">
        <ChatMessageList ref={messagesRef}>
          {/* Initial Message */}
          {messages.length === 0 && (
            <Card className="w-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-extrabold text-purple-700 dark:text-purple-300">
                  <Sparkles className="w-6 h-6" />
                  Welcome to Ken Chan AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  🎉Introducing the one, the only, the occasionally
                  caffeinated... Ken Chan AI! 🥁
                </p>
                <div className="space-y-2 space-x-2">
                  <Badge variant="secondary" className="text-sm">
                    <Coffee className="w-4 h-4 mr-1" /> Fueled by code and
                    coffee
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Mic className="w-4 h-4 mr-1" /> Karaoke champion (in the
                    shower)
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Bot className="w-4 h-4 mr-1"></Bot>50% human, 50% AI, 100%
                    awesome
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Ever wondered what it's like to have a tiny Ken Chan in your
                  pocket? Well, wonder no more! This AI is like Ken after his
                  third espresso shot – chatty, witty, and full of surprises!
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Want to know Ken's secret talent? His go-to dance move? Or
                  maybe his thoughts on pineapple on pizza? (Spoiler: It's
                  complicated.) Just ask! Ken Chan AI is here to spill the beans
                  faster than Ken spills his coffee on Monday mornings.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">
                  So, buckle up, buttercup! You're in for a wild ride through
                  the wonderfully wacky world of Ken Chan. Let's chat, laugh,
                  and maybe even learn something... or not. No refunds either
                  way! 😉
                </p>
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-4 mt-4">
                <Button
                  onClick={() =>
                    handleAskQuestion(
                      "What's Ken's favorite programming language?"
                    )
                  }
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300"
                >
                  Favorite Programming Language?
                </Button>
                <Button
                  onClick={() =>
                    handleAskQuestion("What's Ken's favorite tech stack?")
                  }
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-300"
                >
                  Tech Stack?
                </Button>
                <Button
                  onClick={() =>
                    handleAskQuestion("What is Ken's favorite hobby?")
                  }
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300"
                >
                  Hobby?
                </Button>
                <Button
                  onClick={() =>
                    handleAskQuestion("What's Ken's working experience?")
                  }
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-300"
                >
                  Working Experience?
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Messages */}
          {messages &&
            messages.map((message, index) => (
              <ChatBubble
                key={index}
                variant={message.role == "user" ? "sent" : "received"}
              >
                <ChatBubbleAvatar
                  src=""
                  fallback={message.role == "user" ? "👨🏽" : "😎"}
                />
                <ChatBubbleMessage>
                  {message.content
                    .split("```")
                    .map((part: string, index: number) => {
                      return (
                        <Markdown key={index} remarkPlugins={[remarkGfm]}>
                          {part}
                        </Markdown>
                      );
                    })}

                  {message.role === "assistant" &&
                    messages.length - 1 === index && (
                      <div className="flex items-center mt-1.5 gap-1">
                        {!isGenerating && (
                          <>
                            {ChatAiIcons.map((icon, iconIndex) => {
                              const Icon = icon.icon;
                              return (
                                <ChatBubbleAction
                                  variant="outline"
                                  className="size-5"
                                  key={iconIndex}
                                  icon={<Icon className="size-3" />}
                                  onClick={() =>
                                    handleActionClick(icon.label, index)
                                  }
                                />
                              );
                            })}
                          </>
                        )}
                      </div>
                    )}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}

          {/* Loading */}
          {isGenerating && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar src="" fallback="😎" />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
        <div className="w-full px-4">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          >
            <ChatInput
              value={input}
              onKeyDown={onKeyDown}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center p-3 pt-0">
              <Button
                disabled={!input || isLoading}
                type="submit"
                size="sm"
                className="ml-auto gap-1.5"
              >
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

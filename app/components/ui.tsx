"use client";
import { useEffect, useState } from "react";
import ChatHeader from "./chat-header";
import { useChatStore } from "../stores/chat-bot-store";
import ChatInput from "./chat-input";
import ChatBody from "./chat-body";

export default function ChatUI() {
  const { open, setOpen } = useChatStore();

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative">
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-accent text-white shadow-xl flex items-center justify-center text-2xl hover:scale-105 transition"
      >
        {open ? "✖" : "💬"}
      </button>

      {/* Chatbox Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 max-h-[75vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <ChatHeader />
          <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            <ChatBody />
          </main>
          <ChatInput />
        </div>
      )}
    </div>
  );
}

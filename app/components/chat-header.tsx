"use client";

import { useEffect, useState } from "react";
import { useConnectionStore } from "../stores/connection-store";
import { useChatStore } from "../stores/chat-bot-store";

const ChatHeader = () => {
  const { connected: online, setConnection } = useConnectionStore();
  const setOpen = useChatStore.getState().setOpen;

  useEffect(() => {
    const updateStatus = () => setConnection(navigator.onLine);
    addEventListener("online", updateStatus);
    addEventListener("offline", updateStatus);
    updateStatus();
    return () => {
      removeEventListener("online", updateStatus);
      removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <div>
      <header className="w-full border-b border-border h-14 flex items-center justify-between px-4 bg-card/80 backdrop-blur-sm">
        {online ? (
          <>
            <div className="font-semibold text-base">AI Chat Assistant</div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-accent/10 transition"
            >
              ✖
            </button>
          </>
        ) : (
          <div className="w-full text-left text-red-500 font-medium text-sm">
            ⚠️ Connection Lost
          </div>
        )}
      </header>
    </div>
  );
};

export default ChatHeader;

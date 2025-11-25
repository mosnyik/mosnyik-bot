import React from "react";

const ChatInput = () => {
  return (
    <div className="py-2">
      {/* Input Section */}
      <footer className="w-full border-t border-border p-3 bg-card/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 bg-card border border-border shadow-inner rounded-full px-4 py-3">
          <span className="opacity-60 text-lg">🎤</span>
          <input
            type="text"
            placeholder="Type your message…"
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
          />
          <button className="opacity-80 hover:opacity-100 transition text-lg">
            ➡️
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatInput;

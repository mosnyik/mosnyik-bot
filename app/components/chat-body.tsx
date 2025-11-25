import React from 'react'

const ChatBody = () => {
  return (
    <div>
      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {/* User Message */}
        <div className="flex flex-col">
          <div className="text-xs text-muted-foreground mb-1">You • Today</div>
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm text-sm">
            How can I build a simple chatbot using LangChain + Gemini?
          </div>
        </div>

        {/* Assistant Message */}
        <div className="flex flex-col">
          <div className="text-xs text-muted-foreground mb-1">
            Assistant • Typing…
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm text-sm">
            Sure! Here’s how to build one:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Start with LangChain’s LLM wrapper</li>
              <li>Feed system + user prompts</li>
              <li>Build a loop to accept input</li>
              <li>Add streaming for better UX</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChatBody

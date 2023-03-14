'use client'
import { signOut, useSession } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();
  console.log(session);
  
  return (
    <div className="p-2 flex flex-col h-screen bg-sidebar_pattern bg-cover">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the Chat Rows */}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default Sidebar;

"use client"
import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import NewChat from "../components/NewChat";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGpt</h1>
      <div className="mb-8 sm:hidden">
      <NewChat />
      </div>
      <div className="flex space-x-2 text-center mx-4">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              "The dialogue format makes it possible for ChatGPT to answer
              followup questions."
            </p>
            <p className="infoText">
              "Messages are stored in Firebase's firestore"
            </p>
            <p className="infoText">"Limited knowledge of events after 2021.</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              "We've trained a model called ChatGPT which interacts in a
              conversational way."
            </p>
            <p className="infoText">
              "Hot Toast notifications within ChatGPT is thinking!"
            </p>
            <p className="infoText">
              "May occasionally generate incorrect information."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

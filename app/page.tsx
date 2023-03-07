import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGpt</h1>
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Examples</h2>
        </div>

        <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

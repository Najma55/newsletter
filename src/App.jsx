import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <main>
      <div className="newsletter">
        <h1>Level Up Your Frontend Skills</h1>
        <p>
          sign up for our free newsletter to receive weekly coding challenges
          that will help you improve your frontend development skills.
        </p>
        <div className="input-section">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
        <div className="agreement">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <p>
            By checking this box, you agree to recieve our weekly newsletter
            containing coding challenges,tips, and other related content. You
            may unsubscribe from the newsletter at anytime.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;

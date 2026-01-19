import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("Form submitted successfully");
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="model-content">
        <h1>User Details Modal</h1>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? "Close Form" : "Open Form"}
        </button>
      </div>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>

            {/* FORM START */}
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input type="text" required />
              </div>

              <div>
                <label>Email Address:</label>
                <input type="email" required />
              </div>

              <div>
                <label>Phone Number:</label>
                <input type="tel" required />
              </div>

              <div>
                <label>Date of Birth:</label>
                <input type="date" required />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            {/* FORM END */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

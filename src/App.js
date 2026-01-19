import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const dob = e.target.dob.value;

    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return;
    }

    const selectedDate = new Date(dob);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate >= today) {
      alert("Invalid date of birth");
      return;
    }

    alert("Form submitted successfully");
    setOpen(false);
  };

  return (
    <div className="container" id="root">
      <div className="model-content">
        <h1>User Details Modal</h1>
        <button className="toggle-btn" onClick={() => setOpen(true)}>
          Open Form
        </button>
      </div>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h2>Fill Details</h2>

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input id="username" name="username" type="text" required />
                </div>

                <div>
                  <label htmlFor="email">Email Address:</label>
                  <input id="email" name="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="phone">Phone Number:</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>

                <div>
                  <label htmlFor="dob">Date of Birth:</label>
                  <input id="dob" name="dob" type="date" required />
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

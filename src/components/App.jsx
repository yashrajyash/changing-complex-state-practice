import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleChange(event) {
    const { name: inputType, value: inputValue } = event.target;

    setContact((prevValue) => {
      if (inputType === "fName") {
        return {
          fName: inputValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputType === "lName") {
        return {
          fName: prevValue.fName,
          lName: inputValue,
          email: prevValue.email
        };
      } else if (inputType === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: inputValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

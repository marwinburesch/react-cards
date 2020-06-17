import React from "react";

export default function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");

  function handleChange(event) {
    const targetValue = event.target.value;
    const targetName = event.target.name;
    if (targetName === "email") {
      setEmail(targetValue);
    } else if (targetName === "firstName") {
      setFirstName(targetValue);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Thanks, ${firstName}! The newsletter will be sent to: ${email}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        placeholder="email"
        onChange={handleChange}
        type="text"
      />
      <input
        name="firstName"
        value={firstName}
        placeholder="email"
        onChange={handleChange}
        type="text"
      />
      <button type="submit">submit</button>
    </form>
  );
}

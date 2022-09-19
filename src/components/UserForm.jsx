import { useState } from "react";

function UserForm({ title, handleClick }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="my__form" onSubmit={handleFormSubmit} autoComplete="off">
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="emailinizi yazin"
        type="email"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        placeholder="parolunuzu daxil edin"
        type="password"
      />
      <button
        disabled={!email || !pass}
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </button>
    </form>
  );
}

export default UserForm;

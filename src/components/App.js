import React, { useState } from 'react';


const App = () => {
    return (<div>Helo world</div>)
}


function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br/>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App
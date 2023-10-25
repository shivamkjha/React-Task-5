import React, { useState } from 'react';

function AgeCalculator() {
  const [dob, setDOB] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const birthDate = new Date(dob);
      const currentDate = new Date();
      const ageDiff = currentDate - birthDate;
      const calculatedAge = Math.floor(ageDiff / (365.25 * 24 * 60 * 60 * 1000)); // Calculate age in years
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="container">
      <div className="AgeCalculator">
        <h2>Age Calculator</h2>
        <div>
          <label htmlFor="dobInput">Enter your Date of Birth:</label>
          <br></br>
          <br></br>
          <input
            type="date"
            id="dobInput"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          <br></br>
          <br></br>
          <button onClick={calculateAge}>Calculate Age</button>
        </div>
        {age !== null && (
          <p>You are {age} years old</p>
        )}
      </div>
    </div>
  );
}

export default AgeCalculator;
import React, { useState } from 'react';

const ExerciseForm = () => {
  const [squatRep, setSquatRep] = useState(0);
  const [curlRep, setCurlRep] = useState(0);
  const [pressRep, setPressRep] = useState(0);
  const [numSets, setNumSets] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Squat Reps: ${squatRep}, Curl Reps: ${curlRep}, Press Reps: ${pressRep}, Sets: ${numSets}`;
    alert(message);
  };

  return (
    <div className='mx-12 my-10'>
        <h1>Fitness Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Squat Reps:
            <input
              type="number"
              value={squatRep}
              onChange={(e) => setSquatRep(e.target.value)}
              className='mx-4 my-2 px-2'
            />
          </label>
        </div>
        <div>
          <label>
            Curl Reps:
            <input
              type="number"
              value={curlRep}
              onChange={(e) => setCurlRep(e.target.value)}
              className='mx-8 my-2 px-2'
            />
          </label>
        </div>
        <div>
          <label>
            Press Reps:
            <input
              type="number"
              value={pressRep}
              onChange={(e) => setPressRep(e.target.value)}
              className='mx-6 my-2 px-2'
            />
          </label>
        </div>
        <div>
          <label>
            No. of Sets:
            <input
              type="number"
              value={numSets}
              onChange={(e) => setNumSets(e.target.value)}
              className='mx-6 my-2 px-2'
            />
          </label>
        </div>
        <button type="submit" className='my-2 bg-white px-3 text-blue-600 rounded-xl text-base'>Submit</button>
      </form>
    </div>
  );
};

export default ExerciseForm;

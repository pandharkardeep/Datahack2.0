import React, { useState } from 'react';

const Recommender = () => {
  const [ message, setMessage] = useState('');
  const [n, setN] = useState(1);
  const [wLoc, setWLoc] = useState(1);
  const [wGoal, setWGoal] = useState(1);

  const chooseworkout = (n, w_loc, w_goal) => {
    if (n === 1) {
      // Rest of your conditions here
      if (w_loc === 1) {
        if (w_goal === 1) {
           setMessage("Recommended Exercises: Running, Stair-Master, Boxing, Sprinting, Cycling, Rowing, Swimming");
        } else if (w_goal === 2) {
           setMessage("Recommended Exercises: Lat Pull Down, Cable Chest Flies, Tricep Pushdown, Bicep-Cable-Curls, Leg Press, Hamstring Curls");
        } else if (w_goal === 3) {
           setMessage("Recommended Exercises: Calisthenics Drills, BodyWeight Circuits, Hiking, Cycling, Yoga");
        }
      } else if (w_loc === 2) {

        if (w_goal === 1) {
                            setMessage("Recommended Exercises:  Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees");
                      } else if (w_goal === 2) {
                            setMessage("Recommended Exercises:  Push - Ups, BW squats, Lunges, Planks, Dips, Pull ups, BW Rows, RB bicep curls, RB tricep Pushdown");
                      } else if (w_goal === 3) {
                            setMessage("Recommended Exercises:  Calisthenics Drills, BodyWeight Circuits, Hiking, Cycling, Yoga");
                      }
                    }
                  } else if (n === 2 || n === 4) {
                      //  setMessage("Upper Body and Lower Split");
              
                    if (w_loc === 1) {
              
                      if (w_goal === 1) {
                          setMessage("Recommended Exercises:  Running, Cycling, Hiking, Swimming, Jumping Rope, Power Walking, Hill Sprints, Outdoor Circuit Training, Rowing, Beach Volleyball");
                      } else if (w_goal === 2) {
                          setMessage("Recommended Exercises:  Upper Body: Lat Pull Down, Cable Chest Flies, Tricep Pushdown, Bicep-Cable-Curls  Lower Body: Leg Press, Hamstring Curls, Calf Raises");
                      } else if (w_goal === 3) {
                          setMessage("Recommended Exercises:  Upper Body: Pushups, Pullups, Crunches  Lower Body: BW squats, BW Calf Raises, Nordic Curl");
                      }
                    } else if (w_loc === 2) {
              
                      if (w_goal === 1) {
                          setMessage("Recommended Exercises:  Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees");
                      } else if (w_goal === 2) {
                          setMessage("Recommended Exercises:  Upper: Pushups, Pullups, Dips, BW rows   Lower: BW squats, BW Nordic Curls, BW Calf Raises");
                      } else if (w_goal === 3) {
                          setMessage("Recommended Exercises:  Yoga, Jump Rope, Leg Raises, Stair Climbing, Indoor Cycling, Jumping Jacks, BW squats, Planks");
                      }
                    }
                  } else if (n === 3 || n === 6) {
                    //  setMessage("Push - Pull legs Split");
                    if (w_loc === 1) {
              
                      if (w_goal === 1) {
                          setMessage("Recommended Exercises:  Running, Cycling, Hiking, Swimming, Jumping Rope, Power Walking, Hill Sprints, Outdoor Circuit Training, Rowing, Beach Volleyball");
                      } else if (w_goal === 2) {
                          setMessage("Recommended Exercises:  Push: Cable Chest Flies, Dumbbell Chest Press  Pull: Lat Pull Down, Cable Rows, Lat PullOver   Legs: Leg Press, Barbell Squat, Weighted Calf Raise, Romanian Dead Lift");
                      } else if (w_goal === 3) {
                          setMessage("Recommended Exercises:  Push: Pushups, Dips   Pull: Pullups, BW rows   Legs: BW squats, BW Calf Raises, Nordic Curl");
                      }
                    } else if (w_loc === 2) {
                      
                      if (w_goal === 1) {
                          setMessage("Recommended Exercises:  Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees");
                      } else if (w_goal === 2) {
                          setMessage("Recommended Exercises:  Push: Pushups, Pushdowns, BW Dips   Pull: BW Pullups, BW rows   Legs: BW squats, BW Calf Raises, BW Nordic Curls");
                      } else if (w_goal === 3) {
                          setMessage("Recommended Exercises:  Yoga, Jump Rope, Leg Raises, Stair Climbing, Indoor Cycling, Jumping Jacks, BW squats, Planks");
                      }
                    }
                  } else if (n === 5 || n === 7) {
                    //  setMessage("Bro Split");
                  
                    if (w_loc === 1) {
                      
                      if (w_goal === 1) {
                          setMessage("Recommended Exercises:  Running, Cycling, Hiking, Swimming, Jumping Rope, Power Walking, Hill Sprints, Outdoor Circuit Training, Rowing, Beach Volleyball");
                      } else if (w_goal === 2) {
                          setMessage("Recommended Exercises:  Push: Cable Chest Flies, Dumbbell Chest Press  Pull: Lat Pull Down, Cable Rows, Lat PullOver   Legs: Leg Press, Barbell Squat, Weighted Calf Raise, Romanian Dead Lift");
                      } else if (w_goal === 3) {
                          setMessage("Recommended Exercises:  Push: Pushups, Dips   Pull: Pullups, BW rows   Legs: BW squats, BW Calf Raises, Nordic Curl");
                      }
                    } else if (w_loc === 2) {
                 
                      if (w_goal === 1) {
                          setMessage("Recommended Exercises:  Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees");
                      } else if (w_goal === 2) {
                          setMessage("Recommended Exercises:  Arms: RB Bicep Curl, RB Tricep Pushdown   Chest: BW Pushups   Back: BW Pullups   Legs: BW squats, BW Nordic Curls, BW Calf Raises");
                      } else if (w_goal === 3) {
                          setMessage("Recommended Exercises:  Yoga, Jump Rope, Leg Raises, Stair Climbing, Indoor Cycling, Jumping Jacks, BW squats, Planks");
                      }
        // Rest of your conditions based on w_loc
        // ...
      }
      // Other conditions based on n
      // ... 
    } else {
      setMessage("Please enter a Valid Number of Days");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    chooseworkout(n, wLoc, wGoal);
  };

  return (
    <div className='bg-blue-100 mt-40 text-black w-[110vh] rounded-xl mx-[48vh] '>
        <h1 className='text-black px-1'>Exercise Recommender Model</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='px-2'>
            Number of days for exercise decided:
            <input  className='px-2 my-2 mx-4' type="number" value={n} onChange={(e) => setN(parseInt(e.target.value))} />
          </label>
        </div>
        <div>
          <label className='px-2'>
            Workout location indoor(1)/outdoor(2):
            <input  className='px-2 my-2 mx-2' type="number" value={wLoc} onChange={(e) => setWLoc(parseInt(e.target.value))} />
          </label>
        </div>
        <div>
          <label className='px-2'>
            Value of workout goal decided * :
            <input  className='px-2 my-2 mx-2' type="number" value={wGoal} onChange={(e) => setWGoal(parseInt(e.target.value))} />
          </label>
        </div>
        <button className='px-2 bg-blue-400 rounded-lg my-2 mx-1 text-white' type="submit">Get workout Plan</button>
        <p className='px-1 py-2 text-sm'>* 1-Weight loss, 2-Muscle gain, 3-General Fitness</p>
      </form>
      <div className='text-white absolute my-6 font-bold text-xl bg-blue-300 px-3 rounded-xl w-[80vh]'>{message}</div>
    </div>
  );
};

export default Recommender;



import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    this.progress += exercise.caloriesBurned;   // update progress
    console.log(
      `${exercise.name} done! Calories burned: ${exercise.caloriesBurned}, Total progress: ${this.progress}`
    );

    if (this.progress >= this.goal) {
      this.emit("goalReached");   // emit event once goal is reached
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  // Listener for "goalReached" event
  tracker.on("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal.");
  });

  // Simulate adding exercises
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };

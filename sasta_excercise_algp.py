def recommend_exercises(user_data):
    recommended_exercises = []

    # Get user inputs
    age = user_data["age"]
    gender = user_data["gender"]
    weight = user_data["weight"]
    goal = user_data["goal"]
    preferences = user_data["preferences"]

    # Sample exercise recommendations based on user inputs
    if age < 30 and weight > 70 and "cardio" in preferences:
        recommended_exercises.append("Running")
    if gender == "female" and "strength_training" in preferences:
        recommended_exercises.append("Bodyweight Squats")

    return recommended_exercises

# Get user inputs
user_data = {
    "age": 25,
    "gender": "male",
    "weight": 75,
    "goal": "weight_loss",
    "preferences": ["cardio", "strength_training"],
}

# Get exercise recommendations for the user
recommended_exercises = recommend_exercises(user_data)

# Print the recommended exercises
if recommended_exercises:
    print("Recommended Exercises:")
    for exercise in recommended_exercises:
        print(exercise)
else:
    print("No recommendations available based on your inputs.")
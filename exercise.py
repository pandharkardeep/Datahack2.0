n = int(input("Enter Number of Days of week you workout:"))
gender = input("Enter sex (Male(M) or Female(F)):")
if gender != 'M' and gender !='F':
    print ("Invalid Gender")
    gender = input("Enter a Valid Gender")
if(n == 1):
    print("Full Body")
    w_loc = int(input("Preferred Location of Workout:\n 1-> Outdoor \n 2-> Indoor"))
    if w_loc == 1:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness "))
        if w_goal == 1:
            print("Recommended Exercises:\n Running, Stair-Master, Boxing, Sprinting, Cycling, Rowing, Swimming")
        elif w_goal == 2:
            print("Recommended Exercises:\n Lat Pull Down, Cable Chest Flies, Tricep Pushdown, Bicep-Cable-Curls, Leg Press, Hamstring Curls")
        elif w_goal == 3:
            print("Recommended Exercises:\n Calisthenics Drills,BodyWeight Circuits, Hiking, Cycling, Yoga")
    elif w_loc == 2:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness"))
        if w_goal == 1:
            print("Recommended Exercises:\n Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees")
        elif w_goal == 2:
            print("Recommended Exercises:\n Push - Ups, BW squats, Lunges, Planks, Dips, Pull ups, BW Rows, RB bicep curls, RB tricep Pushdown")
        elif w_goal == 3:
            print("Recommended Exercises:\n Yoga, Jump Rope, Leg Raises, Stair Climbing, Indoor Cycling, Jumping Jacks, BW squats, Planks ")
elif (n == 2 or n == 4):
    print("Upper Body and Lower Split")
    w_loc = int(input("Preferred Location of Workout:\n 1-> Outdoor \n 2-> Indoor"))
    if w_loc == 1:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness "))
        if w_goal == 1:
            print("Recommended Exercises:\n Running, Cycling, Hiking, Swimming, Jumping Rope, Power Walking, Hill Sprints, Outdoor Circuit Training, Rowing, Beach Volleyball")
        elif w_goal == 2:
            print("Recommended Exercises:\n Upper Body: Lat Pull Down, Cable Chest Flies, Tricep Pushdown, Bicep-Cable-Curls\n Lower Body: Leg Press, Hamstring Curls, Calf Raises")
        elif w_goal == 3:
            print("Recommended Exercises:\n Upper Body: Pushups, Pullups, Crunches\n Lower Body: BW squats, BW Calf Raises, Nordic Curl")
    elif w_loc == 2:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness"))
        if w_goal == 1:
            print("Recommended Exercises:\n Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees")
        elif w_goal == 2:
            print("Recommended Exercises:\n Upper: Pushups, Pullups, Dips, BW rows \n Lower: BW squats, BW Nordic Curls, BW Calf Raises")
        elif w_goal == 3:
            print("Recommended Exercises:\n Yoga, Jump Rope, Leg Raises, Stair Climbing, Indoor Cycling, Jumping Jacks, BW squats, Planks ")
elif (n == 3 or n == 6):
    print("Push - Pull legs Split")
    w_loc = int(input("Preferred Location of Workout:\n 1-> Outdoor \n 2-> Indoor"))
    if w_loc == 1:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness "))
        if w_goal == 1:
            print("Recommended Exercises:\n Running, Cycling, Hiking, Swimming, Jumping Rope, Power Walking, Hill Sprints, Outdoor Circuit Training, Rowing, Beach Volleyball")
        elif w_goal == 2:
            print("Recommended Exercises:\n Push: Cable Chest Flies, Dumbbell Chest Press\n Pull: Lat Pull Down, Cable Rows, Lat PullOver \n Legs: Leg Press, Barbell Squat, Weighted Calf Raise, Romanian Dead Lift ")
        elif w_goal == 3:
            print("Recommended Exercises:\n Push: Pushups, Dips \n Pull: Pullups, BW rows \n Legs: BW squats, BW Calf Raises, Nordic Curl")
    elif w_loc == 2:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness"))
        if w_goal == 1:
            print("Recommended Exercises:\n Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees")
        elif w_goal == 2:
            print("Recommended Exercises:\n Push: Pushups, Pushdowns, BW Dips \n Pull: BW Pullups, BW rows \n Legs: BW squats, BW Nordic Curls, BW Calf Raises")
        elif w_goal == 3:
            print("Recommended Exercises:\n Yoga, Jump Rope, Leg Raises, Stair Climbing, Indoor Cycling, Jumping Jacks, BW squats, Planks ")
elif(n==5 or n == 7):
    print("Bro Split")
    w_loc = int(input("Preferred Location of Workout:\n 1-> Outdoor \n 2-> Indoor"))
    if w_loc == 1:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness "))
        if w_goal == 1:
            print("Recommended Exercises:\n Running, Cycling, Hiking, Swimming, Jumping Rope, Power Walking, Hill Sprints, Outdoor Circuit Training, Rowing, Beach Volleyball")
        elif w_goal == 2:
            print("Recommended Exercises:\n Push: Cable Chest Flies, Dumbbell Chest Press\n Pull: Lat Pull Down, Cable Rows, Lat PullOver \n Legs: Leg Press, Barbell Squat, Weighted Calf Raise, Romanian Dead Lift ")
        elif w_goal == 3:
            print("Recommended Exercises:\n Push: Pushups, Dips \n Pull: Pullups, BW rows \n Legs: BW squats, BW Calf Raises, Nordic Curl")
    elif w_loc == 2:
        w_goal = int(input("Enter you workout Goal:\n 1-> Weight Loss \n 2-> Muscle Gain \n 3-> General Fitness"))
        if w_goal == 1:
            print("Recommended Exercises:\n Jumping Jacks, Burpees, Indoor Cycling, Dancing, Home Cardio Machine, High Knees")
        elif w_goal == 2:
            print("Recommended Exercises:\n Arms: RB Bicep Curl, RB Tricep Pushdown \n Chest: BW Pushups \n Back: BW Pullups \n Legs: BW squats, BW Nordic Curls, BW Calf Raises")
        elif w_goal == 3:
            print("Recommended Exercises:\n Yoga, Jump Rope, Leg Raises, Stair Climbing, Indoor Cycling, Jumping Jacks, BW squats, Planks ")
else :
    print("Please enter Valid Number of Days")


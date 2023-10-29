import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name:"Sign Up",
        path:'/login'
    },
    {
        name:"Sign In",
        path :'/signin'
    },
    {
        name:"Workout",
        path :'/stream'
    },
    {
        name:'Tracker',
        path:'/tracker'
    },
    {
        name:'Dashboard',
        path:'/dashboard'
    },
    // {
    //     name:'Reccomender',
    //     path:'/recommender'
    // }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "We are here to analyse you!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "We are here to analyse you!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "We are here to analyse you!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "We are here to analyse you!",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Hello my name is chin chin how are you "
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Hello my name is chin chin how are you "
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Hello my name is chin chin how are you "
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Hello my name is chin chin how are you "
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Well that depends on your body type but it is generally said to exercise 5 days a week!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "People generally have different time at which they want to work out but morning is the best time to work out!"
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "It can be ranging from 1 hour - 2 hour!"
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "It is best to warmpu befor exercises otherwiase it may lead to muscle pulls and injuries"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Strength training helps regain muscle mass while cardio is also a good practice to put in"
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "There can be different form of strength trainings but lifting weights is said to be of great importance!"
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Aaditya Malani",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 2,
        name: "Aryan Chintakindi",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Akashram",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Deep Pandharkar",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/avatar3.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]
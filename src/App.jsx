// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import Tracker from './pages/tracker/Tracker'
import Dashboard from './pages/Dashboard/Dashboard'
// import Recommender from './pages/recommender/Recommender'
// import FaceDetection from './components/FaceDetection'
import Streamlit from "./components/Streamlit";
// import Login from "./pages/login/Login";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				{/* <Route path="contact" element={<Contact />} /> */}
				<Route path="gallery" element={<Gallery />} />
				<Route path="plans" element={<Plans />} />
				<Route path="trainers" element={<Trainers />} />
				<Route path="login" element={<SignUp/>}/>
				<Route path="signin" element={<SignIn/>}/>
				{/* <Route path="face" element={<FaceDetection/>}/> */}
				<Route path="stream" element={<Streamlit/>}/>
				<Route path="tracker" element={<Tracker/>}/>
				<Route path="dashboard" element={<Dashboard/>}/>
				{/* <Route path="recommender" element={<Recommender/>}/> */}
				{/* <Route path="login" element={<Login/>}/> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;

import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
// import StoryImage from "../../images/about1.jpg";
// import VisionImage from "../../images/about2.jpg";
// import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        Tandrust-360: Your one-stop shop for fitness data analytics. Track your
        progress, identify trends, and achieve your fitness goals.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img
              src="https://th.bing.com/th/id/OIP.X1AV09ntyjHj2LNLjX08tgHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="OurStoryImage"
            />
          </div>
          <div className="about__section-content">
            <h1>Our Method</h1>
            <p>
              Tandrust-360 uses MediaPipe's Pose model to track your body
              postures in real time. The Pose model is a machine learning model
              that can detect and track 33 key points on your body, including
              your head, shoulders, elbows, wrists, hips, knees, and ankles.
              Once your body postures are tracked, Tandrust-360 can analyze your
              movement patterns and identify trends.
			  <p>For example, Tandrust-360
              can track your progress over time on specific exercises, such as
              squats, push-ups, and deadlifts. Tandrust-360 can also identify
              any imbalances or asymmetries in your movement patterns. Based on
              your trends and movement patterns, Tandrust-360 can provide you
              with personalized recommendations for improving your fitness. For
              example, Tandrust-360 might recommend that you focus on improving
              your squatting form or that you try incorporating more variety
              into your workouts.</p>
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
			Tandrust-360, a fitness data analytics startup, envisions a future where everyone has access to the personalized insights they need to achieve their fitness goals.
            With the power of MediaPipe, Tandrust-360 is democratizing fitness analytics by making it accessible, affordable, and actionable for everyone. <p>Tandrust-360 believes that everyone deserves to have a personalized fitness plan that is tailored to their unique needs and goals.
            Tandrust-360's vision is to empower everyone to live their healthiest and happiest life by making fitness data analytics more accessible and impactful.
            Tandrust-360 envisions a world where everyone is moving better, feeling better, and living better.</p>
            </p>
          </div>
          <div className="about__section-image">
            <img
              src="https://th.bing.com/th/id/OIP.jPdN-EGuK-EK2_fvg-WaQQHaCy?w=315&h=132&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="VisionImage"
            />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img
              src="https://th.bing.com/th/id/OIP.xS-o580lX0wPtgraTo67IgHaEF?w=336&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="VisionImage"
            />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
			Tandrust-360 is on a mission to empower people to reach their fitness goals through personalized data insights.
            Tandrust-360 is using the power of MediaPipe to make fitness analytics accessible, affordable, and actionable for everyone.
            Tandrust-360 is committed to providing its users with the insights they need to improve their performance, prevent injuries, and achieve their fitness goals.
            Tandrust-360 is passionate about helping people live healthier and happier lives through fitness.
            Tandrust-360 is on a mission to make fitness data analytics a powerful tool for everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

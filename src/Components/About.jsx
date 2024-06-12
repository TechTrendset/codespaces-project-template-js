/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/purpleflow.jpg";

const imageAltText = "purple background image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am honored to be chosen as a Microsoft Learn Student Ambassador due to my passion for computer science education and dedication to inclusivity. Through my leadership, I led a team in promoting diversity and inclusion in computer science education, teaching students Python and Java. I witnessed the transformative power of inclusive education and now aspire to create an academic realm within the MLSA program that empowers students. Additionally, I actively engage in community events, prioritizing the needs of thalassemia patients and their families. With technical proficiency in Python and Java, I integrate technology into my studies and share my knowledge through graphic design tutorials. I am grateful for this opportunity and look forward to making a lasting impact as a Microsoft Learn Student Ambassador.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Developer",
  "AI enthusiast",
  "Backend Developer",
  "MERN STACK",
  "React Native Mobile Application",
  "Enterprenuer",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

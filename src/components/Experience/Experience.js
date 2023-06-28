import React from "react";
import "./Experience.css";
import { FaCommentAlt } from "react-icons/fa";

const Experience = () => {
  const datafeature = [
    "Developed a website facilitating digital transactions for agents to buy, sell, and rent properties.",
    " Implemented the features from scratch and worked till completion of the project.",
    "Maintained a high level of expertise in managing React state and implementing Hooks strategies.",
    "Build responsive web application for all supporting devices (mobile, tablet, laptop, desktop).",
    "Developed carousel, chat, admin panel, search bar, product details, stories,  sign-in/out, profiles, notifications, and reporting for optimal user experience.",
  ];
  return (
    <div id="Ramrup-Experience" className="Animated">
      <div className="container">
        <div className="About__head">
          <h1 className="bigheading2 bigheading2er">Where I’ve Worked.</h1>
          <div className="Experience_Container">
            <h5 className="bigheadingh5">
              Engineer <span className="subheading">@Codermaniaa</span>
            </h5>
            <p className="subheading2 subheadingdate ">
              <i>Sep 2021 - Present</i>
            </p>
            <div className="ExperienceFeature">
              <p className="subheading2 ">
                {" "}
                Worked as front-end developer in E-commerce and TMS (Tunnel
                management system):
                <br />
              </p>
              <div className="ExperienceFeature">
                {datafeature.map((ele, index) => (
                  <div key={index} className="ExperienceFeaturePragraph">
                    <p className="subheading2"> &#8680;</p>
                    <p className="subheading2"> {ele}</p>
                  </div>
                ))}

                {/* <p className="subheading2">
                  &#8680; Developed a website facilitating digital transactions
                  for agents to buy, sell, and rent properties.
                  <br />
                  &#8680; Implemented the features from scratch and worked till
                  completion of the project.
                  <br />
                  &#8680; Maintained a high level of expertise in managing React
                  state and implementing Hooks strategies.
                  <br />
                  &#8680; Build responsive web application for all devices
                  support (mobile, tablet, laptop, desktop).
                  <br />
                  &#8680; Developed carousel, sign-in/out, admin panel, search
                  bar, product details, stories, chat, profiles, notifications,
                  and reporting for optimal user experience.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

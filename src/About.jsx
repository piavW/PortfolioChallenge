import React from "react";
import { UndrawFreelancer} from "react-undraw-illustrations";
import happyskydiving from "./img/happyskydiving.jpg";

const About = () => {
  return (
    <div className="ui main container"> 
        <div class="ui stackable two column grid">
            <div class="column">
                <UndrawFreelancer primaryColor='#009688'/>
            </div>
            <div class="column">
        <h1 className="ui header" >About Me</h1>
        <p>This year I dediced to spread my wings and take up programming. I've spent the past 9 years as a socionom/social worker and am currently becoming a junior fullstack web developer through the [Craft Academy Bootcamp](https://craftacademy.se/english/). 
    I'm enthustiastic, positive and love a challenge, during my freetime I work on coding-projects, scuba-dive, exercise and always try to get out of my comfortzone. </p>
    <div>
      <img src={happyskydiving.jpg} alt="skydiving-image"/>
    </div>
        </div>
        </div>
    </div>
  )
}

export default About
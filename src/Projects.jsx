import React, { Component } from "react"
import axios from 'axios'

 class Projects extends Component {
     constructor() {
         super();
         this.state = {
             projects: [
                 {
                     "id": 1,
                     "name": "My First Website"
                 }, 
                 {
                    "id": 2,
                    "name": "FizzBuzz" 
                 }
             ]
         };
     }
     render() {
         const projects = this.state.projects
         let projectsList
         if (projects.length > 0) {
             projectsList = projects.map(project => {
                return (
                    <div key={projects.id}>
                        <h3 className="ui header">
                        {projects.name}
                        </h3>
                    </div>
                )
             })
         }
         return (
            <div className="ui main container">
                <h1 className="ui header">My Projects</h1>
                <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                {projectsList}
            </div>
         )
     }
};

export default Projects
import React from 'react'

const EduCard = (props) => {
    let education = props.education
    return (
            <>
            <div id="card" class="ui card">
            <div className="column">
               <p>{education.name}</p> 
            </div>
            <div className="descirption">
                <p>{education.description} </p>
                
            </div>
            <div className="graduation">
                {education.years}
            </div>
            </div>
            </>
    )
}

export default EduCard
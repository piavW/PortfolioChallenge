import React from 'react'

const EduCard = (props) => {
    let education = props.education
    return (
            <>
            <div className="column">
               <p>{education.name}</p> 
            </div>
            <div className="column">
                {education.description} {education.years}
            </div>
            </>
    )
}

export default EduCard
import React from 'react'

const EduCard = (props) => {
    let education = props.education
    return (
        <>
        <div id="card" class="ui card">
            <div class="image">
                <img src={education.image} />
            </div>
            <div class="extra content">
                <a>
                    <div className="column">
                        <h2>{education.name}</h2> 
                    </div>
                    <div className="description">
                        <h4>{education.description} </h4>
                    </div>
                    <div className="graduation">
                        {education.year}
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}

export default EduCard
import React from 'react'

const CvCard = (props) => {
    let cv = props.cv
    return (
        <>
        <div id="card" class="ui card">
            <div className="column">
            <p>{cv.name}</p> 
            </div>
            <div className="description">
                <p>{cv.description} </p>
            </div>
            <div className="years">
                {cv.years}
            </div>
        </div>
        </>
    )
}

export default CvCard
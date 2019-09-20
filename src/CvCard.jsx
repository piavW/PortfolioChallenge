import React from 'react'


const CvCard = (props) => {
    let cv = props.cv
    return (
        <>
        <div className="column">
           <p>{cv.name}</p> 
        </div>
        <div className="column">
            {cv.description} {cv.years}
        </div>
        </>
    )
}

export default CvCard
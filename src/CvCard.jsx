import React from 'react'

const CvCard = (props) => {
    let cv = props.cv
    return (
        <>
        <div id="card" class="ui card">
            <div class="image">
                <img src={cv.image} />
            </div>
            <div class="extra content">
                <a>
                    <div className="column">
                        <h2>{cv.name}</h2> 
                    </div>
                    <div className="description">
                        <h4>{cv.description}</h4>
                    </div>
                    <div className="year">
                        {cv.year}
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}

export default CvCard
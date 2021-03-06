import React, {Component} from 'react'
import axios from 'axios'
import CvCard from './CvCard'
import EduCard from './EduCard'

class CV extends Component {
    constructor () {
        super()
        this.state= {
            cvs: [],
            edus: []
        };
    }
    componentDidMount() {
        this.getCVList()
        this.getEduList()
    }
    getCVList() {
        axios.get('./src/data/jobexp.json')
        .then(response => {
            this.setState({
                cvs: response.data
            })
        })
    }

    getEduList() {
        axios.get('./src/data/prevedu.json')
        .then(response => {
            this.setState({
                edus: response.data
            })
        })
    }

    render() {
        const cvs = this.state.cvs
        let cvlist 
        if (cvs.length > 0) {
            cvlist = cvs.map(cv => {
                return (
                    <div key={cv.id}>
                        <CvCard cv={cv} />
                    </div>
                )
            })
            }
        const edus = this.state.edus
        let edulist 
        if (edus.length > 0) {
            edulist = edus.map(education => {
                return (
                    <div key={education.id}>
                        <EduCard education={education} />
                    </div>
                )
            })
            }
    
    return(
        <div className="ui main container">
            <div className="column">
                <h1 className="ui Header">Here are my most recent jobexperiences and relevant education</h1>
            </div>
            <div className="ui stackable two column grid">
               <div className="ui stackable two column grid">
                    {cvlist} 
               </div> 
               <div className="ui stackable two column grid">
                    {edulist}
               </div>
                
            </div>
        </div>
    )
    }
} 
export default CV 
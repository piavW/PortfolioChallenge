import React, {Component} from 'react'
import axios from 'axios'
import CvCard from './CvCard'
import EduCard from './EduCard'

class CV extends Component {
    constructor () {
        super()
        this.state= {
            cv: []
            education: []
        };
    }
    componentDidMount() {
        this.getCVList
        this.getEduLIst
    }
    getCVList() {
        axios.get('./src/data/jobexp.json')
        .then(response => {
            this.setState({
                cv: response.data
            })
        })
    }

    getEduList() {
        axios.get('./src/data/prevedu.json')
        .then(response => {
            this.setState({
                education: response.data
            })
        })
    }

    render (

    )
}
export default CV 
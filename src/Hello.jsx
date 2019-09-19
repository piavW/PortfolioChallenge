import React from 'react'
import { UndrawFastLoading} from 'react-undraw-illustrations'
import TimeOfDay from './Timeofday'

const Hello = () => {
    return (
        <div className="ui main container"> 
        <div class="ui stackable two column grid">
            <div class="column">
                <UndrawFastLoading primaryColor='#009688'/>
            </div>
            <div class="column">
        <h1 className="ui header">Hello world and <TimeOfDay/></h1>
        <h3>I code and design web applications</h3>
        </div>
        </div>
    </div>
    )
}
export default Hello
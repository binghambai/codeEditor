import React, {Component} from 'react'
import './foot.css'
// import {Divider} from 'rsuite'
export default class Foot extends Component{

    render() {
        return (
            <div className="foot-context">
                <hr className="my-divider"/>
                <h3>Example heading <span className="label label-primary">New</span></h3>
                <h5>Example heading <span className="label label-primary">New</span></h5>
                <h5>Example heading <span className="label label-primary">New</span></h5>
                <br/>
                <p className="text-muted">Copyright by binghambai @2021.8 V-1.0.0</p>
            </div>
        )
    }
}

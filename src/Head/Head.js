import React, {Component} from 'react'
import './head.css'

export default class Head extends Component {
    render() {
        return (
            <div className='head'>
                <div className='row'>

                    <div className='col-md-4'>
                        <h3 className='h3-title'><span className="label label-success">Code</span>  My Code Editor</h3>
                    </div>
                    <div className='col-md-4'>
                        <nav className="mirrors-nav">
                            <a className={this.props.isActive===0?"mirrors-nav-item active":"mirrors-nav-item"} href="/home"><h4>HOME</h4></a>
                            <a className={this.props.isActive===1?"mirrors-nav-item active":"mirrors-nav-item"} href="/blog"><h4>BLOG</h4></a>
                            <a className={this.props.isActive===2?"mirrors-nav-item active":"mirrors-nav-item"} href="/feed"><h4>FEED</h4></a>
                            <a className={this.props.isActive===3?"mirrors-nav-item active":"mirrors-nav-item"} href="/mirrors"><h4>MIRRORS</h4></a>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

import React, {Component} from 'react'

import './consoleRes.css'

export default class ConsoleRes extends Component {
    render() {
        return (
            <div className = 'console-context'>

                <textarea className="console-log" placeholder='console log ...'/>
            </div>
        )
    }
}

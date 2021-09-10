import React, {Component} from 'react'

import CodeEditor from "../Code/codeEditor";
import ConsoleRes from "../Console/consoleRes";
import Head from "../Head/Head";
import './menu.css'
import './main.css'
import Foot from "../Foot/foot";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codeLanguage: 'java',
            context:''
        }
    }

    getData(language) {
        this.setState({
            language: 'java'
        })
    }

    getResContext(res) {
        this.setState({
            context: res
        })
    }
    changeLanguage(language) {
        this.setState({
            codeLanguage: language
        })
    }
    onButton(context){
        console.log( 'in button:' + context)

    }
    render() {
        return (
            <div className='container-fluid' id='mybg'>
                <div className='row'>
                   <Head/>
                </div>
                <div className='row'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <div className='language'>
                                <div className="btn-group">
                                    <label id="dLabel"data-toggle="dropdown" role="button"
                                           aria-haspopup="true" aria-expanded="false">
                                        <h4>{this.state.codeLanguage}<span className="caret"/></h4>
                                    </label>
                                    <ul className="dropdown-menu" aria-labelledby="dLabel">
                                        <li><a onClick={this.changeLanguage.bind(this, 'java')}>java</a></li>
                                        <li><a onClick={this.changeLanguage.bind(this, 'c/c++')}>c/c++</a></li>
                                        <li><a onClick={this.changeLanguage.bind(this, 'python')}>python</a></li>
                                        <li><a onClick={this.changeLanguage.bind(this, 'golang')}>golang</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <button className='bt-run' onClick={this.onButton.bind(this, this.state.context)}>Run</button>
                        </div>
                        <div className='col-md-8'>
                            <h4 className='h4-console'>console</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <CodeEditor className='code-editor' language={this.state.codeLanguage} getResContext={this.getResContext.bind(this)}/>
                    </div>
                    <div className="col-md-4">
                        <ConsoleRes className='console-res'/>
                    </div>
                    <div className='col-md-1'>
                        <div className='left-border'/>
                    </div>
                </div>
                <Foot/>
            </div>
        )
    }
}

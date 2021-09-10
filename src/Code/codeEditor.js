import React,{Component} from  'react'

import 'codemirror/theme/monokai.css'

import './codeEditor.css'
import Java from "./java";
import Python from "./python";
import Golang from "./golang";
import CLike from "./cLike";

export default class CodeEditor extends Component{
    constructor(props) {
        super(props);
    }
    getContext(context) {
        this.props.getResContext(context)
    }
    render() {
        let language = this.props.language
        switch(language) {
            case 'java':
                return (<Java getContext={this.getContext.bind(this)}/>)
            case 'python':
                return (<Python getContext={this.getContext.bind(this)}/>)
            case 'c/c++':
                return (<CLike getContext={this.getContext.bind(this)}/>)
            case 'golang':
                return (<Golang getContext={this.getContext.bind(this)}/>)
        }
    }
}

import CodeMirror from "@uiw/react-codemirror";
import React,{Component} from 'react'
// js的三个提示库
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'

export default class CLike extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const code ='class Main {\n' +
            'public:\n' +
            '    void main() {\n' +
            '        \n' +
            '    }\n' +
            '};'
        return (
            <div className='editor'>
                <CodeMirror className = 'code'
                            value={code}
                            options={{
                                extraKeys: {
                                    // 'Tab': 'autocomplete'
                                },
                                theme: 'monokai',
                                mode: 'clike',
                                indentUnit: 0,
                                autofocus: true,
                                autoCloseBrackets: true,   // 自动补全括号
                                scrollbarStyle: 'overlay',
                            }}
                            onBlur={(editor) => {
                                this.props.getContext(editor.getValue())
                            }}
                            onCursorActivity={(editor) => {
                                //校验输入,在不输入或删除的情况下不提示 || editor.display.input.pollingFast === false
                                var input =  editor.display.input.prevInput
                                if(!input.match(/([a-z]+)/ig) || input.includes(' ')) return;
                                if(input.length === 1 && editor.display.input.pollingFast === false) return;
                                //获取用户当前的编辑器中的编写的代码
                                var words = editor.getValue() + "";
                                //利用正则取出用户输入的所有的英文的字母
                                words = words.replace(/[a-z]+[\-|\']+[a-z]+/ig, '').match(/([a-z]+)/ig);
                                //将获取到的用户的单词传入CodeMirror,并在javascript-hint中做匹配
                                CodeMirror.ukeys = words;
                                //调用显示提示
                                editor.showHint();
                            }}
                />
            </div>
        )
    }
}

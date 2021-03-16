/* eslint-disable no-unused-vars */
import React from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function CodeEditor() {
    const [code, setCode] = React.useState('// enter your Javascript code here');

    return (
        <div>
            <CodeMirror
                value={code}
                options={{
                    mode: 'javascript',
                    lineWrapping: true,
                    smartIndent: true,
                    lineNumbers: true,
                    foldGutter: true,
                    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                    autoCloseTags: true,
                    keyMap: 'sublime',
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    extraKeys: {
                        'Ctrl-Space': 'autocomplete'
                    }
                }}
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
                onChange={(editor, data, value) => {
                    console.log('controlled', { value });
                }}
            />
        </div>
    );
}

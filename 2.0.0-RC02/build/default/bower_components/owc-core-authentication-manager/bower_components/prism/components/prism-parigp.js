Prism.languages.parigp={comment:/\/\*[\s\S]*?\*\/|\\\\.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"/,greedy:!0},keyword:function(){var a=['breakpoint','break','dbg_down','dbg_err','dbg_up','dbg_x','forcomposite','fordiv','forell','forpart','forprime','forstep','forsubgroup','forvec','for','iferr','if','local','my','next','return','until','while'];return a=a.map(function(b){return b.split('').join(' *')}).join('|'),RegExp('\\b(?:'+a+')\\b')}(),'function':/\w[\w ]*?(?= *\()/,number:{pattern:/((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,lookbehind:!0},operator:/\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,punctuation:/[\[\]{}().,:;|]/};
(function(a){a.languages.velocity=a.languages.extend('markup',{});var b={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:true|false)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/};b.variable.inside={string:b.string,'function':{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:b.number,boolean:b.boolean,punctuation:b.punctuation},a.languages.insertBefore('velocity','comment',{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?]]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|]]#$/}},'velocity-comment':[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:'comment'},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:'comment'}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,inside:{punctuation:/[{}]/}},rest:b}},variable:b.variable}),a.languages.velocity.tag.inside['attr-value'].inside.rest=a.languages.velocity})(Prism);
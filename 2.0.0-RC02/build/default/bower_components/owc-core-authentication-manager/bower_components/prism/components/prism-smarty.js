(function(a){a.languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:'punctuation'},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],'function':[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],'attr-name':{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},a.languages.insertBefore('smarty','tag',{'smarty-comment':{pattern:/\{\*[\s\S]*?\*\}/,alias:['smarty','comment']}}),a.hooks.add('before-tokenize',function(b){var c=/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,f=!1;a.languages['markup-templating'].buildPlaceholders(b,'smarty',c,function(g){return g==='{/literal}'&&(f=!1),!f&&(g==='{literal}'&&(f=!0),!0)})}),a.hooks.add('after-tokenize',function(b){a.languages['markup-templating'].tokenizePlaceholders(b,'smarty')})})(Prism);
(function(a){a.languages.kotlin=a.languages.extend('clike',{keyword:{pattern:/(^|[^.])\b(?:abstract|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|else|enum|final|finally|for|fun|get|if|import|in|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|out|override|package|private|protected|public|reified|return|sealed|set|super|tailrec|this|throw|to|try|val|var|when|where|while)\b/,lookbehind:!0},'function':[/\w+(?=\s*\()/,{pattern:/(\.)\w+(?=\s*\{)/,lookbehind:!0}],number:/\b(?:0[bx][\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete a.languages.kotlin['class-name'],a.languages.insertBefore('kotlin','string',{'raw-string':{pattern:/("""|''')[\s\S]*?\1/,alias:'string'}}),a.languages.insertBefore('kotlin','keyword',{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:'builtin'}}),a.languages.insertBefore('kotlin','function',{label:{pattern:/\w+@|@\w+/,alias:'symbol'}});var b=[{pattern:/\$\{[^}]+\}/,inside:{delimiter:{pattern:/^\$\{|\}$/,alias:'variable'},rest:a.languages.kotlin}},{pattern:/\$\w+/,alias:'variable'}];a.languages.kotlin.string.inside=a.languages.kotlin['raw-string'].inside={interpolation:b}})(Prism);
(function(a){a.languages.sass=a.languages.extend('css',{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),a.languages.insertBefore('sass','atrule',{'atrule-line':{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete a.languages.sass.atrule;var b=/\$[-\w]+|#\{\$[-\w]+\}/,c=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];a.languages.insertBefore('sass','property',{'variable-line':{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:b,operator:c}},'property-line':{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:b,operator:c,important:a.languages.sass.important}}}),delete a.languages.sass.property,delete a.languages.sass.important,delete a.languages.sass.selector,a.languages.insertBefore('sass','punctuation',{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})})(Prism);
"--expose-gc"!==process.execArgv[0]&&(console.error("please run with node --expose-gc"),process.exit(1));var async=require("../");global.gc();var startMem=process.memoryUsage().heapUsed;function waterfallTest(a){for(var b=[],c=0;1e4>c;c++)b.push(function(e){async.waterfall([function(j){return j()},function(j){j()},function(j){return j()}],e)});async.parallel(b,a)}function reportMemory(){global.gc();var a=process.memoryUsage().heapUsed-startMem;console.log("memory increase: "+ +(a/1024).toPrecision(3)+"kB")}waterfallTest(function(){setTimeout(reportMemory,0)});
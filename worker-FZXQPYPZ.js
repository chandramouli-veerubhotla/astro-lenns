addEventListener("message",({data:e})=>{let s=`worker response to ${e}`;postMessage(s)});

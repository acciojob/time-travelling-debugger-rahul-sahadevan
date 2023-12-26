//your JS code here. If required.

function callStack(){
	console.log("one");

	return ()=>{
		console.log('two');
		setTimeout(()=>{
			console.log('three');
		},1000)
	}
}

const result = callStack();
result()
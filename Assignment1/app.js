
var inputValues =[]
var flattenInputValues = []
var inputArray = []



function handleChange(e){
		
			 var error = ''
			 inputArray= document.getElementById("input").value.split(',')
			 document.getElementById("error").innerHTML = ''

			if(inputValues.length > 0){
			  

					for(var i=0; i<inputArray.length;i++){
					

						if(inputValues.indexOf(inputArray[i]) !== -1){
								error += inputArray[i] + ','
						}else if(inputArray[i].split('-').length > 1){
							if(parseInt(inputArray[i].split('-')[1]) > parseInt(inputArray[i].split('-')[0])){
							console.log("in change", inputArray[i].split('-')[1] > inputArray[i].split('-')[0])
								for(var j=inputArray[i].split('-')[0];j<=inputArray[i].split('-')[1];j++){
									console.log(flattenInputValues.indexOf(j.toString()), flattenInputValues,j)
					  				 if(flattenInputValues.indexOf(j.toString()) !== -1){
					  				 	error += j + ','
					  				 }
								}
							}
						}else{
							if(flattenInputValues.indexOf(inputArray[i]) !== -1){
					  				 	error += inputArray[i] + ','
					  				 }
						}	

					}

					
					if(error !== '' && error.split(',').length === 2){
						document.getElementById("error").innerHTML = 'Error:' +error.slice(0, error.length-1) + ' is already entered, please enter other number.'
						document.getElementById("submit").disabled = true
					}else if(error !== '' && error.split(',').length > 2){
						document.getElementById("error").innerHTML = 'Error:' + error.slice(0,error.length-1) + ' are already entered ,please enter other numbers.'
						document.getElementById("submit").disabled = true
					}else{
						document.getElementById("error").innerHTML= ''
						
					}

					
			}else{
				document.getElementById("submit").disabled = false
			}
				 
			
			
			
			
		
}	


function handleSubmit(){

		
		for(var i=0;i<inputArray.length;i++){
			if(inputArray[i].split('-').length > 1){
				inputValues.push(inputArray[i])
				for(var j=inputArray[i].split('-')[0];j<=inputArray[i].split('-')[1];j++){
					   
					   flattenInputValues.push(j.toString())
				}
			}else{
				inputValues.push(inputArray[i])
				flattenInputValues.push(inputArray[i])
			}
			
		}

		document.getElementById("input").value = '';

}



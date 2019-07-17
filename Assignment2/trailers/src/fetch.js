import React, { useState, useEffect } from 'react';
import axios from 'axios'




const useFetch = (url) =>{
	debugger;
	let [isLoading, setIsLoading] = useState(true)
	let [output, setOutput] = useState(undefined)

	useEffect(()=>{
	 //  fetch(url)
  //     .then(response => response.json())
  //     .then(data => setOutput(data))
  //     .catch(() => {
		// 	setOutput('[]')
		// })

		axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

		

	}, [url])



	
	return [isLoading, output]

}

export default useFetch;
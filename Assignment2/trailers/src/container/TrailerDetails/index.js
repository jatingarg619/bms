import React, { useState, useEffect } from 'react'
import { parse, stringify } from 'query-string'
import {Jsondata} from '../../data.js'



function TrailorDetails(props){
	const eventId = parse(props.location.search).eventId 

	console.log(Jsondata[1][eventId])

	return(
		   <div>
		   		
		   </div>
		  )
}

export default TrailorDetails
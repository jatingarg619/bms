import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import {  Row, Col, Button,Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import Select from 'react-select';
import useFetch from '../../fetch.js'
import axios from 'axios'
import {Jsondata} from '../../data.js'
import {Card, VideoPlayer} from '../../../src/common'

var options = []
Jsondata[0].map((item) => {
	options.push({label:item, value:item})
})	





function TrailorList(props){
	// const [ isLoading,data] =  useFetch('./https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs')

	// const [data, setData] = useState([]);
	const [selectedOption, setselectedOption] = useState(null)
	const [data, setData] = useState(Jsondata[1])
	const [show, setShow] = useState(null)
	const [position, setPosition] = useState(null)
 //  useEffect(() => {
 //    const fetchData = async () => {
 //      const result = await axios(
 //        'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs',{ method: 'GET',
 //      mode: 'no-cors'
 //      })
    

 //      setData(result.data);
 //    };

 //    fetchData();
 //  }, []);


  function handleChange(value){
  		setselectedOption(value)
  		let filterData = {}
  		Object.keys(Jsondata[1]).map((key) => {
  			 console.log(Jsondata[1][key].EventLanguage, value)
  				if(Jsondata[1][key].EventLanguage === value.value){
  					filterData[key] = Jsondata[1][key]
  				}
  		})	
  		setData(filterData)
  }


  function showTrailer(key,i){
  		debugger
  		setShow(key)
  		setPosition(i - i%3)
  }
  


  function renderCards(){
  		
  		return Object.keys(data).map((key,i) =>{
  			if(i<3){
  				return (
  					<React.Fragment>
  				  	 {
  				  	  	position===0 && i===0 && show ? 
  				  	  	<React.Fragment> 
  				  	  		<Col className="VideoContainer" xs={12} md={8}>
  				  	 			<VideoPlayer data={data[show]}/>
  				  	 	    </Col>
  				  	 	    <Col  xs={12} md={4}>
  				  	 	    	<div className="TextContainer">
  				  	 	    			<div>{data[show].EventTitle}</div>
  				  	 			       	<div>{data[show].EventLanguage}</div>
  				  	 			       	<div>{data[show].EventGenre}</div>
  				  	 			       	<div>{data[show].wtsCount} votes</div>
  				  	 			       	<div>{data[show].TrailerURLUploadDate.slice(0,10)}</div>
  				  	 	    	</div>
  				  	 	    </Col>
  				  	 	</React.Fragment>
  				  	 	:null
  				  	 }
  				 	 <Col key={key} xs={12} md={4} onClick={() => {showTrailer(key,i)}}>
  						 <Card data={data[key]} />
  				   	 </Col>	
  				  </React.Fragment>
  				)
  			}else{
  				return( 
  				  <React.Fragment>
  				  	 {
  				  	  	position/i === 1 && show ? 
  				  	  		<React.Fragment  > 
  				  	  					<Col className="VideoContainer" xs={12} md={8}>
  				  	  					   
  				  	 						<VideoPlayer data={data[show]}/>
  				  	 					 
  				  	 			       </Col>
  				  	 			       <Col  xs={12} md={4}>
  				  	 			       		<div className="TextContainer">
  				  	 			       			<div>{data[show].EventTitle}</div>
  				  	 			       			<div>{data[show].EventLanguage}</div>
  				  	 			       			<div>{data[show].EventGenre}</div>
  				  	 			       			<div>{data[show].wtsCount} votes</div>
  				  	 			       			<div>{data[show].TrailerURLUploadDate.slice(0,10)}</div>
  				  	 			       		</div>
  				  	 	  			   </Col>
  				  	 		</React.Fragment>	       	
  				  	 		:null

  				  	 }
  				 	 <Col key={key} xs={12} md={4} onClick={() => {showTrailer(key,i)}}>
  						 <Card data={data[key]} key={key}/>
  				   	 </Col>	
  				  </React.Fragment> 	  
  				)  
  			}
  			
  		})
  }


	return(
		   <div className="AppContainer">
		   		 <Navbar  color="dark" dark expand="md">
		   		 	<NavbarBrand  href="/">Movie Trailers</NavbarBrand>
		   		 	<Nav navbar>
		   		 		<NavItem className="NavItem">
                			<Button>Coming Soon</Button>
             			 </NavItem>
             			  <NavItem className="NavItem">
                			<Button>Now Showing</Button>
             			 </NavItem>
		   		 	</Nav>
		   		 	<Nav className="ml-auto" navbar>
		   		 		 
             			 <NavItem className="NavItem Dropdownwidth">
                			<Select
       				 	value={selectedOption}
       				 	onChange={(selectedOption) => {handleChange(selectedOption)}}
       				 	options={options}
       				 	placeholder="languages"
      					/>
             			 </NavItem>
             		</Nav>
             	 </Navbar>			 
		   		 	
      			<Row className="TrailerContainer">	
		   		 {renderCards()}
		   		</Row> 
			 
		   </div>
		  )
}

export default withRouter(TrailorList)
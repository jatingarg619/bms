import React, {useEffect} from 'react';


const VideoPlayer = ({data}) => {

	let videosrc =  "https://www.youtube.com/embed/"+ data.TrailerURL.slice(32,43) + "?autoplay=0&rel=0&modestbranding=1"

		return(
			 <iframe className="player" type="text/html" width="95%" height="100%"
  				src={videosrc}
  			frameborder="0"/>
  
    );

			
}	


export default VideoPlayer
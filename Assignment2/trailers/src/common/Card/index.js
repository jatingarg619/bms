import React from 'react';
import { Card as CardComponent, CardBody,
    CardFooter } from 'reactstrap';

const Card = ({data}) => {
  let videosrc =  "https://img.youtube.com/vi/"+ data.TrailerURL.slice(32,43) + "/0.jpg"

  return (
    <React.Fragment>
      <CardComponent>
        <CardBody>
          <div>
            <img src={videosrc}/>
          </div>
          <div>
             <span>{data.TrailerURLUploadDate.slice(0,10)}</span>
             <span className="votes">{data.wtsCount}</span>
          </div> 
        </CardBody>
        <CardFooter>
        {data.EventName}
        </CardFooter>
      </CardComponent>
   </React.Fragment>
  );
};


export default Card
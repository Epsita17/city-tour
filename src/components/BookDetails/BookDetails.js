import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Map from '../../images/Map.png';
import Frame from '../../images/Frame.png';
import Car from '../../images/Frame-2.png';
import Bus from '../../images/Frame-1.png';
import Train from '../../images/Group.png';
const BookDetails = () => {
    return (
        <div>
            
            <img style= {{height:'250px',width:'100%'}} className="Map" src={Map} alt=""/>
            <Card style={{ width: '18rem' }}>
  {/* <Card.Img Frame="top" src="Frame.png" /> */}
  <h2>From -----To</h2>
  
  <Card.Body>
    <img style= {{height:'40px',width:'40px'}}className="Frame" src={Frame} alt=""/>
    <Card.Title>Bike : $ 20</Card.Title>
    {/* <p>$ 20</p> */}
  </Card.Body>

  <Card.Body>
  <img style= {{height:'40px',width:'40px'}}className="Frame-2" src={Car} alt=""/>
  <Card.Title>Car:  $40</Card.Title>
  {/* <p>$ 40</p> */}
  </Card.Body>
  
  <Card.Body>
  <img style= {{height:'40px',width:'40px'}}className="Frame-1" src={Bus} alt=""/>
  <Card.Title>Bus: $25 </Card.Title>
  {/* <p>$ 25</p> */}
  </Card.Body>

  <Card.Body>
  <img style= {{height:'40px',width:'40px'}}className="Group" src={Train} alt=""/>
  <Card.Title>Train: $ 35</Card.Title>
  {/* <p>$ 35</p> */}
  </Card.Body>
</Card>
 </div>
        
        
    );
};

export default BookDetails;
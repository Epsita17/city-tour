import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Bg from '../../images/Bg.png';
import Frame from '../../images/Frame.png';
import Car from '../../images/Frame-2.png';
import Bus from '../../images/Frame-1.png';
import Train from '../../images/Group.png';
import header from '../../images/header.png';
import { useHistory } from 'react-router';

const Home = () => {
  // const history =useHistory
  // history.push('/book')
    return (
        <div  >
        <img style= {{height:'300px',width:'100%'}} className="Bg" src={Bg} alt=""/>    
           {/* <h3> This is Home</h3>  */}
           <CardGroup className="Body">
  <Card >
  <img style= {{height:'200px',width:'200px'}}className="Frame" src={Frame} alt=""/>
    {/* <Card.Img variant="top" src="images/Frame.png" /> */}
    <Card.Body>
      <Card.Title>BIKE</Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card>
  <img style= {{height:'200px',width:'200px'}}className="Frame-2" src={Car} alt=""/>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>CAR</Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card>
    <img style= {{height:'200px',width:'200px'}}className="Frame-1" src={Bus} alt=""/>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>BUS</Card.Title>
     
    </Card.Body>
    
  </Card>
  <Card>
  <img style= {{height:'200px',width:'200px'}}className="Group" src={Train} alt=""/> 
    {/* <Card.Img variant="top" src="Frame.png" /> */}
    <Card.Body>
    
      <Card.Title>TRAIN</Card.Title>
      
    </Card.Body>
    
  </Card>
</CardGroup>
           
        </div>
    );
};

export default Home;

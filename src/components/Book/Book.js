import React from 'react';
import { Button } from 'react-bootstrap';
import Map from '../../images/Map.png'
const Book = () => {
    return (
        <div>
            {/* <h3>This is Book</h3> */}
            <div class="booking-form">
            <img style= {{height:'300px',width:'100%'}} className="Map" src={Map} alt=""/>  
            <br/>
            <h3>World City Tour</h3>
            <div class="input-group">
                <label for="">Pick Up From</label>
                <br/>
                <input class="inp-style" type="text" name="" placeholder="Dhaka, Bangladesh"/>
            </div>
            <br/>
            <div class="input-group">
                <label for="">Pick Up To</label>
                <br/>
                <input class="inp-style" type="text" name="" placeholder="New York, United States"/>
                {/* <Button variant="warning">Search for Booking </Button>{' '} */}
                {/* <button id="bookNow" class="btn-style">Search</button> */}
            </div>
            <br/>
            <div>
            <Button variant="warning">Search for Booking </Button>{' '}
            </div>
            
        </div>
        </div> 
    );
};

export default Book;
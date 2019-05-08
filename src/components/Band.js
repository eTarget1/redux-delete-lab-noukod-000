import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {/* Band Component */}
     
        <span>{props.band.bandName} </span>
        <button onClick={() => props.delete(props.band.id)}>DELETE</button>
        
      </div>
    );
  }
};

export default Band;

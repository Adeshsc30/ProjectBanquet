
import React, { useState } from 'react';


function Reservation() {
 const [hallNum, setHallNum] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setHallNum(1)}>HAll : 1</button>
        <button onClick={() => setHallNum(2)}>HALL: 2</button>
        {
          hallNum === 1 ? <div>This is hall number one</div> : hallNum === 2 ? <div>This is hall number two</div> : null
        }
      </div>
    </div>
  );
}


export default Reservation

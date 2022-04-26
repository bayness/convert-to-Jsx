import React from 'react';
import './App.css';

function App() {
  return (
    <div className="divClass" >
       <h1 className="title red">Hello - Younes - Here</h1>
<br />
        <img src={'./Prangerblue.jpeg'} className="test-logo" alt="Sadiya" />
<br/>
        <img src={'./Prangerred.jpeg'} className="test-logo" alt="Rkia" />

        <video width="320" height="240" controls>

<source src="./thelegend.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;

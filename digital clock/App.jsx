import React, {useState} from 'react';

const App= () =>{
    let time= new Date().toLocateTimeString();
    const[ctime, setCtime] = useState(time);
    const UpdateTime = () => {
        time= new Date().toLocateTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);
    return(
        <>
            <h1> {ctime} </h1>
            <button onClick={UpdateTime}> get time </button>
        </>
    );
};

export default App;
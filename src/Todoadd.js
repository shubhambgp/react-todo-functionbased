import React from "react";


function Todoadd(props){
    const [data,setData] = React.useState("");
    function changeData(e){
        setData(e.target.value);
    }
    function sendData(e){
        e.preventDefault();
        if(data !== ""){
            props.addInList(data);
            setData("");
        }
    }
    return(
        <form onSubmit={sendData}>
            <input autoFocus type="text" onChange={changeData} value={data} className="form-control" placeholder="✍️ Write your Task"/>
            <button type="submit" onClick={sendData} className="btn btn-primary">Add Task</button>
            <br />
            <br />
        </form>
    )
}

export default Todoadd;
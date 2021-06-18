import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css';

const Todo = (props) =>{
  return(
    <>
    <p className="my-3">{props.name} <button className="btn btn-sm" onClick={()=>{
      props.onDel(props.id)
    }}><DeleteIcon className="text-danger"/></button></p>
    </>
  );
}

const Todos = () =>{


  const [val, setVal] = useState();
  const [names, setName]= useState([]);

  useEffect(()=>{
    setName(['hitesh','i21','ii3'])
  },[])

  const onDel = (ids) =>{
    console.log('clicked', ids);
    setName(names.filter((name, id)=> ids!==id));
  }

  return(
    <div className="row mt-5 px-2">
      <div className="col-md-4"></div>
      <div className="col">
      <div className="text-center card mt-4 card-Shadow">
      <h1 className="display-4 py-2 mb-4">ToDo App!</h1>
      <form onSubmit={(e)=>{e.preventDefault();if(val){setName((preVal)=>[val, ...preVal])}; setVal('');}}>
        <div class="input-group px-4">
          <input className="form-control" type="text" placeholder="Add ToDo.." onChange={(e)=> setVal(e.target.value)} value={val} />
          <div class="input-group-append">
            <button className="input-group-text btn-success ml-3">Add +</button>
          </div>
        </div>
      </form>
      <ol>
        {
          names.map((name, index)=>{
            return <Todo name={name} key={index} id={index} onDel={onDel}/>
          })
        }
      </ol>
    </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    
  );
}

export default Todos;

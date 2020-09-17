import React, {useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './index.css';

const Expense = (props)=>{
  return(
    <div className="text-left">
    <p className="my-3">{props.expense} - <small>{props.count}</small> <button className="btn btn-sm" onClick={()=>{
      props.onDel(props.id)
    }}><DeleteIcon className="text-danger"/></button></p>
    </div>
  )
}

const Counter = () =>{
  const [count, setVal] = useState([{
    expense: '',
    count: 0,
    date: new Date()
  }])

  const [expense, setExp] = useState([]);

  var exp = [{
    expense:"I added money today",
    count:10,
    time:"9/16/2020"
  },{
    expense:"I Purchased Toys",
    count: 1,
    time:"9/16/2020"
  }];

  useEffect(()=>{
    setVal(preval=>{
      return{
        expense: preval.expense,
        count: 0
      }
    });

    setExp(exp)

  },[]);

  const updateExpense = () =>{
    setVal(preval=>{
      return{
        expense: preval.expense,
        count: ++count.count
      }
    });
  }

  const removeExpense = () =>{
    if(count.count>0){
    setVal(preval=>{
      return{
        expense: preval.expense,
        count: --count.count
      }
    });
  }
  }

  const expenseTrack = (e) => {
    const expense = e.target.value
    setVal((pre)=>{
       return{
        count:pre.count,
        expense:expense
      }
    });
  }

  const handelForm = (e) =>{
    e.preventDefault();
    
    setExp(pre=>{
      return([
        ...pre, {
          expense: count.expense,
          count:count.count,
          time:new Date().toLocaleDateString()
        }
      ])
    });
    console.log(expense);
    setVal((pre)=>{
      return{
       count:0,
       expense:''
     }
   });
  }

  const onDel = (id) =>{
    setExp(expense.filter((pre,c) => c!==id));
  }
  return(
    <>
      <div className="row mt-5 px-2">
      <div className="col-md-3"></div>
      <div className="col">
      <div className="text-center card mt-4 card-Shadow">
      <h1 className="display-4 py-2 mb-4">Expense Counter App</h1>
      <form onSubmit={handelForm}>
      <div class="input-group px-4 py-2">
          <input className="form-control" type="text" placeholder="Add Expense" onChange={expenseTrack} value={count.expense} required />
          <div class="input-group-append">
            <button type="button" className="input-group-text btn-danger ml-3" onClick={removeExpense}>Sub -</button>
            <button type="button" className="input-group-text btn-secondary ml-3 disabled">{count.count}</button>
            <button type="button" className="input-group-text btn-success ml-3" onClick={updateExpense} >Add +</button>
          </div>
          <button className="input-group-text btn-success ml-3">Submit</button>

        </div>
      </form>
      <ol>
        {
          expense.map((expense, index)=>{
            return <Expense key={index} id={index} expense={expense.expense} count={expense.count} time={expense.time} onDel={onDel}/>
          })
        }
      </ol>
    </div>
      </div>
      <div className="col-md-3"></div>
    </div>
    </>
  )
}
export default Counter;
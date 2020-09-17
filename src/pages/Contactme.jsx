import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const MyForm = (props) =>{
    let [name, setName]= useState({
        name:'',
        email:'',
        number:'',
        query:''
    });

    // async function submitReq(){
    //     let url = `https://script.google.com/macros/s/AKfycbzBFUz3SrJ_AEwy8j-3BPb0f5k95ri2SByUt527NAd6V7aWnWrf/exec?name=${name.name}&email=${name.email}&sub=${name.number}&msg=${name.query}`;
    //     let req = await axios({
    //         method: 'post',
    //         url: url,
    //         headers: {
    //           'Content-Type': 'text/plain',
    //         },
    //       }).then((response) => {
    //         console.log("Submitted", response);
    //         alert(response);
    //       });
        
    // }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(name);
        props.updateForm();
    }

    return(
        <>
        <Card.Body>
            <Card.Text>
                <form onSubmit={submitHandler}>
                    <label for="name">Enter your Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter your Name" required value={name.name} onChange={(e)=>setName(e.target.value)} />

                    <hr />
                    <label for="email">Enter your Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter your Email" required value={name.email} onChange={(e)=>setName(e.target.value)} />

                    <hr />
                    <label for="num">Enter your Mobile Number <span className="text-danger"></span></label>
                    <input type="number" className="form-control" name="sub" id="num" placeholder="Enter your Mobile Number" value={name.number} onChange={(e)=>setName(e.target.value)} />

                    <hr />
                    <label for="query">Enter your Message<span className="text-danger">*</span></label>
                    <textarea className="form-control" name="msg" id="query" required row="50" value={name.query} onChange={(e)=>setName(e.target.value)}></textarea>
                    <button className="btn btn-primary mt-3">Submit Request</button>
                </form>
            </Card.Text>

        </Card.Body>
        </>
    )
}

const Contact = ()=>{
    let [submitted, updateSubmit] = useState(true);
    
    function upSum(){
        updateSubmit(false);
    }

    if(submitted){
    return(
        <div className="d-flex justify-content-center py-3 mt-3">
        <Card style={{ width: '48rem' }}>
        <div className="text-center">
            <Card.Img style={{width:'30%'}} className="text-center" variant="top" src="https://le-gall.bzh/images/contact.svg" />
        </div>
        <h5 className="display-4 p-2 text-center font-smaller">Contact Me!</h5>
            <MyForm updateForm={upSum}/>
        </Card>
        </div>
    )
    } else{
    return(
        <div className="d-flex justify-content-center py-3 mt-3">
        <Card style={{ width: '48rem' }}>
        <div className="text-center">
            <Card.Img style={{width:'30%'}} className="text-center" variant="top" src="https://le-gall.bzh/images/contact.svg" />
        </div>
        <h5 className="display-4 p-2 text-center font-smaller">Contact Me!</h5>
        <div className="d-flex justify-content-center">
        <div className="spinner-grow spinner-grow-sm text-center p-3 my-4 text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
        </Card>
        </div>
    )
    }
}

export default Contact;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import { verifyUser } from '../slices/verificationSlice.js';



const HomePage = props => {
    const [ words, setWords ] = useState('');
    const navigate = useNavigate();
    // const loggedIn = useSelector(state => state.verification.loggedIn);
   
    // useEffect(()=>{
    //     fetch('/login',{
    //         method: 'POST',
    //         body: JSON.stringify()
    //     })
    // .then(res => res.json())
    // .then(res =>{
    //   if(res === 'true'){
    //     useDispatch(verifyUser())
    // }else {
    //       navigate('/');
    // }
        
    // }, [])});
  
    function reRoute () { 
        navigate('/');
     }
    

   
      // if(!loggedIn){
      // return (
      //   <>
      //     <div>
      //       Loading Home page, please wait...
      //     </div>
      //   </>
      // )
      // }else {
        return (
        <div>
            {/* {words} */}
            <button onClick={reRoute}>
                back
            </button>
        </div>
      )
        // }
};

export default HomePage; 

import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const RightContainer=()=>{
    const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const Router=useNavigate()

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validateEmail();

    setIsValid(valid);
    if(valid){
      Router('/other') 
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='email_container'>
            <label>Enter Email</label>
            <input className="email_input"
                type="text"
                value={email}
                onChange={handleChange}
                style={{ borderColor: isValid ? 'initial' : 'red' }}
                required="true"
            />
            {/* {email.length===0?<p style={{ color: 'red',fontWeight:'600' }}>Email is Required</p>:<> */}
           
            {/* </>} */}
          
                </div >
                {!isValid && <p style={{ color: 'red',fontWeight:'600' }}>Invalid email format.</p>}
                <div  className='email_container'>
                <div></div>

                <button type="submit">Submit</button>

             
                </div>
                
            </form>
        </div>
    )
}
export default RightContainer;
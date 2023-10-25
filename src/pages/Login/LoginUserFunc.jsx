import React ,{useState}from 'react';
import {FaUserLarge} from "react-icons/fa6";
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6"
import './login.css'

const LoginUserFunc = () => {
    const [user,setUser] =useState({
      email:"",
       password:''
         }) 
         const [errors, setErrors] = useState({
            passwordError: "",
            emailError: ""
        })

        const [visible, setvisible] = useState(false);

        ////
         const handelChange=(eve)=>{
        var regex = /^[a-zA-Z]{2,5}(@)(gmail)(.com)$/
        
        if(eve.target.name=="email"){
        setUser({...user,email:eve.target.value})
        setErrors({ ...errors, emailError: (eve.target.value.length == 0) ? "Email is Required" : regex.test(eve.target.value) ? "" : "Invalid Email" })
        
        }else if(eve.target.name=="password"){
        setUser({...user,password:eve.target.value})
        setErrors({ ...errors,passwordError: (eve.target.value.length == 0) ? "password is Required" : (eve.target.value.length < 8) ? "password must be at least 8 characters" : "" })
        // setPassword(eve.target.value)
        }


         }
        
         const handleSubmit=(evt) =>{
            evt.preventDefault();
        
        }

    return (
        <>
        <div className='bacGr' >
       <div className='container center  mt-5' >
        <form autoComplete="off"onSubmit={(e)=>{handleSubmit(e)}}  className='col-8 container ' >
             <h1 style={{textAlign:'center'}}><FaUserLarge size={"30px"} />login</h1> 
               <div className="mb-3" >
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email :</label>
                    <input type="text" className={`form-control ${(errors.emailError)?'border-danger shadow-none':''}`}
                        id="formGroupExampleInput2"name="email"
                     required   placeholder="Please Enter Email" value={user.email} onChange={(e)=>{handelChange(e)}}  />
                    <p className="text-danger" style={{color:'red'}}>{errors.emailError} </p>

                </div>
            <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">password:</label>
                    <input type={visible?"text":"password"} 
                      required  id="formGroupExampleInput" className={`form-control ${(errors.passwordError)?'border-danger shadow-none':''}`} name="password"
                        placeholder="Please Enter password"  value={user.password} onChange={(e)=>{handelChange(e)}} />
             <div onClick={()=>setvisible(!visible)}>{
                       visible?  < FaRegEye/>:<FaRegEyeSlash/>
                   }
             </div>
           <p className="text-danger" >{errors.passwordError}</p>
                </div>
                <div class=" mb-3">
                    <button type="submit" className="btn btn-danger col-12" >Login</button>
                </div>
            </form>  
        </div>
        </div>
   </> );
}

export default LoginUserFunc;

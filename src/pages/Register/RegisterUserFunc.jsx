import React ,{useState} from 'react';
import {FaUserLarge} from "react-icons/fa6";
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6"
import './register.css'

const RegisterUserFunc = () => {
  const [user,setUser] =useState({
  name:'',
  email:"",
  userName:'',
  password:'',
  ConfirmPassword:''
  })
  const [errors, setErrors] = useState({
  nameError:'',
  passwordError: "",
  emailError: "",
  userError:"",
  ConfirmPasswordError:''
  })
  
  const [visible, setvisible] = useState(false);
  const handelChange=(eve)=>{
  // console.log(eve.target);
  var regex = /^[a-zA-Z]{2,}(@)(gmail)(.com)$/
  var regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-+.]).{8,20}$/
  var reguser=/^[a-zA-Z0-9]+([_]?[a-zA-Z0-9])*$/
  if(eve.target.name=="name"){
  setUser({...user,name:eve.target.value})
  setErrors({ ...errors, nameError: (eve.target.value.length == 0) ? "Name is Required" : (eve.target.value.length < 3)
    ? "Name must be at least 3 characters" : "" }) } else if(eve.target.name=="email" ){
    setUser({...user,email:eve.target.value}) 
    setErrors({ ...errors, emailError: (eve.target.value.length==0)
    ? "Email is Required" : regex.test(eve.target.value) ? "" : "Invalid Email" }) } else if(eve.target.name=="username"
    ){ setUser({...user,userName:eve.target.value}) 
    setErrors({ ...errors, userError: (eve.target.value.length==0)
    ? "userName is Required" :reguser.test(eve.target.value) ? "" : "userName contains no spaces" }) } else
    if(eve.target.name=="password" ){ setUser({...user,password:eve.target.value}) 
    setErrors({ ...errors,passwordError:
    (eve.target.value.length==0) ? "password is Required" : regex2.test(eve.target.value) ? "" : "Invalid password" }),
    setPassword(eve.target.value) } else if(eve.target.name=="ConfirmPassword" ){
    setUser({...user,ConfirmPassword:eve.target.value})
     setErrors({ ...errors,ConfirmPasswordError:
    (eve.target.value.length==0) ? "password is Required" : eve.target.value !==user.password
    ? "confirm password must matches" : "" } ) } } 
    const handleSubmit=(evt)=>{
    evt.preventDefault();
  
    }
  
    return (
    <>
      <div className='bacGr1 pt-5'>
        <div className='container center1 '>
          <form autoComplete="off" onSubmit={(e)=>{handleSubmit(e)}} className='col-8 container' >
            <h1 style={{textAlign:'center'}}>
              <FaUserLarge size={"30px"} />sign up</h1>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Name :</label>
              <input type="text" required id="formGroupExampleInput" className={`form-control
                ${(errors.nameError)?'border-danger shadow-none':''}`} name="name" placeholder="Please Enter Name"
                value={user.name} onChange={(e)=>{handelChange(e)}} />
              <p className="text-danger">{errors.nameError}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Email :</label>
              <input type="text" className={`form-control ${(errors.emailError)?'border-danger shadow-none':''}`}
                id="formGroupExampleInput2" name="email" required placeholder="Please Enter Email" value={user.email}
                onChange={(e)=>{handelChange(e)}} />
              <p className="text-danger">{errors.emailError} </p>
  
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">UserName:</label>
              <input type="text" required id="formGroupExampleInput" className={`form-control
                ${(errors.userError)?'border-danger shadow-none':''}`} name="username" placeholder="Please Enter Name"
                value={user.userName} onChange={(e)=>{handelChange(e)}} />
              <p className="text-danger">{errors.userError}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">password:</label>
              <input type={visible?"text":"password"} required id="formGroupExampleInput" className={`form-control
                ${(errors.passwordError)?'border-danger shadow-none':''}`} name="password"
                placeholder="Please Enter password" value={user.password} onChange={(e)=>{handelChange(e)}} />
              <div onClick={()=>setvisible(!visible)}>{
                visible?
                < FaRegEye />:
                <FaRegEyeSlash />
                }
                <p className="text-danger">{errors.passwordError}</p>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Confirm password:</label>
              <input type={visible?"text":"password"} required id="formGroupExampleInput" className={`form-control
                ${(errors.ConfirmPasswordError)?'border-danger shadow-none':''}`} name="ConfirmPassword"
                placeholder="Please Enter password" value={user.ConfirmPassword} onChange={(e)=>{handelChange(e)}} />
              <div onClick={()=>setvisible(!visible)}>{
                visible?
                < FaRegEye />:
                <FaRegEyeSlash />
                }
                <p className="text-danger">{errors.ConfirmPasswordError}</p>
              </div>
            </div>
            <div class=" mb-3">
              <button type="submit" className="btn btn-danger col-12">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </> );
    }
  
    export default RegisterUserFunc;
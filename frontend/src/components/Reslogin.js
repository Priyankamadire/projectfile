// // import React,{useState} from 'react'
// import React,{useState} from 'react'
// import { Outlet, Link ,json} from "react-router-dom"
// import { useNavigate } from 'react-router-dom';
// // import { Outlet, Link,useNavigate } from "react-router-dom"
// const Reslogin = () => {
//     const navigate = useNavigate();
// const [email,setEmail] = useState('');
// const [password , setPassword] = useState('');
// const [remember, setRemember] = useState(false)
  
// const loginUser = async (e) =>{
//    e.preventtDefault();
//    const res = await fetch('/reserlogin',{
//     method:"POST",
//     headers:{
//       "Content-Type" :"application/json" 

//     },
//     body:JSON.stringify({
//       email,
//       password

//     }),
     
//    });

//    const data = await res.json();
// window.localStorage.setItem("token",data.data);
// window.localStorage.setItem("isLoggedIn",true);

// if(res.status === 400 ){
//     window.alert("Fill complete form to login");
//    }
//    else if(res.status === 412){
//     window.alert("password not matched enter correct password");
//    }
//    else if(res.status === 405){
//     window.alert("invalid details try again");

//    }
// }


//   return (
//     <div>
//       <>
//   <br />
//   {/* <center><h1>LOGIN OR SIGNUP FOR PEOPLE WHO ARE LOOKING FOR A JOB</h1></center> */}
//   <br /> <br />
//   {/* <img src="loginjob.jpg" class="float-end" width="590"> */}
//   {/* <div class="box" style="background-color: #86ffc495; "> */}
//   <br />
//   <center>
//     <h2>LOGIN/SIGNUP</h2>
//   </center>
//   {/* <p>ENTER YOUR MOBILE NUMBER:<input type="number" placeholder="enter ur number"></p>
//  <p>
//      ENTER YOUR PASSWORD:<input type="password" placeholder="enter ur password"> </p>
//      <div class="container">
//    <center>
//    <button type="button" class="btn btn-secondary"> <a class=" text-light " href="lonav.html"><h4><em>SUBMIT</em></h4></a></button>
//    <br><br>
//    <button type="button" class="btn btn-warning"> <a class=" text-light " href="SIGNUP.html"><h4><em>DONT HAVE ACCOUNT CLICK HERE TO CREATE</em></h4></a></button>
//    <br><br>
//    </center> */}
//   <pre />
//    {/* <section className='login'>
//             <div className='container mt-5'> */}

//               {/* <div className='loin-content'>
//                 <h2 className='form-title'>Login</h2> */}
//                  <div className="container mt-3">
//   <div className="card" style={{ width: 400 }}>


//   <img className="card-img-top" src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_login_man-1024.png" width="100%" />
//   <div className="card-body">
//     <h4 className="card-title">LOGIN</h4>
//     <p className="card-text"></p>
//     <div className="card-body">
//     <h4 className="card-title">LOGIN</h4>
//                 <form  method='POST' className ='login-forms' id='login-form'>
//                   <br/>
//                   <div className='form-group'>
//                     <label htmlFor ="email">
//                       {/* <i className='bi bi-email-fill'></i> */}
//                       <h5>Email
//                       <i className="fa fa-envelope-o" aria-hidden="true"></i>

//                       </h5><p></p>
    
//                     </label>
//                     <input type="text" name = "email" id = "email" autoComplete='off'
//                     //  value={user.email}
//                     //  onChange={handleInputs}
//                         value={email}
//                         onChange={(e)=>setEmail(e.target.value)}
//                                        placeholder='Your email'>
//                     </input>
//                   </div>

                

//                   <div className='form-group'>
//                     <label htmlFor ="password">
//                       <h5> Password
//                       <i className="fa fa-key" aria-hidden="true"></i>

//                       </h5>
                     
//                     </label>
//                     <input type="password" name = "password" id = "password" autoComplete='off' 
                    
//                     value={password}
//                     onChange={(e)=>setPassword(e.target.value)}
//                      placeholder='Enter password'>
//                     </input>
//                   </div>
                 
//                   <div className="checkbox mb-3">
//                         <label>
//                             <input type="checkbox" name="rememberme" value={remember} onChange={(e)=>setRemember(!remember)} /> remember me
//                         </label>
//                     </div>
                  
//                   <br /><br/>


//                   <center>
//                   <div className='form-group form-button'>
//                   <button type="button submit" 
//               name = "signup" id="signup" className='form-submit btn btn-success'
//               onClick={loginUser} >
                
//                 <h6>
//                   <em>login</em>
//                 </h6>

//               </button>
//               </div></center>
           

// <div>
//   <h5>dost have a account click here</h5>
// <button type="button" className='btn btn-secondary'><Link  className='text-white' to ='/ressignup'>SIGN UP</Link></button>

// </div>
             
             

//                  </form>
//                  </div>
//               </div>
//               </div></div>
//             {/* 
//           </section> */}



//       <br /><br/>
//             <br/>
//             <br/>
  
//   <br />
//   {/* </div> */}
// </>
// <Outlet />

//     </div>
//   )
// }

// export default Reslogin
import React from 'react'
import { Link } from 'react-router-dom'

const Reslogin = () => {
  return (
    <div>
      <>
  <br /> <br />
  {/* <img src="loginjob.jpg" class="float-end" width="590"> */}
  {/* <div class="box" style="background-color: #86ffc495; "> */}
  <br />
  <center>
    <h2>LOGIN/SIGNUP</h2>
  </center>
  {/* <p>ENTER YOUR MOBILE NUMBER:<input type="number" placeholder="enter ur number"></p>
 <p>
     ENTER YOUR PASSWORD:<input type="password" placeholder="enter ur password"> </p>
     <div class="container">
   <center>
   <button type="button" class="btn btn-secondary"> <a class=" text-light " href="lonav.html"><h4><em>SUBMIT</em></h4></a></button>
   <br><br>
   <button type="button" class="btn btn-warning"> <a class=" text-light " href="SIGNUP.html"><h4><em>DONT HAVE ACCOUNT CLICK HERE TO CREATE</em></h4></a></button>
   <br><br>
   </center> */}
  <pre />
  <div className="card" style={{ width: 400 }}>
    <img
      className="card-img-top"
      src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_login_man-1024.png"
      alt="Card image"
      style={{ width: "100%" }}
    />
    <div className="card-body">
      <h4 className="card-title">LOGIN</h4>
      <p className="card-text">
        ENTER YOUR EMail
        <input type="email" placeholder="enter ur number" />
      </p>
      <p className="card-text">
        ENTER YOUR PASSWORD:
        <input type="password" placeholder="enter ur password" />
      </p>
      <Link to="/resafterlogin" className="btn btn-primary">
        LOGIN
      </Link>
      <div className="sidebyside">
        <p className="card-text">Dont have account</p>
        <Link to="/ressignup" className="btn btn-primary">
          SIGNUP
        </Link>
      </div>
    </div>
  </div>
  <br />
  {/* </div> */}
</>

    </div>
  )
}

export default Reslogin

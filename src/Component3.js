import React,{useState} from 'react'
import Component from './Component'

const Component3 = () =>  {
    const [user, setuser] = useState("");
    const [ln, setln] = useState("");
    const [mail, setmail] = useState("");
    const [phn, setphn] = useState("");
    const [success, showsuccess] = useState(false);
    const [err1, seterr1] = useState(false);
    const [err2, seterr2] = useState(false);
    const [err3, seterr3] = useState(false);
    const [err4, seterr4] = useState(false);
  
    function fun(event){
      event.preventDefault()
      if(user && ln && mail && phn){
        showsuccess(true)
      }
      if(!user){
        seterr1(true)
        showsuccess(false)
      }
      if(!ln){
        seterr2(true)
        showsuccess(false)
      }
      if(!mail){
        seterr3(true)
        showsuccess(false)
      }
      if(!phn){
        seterr4(true)
        showsuccess(false)
      }
    }
    
    return (
        <>
        <Component/>
      <div className="form">
        <div className='formmm'>
        <form className='formm' onSubmit={fun}>
          {success && (<h3 className='success'>Registration successfull</h3>)}
          <input type="text" name="fn" placeholder="first name" onChange={(e)=>setuser(e.target.value)}/>
          {err1 && <p>please enter your first name</p>}
          {!err1 && <p></p>}
          <input type="text" placeholder="last name" onChange={(e)=>setln(e.target.value)}/>
          {err2 && <p>please enter your last name</p>}
          {!err2 && <p></p>}
          <input type="email" placeholder="email" onChange={(e)=>setmail(e.target.value)}/>
          {err3 && <p>please enter your email</p>}
          {!err3 && <p></p>}
          <input type="text" placeholder='Phone number' onChange={(e)=>setphn(e.target.value)}/>
          {err4 && <p>please enter your phone num</p>}
          {!err4 && <p></p>}
          <button>Register</button>
        </form>
        </div>
      </div>
      </>
    );
  }

export default Component3
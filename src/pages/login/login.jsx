import { useRef, useContext } from "react";
import { AuthContext } from "../../context/auth";
export const Login = () => {
    const {setToken} = useContext(AuthContext)
    const emailRef = useRef();
    const passwordRef = useRef();
    const onSubmit = (evt) =>{
        evt.preventDefault();  
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
        }) 
       .then(res => res.json())
       .then(data => setToken(data))
       .catch((err) => console.error(err))
   }
    return (
      <form className="d-flex flex-column align-items-center mt-5" onSubmit={onSubmit}>
        <input ref={emailRef} className="form-control w-25 mb-4" type="text" placeholder="Email here..." />
        <input ref={passwordRef} className="form-control w-25 mb-4" type="text" placeholder="Password here..." />
        <button className="btn btn-success w-25">Submit</button>
      </form>
    );
  }
  
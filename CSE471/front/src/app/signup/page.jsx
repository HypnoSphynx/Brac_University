"use client";
import styles from '../../style/signup.module.css'
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";



export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
      username: "",
      last:"",
      email: "",
      password: "",
      city: "",
      country:"",
      number: "",
      age: "",
      })


  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/users/signup", user);
          console.log("Signup success", response.data);
          router.push("/login");
          
      } catch (error) {
          console.log("Signup failed", error.message);
          
          toast.error(error.message);
      }finally {
          setLoading(false);
      }
  }

  useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
          setButtonDisabled(false);
      } else {
          setButtonDisabled(true);
      }
  }, [user]);


  return (
    <>
    <html>
        

    <body>
    {/* Header */}
    <div className="bg-gray-900">
    <div className="container mx-auto px-10">
    <nav className="flex items-center justify-between py-4">

      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <input type="text" name="text" placeholder="Search 'UIverse'" className="input"></input>
        <span className="w-5font-semibold text-xl tracking-tight">&nbsp;&nbsp;&nbsp;<Link href="/">Jobify</Link></span>
      </div>


      <div className="hidden  md:flex md:items-center md:ml-auto md:mr--10 ">

        <p className="text-gray-300 hover:text-white px-4"><Link href="/">Home</Link></p>
        <p className="text-gray-300 hover:text-white px-4">About</p>
        <p className="text-gray-300 hover:text-white px-4">Services</p>
        <p className="text-gray-300 hover:text-white px-4">Contact</p>

        <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/login">Sign In</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <button className="button2"><Link href="/signup">Sign Up</Link></button>
      </div>
    </nav>
  </div></div>






    {/* login module */}
    <div className="h-screen flex justify-center items-center bg-gradient-to-r text-transparent bg-clip-text animate-gradient">
    <div className={styles.form}>
    <p id="heading">Login</p>
    
    {/* Username & Last Name */}
    <div className={styles.field}>
    <svg className={styles.input_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
        <input autoComplete="off" placeholder="First Name" className={styles.input_field}  type="text" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
        <input autoComplete="off" placeholder="Last Name" className={styles.input_field}  type="text" id="last" value={user.last} onChange={(e)=>setUser({...user,last:e.target.value})}/>
    </div>
    {/* email */}
    <div className={styles.field}>
    <svg className={styles.input_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
        <input autoComplete="off" placeholder="email" className={styles.input_field} type="text" id="email"  value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
    </div>

    <div className={styles.field}>
    <svg className={styles.input_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
        <input autoComplete="off" placeholder="City" className={styles.input_field} type="text" id="city" value={user.city} onChange={(e)=>setUser({...user,city:e.target.value})}/>
        <input autoComplete="off" placeholder="Country" className={styles.input_field} type="text" id="country" value={user.country} onChange={(e)=>setUser({...user,country:e.target.value})}/>
        <input autoComplete="off" placeholder="Number" className={styles.input_field} type="text" id="number" value={user.number} onChange={(e)=>setUser({...user,number:e.target.value})}/>
        <input autoComplete="off" placeholder="Age" className={styles.input_field} type="text" id="age" value={user.age} onChange={(e)=>setUser({...user,age:e.target.value})}/>

        

    </div>
    <div className={styles.field}>
    <svg className={styles.input_icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
      <input placeholder="Password" className={styles.input_field} type="password" id="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
    </div>
    <div className={styles.btn}>
    <button onClick={onSignup}  className={styles.button2}>{buttonDisabled ? "Insert all fields" : "Signup"}</button>
    </div>
    <button className={styles.button3}><Link href="/login"> Already have an account? Sign In</Link></button>
</div>
</div>



{/* Footer */}
<footer className="footer">
        <p>Developed by Zawad, Rupkatha, Sreya</p>
    </footer>

    </body>

    </html>
    </>
  );
}


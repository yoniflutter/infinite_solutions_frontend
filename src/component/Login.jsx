import react, {useState} from "react"
import { ReactDOM } from "react"
import img from "./image/photo.jpg"
import "./login.css"
import { AiOutlineEye, AiOutlineEyeInvisible  } from 'react-icons/Ai';

const Login = () => {
    const [eyeicon, setIcon] = useState(<AiOutlineEyeInvisible />)
    const [passwordType, setPasswordType] = useState("password")
    const toggle = () => {
        setIcon(!eyeicon)
        setPasswordType(!passwordType)
    }




    return (
        <>
        <section className="bg-gradient-to-b from-primary-500 to-primary-700 overflow-hidden h-auto md:min-h-screen sm:overflow-auto px-[7%] py-auto lg:py-20 lg:px-[8rem] md:py-20 md:px-[7%] flex flex-col items-center md:flex-row ">
            {/* --------------left-------------- */}
            <div className="h-40 md:h-[70vh] w-full md:w-1/2 bg-red-400 rounded-t-lg md:rounded-l-lg md:rounded-none shadow-lg overflow-hidden">
                <img src={img} alt="image" className="h-full md:h-full w-full object-cover"/>
            </div>


              {/*------------ right------------ */}
            <div className="h-fit md:h-[70vh] w-full md:w-1/2 px-[10%] md:px-[3rem] lg:px-[6rem] xl:px-[8rem]  py-16 bg-primary-100 shadow-lg rounded-b-lg md:rounded-r-lg md:rounded-none md:border-2 border-l-black border-opacity-70 relative">
            <form action="Post" className="flex flex-col gap-2">

                <div className="text-center flex justify-center gap-2 text-xs text-stone-500">
                    <div className="radio flex flex-col cursor-pointer">
                        <input type="radio" name="choose" id="stud" checked />
                        <label htmlFor="stud" className="stud">student </label>
                    </div>

                    <div className="radio flex flex-col cursor-pointer">
                    <input type="radio" name="choose" id="admin"/>
                        <label htmlFor="admin" className="admin">Admin</label>
                    </div>
                    
                </div>
            
                <h2 className="text-3xl text-center mb-3">welcome back!</h2>

                    {/*-----email  And password ------*/}
                    <div className="flex flex-col w-full text-sm">
                        <label className="font-bold mb-1" htmlFor="email">Email</label>
                        <input type="text" id="email" className="p-1 w-full text-sm rounded-sm focus:outline-primary-400 focus:outline-dashed valid:border-primary-600 valid:border-2 valid:outline-0" required placeholder="example@gmail.com"/>
                    </div>

                        {/* -----password input part-------- */}
                    <div className="mt-3 flex flex-col w-full text-sm relative">
                        <label className="font-bold mb-1" htmlFor="pass">password</label>
                        <input type={passwordType ? "password" : "text"} id="pass" className="p-1 w-full text-sm rounded-sm focus:outline-primary-400 focus:outline-dashed valid:border-primary-600 valid:border-2 valid:outline-0" min="8" autoComplete="off" required placeholder="*********" title="Fill Your Password"/>
                        <span onClick={toggle} className="eye-icon absolute bottom-[2px] right-1 p-1 cursor-pointer">{eyeicon ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
                    </div>
                    <a href="#" className="text-xs ml-3 text-right pr-2 text-primary-500 cursor-pointer hover:underline">Forget password?</a>
                    <button role="submit" className="bg-gradient-to-br from-primary-400 to-primary-500 hover:to-primary-600 rounded-sm mt-2 p-1 text-[1rem] font-semibold shadow-md shadow-stone-350 hover:shadow-md hover:shadow-stone-400  cursor-pointer text-white focus:ring-4">Login</button>
                </form>
                {/* ------------------sign up link------------- */}
                <p className="text-[12px] absolute bottom-4 right-6">Not a member? <span className="text-[14px] capitalize text-primary-600 hover:underline cursor-pointer">sign Up Now</span></p>
            </div>
        </section>
        </> 
         )
      
} 


export default Login
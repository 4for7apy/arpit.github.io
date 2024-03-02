/* eslint-disable react/prop-types */
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdOutlineClose  ,MdOutlineLightMode} from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import {Link} from 'react-scroll'


const Nav = ({dark,setDark}) => {
    const navItems = ["Home","Projects","Skills","Certifications"];
    const [open,setOpen] = useState(false);
    
    
    return(
        <div className="bg-white dark:bg-[#111828] dark:border-b-[1px] dark:text-white border-textColor sticky z-10 top-0 h-[80px] flex items-center justify-between shadow-md md:px-8 px-5">
            <button onClick={()=>setOpen(!open)} className="md:hidden text-2xl">{open ? <MdOutlineClose/> : <FiMenu/>}</button>
            <h1 className="text-2xl font-semibold">Arpit!</h1>
            <div className={`flex flex-col md:flex-row list-none text-textColor dark:text-darkText gap-5 text-[17px] md:text-[19px] absolute bg-[#fff] dark:bg-darkBox md:bg-transparent dark:md:bg-transparent  md:w-auto md:static px-8 py-5 md:pl-0 top-[80px] duration-500 md:duration-0 ${open ? "left-[0px]" : "left-[-100%]" } `}>
                {
                   navItems.map((item,ind)=>{
                    return <Link activeClass="text-blue-500 duration-300" to={`${item.toLowerCase()}`} spy={true} offset={-100} className={`cursor-pointer `} key={ind}>{item}</Link>
                   })
                }
            </div>
            <button onClick={()=>setDark(!dark)} className="text-2xl">{dark ? <FaLightbulb/> : <MdOutlineLightMode/>}</button>
        </div>
    )
}

export default Nav;
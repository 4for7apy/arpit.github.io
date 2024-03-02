import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return(
        <div className="px-5 mt-[5rem]">
            <div className="border-t-[1px] border-textColor dark:border-darkText py-[50px] flex flex-col justify-center items-center gap-4">
            <p className="text-[14px] md:text-[16px] text-textColor dark:text-darkText">&#169; 2024 arpit srivastav</p>
            <div className="flex gap-5 items-center text-2xl md:text-3xl">
                <a href="https://www.linkedin.com/in/arpit-srivastav/"><FaLinkedin className="text-blue-500 dark:text-[#c0ddf6]"/></a>
                <a href="https://leetcode.com/Arpit_Sri85/"><SiLeetcode className="text-blue-500 dark:text-[#c0ddf6]"/></a>
                <a href="https://github.com/4for7apy"><FaGithub className=" dark:text-[#c0ddf6]"/></a>
            </div>
        </div>
        </div>
    )
}

export default Footer;
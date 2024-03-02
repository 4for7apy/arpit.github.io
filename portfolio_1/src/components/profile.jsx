import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import pfp from '../assets/WhatsApp Image 2024-03-01 at 18.00.04_200bccf4.jpg'
import { SiLeetcode } from "react-icons/si";


const Profile = () => {
    return (
        <div id="home" className="w-full   py-12 flex md:flex-row flex-col justify-around items-center px-6 md:px-0 gap-8 md:gap-0">
            {/* pfp name social links */}
            <div className="flex md:w-1/4 w-auto md:pl-8 pl-0 flex-col items-center">
                <div className="bg-slate-400 mb-5 w-[250px] h-[250px]  rounded-full">
                    <img className="rounded-full w-full h-full bg-cover object-cover" src={pfp} alt="" />
                </div>
                <h1 className="text-2xl md:text-3xl mt-3 text-headingColor dark:text-white">Arpit Srivastav</h1>
                <p className="mt-2 text-[20px] text-textColor dark:text-[#F3F3F3]">ML Enthusiast in Defence</p>
                <a className="text-blue-600 dark:text-[#c0ddf6] text-[17px] mt-1" href="">arpit88407@gmail.com</a>
                <div className="mt-5 mb-3 flex text-3xl gap-4">
                    <a href="https://www.linkedin.com/in/arpit-srivastav/" className="text-blue-600 dark:text-[#c0ddf6]"><FaLinkedin /></a>
                    <a href="https://github.com/4for7apy" className=" dark:text-[#c0ddf6]"><FaGithub /></a>
                    <a href="https://leetcode.com/Arpit_Sri85/" className="text-blue-600 dark:text-[#c0ddf6]"><SiLeetcode /></a>
                
                </div>
            </div>
            {/* des */}
            <div className="md:w-2/4 flex flex-col gap-10 w-auto text-textColor">
                <div className="dark:text-darkText">
                    <p className="md:leading-[30px] leading-[25px] md:text-[18px] text-sm">Hi! My name is Arpit Srivastav. A technology enthusiast, working to solve real-world problems and trying to bring a change, who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries.</p><br />
                    <p className="md:leading-[30px] leading-[25px] md:text-[18px] text-sm">In my undergraduate studies, I’ve worked on various roles & Projects, including the development of Glimo Head Tumour Detection & Mutation , Stock Price Prediction, I developed Tourism Mobile App in which I won cash prize by my collage also Partcipated in 36 hour Hackathon in which We got shortlisted as Top team. I love to extract knowledge & insights from huge and complex data sets. The power of questioning and extracting answers from various data sets has always fascinated me.</p><br />

                    <p className="md:leading-[30px] leading-[25px] md:text-[18px] text-sm">My Long Term Vision is to use new age technology to embrace more opportunity in Defence & Healthcare in Both Sector by using modern age technology we can save our soldiers on frontline border and Patient in Hospital.

                    </p>
                </div>
                <div className="flex md:flex-row flex-col gap-14 text-black dark:text-white">
                    <div>
                        <h1 className="font-bold text-2xl">Intrests</h1>
                        <ul className="text-textColor dark:text-darkText list-disc pl-5 flex flex-col gap-2 mt-4 mb-2">
                            <li>ML Operation in Defence & HealthCare</li>
                            <li>Natural Language Processing</li>
                            <li>Artifical Intelligence</li>
                            <li>Computer Vision</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl textce">Education</h1>
                        <div className="border-[1px] border-[#F3F3F3] dark:border-textColor rounded-md duration-300 cursor-pointer flex flex-col gap-[2px] mt-4 mb-2 p-3 hover:shadow-md">
                            <p className="dark:text-[#F3F3F3]">B.Tech in CSE (Minor in Machine Learning), 2026</p>
                            <p className="text-textColor dark:text-darkText text-[14px] font-medium">Lovely Professional University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
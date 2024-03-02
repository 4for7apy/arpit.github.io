import { FaGoogle } from "react-icons/fa";


const Experience = () => {
    return(
        <div id="experience" className="my-[70px] bg-[#fff] dark:bg-[#111828]">
            <h1 className="text-black dark:text-white text-3xl text-center font-bold my-3">Experience</h1>
            <div className="time-line z-0 relative mx-auto max-w-[1200px] my-10">
                <div className="container relative md:w-1/2 w-full  md:px-[50px] py-[10px]">
                <FaGoogle className="absolute md:right-[-22px] left-[13px] md:left-auto z-3 w-[40px] h-[40px] rounded-full text-white bg-blue-500 p-[5px] top-[30px]" />
                    <div className="shadow-md dark:border-[1px] dark:border-textColor  relative  px-[30px] py-5 rounded-md">
                        <h1 className="text-blue-500 font-semibold text-[20px]">Youtube</h1> 
                        <small className="text-[#333] dark:text-[#F3F3F3] font-semibold">2021 - 2023</small>
                        <p className="text-textColor dark:text-darkText text-[16px] font-medium mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae rerum similique, explicabo rerum similique, explicabo</p>
                    </div>
                </div>
                <div className="container relative md:w-1/2 w-full md:px-[50px] py-[10px] md:left-1/2 ">
                <FaGoogle className="absolute md:left-[-18px] left-[13px] z-3 w-[40px] h-[40px] rounded-full text-white bg-blue-500 p-[5px] top-[30px]" />
                    <div className="shadow-md dark:border-[1px] dark:border-textColor left  px-[30px] py-5 rounded-md">
                        <h1 className="text-blue-500 font-semibold text-[20px]">Youtube</h1> 
                        <small className="text-[#333] dark:text-[#F3F3F3] font-semibold">2021 - 2023</small>
                        <p className="text-textColor dark:text-darkText text-[16px] font-medium mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae rerum similique, explicabo rerum similique, explicabo</p>
                    </div>
                </div>
                <div className="container  relative md:w-1/2 w-full  md:px-[50px] py-[10px]">
                <FaGoogle className="absolute md:right-[-22px] left-[13px] md:left-auto z-3 w-[40px] h-[40px] rounded-full text-white bg-blue-500 p-[5px] top-[30px]" />
                    <div className="shadow-md dark:border-[1px] dark:border-textColor left  px-[30px] py-5 rounded-md">
                        <h1 className="text-blue-500 font-semibold text-[20px]">Youtube</h1> 
                        <small className="text-[#333] dark:text-[#F3F3F3] font-semibold">2021 - 2023</small>
                        <p className="text-textColor dark:text-darkText text-[16px] font-medium mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae rerum similique, explicabo rerum similique, explicabo</p>
                    </div>
                </div>
                <div className="container rigth md:left-1/2 relative md:w-1/2 full  md:px-[50px] py-[10px]">
                <FaGoogle className="absolute md:left-[-18px] left-[13px] z-3 w-[40px] h-[40px] rounded-full text-white bg-blue-500 p-[5px] top-[30px]" />
                    <div className="shadow-md dark:border-[1px] dark:border-textColor left relat-300 px-[30px] py-5 rounded-md">
                        <h1 className="text-blue-500 font-semibold text-[20px]">Youtube</h1> 
                        <small className="text-[#333] dark:text-[#F3F3F3] font-semibold">2021 - 2023</small>
                        <p className="text-textColor dark:text-darkText text-[16px] font-medium mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae rerum similique, explicabo rerum similique, explicabo</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Experience;
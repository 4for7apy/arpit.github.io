
import { FaGithub } from "react-icons/fa6";


const ProjectBox = ({title,des,giturl,img}) => {
    return (
        <div className="min-w-[300px] max-w-[350px] relative pb-[50px] mx-auto md:mx-0 shadow-mainShadow rounded-tr-md rounded-tl-md">
            <img className="w-full rounded-t-md" src={img} alt="" />
            <div className="px-4">
                <h1 className="mt-5 text-black dark:text-white text-[19px] font-bold">{title}</h1>
                <p className="my-3 text-textColor dark:text-darkText text-[14px]">{des}</p>
                <div className="inline-block">
                <a href={giturl} className="border-[2px] border-black dark:border-darkBox px-4 py-2 rounded-md text-black dark:text-white my-3 flex items-center gap-2 hover:bg-blue-500 duration-300 absolute bottom-[16px] "><FaGithub/> Github repo</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectBox;
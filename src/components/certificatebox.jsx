

const CertBox = ({title,com,des,des2,url,img}) => {
    return(
        <div className="shadow-panelShadow rounded-md  max-w-[900px] py-5 px-4 flex flex-col gap-5">
                <div className="flex items-center gap-2 md:gap-3">
                    <img className="md:w-[100px] w-[70px]" src={img} alt="" />
                    <div>
                        <h1 className="text-[13px] md:text-[16px] text-textColor dark:text-[#F3F3F3] font-semibold">{title}</h1>
                        <a className="text-[13px] md:text-[15px] text-textColor dark:text-[#F3F3F3] " href="">{com}</a>
                    </div>
                </div>
                <ul className="text-textColor dark:text-darkText text-[11px] md:text-[14px] leading-[20px] list-disc pl-[20px] md:pl-[70px]">
                    <li className="">{des}</li>
                    <li className="mt-4">{des2}</li>

                </ul>
                <div>
                   <a className="text-blue-500 pl-3" href={url}>Certificate</a>
                </div>

            </div>
            
    )
}

export default CertBox;
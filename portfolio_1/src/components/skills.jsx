import ai from '../assets/ai-svgrepo-com.svg'
import cpp from '../assets/cpp3-svgrepo-com.svg'
import python from '../assets/python-svgrepo-com.svg'
import numpy from '../assets/numpy-svgrepo-com.svg'
import pandas from '../assets/pandas-svgrepo-com.svg'
import kotlin from '../assets/kotlin-svgrepo-com.svg'
import as from '../assets/logo-google-android-studio-2-svgrepo-com.svg'
import sql from '../assets/sql-svgrepo-com.svg'
import ml from '../assets//cog-svgrepo-com.svg'
import sci from '../assets/scikit-learn-seeklogo.svg'


const Skills = () => {
    const skills = [
        {
            name: "Machine Learning",
            url: ml,
        },
        {
            name: "Artificial Intelligence",
            url: ai,
        },
        {
            name: "Computer Vision (Open CV)",
            url: 'https://raw.githubusercontent.com/wiki/opencv/opencv/logo/OpenCV_logo_no_text.svg?sanitize=true',
        },
        {
            name: "C++",
            url: cpp,
        },
        {
            name: "Python",
            url: python,
        },
        {
            name: "Numpy",
            url: numpy,
        },
        {
            name: "Pandas",
            url: pandas,
        },
        {
            name: "Sklearn",
            url: sci,
        },{
            name: "Kotlin",
            url: kotlin,
        },{
            name: "Android Studio",
            url: as,
        },{
            name: "SQL",
            url: sql,
        },{
            name: "Power Bi",
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        },
    ]
    return (
        <div id='skills' className="pt-[40px]">
            <h1 className="text-black dark:text-white md:text-4xl text-3xl text-center pb-8">Tools & Languages</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-y-[3rem] my-[2rem] '>
                {
                    skills.map((skill, ind) => {
                        return (
                            <div key={ind} className='flex flex-col gap-3 justify-center items-center'>
                                <img className='w-[100px] h-[100px] ' src={skill.url} alt="" />
                                <p className='text-textColor dark:text-[#F3F3F3] text-[18px] my-3'>{skill.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
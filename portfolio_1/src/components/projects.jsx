import ProjectBox from "./projectbox";
import fd from '../assets/faceDetect.jpg'
import car from '../assets/WhatsApp Image 2024-03-02 at 11.38.26_3e96b038.jpg'
import facm from '../assets/mask.jpg'
import chat from '../assets/chatbot.jpg'
import chatu from '../assets/chatu.jpg'
import music from '../assets/music.jpg'

const Projects = () => {
    return (
        <div id="projects" className="my-8 text-black dark:text-white md:my-[80px] flex flex-col justify-around items-center gap-[2rem] px-4">
            <h1 className=" md:text-5xl text-3xl my-7 text-center">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-[4rem] md:gap-y-[4rem] gap-y-8">
                <ProjectBox img={facm} title="Face Mask Detection OpenCV Python" des="Face Mask Detection with OpenCV in Python involves utilizing computer vision to identify individuals wearing or not wearing masks in images or video streams. By leveraging OpenCV libraries and techniques such as image processing and deep learning, this system helps enforce safety protocols in various settings, promoting public health during pandemic situations." giturl="https://github.com/4for7apy/Face-Mask-Detection-OpenCV-Python"/>
                <ProjectBox img={car} title="Real-Time Car Detection OpenCV" des="Real-Time Car Detection with OpenCV utilizes computer vision for instant vehicle identification in live video streams. Leveraging techniques like Haar cascades or deep learning, OpenCV enables efficient and accurate real-time tracking, suitable for applications like traffic management, surveillance, and autonomous vehicles." giturl="https://github.com/4for7apy/Real-Time-Car-Detection-OpenCV-using-Machine-Learning"/>
                <ProjectBox img={fd} title="Profile Face Detection OpenCV Python" des="Profile Face Detection using OpenCV in Python involves applying computer vision techniques to identify and locate faces in a profile view within images or video streams. OpenCV's libraries and methods, such as Haar cascades or deep learning models, enable accurate and efficient profile face detection for various applications, including biometrics and surveillance." giturl="https://github.com/4for7apy/Real-Time-Profile-Face-Detection-OpenCV-Python-using-ML"/>
                <ProjectBox img={music} title="Music Player System" des="On this project we are implemeting music recommender system like netflix" giturl="https://github.com/4for7apy/Byte_bash"/>
                <ProjectBox img={chatu} title="Chatty Bot Development" des="This is developed in Kotlin while I am learning android app development" giturl="https://github.com/4for7apy/Chatty_Bot_Development"/>
                <ProjectBox img={chat} title="Ai Chat Bot" des="We are working on Chat Bot in which we will implement Chat gpt Api to get best reply" giturl="https://github.com/4for7apy/Ai_Chat_Bot"/>
            </div>

        </div>
    )
}

export default Projects;
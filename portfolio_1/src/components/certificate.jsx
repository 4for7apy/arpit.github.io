import CertBox from "./certificatebox";
import microsoft from "../assets/microsoft-logo-svgrepo-com.svg"
import infosys from "../assets/Infosys_logo_PNG3.png"
import coursera from '../assets/Coursera_Logo_PNG1.png'

const Certificate = () => {
    return (
        <div id="certifications" className="my-8 text-black dark:text-white flex flex-col md:flex-row justify-around gap-[2rem] px-4">
            <h1 className=" md:text-5xl text-3xl my-7 text-center">Certifications</h1>
            <div className="flex flex-col gap-4 md:gap-6">
                <CertBox img={microsoft} title="Azure Fundamentals - AZ 900 Challenge" des="The course provided a comprehensive understanding of neural network architecture, backpropagation, and optimization algorithms, enabling me to create and optimize deep learning models effectively."  des2="I gained insights into the practical applications of deep learning, particularly in image recognition and natural language processing, which has broadened my understanding of how deep learning can be leveraged to solve real-world problems." com="Microsoft" url="https://drive.google.com/file/d/1VKztLCqQRgFmM6s5ARM7ypMhvFd-mytx/view?usp=drive_link"/>
                <CertBox img={infosys} title="Introduction to Deep Learning" url="https://drive.google.com/file/d/1yB5YckvcY-Am4adx9Xu82pvu_3vQphiY/view?usp=drive_link" des=" I learn understanding of deep learning, a subset of machine learning that utilizes neural networks to simulate human-like decision-making." des2="The certification covers essential concepts such as neural network architecture, forward and backpropagation, activation functions, and optimization algorithms." com="Infosys"/>
                <CertBox img={coursera} title=" Generative AI for Everyone" url="https://drive.google.com/file/d/1yB5YckvcY-Am4adx9Xu82pvu_3vQphiY/view?usp=drive_link" des="The course provided a foundational understanding of generative models, including GANs and Variational Autoencoders, and their applications in generating diverse types of creative content such as images, music, and text. I learned how these models work and gained insights into the underlying principles of generative AI." des2="The course also emphasized the ethical considerations and potential societal impacts of generative AI technology. I gained an understanding of the importance of responsible use of AI-generated content and the potential implications on areas such as art, entertainment, and misinformation." com="Coursera"/>
            </div>
            
        </div>
    )
}

export default Certificate;

//
import { Blogs } from "./components/BlogCard/BlogCards";
import { CustomerReviewCard } from "./components/CustomerReviews/CustomerReviews";
import { Projects } from "./components/PortfolioProjects/PortfolioProjects";
import { ResearchWork } from "./components/ResearchSection/Research";

export const DEVELOPER_NAME = "Hi, I'm Abhirupa"
export const DEVELOPER_ABOUT_P1 = "I am a Software Developer with 4 years of Experience working on Android and Web Projects. As a ReactsJS afficionado, I love bringing functional and creative websites live. I have a special knack for creating  Architectural LLD Designs to solve exciting problems. "
export const DEVELOPER_ABOUT_P2 = "I also love mentoring early careerists, under graduates and help them secure a job in Tech. Empowering the next generation of tech enthusiasts brings fulfillment to my journey.";
export const MENTORSHIP_HEADER = "Get Your Resume reviewed, avail Mentoring Sessions and Mock Interviews to Boost your Career";
export const MENTORSHIP_ABOUT = "Having experience interviewing for Microsoft, Google and the likes, I am offering mentorship and mock interviews to aspiring engineers. I can help you with your technical skills and guide you through the process of becoming a successful engineer. Let’s me help you achieve your goals."
export const COMMUNITY_SECTION_HEADER = "Join the Community!";
export const COMMUNITY_SECTION_TEXT="Join my Community to get Free and Quick Access to everything Tech and Travel. Contribute and get Benefited at the Same Time. Follow me on Instagram and Linkedin!."

export const RESEARCH_SECTION_HEADER = "Research And Publications";
export const RESEARCH_SECTION_TEXT="My areas of Research involve around Machine Learning, Linguistics and Software Development. Checkout my Google Scholar page here."

export const reviews : CustomerReviewCard[] =[
    {
        reviewText : "Abhirupa has been very helpful. She gave me pointers on how to add keywords so that my resume stands out.",
        reviewerName : "Divesh",
    },
    {
        reviewText : "I had a Thorough Mock Interview for DSA and System Design topics. I was more confident during my Tech Interview Round",
        reviewerName : "Mahima",
    },
]

export const blogs : Blogs = {
    blogs:
    [{
        title: "Create Simplified Parallax Effects Using Next.js + GSAP",
        date: "May 16, 2024",
        redirectionLink : "https://medium.com/codex/create-simplified-parallax-effects-using-next-js-gsap-in-10-mins-82d4d60cd15f",
    },
    {
        title: "Building Visually Accessible Websites by Supporting Contrast Theming",
        date: "May 4, 2024",
        redirectionLink : "https://medium.com/@mitra.abhirupa/building-visually-accessible-websites-by-supporting-contrast-theming-300cd2f603b9",
    }]
}

export const projects : Projects = {
    projects:
    [{
        title: "Building Microsoft Copilot Sidecar Experience for Office365",
        description: "I currently contribute to building Microsoft’s Copilot Experience. This involves creating a client-side infrastructure to provide Chat GPT support to M365 Applications. My team has been involved in developing Copilot Support in M365 Suite from scratch. Prior to this I have worked on adding speech recognition capabilities within Office Mobile Android Apps.",
        redirectionLink : "https://www.microsoft.com/en-us/microsoft-copilot?msockid=376cb45c4a3963020210a7bc4b3f6245",
    },
    {
        title: "Twitter Ego Networks for Criminal Activity Detection",
        description: "This analyzes Twitter data to identify potential criminal activities. The implementation leverages IBM Watson’s Tone Analyzer to assess the emotional tone of tweets, which helps in detecting suspicious behavior. By creating ego networks from Twitter data, the project can map out relationships and interactions that might indicate criminal activity. This approach combines natural language processing and social network analysis to provide insights into crime patterns.",
        redirectionLink : "https://github.com/abhirupa-tech/Twitter-ego-networks-for-criminal-activity-Detection",
    },
    {
        title: "Carbon-Emission-Forecasting-using-ARIMA",
        description: "This project proposes a hybrid approach to time series forecasting of Carbon emissions by combining SARIMA model along with LSTM.",
        redirectionLink : "https://github.com/abhirupa-tech/Carbon-Emission-Forecasting-using-ARIMA",
    }]
}


export const research : ResearchWork = {
    publications:
    [{
        title: "Comparative Study and Enhancement of Various Classification Algorithms in Prediction of Diabetes Mellitus",
        description: "Data mining can be aptly described as a field of study which focuses on identifying and detecting patterns in datasets using algorithms of Machine Learning, Statistics or databases, and thus establish the analysis phase in the KDD process. Different data mining algorithms have been used and compared, to measure their efficiency in the prediction of Diabetes Mellitus. The main problem that arises during Diabetes classification is that due to lack of resources, proper data mining have not been carried out. ",
        redirectionLink : "https://www.indianjournals.com/ijor.aspx?target=ijor:ijece1&volume=10&issue=2&article=006",
    },
    {
        title: "Size Optimization for Intent Analysis in Voice Commanding",
        description: "Voice technology is getting more and more ubiquitous and with that, the need for it to work always. In this technology, a major highlight is to incorporate voice commanding in an application on a device. This suffers inaccuracies at two levels, firstly the conversion of the user’s speech command to text and secondly classification of the underlying intent from this text. ",
        redirectionLink : "https://scholar.google.com/scholar?oi=bibs&cluster=2981304315023415656&btnI=1&hl=en",
    },
    {
        title: "Securing Organ Donation using Blockchain",
        description: "Modern systems responsible for the collection, preservation, or transplantation of organs lack transparency. They are slow and are provided with minimum security requirements, resulting in the illegal trade of organs or other serious medical scams. We propose a secure platform to monitor and facilitate the process of organ donation by deploying it on a decentralized platform with the help of blockchain, thus in this process, ensuring security, integrity, and transparency and also eliminating the need for third-party moderators",
        redirectionLink : "https://www.ijser.org/researchpaper/Securing-Organ-Donation-using-Blockchain.pdf",
    }]
}
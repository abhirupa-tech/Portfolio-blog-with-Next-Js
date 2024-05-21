import { title } from "process";
import { Blogs } from "./components/BlogCard/BlogCards";
import { CustomerReviewCard } from "./components/CustomerReviews/CustomerReviews";

export const DEVELOPER_NAME = "Hi, I'm Abhirupa"
export const DEVELOPER_ABOUT_P1 = "I am a Software Developer with 4 years of Experience working on Android and Web Projects. As a ReactsJS afficionado, I love bringing functional and creative websites live. I have a special knack for creating  Architectural LLD Designs to solve exciting problems. "
export const DEVELOPER_ABOUT_P2 = "I also love mentoring early careerists, under graduates and help them secure a job in Tech. Empowering the next generation of tech enthusiasts brings fulfillment to my journey.";
export const MENTORSHIP_HEADER = "Get Your Resume reviewed, avail Mentoring Sessions and Mock Interviews to Boost your Career";
export const MENTORSHIP_ABOUT = "Having experience interviewing for Micrsoft, Google and the likes, I am offering mentorship and mock interviews to aspiring engineers. I can help you with your technical skills and guide you through the process of becoming a successful engineer. Let’s me help you achieve your goals."
export const COMMUNITY_SECTION_HEADER = "Join the Community!";
export const COMMUNITY_SECTION_TEXT="Join my Community to get Free and Quick Access to everything Tech and Travel. Contribute and get Benefited at the Same Time. We are on Discord and Instagram."

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
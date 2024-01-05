import attPic from "../Images/attendance.png"
import irPic from "../Images/ir.png"
import fruits from "../Images/fruits.png"
import nextRandom from "../Images/next_nr.png"
import amazon from "../Images/amazon.png"
import iota from "../Images/iota.jpeg"
import swaggertoof from "../Images/swaggertoof_icon.jpg"
import olx from "../Images/olx_clone.png"
import noImage from "../Images/no-image-available.png"
import polymath from "../Images/polymathai.jpeg"
import project_mgmt from "../Images/project_mgmt.png"
import motive_logo from "../Images/motive_logo.png"

const projects = [
    {
        title: "Attendance Manager",
        img: attPic,
        github: "https://github.com/varunmukherjee1/Attendance-Manager",
        website: "",
        desc: "Automated attendance capturing and management system"
    },
    {
        title: "OLX Clone",
        img: olx,
        github: "https://github.com/varunmukherjee1/Olx_Clone",
        website: "https://elaborate-gecko-8b697d.netlify.app/",
        desc: "Full Stack Olx clone using 'Next.js'"
    },
    {
        title: "Sci Search",
        img: irPic,
        github: "https://github.com/varunmukherjee1/Information_Retrieval",
        website: "",
        desc: "Scientific Document Retreival System"
    },
    {
        title: "Project Management System",
        img: project_mgmt,
        github: "https://github.com/varunmukherjee1/Simple_Project_Management_System",
        website: "",
        desc: "Simple fullstack project management system using MongoDB & GraphQL"
    },
    {
        title: "Next Random",
        img: nextRandom,
        github: "https://github.com/varunmukherjee1/Next_Random",
        website: "https://next-random-kappa.vercel.app/",
        desc: "A user-friendly website enabling individuals to share diverse thoughts and ideas."
    },
    {
        title: "Fruit's Basket",
        img: fruits,
        github: "https://github.com/varunmukherjee1/Fruits-Basket",
        website: "https://vm-fruits-basket.netlify.app/",
        desc: "Online fruits shopping application"
    },
    {
        title: "Amazon Clone",
        img: amazon,
        github: "https://github.com/varunmukherjee1/Amazon-Clone",
        website: "https://clone-c6aca.web.app/",
        desc: "Amazon Clone (Cloned login & Cart feature)"
    }
]

const experience = [
    {
        title: "Software Engineer Intern",
        img: motive_logo,
        website: "https://gomotive.com/",
        company: "Motive",
        tag: "Jan 2024 - Present"
    },
    {
        title: "Next.js Developer (Full Stack)",
        img: polymath,
        website: "https://trypolymath.ai/",
        company: "Polymath AI",
        tag: "July 2023 - Jan 2024"
    },
    {
        title: "Hackathon & Workshop Team LeadHackathon",
        img: iota,
        website: "https://www.linkedin.com/company/iota-iiits/mycompany/",
        company: "IOTA (Project Club of IIIT Sri City)",
        tag: "Dec 2022 - Jan 2024"
    },
    {
        title: "Next.js Developer",
        img: noImage,
        // website: "https://www.linkedin.com/company/iota-iiits/mycompany/",
        company: "Unhired",
        tag: "Jan 2023 - May 2023"
    },
    {
        title: "Frontend Developer (Freelance)",
        img: swaggertoof,
        // website: "https://6308fa0da14bb108b40e25f6--lucent-treacle-c65023.netlify.app/",
        company: "Swaggertoof",
        tag: "Aug 2022 - Sep 2022"
    },
]

const obj = {
    projects,
    experience
}

export default obj
import attPic from "../Images/attendance.png"
import irPic from "../Images/ir.png"
import fruits from "../Images/fruits.png"
import amazon from "../Images/amazon.png"
import iota from "../Images/iota.jpeg"
import swaggertoof from "../Images/swaggertoof_icon.jpg"
import olx from "../Images/olx_clone.png"
import noImage from "../Images/no-image-available.png"

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
        title: "Hackathon & Workshop Team LeadHackathon",
        img: iota,
        website: "https://www.linkedin.com/company/iota-iiits/mycompany/",
        company: "IOTA (Project Club of IIIT Sri City)",
        tag: "Dec 2022 - Present"
    },
    {
        title: "Frontend Developer (Next.js)",
        img: noImage,
        // website: "https://www.linkedin.com/company/iota-iiits/mycompany/",
        company: "Unhired",
        tag: "Jan 2023 - Present"
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
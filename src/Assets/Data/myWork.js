import attPic from "../Images/attendance.png"
import irPic from "../Images/ir.png"
import fruits from "../Images/fruits.png"
import amazon from "../Images/amazon.png"
import iota from "../Images/iota.jpeg"

const projects = [
    {
        title: "Attendance Manager",
        img: attPic,
        github: "https://github.com/varunmukherjee1/Attendance-Manager",
        website: "",
        desc: "Automated attendance capturing and management system"
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
        tag: "Present"
    }
]

const obj = {
    projects,
    experience
}

export default obj
import one from "../assets/img/project-cover-1.png";
import two from "../assets/img/project-cover-2.png";

export const getProjects = [
    {
        "odd": true,
        "title": "WATCHNOW",
        "description": "I build this streaming website for anyone who wants to watch Asian drama with zero ads and without any cost.",
        "stack": [
            "React Js",
            "NPM",
            "Bootstrap",
            "Google analytics",
            "Vercel App",
            "Git",
        ],
        "github": "#",
        "site": "https://watnow.vercel.app/",
        "img": one,
    },
    {
        "odd": false,
        "title": "Automated Campaign Management System",
        "description": "A web system that allowed the candidate to monitor their members and to check the activity of their staff. This project is still under development.",
        "stack": [
            "Codeigniter 3",
            "Composer",
            "MySQL",
            "Mapbox",
            "Facebook Auth",
            "Google Auth",
            "Git"
        ],
        "github": "#",
        "site": "https://acms.ph/",
        "img": two,
    },
]
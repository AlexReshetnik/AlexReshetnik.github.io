import tourism_company from "../../../../res/video/tourism-company.mov"
import Method_kruskala from "../../../../res/video/Method_kruskala.mov"
import Game_aim_training from "../../../../res/video/Game_aim_training.mov"
import Calendar_TODO from "../../../../res/video/Calendar_TODO.mov"
import Extensions_Age_go from "../../../../res/video/Extensions_Age_go.mov"
import Extension_ToDo from "../../../../res/video/Extension_ToDo.mov"
import Sheets_API_Quickstart from "../../../../res/video/Sheets_API_Quickstart.mov"
import Google_authentication from "../../../../res/video/Google_authentication.mov"

export default [
    {
        video: tourism_company,
        github_link: 'https://github.com/Web-University/tourism-company',
        title: 'Tourism company',
        decription: "SPA was created as part of a group project under my supervision. The task was to create a triple nesting using Ajax, Bootstrap, Responsive template, and with an element of interaction with the user.Fetch was forbidden to use so I created a wrapper with Promise over XMLHttpRequest, with automatic caching."
    },
    {
        video: Method_kruskala,
        github_link: 'https://github.com/AlexReshetnik/Method_kruskala',
        title: 'Method Kruskala',
        decription: "The developed structure can solve a lot of issues, for example, the laying of lines (gas supply, electricity, water supply). Used Proxy by to reduce the amount of code. Developed as part of laboratory work."
    },
    {
        video: Game_aim_training,
        github_link: 'https://github.com/AlexReshetnik/Game_aim_training',
        title: 'Game Aim Training',
        decription: "The one-page game was developed as part of the Web-programming course."
    },
    {
        video: Calendar_TODO,
        github_link: 'https://github.com/AlexReshetnik/Calendar_TODO',
        title: 'Calendar To-Do',
        decription: "A basic REST API with a server on Nodejs (Express). With simple registration (without validation), and with a database in the form of json files. Practiced with express Routing. Implemented an adaptive calendar, with the possibility of transferring tasks."
    },
    {
        video: Extensions_Age_go,
        github_link: 'https://github.com/AlexReshetnik/Extensions_Age_go',
        title: 'Extensions Age-Go',
        decription: "An motivational, interesting and simple extension for chrome whose task is to set the main page as a count of the number of years and % how many are left until the birthday interesting and simple extension for chrome whose task is to set the main page as a count of the number of years and % how many are left until the birthday. Practiced with Js Data."
    },
    {
        video: Extension_ToDo,
        github_link: 'https://github.com/AlexReshetnik/Extension_ToDo',
        title: 'Extensions To-Do',
        decription: "A minimalistic task list in Chrome, with data saved in local storage. I especially played with the simple animated removal of tasks."
    },
    {
        video: Sheets_API_Quickstart,
        github_link: 'https://github.com/AlexReshetnik/Sheets_API_Quickstart',
        title: 'Preparation Google Sheets API',
        decription: "Getting started with Google Sheets. Google authorization and verification and creation of new tables and extraction of data from them. The future idea is to use this tool to create a whole structure to replace the database."
    },
    {
        video: Google_authentication,
        github_link: 'https://github.com/AlexReshetnik/Google_authentication',
        title: 'Preparation Google Auth.',
        decription: "Getting started with Google Authentication. Authorization is possible in two ways. In the next development, it is planned to create a full-fledged application on this basis."
    }
]
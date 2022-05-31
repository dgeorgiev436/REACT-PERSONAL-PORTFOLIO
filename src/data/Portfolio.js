import moneyManager from './../images/Portfolio/MoneyManager.jpg';
import techUnite from './../images/Portfolio/TechUnite.png';
import personalPortfolio from "./../images/Portfolio/personalPortfolio.png"
import ReactMeals from "./../images/Portfolio/ReactMeals.png"
import ToDo from "./../images/Portfolio/ToDo.png"


const Portfolio = [
    {
        id: 1,
        category: 'Single-Page Web Application',
        title: 'MoneyManager',
        subTitle: 'MERN stack, Single-page web application for budget tracking',
        image: moneyManager,
        link1: 'https://github.com/dgeorgiev436/React-MoneyManager-App/',
        link2: 'https://warm-reaches-53004.herokuapp.com/',
    },
    {
        id: 2,
        title: 'TechUnite',
        subTitle: 'MERN stack application for creating a developer profile/portfolio, sharing of posts and receiving help from other developers',
        category: 'Single-Page Web Application',
        image: techUnite,
        link1: 'https://github.com/dgeorgiev436/Major-Dissertation-Project-TechUnite/',
        link2: 'https://morning-plains-14040.herokuapp.com/',
    },
    {
        id: 3,
        title: 'Personal-React-Portfolio',
        subTitle: 'My personal react portfolio',
        category: 'Single-Page Web Application',
        image: personalPortfolio,
        link1: 'https://github.com/dgeorgiev436/React-Personal-Portfolio/',
        link2: 'https://react-personal-portfolio.herokuapp.com/',
    },
    {
        id: 4,
        title: 'ReactMeals',
        subTitle: 'Food Order React App',
        category: 'Single-Page Web Application',
        image: ReactMeals,
        link1: 'https://github.com/dgeorgiev436/FoodOrder-React-App-Hooks/',
        link2: 'https://react-foororder-app.herokuapp.com/',
    },
    {
        id: 5,
        title: 'ToDo',
        subTitle: 'TypeScript todo app',
        category: 'Single-Page Web Application',
        image: ToDo,
        link1: 'https://github.com/dgeorgiev436/Todo-App-React-TypeScript/',
        link2: 'https://typescript-todo-app.herokuapp.com/',
    }
];

export default Portfolio;

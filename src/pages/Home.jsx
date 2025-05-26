import Carousel from "../components/Carousel";
import './pages.css';

function Home() {
    return (
        <>
            <div className='aboutme'>
                <h1>¡Hola! Soy Alejandro Prados</h1>
                <h2>Desarrollador Full Stack</h2>
                <p>He completado mi formación como Desarrollador Full Stack en The Bridge, donde adquirí experiencia práctica con tecnologías como HTML5, CSS, JavaScript, Node.js, Express y React.</p>
                <p>También he trabajado con bases de datos como SQL y MongoDB, además de herramientas como Visual Studio Code, Postman, Swagger y Firebase.</p>
                <p>Estoy entusiasmado por aplicar todo lo aprendido en proyectos reales y seguir creciendo profesionalmente en el mundo del desarrollo web.</p>
            </div>

            <div className="tech-container">
                <h2>🛠 Tecnologías y herramientas</h2>
                <div className="tech-icons">
                    <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
                    <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
                    <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" />
                    <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />
                    <img src="https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" />
                    <img src="https://img.shields.io/badge/Express-%23000000.svg?style=for-the-badge&logo=express&logoColor=white" />
                    <img src="https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
                    <img src="https://img.shields.io/badge/SQL-%230072C6.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                    <img src="https://img.shields.io/badge/Jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white" />
                    <img src="https://img.shields.io/badge/Swagger-%2385EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black" />
                    <img src="https://img.shields.io/badge/Postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" />
                    <img src="https://img.shields.io/badge/Git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white" />
                    <img src="https://img.shields.io/badge/GitHub-%23000000.svg?style=for-the-badge&logo=github&logoColor=white" />
                    <img src="https://img.shields.io/badge/VSCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
                    <img src="https://img.shields.io/badge/Slack-%234A154B.svg?style=for-the-badge&logo=slack&logoColor=white" />
                    <img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=trello&logoColor=white" />
                </div>
            </div>
        <Carousel />
        </>
    )
}

export default Home;
//Este componente mostrará la página de inicio del portfolio y una breve descripción del desarrollador. */
import Carousel from "../components/Carousel";
import './pages.css';

function Home() {
    return (
        <>

            <div className='aboutme'>
                <h1>¡Hola! Soy Alejandro Prados Desarrollador Full Stack en formación</h1>
                <p>Actualmente, estoy ampliando mis habilidades en el Bootcamp Full Stack, en The Bridge, donde estoy aprendiendo tecnologías como HTML5, CSS, JavaScript, Node.js, Express y React.</p>
                <p> También estoy adquiriendo experiencia con bases de datos como SQL y MongoDB, y herramientas como Visual Studio Code y Postman.</p>
                <p>¡Estoy muy emocionado por seguir aprendiendo y poniendo en práctica mis conocimientos en el desarrollo web!</p>
            </div>

            <div class="tech-container">
        <h2>
            🛠 Tecnologías y herramientas
        </h2>
        <div class="tech-icons">
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
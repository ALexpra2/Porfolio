//Este componente mostrará la página de currículum del portfolio en la que se mostrará la experiencia laboral y educativa del desarrollador.

// Usando map, recorremos los arrays y mostramos la información de cada proyecto, experiencia laboral y educación.

//import { studies, experiences } from '../data/Resume';
import './pages.css';

function Resume() {

    const descargarCV = () => {
        const link = document.createElement("a");
        link.href = "CV_Alejandro_Prados_Haro.pdf";
        link.download = "CV_Alejandro_Prados_Haro.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <h1>Currículum Vitae</h1>

            <div className="divStudies">
                <h2>Formación Académica</h2>
                <ul>
                    <li>Bootcamp Full Stack Developer – The Bridge (octubre 2024 – abril 2025)</li>
                    <li>Diplomado en Ciencias Empresariales - Universidad de Granada (2015)</li>
                    <li>Técnico Deportivo de Media Montaña Nivel 1 (2014)</li>
                    <li>Grado Elemental de Música (Oboe) - Conservatorio Ángel Barrios de Granada</li>
                </ul>
            </div>

            <div className="divExperience">
                <h2>Experiencia Profesional</h2>
                <ul>
                    <li>Operador de digitalización - Scanea2 Digitalización de documentos SL (2009, 2015-2024)</li>
                    <li>Monitor de ocio y tiempo libre - Multiocio y Gestión SL (2009-2015)</li>
                    <li>Profesor de Lenguaje Musical y Oboe - Escuela de Música Felipe Moreno (2004-2014)</li>
                </ul>
            </div>

            <div className="divProjectsCurr">
    <h2>Habilidades y Tecnologías</h2>
    <ul>
        <li><strong>Lenguajes:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Frontend:</strong> React, TailwindCSS</li>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Bases de Datos:</strong> MySQL, MongoDB</li>
        <li><strong>Herramientas:</strong> Git, GitHub, Postman, Swagger, Slack, Firebase</li>
        <li><strong>Testing:</strong> Jest</li>
       
    </ul>
</div>




            <div>
                <button onClick={descargarCV} className="download-btn">
                    Descargar CV
                </button>
            </div>
        </>
    );
};

export default Resume;

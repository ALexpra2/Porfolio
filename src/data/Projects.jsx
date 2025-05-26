import projectbreak2 from '../img/projectbreak2.png';
import dashboard from '../img/dashboard.png';
import andandoVoy from '../img/andandoVoy.jpg';

const projects = [
  {
    name: 'Web de Rutas de Montaña',
    image: andandoVoy,
    description: 'Frontend en React y backend en Express. Visualización de rutas con Leaflet, acceso de administrador mediante JWT, blog, marketplace y gestión de guías. Autenticación con Firebase y rutas por usuario.',
    technologies: 'React, Node.js, Express, Firebase, MongoDB, JWT, Leaflet',
    url: 'https://andando-voy-front-git-main-alexpra2s-projects.vercel.app/',
    github: 'https://github.com/ALexpra2/Andando-Voy-Front'
  },
  {
    name: 'Tienda Online de Ropa',
    image: projectbreak2,
    description:
      'Proyecto de e-commerce con autenticación mediante Firebase y backend Node.js. Documentado con Swagger y testeado con Jest. Incluye búsqueda por categorías y gestión de productos.',
    technologies: 'Node.js, Express, Firebase, Swagger, Jest',
    url: 'https://project-break-2-hvfa.onrender.com',
    github: 'https://github.com/ALexpra2/Project-Break-2'
  },
  {
    name: 'Dashboard Personal',
    image: dashboard,
    description: 'Aplicación web con generador de contraseñas, reloj en tiempo real, almacenamiento de URLs favoritas y consulta del clima con API externa.',
    technologies: 'HTML, CSS, JavaScript',
    url: 'https://alexpra2.github.io/dashboard/',
    github: 'https://github.com/ALexpra2/dashboard'
  }
];

export default projects;

  
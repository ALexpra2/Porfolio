import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="contact-section">
      <h1>Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
        {success && <p className="success">Mensaje enviado correctamente ✔️</p>}
      </form>
    </div>
  );
}

export default Contact;

import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div className='container-contact'>
      <div className="contact-form">
        <h2>Formulaire de contact</h2>
        <form>
          <label for="nom">Nom :</label>
          <input type="text" id="nom" name="nom"/>
          <label for="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom"/>
          <label for="email">Adresse e-mail :</label>
          <input type="email" id="email" name="email"/>
          <div className='button-form'>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
      <div className='container-google-maps'>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=297%20Chau.%20Fernand%20Forest,%2059200%20Tourcoing+(La%20Table%20de%20Chantal)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>
  );
}

export default Contact;
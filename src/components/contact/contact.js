import React from 'react';
import './contact.css'

function Contact() {
  return (
        <div class="container">
            <div class="form-wrapper">
                <h2>Contactez-nous</h2>
                <form>
                    <label for="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required/>
                    <label for="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" required/>
                    <label for="email">Adresse mail :</label>
                    <input type="email" id="email" name="email" required/>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
            <div class="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.743214173998!2d3.166131315912025!3d50.72778597951264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2f6279c90fecd%3A0x7381c085d8dfc0de!2sLa%20Table%20de%20Chantal!5e0!3m2!1sfr!2sfr!4v1659245038866!5m2!1sfr!2sfr"></iframe>
                <div class="address">
                    <p>La Table de Chantal</p>
                    <p>15 Rue du Pont de Neuville</p>
                    <p>59200 Tourcoing</p>
                </div>
            </div>
        </div>
    
  );
}

export default Contact;
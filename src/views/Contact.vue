<template>
    <div class="content">
        <div class="about">
        <h1>A propos de moi</h1>
        <p>Isaac Batchi, jeune Parisien de 23 ans passionné par le développement web, <br>
           je souhaite me professionnaliser en tant que  <strong>développeur front-end</strong>.<br>
           Je propose mes services en freelance, mais je suis également ouvert à une opportunité en entreprise pour approfondir mes compétences et mon expérience. <br>
           Vous Pouvez me laisser un mail à <a href="mailto:isaakibat@gmail.com">isaakibat@gmail.com</a> ou sur WhatsApp au 07.81.20.83.25
        </p>
    </div>
    <div class="documents">

    <div class="contact">
        <H2>Me contacter</H2>
        <img src="../assets/image/CV Isaac alternance_resize.jpg" alt="Cv alternance dev"><br>
        <a href="../assets/pdf/CV Isaac alternance.pdf" download >Télécharger</a>
    </div>

    <div class="form">
  <form action="" method="post">
    <ul class="form-list">
      <li>
        <label>Civilité</label>
        
          <div class="radio-option">
            <input type="radio" id="civilite-monsieur" name="civilite" value="monsieur" checked>
            <label for="civilite-monsieur">Monsieur</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="civilite-madame" name="civilite" value="madame">
            <label for="civilite-madame">Madame</label>
          </div>
          
        
      </li>

      <!-- Champs existants -->
      <li>
        <label for="nom">Nom</label>
        <input id="nom" type="text" name="user_name" placeholder="Votre nom">
      </li>
      <li>
        <label for="mail">Email</label>
        <input id="mail" type="email" name="user_email" placeholder="Votre email">
      </li>
      <li>
        <label for="tel">Téléphone</label>
        <input id="tel" type="tel" name="user_tel" placeholder="Votre numéro de téléphone">
      </li>
      <li>
        <label for="msg">Message</label>
        <textarea id="msg" name="user_msg" placeholder="Votre message"></textarea>
      </li>
      <li class="button-item">
        <button type="submit">Envoyer le message</button>
      </li>
    </ul>
  </form>
</div>
    </div>
    </div>
    

</template>

<script>
export default {
    name: 'Contact'
}</script>

<style lang="css" scoped>
   .content{
    
    padding: 30px;
    display: block;
    text-align: left;
    justify-content: center;
    
   }
   .about{
    margin-bottom: 30px
   }

   h1{
    margin-bottom: 20px;
    font-family:'Poppins';
    font-weight: 200;
    font-size: 50px

   }
   p{
    font-family: 'Poppins'; 
}

h2{
    font-family: 'Poppins';
    font-weight: 200;
    margin-bottom: 20px;
    font-size: 50px
}

.about a{
    
    color:black
}
.documents{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    
}

.contact a{

 font-family: 'Poppins';
 color:black;
 font-size: 20px;
}

.contact img{
    
    width: 100%;;
    max-width: 400px
}

.form{
list-style: none;
font-family: 'Poppins';
height: 40vh;
width: 50%;


}

.form-list{
    list-style: none;
    height: 45px;
    display: flex;
    flex-direction: column;
    gap: 15px
}

.form-list input, textarea {
    font-family: 'Poppins';
    height:30px;
    padding-left: 3px;
}

.form-list li{
    display:flex;
    flex-direction:column;
    width: 45%
}

.form-list li textarea{
    height:30vh;
    width: 30vw

}

.form-list li button{
    padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-family: 'Poppins';


}

.form-list li button:hover{
    background-color: black;
}
.radio-option{
    display:flex;
    flex-direction:row;
    gap: 6px;
    align-items:center
}

</style>
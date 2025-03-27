<template>
    <div class="container">
      <div>
        <h1>Mes projets</h1>
      </div>
      <div class="swiper-container">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :navigation="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="project in projects" :key="project.id" class="slide">
            <div class="slide-content">
              <h3>{{ project.nom }}</h3>
              <p>{{ project.description }}</p>
              <p><strong>Technologies :</strong> {{ project.techno }}</p>
              <a :href="project.link" target="_blank" class="project-link">Voir le projet</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

export default {
name : 'ProjetWeb',
components: {
    Swiper,
    SwiperSlide
},
setup(){
    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        modules: [Pagination, Navigation],
        onSwiper,
        onSlideChange,
    }
},
data(){
    return {
        projects: [
            {
                id: 1,
                nom: 'WeWantAll',
                description: "Création d'un site vitrine pour une marque de vetements",
                techno: "Symfony, CSS, HTML, Twig, SQL, UIkit",
                link: "https://github.com/BakiBacci/wewantall"
            },
            {
                id: 2,
                nom: 'Portfolio de Julio',
                description: "Création d'un portfolio pour un ami artiste",
                techno: "Framework Vue.js ",
                link: "https://github.com/BakiBacci"
            },
            {
                id: 3,
                nom: 'lumi-design',
                description: "Création d'un site vitrine pour un marque de luminaires",
                techno: "Framework Symfony",
                link: "https://github.com/BakiBacci/lumi_design"
            }

        ],
        options: {
            autoplay: false,
            loop: true
        }
        

    }
}

}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.swiper-container {
  width: 100%;
  height: 60vh ;
  margin-top: 30px;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px
}

.slide-content {
  background-color: white;
  border-radius: 8px;
  padding: 40px;
 
  width: 90%;
  text-align: center;
  
}
.slide-content h3,p, a{
    font-family: 'Poppins';
    
}

/* Styles pour les flèches de navigation */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: black;
}


/* Styles pour la pagination */
:deep(.swiper-pagination-bullet) {
  background: rgb(140, 17, 17); /* Points noirs */
  opacity: 0.5;
  width: 12px;
  height: 12px;
  display: none
 
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

.project-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.project-link:hover {
  background-color: black;
}

h1{
    font-family: 'Poppins' ;
    font-weight: 200;
    

}


</style>
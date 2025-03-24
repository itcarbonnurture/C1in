<template>
   <div class="custom-container">
    <section id="hero">
      <!-- Банер  -->
      <div class="desktop-hero">
        <img src="/assets/images/baner-home.jpg" alt="Hero Image" class="hero-image">
        <div class="banner-content">
          <h1 class="banner-title">
            Saving resources for you <br />
            and the future of the planet
          </h1>
          <p class="banner-subtitle">
            C1iN: greener future on the intersection of nature and science
          </p>
          <NuxtLink to="/product" class="btn banner-btn">Try C1iN Enhancer</NuxtLink>
        </div>
      </div>
    </section>
<!-- Банер  -->

<!-- Карусель -->
<div class="conainer1">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/images/1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/assets/images/2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/assets/images/3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<!-- Карусель -->




  </div>
</template>

<script setup>
import { onMounted } from "vue";

const initializeCarousels = () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    new bootstrap.Carousel(carousel, {
      interval: 3000, // Интервал между слайдами
      ride: "carousel", // Автоматический запуск
    });
  });
};

onMounted(() => {
  initializeCarousels();
});
</script>


<style scoped>

/* Основной контейнер баннера */
.custom-container {
  width: 100%;
  max-width: 2000px; /* Максимальная ширина контейнера */
  margin: 0 auto; /* Выравнивание по центру */
 /* Внутренние отступы по бокам */
}

#hero {
  position: relative;
  overflow: hidden;
}

.hero-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.banner-content {
  position: absolute;
  top: 10%; /* Отступ сверху */
  left: 5%; /* Отступ от левого края */
  text-align: left; /* Выравнивание по левому краю */
  color: rgb(0, 0, 0);
  width: 90%; /* Ширина ограничена 90% для лучшего отображения на маленьких экранах */
  max-width: 1200px; /* Максимальная ширина контента */
}

.banner-title {
  font-size: 55px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 15px;
}

.banner-subtitle {
  font-size: 25px;
  margin-bottom: 30px;
  font-weight: 700;
}

.banner-btn {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;
}

.banner-btn:hover {
  background-color: #333;
}
/* Основной контейнер баннера */
/* Карусель */
.conainer1 {
  max-width: 1700px;
  margin: 0 auto;
}







/* Карусель */


/* Мобильная версия */
@media (max-width: 768px) {
  .banner-content {
    left: 5%;
    width: 90%;
  }

  .banner-title {
    font-size: 24px;
  }

  .banner-subtitle {
    font-size: 14px;
  }

  .banner-btn {
    font-size: 12px;
    padding: 10px 20px;
  }
}
</style>

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
<h2 class="text-center">var 1</h2>
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



<h2 class="text-center">var 2</h2>
<!-- Карусель 2 -->
<div class="custom-carousel-container">
  <!-- Основная карусель -->
  <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/assets/images/1.jpg" class="d-block w-100 custom-carousel-img" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/assets/images/2.jpg" class="d-block w-100 custom-carousel-img" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/assets/images/3.jpg" class="d-block w-100 custom-carousel-img" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- Галерея миниатюр -->
  <div class="custom-thumbnail-gallery mt-4">
    <div class="row">
      <div class="col-4">
        <img src="/assets/images/1.jpg" class="img-thumbnail custom-gallery-img" data-bs-target="#customCarousel" data-bs-slide-to="0" alt="...">
      </div>
      <div class="col-4">
        <img src="/assets/images/2.jpg" class="img-thumbnail custom-gallery-img" data-bs-target="#customCarousel" data-bs-slide-to="1" alt="...">
      </div>
      <div class="col-4">
        <img src="/assets/images/3.jpg" class="img-thumbnail custom-gallery-img" data-bs-target="#customCarousel" data-bs-slide-to="2" alt="...">
      </div>
    </div>
  </div>
</div>

<!-- Карусель 2 -->






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
#carouselExampleIndicators {
  height: 80vh; /* Карусель занимает 70% высоты экрана */
}

.carousel-inner {
  height: 100%; /* Внутренний контейнер занимает всю высоту */
}


.carousel-item {
  height: 100%; /* Каждый элемент карусели занимает всю высоту */
 
  justify-content: center;
  align-items: center;
}



.carousel-item img {
  height: 100%;
  width: 100%;
  object-fit: cover; /* Чтобы изображение полностью помещалось без обрезки */
}






/* Карусель */
/* Карусель 2 */
/* Стили галереи миниатюр */
/* Контейнер карусели */
.custom-carousel-container {
  max-width: 1700px;
  margin: 0 auto;
}

/* Устанавливаем высоту карусели */
#customCarousel {
  height: 70vh; /* 70% высоты экрана */
}

/* Внутренний блок карусели */
.custom-carousel-container .carousel-inner {
  height: 100%;
}

/* Элементы карусели */
.custom-carousel-container .carousel-item {
  height: 100%;
}

/* Картинки внутри карусели */
.custom-carousel-img {
  height: 100%;
  width: 100%;
  object-fit: cover; /* Заполняет контейнер без искажений */
}

/* Галерея миниатюр */
.custom-thumbnail-gallery {
  text-align: center;
}

.custom-gallery-img {
  cursor: pointer;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.custom-gallery-img:hover {
  transform: scale(1.05);
}

/* Карусель 2*/






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

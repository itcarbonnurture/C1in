<template>
   <div class="custom-container">
    <section id="hero">
      <!-- Банер  -->
      <div class="desktop-hero">
        <img src="/assets/images/baner-home.jpg" alt="We harness the power of methane-consuming bacteria to produce
greener future and preserve resources for the future generation by
reducing water consumption
increasing drought resilience
restoring soils
decreasing greenhouse gas emissions." class="hero-image">
        <div class="banner-content">
          <h1 class="banner-title">
            Saving resources for you <br />
            and the future of the planet
          </h1>
          <p class="banner-subtitle">
            C1iN: solutions saving one thing that is most precious – our planet.
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
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button> <!-- Добавлен 4-й индикатор -->
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/assets/images/1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-start">
          <h5 class="general-text">Golf Courses</h5>
          <p class="minor-text">helps golf courses maintain pristine, championship-level turf while cutting down on water and fertilizer use.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/assets/images/2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-start">
          <h5 class="general-text">Agriculture</h5>
          <p class="minor-text">integrates seamlessly into farming practices, supporting crop growth in nutrient-limited and arid soils, decreasing water and fertilizer consumption.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/assets/images/3.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-start">
          <h5 class="general-text">Gardens</h5>
          <p class="minor-text">can be used in home gardens to promote stronger, more resilient plants. It is mixed into the soil or added to watering systems for optimal absorption.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/assets/images/4.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-start">
          <h5 class="general-text">Landscaping</h5>
          <p class="minor-text">Ideal for public parks, corporate landscapes, green roofs, and residential green spaces, enhancing plant vitality while reducing maintenance costs.</p>
        </div>
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
 <!-- банер 2  -->
<section id="hero">
      <div class="desktop-hero">
        <img src="/assets/images/baner-2.jpg" alt="Nature-inspired, science-grounded: Backed by 10 + Years  of Research.  C1iN is built on over a decade of research at San Diego State University, where scientists studied how desert soil microbes naturally support plant growth. Key findings include: Adding methane-consuming bacteria  enhances soil and plant health.  Plants in arid environments use methane  (CH₄) for water and energy recovery Methane consumption in dry soils 
increases when vegetation is present." class="hero-image">
      </div>
    </section>
 <!-- банер 2  -->
 <!-- банер 3  -->
 <section id="hero">
      <div class="desktop-hero">
        <img src="/assets/images/baner-3.jpg" alt="Common Landscape
Vegetation Vegetation with
ClIN Enhancer Application" class="hero-image"> </div>
    </section>
 <!-- банер 3  -->
 <!-- банер 4  -->
 <div class="container py-5">
    <div class="green-baner text-white text-center d-flex flex-column justify-content-center align-items-center rounded-4  px-md-5">
      <p class="lead custom-text mb-4">
        These discoveries led to the development of <strong class="fw-bold">C1iN</strong>, a biofertilizer that harnesses these naturally occurring
        microbes to improve drought resilience, boost soil fertility, and reduce water and fertilizer needs.
        Ongoing research continues to refine the <strong class="fw-bold">ideal microbial blend</strong> for maximum plant benefits.
        <strong class="fw-bold">The result? A groundbreaking, science-backed way to grow stronger, healthier plants—naturally!</strong>
      </p>
      <NuxtLink to="/product" class="btn banner-btn1 fw-bold  rounded-pill">
        Learn more about
      </NuxtLink>
    </div>
  </div>
 <!-- банер 4  -->
 <!-- банер 5  -->
  
 <section id="hero">
      <div class="desktop-hero">
        <img src="/assets/images/baner-5.jpg" alt="" class="hero-image"> </div>
    </section>
 <!-- банер 5  -->


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
/* Банер 4 */
.green-baner {
  background-color: #5a912d;
  color: #ffffff;
  min-height: 300px;
  padding: 2rem 1rem; /* Универсальные вертикальные и горизонтальные отступы */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
}

.custom-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.banner-btn1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: clamp(14px, 2vw, 18px);
  background-color: #000000;
  color: #fff;
  padding: 17px 55px;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s;
  max-width: 100%;
  white-space: nowrap;
}



/* Дополнительный отступ внутри контейнера на маленьких экранах */
@media (max-width: 768px) {
  .green-baner {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}



/* Банер 4 */
.general-text {
  font-size: clamp(22px, 5vw, 46px);
  font-weight: bold;
}

.minor-text {
  font-size: clamp(16px, 3.5vw, 30px);
  font-weight: bold;
}


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
  font-size: 18px;
  background-color: #5a912d;
  color: #fff;
  padding: 17px 55px;
  border-radius: 50px;
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

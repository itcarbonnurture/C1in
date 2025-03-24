<template>
   <div class="custom-container">
    <section id="hero">
      <!-- Десктопная версия (по умолчанию) -->
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




    
  </div>
</template>

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

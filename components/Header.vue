<template>
  <header class="py-3 bg-light">
    <nav class="container">
      <div class="d-flex align-items-center justify-content-between"> <!-- Выравнивание логотипа слева и меню по центру -->
        
        <!-- Логотип слева -->
        <div class="logo">
          <img src="/assets/images/logo.png" alt="Logo" class="logo-img" />
        </div>

        <!-- Навигационное меню -->
        <ul class="nav justify-content-center w-100"> <!-- Выравнивание списка по центру -->
          <li class="nav-item">
            <NuxtLink class="nav-link text-black" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-black" to="/about">About Us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-black" to="/science">Science</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-black" to="/applications">Applications & Benefits</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-black" to="/product">Product and Ordering</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-black" to="/faq">FAQ</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-black" to="/contact">Contact Us</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Скрипт для шапки (если нужно)
</script>

<style scoped>
/* Шапка */
header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

/* Логотип */
.logo img {
  width: auto; /* Ширина авто для пропорционального размера */
  height: 40px; /* Примерный размер логотипа */
  margin-right: 10px; /* Отступ от логотипа */
}

/* Навигационное меню */
.nav {
  list-style: none;
  padding-left: 0; /* Убираем отступы по умолчанию */
  margin-bottom: 0; /* Убираем нижний отступ */
}



.nav-item:last-child .nav-link {
  margin-right: 0;
}

.nav-item {
  display: inline-block;
  padding-right: 15px;  
}

.nav-item:first-child {
  padding-left: 0; /* Убираем отступ слева для первого элемента */
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif !important;  
}

h1, h2, h3 {
  font-family: 'Plus Jakarta Sans', sans-serif !important;  
  font-weight: 800 !important; /* ExtraBold */
}

.nav-link {
  font-family: 'Plus Jakarta Sans', sans-serif !important;  
  font-weight: 600 !important; /* SemiBold */
}

</style>

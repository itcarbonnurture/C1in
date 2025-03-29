<template>
  <footer class="py-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of the latest news and updates from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
              <button class="btn btn-light" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ftco-animate">
            <a href="#" title="Facebook">
              <i class="bi bi-facebook social-icon"></i>
            </a>
          </li>
          <li class="ftco-animate">
            <a href="#" title="LinkedIn">
              <i class="bi bi-linkedin social-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<style scoped>
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 4rem 0;
}

.footer .container {
  padding-left: 15px;
  padding-right: 15px;
}

.footer h5 {
  color: #ffffff;
}

.list-unstyled li a {
  color: #ffffff;
  text-decoration: none;
}

.list-unstyled li a:hover {
  text-decoration: underline;
}

.ftco-footer-social {
  list-style: none;
  display: flex;
}

.ftco-footer-social li {
  margin-right: 15px;
}

.social-icon {
  font-size: 2rem;
  color: #ffffff;
}

.social-icon:hover {
  color: #969696;
}

@media (max-width: 767px) {
  .footer .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>

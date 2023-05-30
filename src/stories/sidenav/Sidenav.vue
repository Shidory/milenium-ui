<template>
  <nav class="sidenav">
    <div class="sidenav-header">
      <p> Logo</p>
    </div>
    <div class="sidenav-content">
      <router-link to="/home">Home</router-link>
      <a href="#services">Link</a>
      <button class="dropdown-btn">Services
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-container">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</template>

<script>
import './sidenav.scss';
import { onMounted } from 'vue';

export default {
name: 'MuiSidenav',


emits: ['click'],

setup({ emit }) {
  let dropdown = document.getElementsByClassName("dropdown-btn");


  onMounted(() => {
    let i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  })

  return {
    dropdown,

    onClick() {
      emit('click');
    }
  }
},
};
</script>

<template>
  <div class="sidenav">
    <router-link to="/">About</router-link>
    <a href="#services">Services</a>
    <button class="dropdown-btn">The first
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
    <button class="dropdown-btn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <a href="#contact">Search</a>
  </div>
  <!-- <container class="container"  style="height: 100%; padding: 20px; overflow-y: auto; background-color: blanchedalmond;">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet rerum quisquam consequatur voluptatum delectus alias accusamus repellendus, praesentium, recusandae voluptas quasi accusantium dolorum minima doloribus tempora. Consequuntur, ipsa eius?
    Ut, nisi consequuntur voluptates voluptate laudantium in animi possimus amet dicta rem blanditiis quas, incidunt, totam numquam commodi aliquam eaque praesentium sequi. Expedita nesciunt totam nisi incidunt, architecto velit odit.
    Illum quibusdam totam magni necessitatibus aliquid reprehenderit iste, est inventore, odio aliquam in eius officiis maxime facilis minima magnam accusantium. Deserunt consequuntur dolor ex esse ratione nihil? Voluptas, repellendus cum!
    Excepturi reprehenderit asperiores amet aut animi non molestias veritatis rerum libero blanditiis tenetur aliquid porro qui, ducimus eum alias debitis incidunt, dolores nesciunt laborum accusantium quod doloribus totam repellat? Aperiam!
    Molestias, sapiente officia? Aspernatur magnam soluta dolorum, qui corporis officia maxime, fugit possimus impedit in porro explicabo doloremque quos et nobis cupiditate provident nostrum ipsa labore voluptate dignissimos voluptas. Animi.
  </container> -->
</template>
  
<script>
import './table.scss';
import { onMounted } from 'vue';

export default {
name: 'MuiSidebar',


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
  
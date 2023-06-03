<template>
<!--  <table>-->
<!--    <thead>-->
<!--      <tr>-->
<!--        <th>Company</th>-->
<!--        <th>Contact</th>-->
<!--        <th>Country</th>-->
<!--        <th></th>-->
<!--      </tr>-->
<!--    </thead>-->
<!--    <tbody>-->
<!--      <tr class="clickable-row mui-a-tableCell">-->
<!--        <td>Alfreds Futterkiste</td>-->
<!--        <td>Maria Anders</td>-->
<!--        <td>Germany</td>-->
<!--        <td>button</td>-->
<!--      </tr>-->
<!--      <tr class="clickable-row mui-a-tableCell">-->
<!--        <td>Centro comercial Moctezuma</td>-->
<!--        <td>Francisco Chang</td>-->
<!--        <td>Mexico</td>-->
<!--        <td>button</td>-->
<!--      </tr>-->
<!--    </tbody>-->
<!--  </table>-->
  <tbody class="mui-o-tableBody">
    <tr class="mui-m-tableRow">
      <td class="mui-a-tableCell">Prénom</td>
      <td class="mui-a-tableCell">Nom</td>
      <td class="mui-a-tableCell">Age</td>
      <td class="mui-a-tableCell">Email</td>
    </tr>
    <tr class="mui-m-tableRow">
      <td class="mui-a-tableCell">Prénom</td>
      <td class="mui-a-tableCell">Nom</td>
      <td class="mui-a-tableCell">Age</td>
      <td class="mui-a-tableCell">Email</td>
    </tr>
    <tr class="mui-m-tableRow -selected">
      <td class="mui-a-tableCell -input">Prénom</td>
      <td class="mui-a-tableCell">Prénom</td>
      <td class="mui-a-tableCell">Nom</td>
      <td class="mui-a-tableCell">Age</td>
      <td class="mui-a-tableCell">Email</td>
    </tr>
  </tbody>
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

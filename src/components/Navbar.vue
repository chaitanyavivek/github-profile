<template>
<div>
    <div class="header">
        <div class="header_left">
            <img src="@/assets/github logo.jpeg" @click="self" class="logo" style="height: 50px; ">
        </div>
        <div class="header_middle">
             <div class="header_input" v-if="isHome">
                   <input type="text" v-model="search" placeholder="Search or jump to..." @input="userDetails" >
             <span class="material-icons-outlined">search</span>
             </div>
         </div>
         <div class="header_right">
             <div class="header_option"  :class="{'active': isHome }">
    <router-link :to="{ path: '/'}" ><span class="material-icons-outlined"> home</span></router-link>
                   <h5><b>Home</b></h5>
             </div>
             <div class="header_option" :class="{ 'active': isProfile}"   v-if="!isHome">
  <router-link :to="{ path: `/profile/${name}`}" ><span class="material-icons-outlined">person</span></router-link>
          <h5><b>Profile</b></h5>
             </div>
      </div>
     </div>
</div>
</template>
<script src = './js/Navbar.js'>
</script>
<style scoped>
     .header{
         padding: 15px 15px;
         border-radius: 10px;
         display: flex;
         justify-content: space-between;
         position: sticky;
         top: 0;
         /* width:100%; */
         background: grey;
         z-index: 100;
         /* margin-top: -60px; */
     }
     .header_left{
         display: flex;
         align-items: center;
         justify-content: space-evenly;
         margin-left: 20px;
         font-size: 1.5em;
         padding-top:15px;

     }
     .header_input{
         display: flex;
         align-items: center;
         background-color:rgb(236, 228, 228);
         padding: 10px;
         margin-left: 10px;
         height: 50px;
         width: 250px;
         margin-top: 5px;
         /* border: red; */

     }
     .header_input input {
         border: green ;
         background-color: rgb(236, 228, 228);
          /* outline-width: 0; */
     }
      .header_right{
         display: flex;
         padding: 0 -500px;
         cursor: pointer;
         align-items: center;
         justify-content: center;
         margin-right: 50px;
     }
     .header_option .material-icons-outlined {
         font-size: xx-large;
         color: #000;
        text-decoration: none;
     }
     .header_option{
         display: flex;
         align-items: center;
         padding: 0 30px;
         cursor: pointer;
     }
     .header_input .text{
       padding: 6px;
      font-size: 17px;
       margin-left:300px;
       width: 400px;
     }
     .header_option:hover {
         background-color:white;
         border-radius: 10px;
         align-items: center;
         padding: 0 30px;
         border-bottom: none;
     }
     .header_middle
     {
       background: none;
     }
     h5{
         color: black;
         padding-top: 10px;
     }
     .material-icons-outlined{
       cursor:pointer;
     }
     .active{
  background-color:white;
   }
   .logo {
    margin-top: -10px;
}
</style>

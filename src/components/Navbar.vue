<template>
<div>
    <div class="header">
        <div class="header_left">
            <p><b>GitHub</b></p>
        </div>
        <div class="header_middle">
             <div class="header_input">
       <span class="material-icons-outlined">search</span>
             <input type="text" v-model="search" placeholder="Search or jump to..." @input="userDetails" >
             </div>
         </div>
         <div class="header_right">
             <div class="header_option">
    <router-link :to="{ path: '/'}"><span class="material-icons-outlined"> home</span></router-link>
                    <h5><b>Home</b></h5>
             </div>
            <div class="header_option">
     <span class="material-icons-outlined">person</span>
     <router-link :to="{ path: '/profile/chaitanyavivek'}" v-if="isHome"></router-link>
          <h5><b>Profile</b></h5>
             </div>
      </div>
     </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Navbar',
  data () {
    return {
      users: [],
      search: ''
    }
  },
  methods: {
    async userDetails (event) {
      this.serach = event.target.value
      console.log(this.serach)
      await axios.get(`https://api.github.com/search/users?q=${this.search}`).then((response) => {
        this.users = response.data.items
        console.log(this.users)
        this.$store.state.users = this.users
      })
    }
  },
  move () {
    this.$router.push('/')
  },
  computed: {
    isHome () {
      return this.$route.name === 'Users'
    }
  }
}
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

     }
     .header_input input {
         border: none ;
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
     }
     .header_option{
         display: flex;
         align-items: center;
         padding: 0 30px;
         cursor: pointer;
     }
     .header_option:hover {
         background-color: rgb(236, 228, 228);
         border-radius: 10px;
         align-items: center;
         padding: 0 30px;
         border-bottom: none;
     }
     h5{
         color: black;
         padding-top: 10px;
     }
</style>

<template>
    <div >
        <User v-for='user in UserList' :key="user.id" :user="user"/>
     </div>
     <!-- <div class="text"><h1><b>---WELCOME TO GITHUB---</b></h1></div> -->
</template>
<script>
import User from '@/components/User'
export default{
  components: {
    User
  },
  data () {
    return {
      users1: []

    }
  },

  // mounted () {
  //   this.$store.dispatch('getUsers')
  // },
  computed: {
    UserList () {
      console.log('I am in ')
      return this.$store.state.users
    }
  }

}
</script>
<style scoped>
.text h1{
  text-align: center;
  /* background-color: grey; */
  margin-top:250px;
  margin-left: -100px;

}

</style>

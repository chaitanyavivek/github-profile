<template>
<div class="totalusers" v-if="this.UserList.length>0">
        <User v-for='user in UserList' :key="user.id" :user="user"/>
     </div>
     <div v-else style="display:flex; flex-direction:column; justify-content:center;">
     <h1>---WELCOME TO GITHUB---</h1>
     <img src="@/assets/github.jpeg" style="height: 600px; ">
</div>
</template>
<script src='./js/UserList.js'>
</script>
<style scoped>
h1{
  text-align: center;
  /* background-color: grey; */
  margin-top:80px;
  margin-left: -100px;

}

</style>

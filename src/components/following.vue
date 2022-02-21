<template>
    <div>
        <!-- <div class="allusers"> -->
            <User v-for='user in followingFunction' :key="user.login" :user="user"/>
            </div>
            <!-- </div> -->
</template>
<script src='./js/following.js'>
</script>
<style scoped>
/* .allusers{
  display: flex;
  flex-direction: column;
  align-items:center
} */
</style>

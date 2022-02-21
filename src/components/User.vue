<template>
    <div class="userdetail">
        <div class="set">
        <div><img :src="user.avatar_url" class="image"></div>
        <div class="alignment">
            <p>LoginId:{{user.login}}</p>
        </div>
        <div class="last"><button class="buttonlast" @click="details(user.login)">Details </button></div>
    </div>
    </div>
</template>
<script src='./js/User.js'>
</script>
<style scoped>
.userdetail{
    /* width:100%; */
    display:block;
    margin-top:80px;
    margin-left: 80px;
}
.userdetail .set{
    max-width: 50%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;
}
.userdetail .image{
    height: 200px;
}
.userdetail .alignment{
  align-self: center;
  font-size: 30px;
  font-family:'Times New Roman', Times, serif
}
.userdetail .buttonlast{
  margin-top:70px;
  padding:10px;
  background:grey;
  color: white;
  border-radius: 15px;
}
</style>

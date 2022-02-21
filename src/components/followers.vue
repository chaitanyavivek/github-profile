<template>
    <div>
    <div>
        <User v-for='user in followersFunction' :key="user.login" :user="user"/>
    </div>
    </div>
</template>
<script src = './js/followers.js'>
</script>

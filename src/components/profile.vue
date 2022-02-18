<template>
    <div>
    <div class="profile">
        <img :src="profile.avatar_url"/>
        <div class="details">
            <div class="text">
                <div class="heads">
                    <p><i>Name</i></p>
                    <p><i>Id</i></p>
                    <p><i>Bio</i></p>
                    <p><i>Location</i></p>
                    <p><i>Repo count</i></p>
                </div>
                <div class="heads">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </div>
                <div class="tails">
                    <p><i>{{profile.login}}</i></p>
                    <p><i>{{profile.id}}</i></p>
                    <p><i>{{profile.bio}}</i></p>
                    <p><i>{{profile.location}}</i></p>
                    <p><i>{{profile.public_repos}}</i></p>
                </div>
            </div>
                <div class="follow">
                    <div class="followers">
                        <p><i>{{profile.followers}}</i></p>
                    <router-link :to="{ path: `/${profile.login}/followers`}" v-if="profile.followers!=0"><button>FOLLOWERS</button></router-link></div>
                    <div class="following">
                        <p>{{profile.following}}</p>
                    <router-link :to="{ path: `/${profile.login}/following`}" v-if="profile.following!=0"><button>FOLLOWING</button></router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
  components: {
  },
  mounted () {
    this.$store.dispatch('getProfile', this.$route.params.name)
  },
  computed: {
    profile () {
      return this.$store.state.profile
    }
  }
}
</script>
<style scoped>
.profile{
    width:100%;
    display:flex;
    margin-top:80px;
    margin-left: 80px;
}
.profile img{
    height: 300px;
    border-radius: 50px;
}
.profile .details{
     margin-top: 10px;
     padding: 20px 100px ;
}

.profile .details .text{
  display: flex;
  justify-content: space-evenly;
}
.profile .details .text .heads{
  margin-right: 60px;
  margin-left: -30px;
  font-size: 150%;

}
.profile .details .text .tails{
  font-size: 150%;

}
.follow{
    align-items: center;
    display: flex;
    margin-left: 80px;
    margin-top: 30px;
}
.follow .followers{
    margin-right: 90px;
}
.follow button{
    width: 100%;
    border-radius: 10px;
    padding-top: 5px;
    background-color: grey;
}

</style>

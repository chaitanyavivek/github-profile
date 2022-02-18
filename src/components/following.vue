<template>
    <div>
        <div>
            <User v-for='user in followingFunction' :key="user.login" :user="user"/>
            </div>
            </div>
</template>
<script>
import User from '@/components/User'
import {mapGetters, mapActions} from 'Vuex'
export default{
  components: {
    User
  },
  mounted () {
    // this.$store.dispatch('getFollowing', this.$route.params.name)
    this.getFollowing(this.$route.params.name)
  },
  computed: {
    // following () {
    ...mapGetters(['following']),
    //   return this.$store.state.following
    followingFunction () {
      return this.following
    }
  },
  methods: {
    ...mapActions(['getFollowing'])
  }
}
</script>

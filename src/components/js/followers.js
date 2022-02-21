import User from '@/components/User'
import {mapGetters, mapActions} from 'Vuex'
export default{
  components: {
    User
  },
  mounted () {
    // this.$store.dispatch('getFollowers', this.$route.params.name)
    this.getFollowers(this.$route.params.name)
  },
  computed: {
    // followers () {
    ...mapGetters(['followers']),
    //   return this.$store.state.followers
    followersFunction () {
      return this.followers
    }
  },
  methods: {
    ...mapActions(['getFollowers'])
  }
}

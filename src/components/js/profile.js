import {mapGetters, mapActions} from 'Vuex'
export default{
  mounted () {
    // this.$store.dispatch('getProfile', this.$route.params.name)
    this.getProfile(this.$route.params.name)
  },
  computed: {
    ...mapGetters({profile: 'profile'}),
    // profile () {
    followingNumber (no) {
      if (no === 0) { return true } else { return false }
    },
    followersNumber (no) {
      if (no === 0) { return true } else { return false }
    }
  },
  methods: {
    ...mapActions({getProfile: 'getProfile'})
  }
}

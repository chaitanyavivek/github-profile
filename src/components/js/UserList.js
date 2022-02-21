import User from '@/components/User'
export default{
  components: {
    User
  },
  // mounted () {
  //   this.$store.dispatch('getUsers')
  // },
  computed: {
    UserList () {
      return this.$store.state.users
    }
  }

}

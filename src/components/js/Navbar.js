import axios from 'axios'
export default {
  name: 'Navbar',
  data () {
    return {
      users: [],
      search: '',
      name: localStorage.getItem('name')
    }
  },
  methods: {
    async userDetails () {
      // this.search = event.target.value
      // console.log(this.serach)
      await axios.get(`https://api.github.com/search/users?q=${this.search}`).then((response) => {
        this.users = response.data.items
        console.log(this.users)
        this.$store.state.users = this.users
      })
    },
    // move () {
    //   this.$router.push('/')
    // },
    self () {
      this.$router.push('/profile/chaitanyavivek')
    }
  },
  computed: {
    isHome () {
      return this.$route.name === 'UserList'
    },
    isProfile () {
      return this.$route.name === 'profile'
    }
  }
}

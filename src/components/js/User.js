export default {
  name: 'User',
  props: ['user'],
  methods: {
    details (name) {
      this.$router.push(`/profile/${name}`)
      localStorage.setItem('name', name) // d
    }
  }
}

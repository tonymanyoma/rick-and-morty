export const misMixins = {

  data () {
    return {
    }
  },

  methods: {

    loadingOpen () {
      this.$vs.loading({
        color: '#34c759',
        type: 'corners'
      })
    },

    loadingClose () {
      this.$vs.loading.close()
    }

  }
}

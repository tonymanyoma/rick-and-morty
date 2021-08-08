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
    },

    addCharacterFavorite () {
      this.$vs.notify({
        text: 'Personaje añadido a favoritos',
        color: 'success',
        position: 'top-center',
        icon: 'done'
      })
    },

    deleteCharacterFavorite () {
      this.$vs.notify({
        text: 'Personaje retirado den favoritos',
        color: 'warning',
        position: 'top-center',
        icon: 'done'
      })
    }

  }
}

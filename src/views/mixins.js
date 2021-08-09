export const misMixins = {

  data () {
    return {
    }
  },

  methods: {
    // metodo que lanza un spinner
    loadingOpen () {
      this.$vs.loading({
        color: '#34c759',
        type: 'corners'
      })
    },
    // metodo que oculta un spinner
    loadingClose () {
      this.$vs.loading.close()
    },

    // allerta success
    addCharacterFavorite () {
      this.$vs.notify({
        text: 'Personaje añadido a favoritos',
        color: 'success',
        position: 'top-center',
        icon: 'done'
      })
    },
    // alerta warning
    deleteCharacterFavorite () {
      this.$vs.notify({
        text: 'Personaje retirado den favoritos',
        color: 'warning',
        position: 'top-center',
        icon: 'done'
      })
    },
    // alerta cuando se copia al porta papeles
    copiedCharacter () {
      this.$vs.notify({
        text: 'Url añadida al porta papeles',
        color: 'success',
        position: 'top-center',
        icon: 'done'
      })
    }

  }
}

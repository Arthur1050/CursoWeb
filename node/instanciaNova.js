// Uma factory retorna um(a) novo(a) objeto/instancia
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
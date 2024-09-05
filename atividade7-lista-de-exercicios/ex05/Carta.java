class Carta {
    String valor;
    Carta anterior;
    Carta proximo;

    public Carta(String valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }

    @Override
    public String toString() {
        return valor;
    }
}
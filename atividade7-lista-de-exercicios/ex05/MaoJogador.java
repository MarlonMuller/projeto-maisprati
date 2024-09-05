class MaoJogador {
  private Carta inicio;
  private Carta fim;

  public MaoJogador() {
      this.inicio = null;
      this.fim = null;
  }

  public void adicionarCarta(String valor) {
      Carta novaCarta = new Carta(valor);
      if (inicio == null) {
          inicio = fim = novaCarta;
      } else {
          fim.proximo = novaCarta;
          novaCarta.anterior = fim;
          fim = novaCarta;
      }
  }

  public void removerCarta(String valor) {
      Carta atual = inicio;

      while (atual != null && !atual.valor.equals(valor)) {
          atual = atual.proximo;
      }

      if (atual != null) {
          if (atual == inicio) {
              inicio = atual.proximo;
              if (inicio != null) {
                  inicio.anterior = null;
              }
          } else if (atual == fim) {
              fim = atual.anterior;
              if (fim != null) {
                  fim.proximo = null;
              }
          } else {
              atual.anterior.proximo = atual.proximo;
              atual.proximo.anterior = atual.anterior;
          }
      }
  }

  public void reorganizarCarta(String valor, int novaPosicao) {
      Carta atual = inicio;
      int posicaoAtual = 0;

      // Encontrar a carta
      while (atual != null && !atual.valor.equals(valor)) {
          atual = atual.proximo;
          posicaoAtual++;
      }

      if (atual == null || novaPosicao < 0) {
          return;
      }

      removerCarta(valor);

      Carta novaPos = inicio;
      int pos = 0;

      while (novaPos != null && pos < novaPosicao) {
          novaPos = novaPos.proximo;
          pos++;
      }

      if (novaPos == null) {
          adicionarCarta(valor);
      } else {
          Carta novaCarta = new Carta(valor);
          novaCarta.proximo = novaPos;
          novaCarta.anterior = novaPos.anterior;

          if (novaPos.anterior != null) {
              novaPos.anterior.proximo = novaCarta;
          } else {
              inicio = novaCarta;
          }

          novaPos.anterior = novaCarta;
      }
  }

  public void mostrarMao() {
      Carta atual = inicio;
      while (atual != null) {
          System.out.print(atual + " ");
          atual = atual.proximo;
      }
      System.out.println();
  }
}

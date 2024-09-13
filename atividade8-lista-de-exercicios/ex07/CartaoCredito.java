class CartaoCredito extends FormaPagamento {
  private String numeroCartao;
  private String validadeCartao;
  private String cvv;

  public CartaoCredito(String numeroCartao, String validadeCartao, String cvv) {
    this.numeroCartao = numeroCartao;
    this.validadeCartao = validadeCartao;
    this.cvv = cvv;
  }

  @Override
  public void processarPagamento(double valor) {
    if (validarPagamento()) {
      System.out.println("Pagamento de R$ " + valor + " no cartão de crédito.");
    } else {
      System.out.println("Falha ao processar pagamento.");
    }
  }

  @Override
  public boolean validarPagamento() {
    return numeroCartao.length() == 16 && cvv.length() == 3;
  }
}
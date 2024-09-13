public class Main {
  public static void main(String[] args) {
    FormaPagamento cartao = new CartaoCredito("1238495631589465", "12/25", "333");
    FormaPagamento boleto = new Boleto("12345");
    FormaPagamento pix = new Pix("1231231231");

      cartao.processarPagamento(250);
      boleto.processarPagamento(50);
      pix.processarPagamento(20);
  }


}
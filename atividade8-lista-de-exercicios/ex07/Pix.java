class Pix extends FormaPagamento {
  private String chavePix;

  public Pix(String chavePix){
    this.chavePix = chavePix;
  }
  
  @Override
    public void processarPagamento(double valor){
      if(validarPagamento()){
        System.out.println("Pagamento realizado no valor de R$ " + valor + " via Pix.");
      } else {
        System.out.println("Falha ao processar pagamento.");
      }
    }

    @Override
    public boolean validarPagamento(){
      return chavePix.length() == 10;
    }
}
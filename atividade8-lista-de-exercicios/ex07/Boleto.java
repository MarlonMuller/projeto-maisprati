class Boleto extends FormaPagamento {
  private String digitos;

  public Boleto(String digitos){
    this.digitos = digitos;
  }
  
  @Override
    public void processarPagamento(double valor){
      if(validarPagamento()){
        System.out.println("Pagamento no valor de R$ " + valor + " realizado via boleto.");
      } else {
        System.out.println("Falha ao processar pagamento.");
      }
    }

    @Override
    public boolean validarPagamento(){
      return digitos.length() == 5;
    }
}
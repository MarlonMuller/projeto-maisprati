public class SistemaRH {
  private FolhaPagamento folhaPagamento;
  public SistemaRH() {
    this.folhaPagamento = new FolhaPagamento();
  }

  public void promoverFuncionario(Funcionario funcionario, String novoCargo) {
    Funcionario promovido = null;
    switch (novoCargo.toLowerCase()){
      case "gerente":
        promovido = new Gerente(funcionario.getNome(), funcionario.getSalarioBase());
        break;
      case "desenvolvedor":
        promovido = new Desenvolvedor(funcionario.getNome(), funcionario.getSalarioBase());
        break;
      default:
        System.out.println("Cargo não reconhecido.");
        return;
    }
    folhaPagamento.adicionarFuncionario(promovido);
  }
  public FolhaPagamento getFolhaPagamento(){
    return folhaPagamento;
  }
}
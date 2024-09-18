import java.util.List;
import java.util.ArrayList;

public class FolhaPagamento {
  List<Funcionario> funcionarios;

  public FolhaPagamento() {
    this.funcionarios = new ArrayList<>();
  }

  public void adicionarFuncionario(Funcionario funcionario){
    funcionarios.add(funcionario);
  }
  public double calcularFolhaPagamento(){
    double total = 0;
    for(Funcionario f : funcionarios){
      total += f.calcularSalario() + f.calcularBonus();
    }
    return total;
  }

}
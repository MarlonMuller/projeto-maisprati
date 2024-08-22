package inheritanceActivity;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private List<Funcionario> funcionarios;

    public Empresa(){
        funcionarios = new ArrayList<>();
    }

    public void adicionarFuncionario(Funcionario funcionario){
        funcionarios.add(funcionario);
    }

    public double calcularFolhaDePagamento(){
        double folhaDePagamento = 0.0;
        for (Funcionario funcionario : funcionarios) {
            if (funcionario instanceof Desenvolvedor) {
                folhaDePagamento += 5000.0;
            } else if (funcionario instanceof Gerente) {
                folhaDePagamento += 7000.0;
            }
        }
        return folhaDePagamento;
    }

    public static void main(String[] args) {
        Empresa empresa = new Empresa();

        Desenvolvedor desenvolvedor1 = new Desenvolvedor();
        Gerente gerente1 = new Gerente();

        empresa.adicionarFuncionario(desenvolvedor1);
        empresa.adicionarFuncionario(gerente1);

        double totalFolha = empresa.calcularFolhaDePagamento();
        System.out.println("Total da folha de pagamento: R$ " + totalFolha);
    }
}

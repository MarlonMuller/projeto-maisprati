
public class Main {
  public static void main(String[] args) {

    Produto prod1 = new Produto("Camisa", 80.00, 100);
    Produto prod2 = new Produto("Iphone", 4500.00, 250);
    
    prod1.exibirProduto();
    prod2.exibirProduto();
  }
}
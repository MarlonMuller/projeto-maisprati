class Produto {
  private String nome;
  private double preco;
  private int qtdEstoque;

  public Produto(String nome, double preco, int qtdEstoque) {
    this.nome = nome;
    setPreco(preco);
    setQtdEstoque(qtdEstoque);
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public double getPreco() {
    return preco;
  }

  public void setPreco(double preco) {
    if (preco >= 0) {
      this.preco = preco;
    } else {
      System.out.println("O preço não pode ser negativo.");
    }
  }

  public int getQtdEstoque() {
    return qtdEstoque;
  }

  public void setQtdEstoque(int qtdEstoque) {
    if (qtdEstoque >= 0) {
      this.qtdEstoque = qtdEstoque;
    } else {
      System.out.println("A quantidade não pode ser negativa");
    }
  }

  public void exibirProduto() {
    System.out.println("Produto: " + nome);
    System.out.println("Preço: " + preco);
    System.out.println("Quantidade em estoque: " + qtdEstoque);
  }

}
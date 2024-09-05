class Processo {
  private String nome;
  private int id;

  public Processo(String nome, int id){
    this.nome = nome;
    this.id = id;
  }

  public String getNome(){
    return nome;
  }
  public int getId(){
    return id;
  }

  @Override
  public String toString(){
    return "Processo{id=" + id + ", nome='" + nome +"'}";
  }
  
}
public class Task{
  private String description;
  private boolean completed;
  private Task next;

  public Task(String description){
    this.description = description;
    this.completed = false;
    this.next = null;    
  }

  //Getter descrição da tarefa
  public String getDescription() {
    return description;
  }

  //Getter para status tarefa
  public boolean isCompleted(){
    return completed;
  }

  //Setter completed como concluída
  public void setCompleted(boolean completed){
    this.completed = completed;
  }

  //Getter do próximo nó
  public Task getNext(){
    return next;
  }

  //Setter definir próximo nó
  public void setNext(Task next){
    this.next = next;
  }
  
}
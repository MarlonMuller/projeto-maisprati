class TaskManager {
  private Task head;

  public TaskManager(){
    this.head = null;
  }

  // método adicionar tarefa no final da lista
  public void addTask(String description){
    Task newTask = new Task(description);
    if (head == null){
      head = newTask;
    } else {
      Task current = head;
      while(current.getNext() != null){
        current = current.getNext();
      }
      current.setNext(newTask);
    }
    System.out.println("Tarefa adicionada: " + description);
  }

  // método remover tarefa da lista
  public void removeTask(String description){
    if(head == null){
      System.out.println("A lista está vazia.");
      return;
    }
    if(head.getDescription().equals(description)){
      head = head.getNext();
      System.out.println("Tarefa removida: " + description);
      return;
    }
  Task current = head;
  while (current.getNext() !=null && !current.getNext().getDescription().equals(description)){
    current = current.getNext();
  }
    
  if(current.getNext() == null) {
    System.out.println("Tarefa não encontrada: " + description);
  } else {
    current.setNext(current.getNext().getNext());
    System.out.println("Tarefa removida: " + description);
  }
}

  // método marcar tarefa como concluída
  public void completeTask(String description){
    Task current = head;
    while(current != null){
      if(current.getDescription().equals(description)){
        current.setCompleted(true);
        System.out.println("Tarefa concluída: " + description);
        return;
      }
      current = current.getNext();
    }
    System.out.println("Tarefa não encontrada: " + description);
 }

  // método mostrar todas as tarefas da lista
  public void showTasks(){
    if(head == null){
      System.out.println("A lista está vazia.");
      return;
    }

    Task current = head;
    while (current != null) {
      String status = current.isCompleted() ? " (Concluída)" : "(Pendente)";
      System.out.println(current.getDescription() + status);
      current = current.getNext();
    }
  }







  
  
}
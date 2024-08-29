

public class Main {
  public static void main(String[] args) {
    
    TaskManager manager = new TaskManager();

    manager.addTask("Lavar louça");
    manager.addTask("Estudar JAVA");
    manager.addTask("Olhar vídeo SQL");

    System.out.println("\nPrimeiro status de tarefas: ");
    manager.showTasks();

    System.out.println("");
    manager.completeTask("Estudar JAVA");
    
    System.out.println("\nSegundo status de tarefas: ");
    manager.showTasks();
  }
}
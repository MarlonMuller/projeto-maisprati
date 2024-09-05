public class Main {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
      editor.addText("Olá, ");
      editor.addText("mundo!");
      System.out.println("Texto atual: " + editor.getText());

      editor.undo();
      System.out.println("Texto após undo: " + editor.getText());

      editor.undo();
      System.out.println("Texto após undo: " + editor.getText());
    }
}

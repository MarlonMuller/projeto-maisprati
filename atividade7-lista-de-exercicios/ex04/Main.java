class Main {
  public static void main(String [] args){
    TextEditor textEditor = new TextEditor();

    textEditor.insert("Marlon ");
    System.out.println(textEditor.getText());
    textEditor.insert("Iury ");
    System.out.println(textEditor.getText());
    textEditor.insert("Santos");
    System.out.println(textEditor.getText());

    textEditor.undo();
    System.out.println(textEditor.getText());

    textEditor.redo();
    System.out.println(textEditor.getText());
  }
}
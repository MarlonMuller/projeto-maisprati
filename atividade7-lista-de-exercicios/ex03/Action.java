public class Action {
  enum ActionType {
    ADD, REMOVE
  }

  private ActionType type;
  private String text;
  
  public Action(ActionType type, String text){
    this.type = type;
    this.text = text;
  }

  public ActionType getType(){
    return type;
  }

  public String getText(){
    return text;
  }
}
public class TextEditor {
    private StringBuilder text;
    private UndoManager undoManager;

    public TextEditor() {
        this.text = new StringBuilder();
        this.undoManager = new UndoManager();
    }

    public void addText(String newText) {
        text.append(newText);
        undoManager.addAction(new Action(Action.ActionType.ADD, newText));
    }

    public void removeText(int length) {
        if (length > text.length()) {
            length = text.length();
        }

        String removedText = text.substring(text.length() - length);
        text.delete(text.length() - length, text.length());
        undoManager.addAction(new Action(Action.ActionType.REMOVE, removedText));
    }

    public void undo() {
        Action lastAction = undoManager.undo();
        if (lastAction != null) {
            switch (lastAction.getType()) {
                case ADD:
                    text.delete(text.length() - lastAction.getText().length(), text.length());
                    break;
                case REMOVE:
                    text.append(lastAction.getText());
                    break;
            }
        }
    }

    public String getText() {
        return text.toString();
    }
}

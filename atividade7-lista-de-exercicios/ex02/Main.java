public class Main {
  public static void main(String[] args) {

    BrowserHistory history = new BrowserHistory(3);
    
    history.visit("www.google.com");
    history.visit("www.youtube.com");
    history.visit("www.github.com");
    history.visit("www.web.whatsapp.com");

    System.out.println("Histórico de navegação:");
    history.showHistory();

    
  }


}
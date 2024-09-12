public class Main {
  public static void main(String[] args) {

  IMeioTransporte[] meiosDeTransporte = new IMeioTransporte[3];

    meiosDeTransporte[0] = new Carro();
    meiosDeTransporte[1] = new Trem();
    meiosDeTransporte[2] = new Bicicleta();
    
    for(IMeioTransporte meio:meiosDeTransporte)
    {
      meio.acelerar();
      meio.frear();
    }
  
  }
}
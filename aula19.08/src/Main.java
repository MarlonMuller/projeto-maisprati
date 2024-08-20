import abstraction.Carro;

public class Main {
    public static void main(String[] args) {

        Carro carro1 = new Carro();

        carro1.modelo = "Uno";
        carro1.setAno(2014);


        System.out.println(carro1.modelo);
        System.out.println(carro1.getAno());
    }
}
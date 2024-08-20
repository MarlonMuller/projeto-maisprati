package abstraction;

public class Carro {

    public String modelo;
    int ano;
    protected String cor;


    public int getAno(){
        return this.ano;
    }

    public void setAno(int ano){
        this.ano = ano;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
}

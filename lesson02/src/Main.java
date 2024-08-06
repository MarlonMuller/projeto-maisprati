import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
    int[] vetorIniciado = {1, 2, 3, 4, 5};



        System.out.println("Vetor inicial: ");
        printArray(vetorIniciado);

        reverseArray(vetorIniciado);

        System.out.println("Vetor revertido: ");
        printArray(vetorIniciado);

        vetorIniciado = adicionarElemento(vetorIniciado, 2);
        System.out.println("Vetor com 2 adicionado: ");
        printArray(vetorIniciado);

        vetorIniciado = excluirUltimoElemento(vetorIniciado);
        System.out.println("Vetor excluído último elemento: ");
        printArray(vetorIniciado);



    }

    // Imprimir um array
    public static void printArray(int[] array) {
        for (int i : array) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    // Inverter um array
    public static void reverseArray(int[] array) {
        int n = array.length;
        for (int i = 0; i < n / 2; i++){
            int temp = array[i];
            array[i] = array[n - 1 - i];
            array[n - 1 - i] = temp;
        }
    }

    // Adicionar elementos à um array
    public static int[] adicionarElemento(int[] array, int elemento) {
        int[] newArray = new int[array.length +1];
        for (int i = 0; i < array.length; i++) {
            newArray[i] = array[i];
        }
        newArray[array.length] = elemento;
        return newArray;
    }

    // Excluir elementos de um array
    public static int[] excluirUltimoElemento(int[] array){
        if( array.length == 0){
            return array;
        }
        int[] newArray = new int[array.length - 1];
        for (int i = 0; i < newArray.length; i++) {
            newArray[i] = array[i];
        }
        return newArray;
    }
}
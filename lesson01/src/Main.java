import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);

//        byte byteVar = 127;
//        short shortVar = 32000;
//        int intVar = 21000000;
//        long longVar = 90000000;
//
//        System.out.println("Byte: " + byteVar);
//        System.out.println("Short: " + shortVar);



//   Exercício 1: conversão de celsius para fahrenheit
//   double celsius = 25.0;
//   double fahrenheit = (celsius * 9/5) + 32;
//
//   System.out.println("A temperatura em Farenheit é: " + fahrenheit);


//    int idade = 19;
//
//    if(idade >= 18){
//        System.out.println("Você é maior de idade!");
//    } else {
//        System.out.println("Você é meno de idade!");
//    }




// Exercício 2: Par ou ímpar



//        int numero = 7;
//
//        if(numero % 2 ==0){
//            System.out.println("O número é par!");
//        } else {
//            System.out.println("O número é ímpar!");
//        }

//       De para de dias com switch case
//        int dia = 1;
//
//        switch(dia){
//            case 1:
//                System.out.println("Domingo");
//                break;
//            case 2:
//                System.out.println("Domingo");
//                break;
//            case 3:
//                System.out.println("Domingo");
//                break;
//            case 4:
//                System.out.println("Domingo");
//                break;
//            case 5:
//                System.out.println("Domingo");
//                break;
//            default:
//                System.out.println("Dia inválido");
//                break;
//        }
    // Exercício 3: Verifique se o ano é bissexto!


//
//        System.out.println("Digite o ano: ");
//        int ano = sc.nextInt();
//
//        if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
//            System.out.println("O ano digitado foi: " + ano + ". Este ano é bissexto.");
//        }else {
//            System.out.println("O ano digitado foi: " + ano + ". Este ano não é bissexto.");
//        }

    // Exercício 4: Calculadora simples!

//        System.out.println("Digite um número: ");
//        double num1 = sc.nextDouble();
//
//        System.out.println("Digite um número: ");
//        double num2 = sc.nextDouble();
//
//        System.out.println("Digite um operador: ");
//        char operador = sc.next().charAt(0);
//
//        double resultado;
//
//        switch(operador){
//            case '+' :
//                System.out.println("Resultado: " + (num1 + num2));
//                break;
//            case '-' :
//                System.out.println("Resultado: " + (num1 - num2));
//                break;
//            case '*' :
//                System.out.println("Resultado: " + (num1 * num2));
//                break;
//            case '/' :
//                System.out.println("Resultado: " + (num1 / num2));
//                break;
//        }

        // Exercício 5: Simulem um login básico que permita somente três tentativas de login antes de bloquear o usuário.

//        int count = 0;
//
//        while(true){
//            if(count == 3) {
//                System.out.println("Excedeu o limite de tentativas");
//                break;
//            }
//
//            System.out.println("Informe o usuário: ");
//            String user = sc.nextLine();
//            System.out.println("Informe a senha: ");
//            String password = sc.nextLine();
//
//            if(user.equals("Marlon") && password.equals("Admin")){
//                System.out.println("Login efetuado com sucesso!");
//                break;
//            } else {
//                System.out.println("Senha ou usuário incorreto!");
//                count++;
//            }
//        }
//        System.out.println("Fim do programa!");


//        Estrtuturas de repedição: for

//        For incremento
//        for(int i = 0; i < 10; i++){
//            System.out.println("Valor de 1 é: " + i);
//        }
//
//        While
//        int i = 0;
//        while(i < 10){
//            System.out.println("Valor de i é: " + i);
//            i++;
//        }
//
//        do while
//        int i2 = 0;
//        do {
//            System.out.println("Valor de i é: " + i);
//            i++;
//        } while(i < 10);
//
//
//        String texto = "Java é melhor que aquela linguagem";
//
//        int comprimento = texto.length();
//        System.out.println(comprimento);
//
//        String maiusculas = texto.toUpperCase();
//        System.out.println(maiusculas);
//
//        String minusculas = texto.toLowerCase();
//        System.out.println(minusculas);
//
//        boolean contem = texto.contains("Java");
//        System.out.println(contem);

//        String substituto = texto.replace(target:"Java", replacement:"Python");
//        System.out.println(substituto);
//
//        String substring = texto.substring(0, 4);
//        System.out.println(substring);

//        double num = 50.30;
//
//        double arredondado = Math.round(num);
//        System.out.println(arredondado);
//        double arredondadoPraCima = Math.ceil(num);
//        System.out.println(arredondadoPraCima);
//        double arredondadoPraBaixo = Math.floor(num);
//        System.out.println(arredondadoPraBaixo);
//        double raizQuadrada = Math.sqrt(num);
//        System.out.println(raizQuadrada);
//        double valorAbsoluto = Math.abs(num);
//        System.out.println(valorAbsoluto);
//        double aleatorio = Math.random();
//        System.out.println(aleatorio);

//        Fatorial de um número.
//        System.out.println("Digite um número: ");
//        int numero = sc.nextInt();
//
//        if( numero < 0) {
//            System.out.println("O número não pode ser negativo.");
//            return;
//        }
//
//        long fatorial = 1;
//        for( int i = 1; i <= numero; i++){
//            fatorial *= i;
//        }
//        System.out.println("O fatorial de " + numero + " é: " + fatorial);


//        Sequência de fibonacci.

        System.out.println("Digite a quantidade de elementos do fibonnaci: ");
        int elementos = sc.nextInt();

        if(elementos <= 0){
            System.out.println("A quantidade de elementos deve ser positiva");
        } else if(elementos == 1) {
            System.out.println("0");
        } else {

            int a = 0;
            int b = 1;

            System.out.println(a);
            System.out.println(b);

            for(int i =2; i < elementos; i++){
                int c = a + b;
                System.out.println(c + "");
                a = b;
                b = c;
            }
        }


    }
}
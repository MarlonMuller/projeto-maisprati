package stream;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class UniqueWordCounter {
    public static void main(String[] args) {
        String paragraph = "Aqui está um exemplo de texto, com algumas palavras repetidas. " +
                "Texto é um exemplo simples!";

        // Conta o número de palavras únicas, ignorando maiúsculas, minúsculas e removendo pontuações.
        Set<String> uniqueWords = Arrays.stream(paragraph.toLowerCase()
                        .replaceAll("[^a-záéíóúãõâêîôûàèìòùç\\s]", "")
                        .split("\\s+"))
                .collect(Collectors.toSet());

        System.out.println("Número de palavras únicas: " + uniqueWords.size());
    }
}


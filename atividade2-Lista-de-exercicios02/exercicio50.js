/* 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
- Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e 
quartos disponiveis.
- Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.

2. Funcionalidades:
- Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
- Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma 
cidade específica.
- Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
- Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
- Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

3. Regras de Negócio:
- Um hotel só pode aceitar reservas se houver quartos disponíveis.
- As reservas devem ser identificadas por um ID único e associadas a um único hotel.

4. Desafios Adicionais:
- Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
- Gerar relatórios de ocupação para um hotel.
- Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto
do hotel.
*/

class Hotel {
    constructor(id, nome, cidade, quartosTotais) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.quartosTotais = quartosTotais;
        this.quartosDisponiveis = quartosTotais;
        this.avaliacoes = [];
    }

    avaliar(avaliacao) {
        this.avaliacoes.push(avaliacao);
    }

    obterMediaAvaliacao() {
        if (this.avaliacoes.length === 0) return 0;
        let soma = this.avaliacoes.reduce((acc, val) => acc + val, 0);
        return soma / this.avaliacoes.length;
    }
}

class Reserva {
    constructor(idReserva, idHotel, nomeCliente) {
        this.idReserva = idReserva;
        this.idHotel = idHotel;
        this.nomeCliente = nomeCliente;
    }
}

class SistemaDeReservas {
    constructor() {
        this.hoteis = [];
        this.reservas = [];
        this.proximoIdHotel = 1;
        this.proximoIdReserva = 1;
    }

    adicionarHotel(nome, cidade, quartosTotais) {
        const novoHotel = new Hotel(this.proximoIdHotel++, nome, cidade, quartosTotais);
        this.hoteis.push(novoHotel);
        console.log(`Hotel "${nome}" adicionado com sucesso!`);
    }

    buscarHoteisPorCidade(cidade) {
        const hoteisNaCidade = this.hoteis.filter(hotel => hotel.cidade === cidade);
        if (hoteisNaCidade.length > 0) {
            console.log(`Hotéis disponíveis em ${cidade}:`);
            hoteisNaCidade.forEach(hotel => {
                console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
            });
        } else {
            console.log(`Nenhum hotel encontrado em ${cidade}.`);
        }
    }

    fazerReserva(idHotel, nomeCliente) {
        const hotel = this.hoteis.find(h => h.id === idHotel);
        if (hotel && hotel.quartosDisponiveis > 0) {
            const novaReserva = new Reserva(this.proximoIdReserva++, idHotel, nomeCliente);
            this.reservas.push(novaReserva);
            hotel.quartosDisponiveis--;
            console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
        } else {
            console.log(`Não é possível fazer a reserva. Hotel não encontrado ou sem quartos disponíveis.`);
        }
    }

    cancelarReserva(idReserva) {
        const reserva = this.reservas.find(r => r.idReserva === idReserva);
        if (reserva) {
            const hotel = this.hoteis.find(h => h.id === reserva.idHotel);
            hotel.quartosDisponiveis++;
            this.reservas = this.reservas.filter(r => r.idReserva !== idReserva);
            console.log(`Reserva ${idReserva} cancelada com sucesso.`);
        } else {
            console.log(`Reserva ${idReserva} não encontrada.`);
        }
    }

    listarReservas() {
        if (this.reservas.length > 0) {
            console.log('Lista de Reservas:');
            this.reservas.forEach(reserva => {
                const hotel = this.hoteis.find(h => h.id === reserva.idHotel);
                console.log(`ID Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`);
            });
        } else {
            console.log('Nenhuma reserva encontrada.');
        }
    }

    checkIn(idReserva) {
        const reserva = this.reservas.find(r => r.idReserva === idReserva);
        if (reserva) {
            console.log(`Check-in realizado para a reserva ${idReserva} de ${reserva.nomeCliente}.`);
        } else {
            console.log(`Reserva ${idReserva} não encontrada.`);
        }
    }

    checkOut(idReserva) {
        const reserva = this.reservas.find(r => r.idReserva === idReserva);
        if (reserva) {
            const hotel = this.hoteis.find(h => h.id === reserva.idHotel);
            hotel.quartosDisponiveis++;
            this.reservas = this.reservas.filter(r => r.idReserva !== idReserva);
            console.log(`Check-out realizado para a reserva ${idReserva}.`);
        } else {
            console.log(`Reserva ${idReserva} não encontrada.`);
        }
    }

    avaliarHotel(idHotel, avaliacao) {
        const hotel = this.hoteis.find(h => h.id === idHotel);
        if (hotel) {
            hotel.avaliar(avaliacao);
            console.log(`Hotel ${hotel.nome} avaliado com nota ${avaliacao}.`);
        } else {
            console.log(`Hotel ${idHotel} não encontrado.`);
        }
    }

    gerarRelatorioOcupacao(idHotel) {
        const hotel = this.hoteis.find(h => h.id === idHotel);
        if (hotel) {
            const ocupacao = ((hotel.quartosTotais - hotel.quartosDisponiveis) / hotel.quartosTotais) * 100;
            console.log(`Relatório de Ocupação do Hotel ${hotel.nome}: ${ocupacao.toFixed(2)}% ocupado.`);
        } else {
            console.log(`Hotel ${idHotel} não encontrado.`);
        }
    }
}

// Demonstração de uso do sistema
const sistema = new SistemaDeReservas();

sistema.adicionarHotel('Hotel A', 'Cidade X', 10);
sistema.adicionarHotel('Hotel B', 'Cidade Y', 20);
sistema.adicionarHotel('Hotel C', 'Cidade X', 5);
    
sistema.buscarHoteisPorCidade('Cidade X');

sistema.fazerReserva(1, 'Cliente 1');
sistema.fazerReserva(1, 'Cliente 1');
sistema.fazerReserva(1, 'Cliente 1');
sistema.fazerReserva(1, 'Cliente 1');
sistema.fazerReserva(1, 'Cliente 2');
sistema.fazerReserva(3, 'Cliente 3');
sistema.fazerReserva(3, 'Cliente 3');
sistema.fazerReserva(3, 'Cliente 3');
sistema.fazerReserva(3, 'Cliente 3');
sistema.fazerReserva(3, 'Cliente 3');
sistema.fazerReserva(3, 'Cliente 3');
sistema.buscarHoteisPorCidade('Cidade X');

sistema.listarReservas();

sistema.cancelarReserva(2);

sistema.listarReservas();

sistema.checkIn(1);
sistema.checkOut(1);

sistema.avaliarHotel(1, 4);
sistema.avaliarHotel(1, 5);
sistema.avaliarHotel(2, 3);

sistema.gerarRelatorioOcupacao(1);
sistema.gerarRelatorioOcupacao(2);
sistema.gerarRelatorioOcupacao(3);
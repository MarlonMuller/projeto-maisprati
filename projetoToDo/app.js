class Task {
    constructor(ano, mes, dia, descricao) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.descricao = descricao;
    }

    validateData() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "") {
                return false;
            }
        }
        return true;
    }
}

class Database {
    constructor() {
        let id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', '0');
        }
    }

    createTask(task) {
        const id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(task));
        localStorage.setItem('id', id);
    }

    getNextId() {
        const nextId = parseInt(localStorage.getItem('id')) + 1;
        return nextId.toString();
    }
}

const database = new Database();

function registerTask() {
    const ano = document.getElementById('ano').value;
    const mes = document.getElementById('mes').value;
    const dia = document.getElementById('dia').value;
    const descricao = document.getElementById('descricao').value;

    const task = new Task(ano, mes, dia, descricao);

    if (task.validateData()) {
        database.createTask(task);
        clearForm();
        alert('Tarefa registrada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function clearForm() {
    document.getElementById('ano').value = '';
    document.getElementById('mes').value = '';
    document.getElementById('dia').value = '';
    document.getElementById('descricao').value = '';
}
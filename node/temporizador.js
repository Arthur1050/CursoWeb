const schedule = require('node-schedule')

// agendando uma tarefa
// Explicação da string - A tarefa vai ser executada: 
// de 5 em 5 segundos ("*/5"), em qualquer minuto ("*"), as 12 horas, em qualquer dia ("*"), em qualquer mês ("*"), nas terças feira ("2")
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 4', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// cancelando tarefa depois de 20 segundos
setTimeout(function() {
    tarefa1.cancel() //Metodo para cancelar a tarefa
    console.log('Cancelando Tarefa 1!')
}, 20000)

// Criando uma regra de execução de tarefa
const regra = new schedule.RecurrenceRule() // Instancia um objeto que receberá valores que será usada para ser executado de forma recorrente
regra.dayOfWeek = [new schedule.Range(1, 5)] // Passa os dias da em semana que a regra será validada (de segunda a sexta)
regra.hour = 12 // Sera validada sempre as 12 horas
regra.second = 30 // Sera validada sempre no segundo 30

// Criando outra tarefa recebendo a regra de execução criada
const tarefa2 = schedule.scheduleJob(regra, function() {
    // Sempre q a regra passada no parametro for validada, essa tarefa sera executada
    console.log('Executando Tarefa 2', new Date().getSeconds())
})
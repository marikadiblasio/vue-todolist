/**
 * Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 */
const { createApp } = Vue;

createApp(
    {
        data(){
            return {
                todos: [
                    {
                        text: 'comprare il pane',
                        done: false
                    },
                    {
                        text: 'comprare il regalo per Laura',
                        done: true
                    },
                    {
                        text: 'portare i vestiti in lavanderia',
                        done: false
                    }

                ],
                newTxt: '',
                emptyTxt: false,
            }
        },
        methods : {
            removeItem(index){
                this.todos.splice(index, 1);
            },
            addItem() {
                if (this.newTxt.length < 2){
                    this.emptyTxt = true;
                    console.log(emptyTxt);
                    console.log(this.newTxt);
                    return
                }
                const newTodo = {
                    text: this.newTxt,
                    done: false
                }
                this.todos.push(newTodo);
                this.newTxt = '',
                this.emptyTxt = false;
            }
            //toggleDone(index){
                // if (this.todos[index].done){
                //     this.todos[index].done=false
                // } else {
                //     this.todos[index].done=true
                // }
            //}
        }
    }
).mount('#app');
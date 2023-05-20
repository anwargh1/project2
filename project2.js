const readline = require('readline');


class Task {
     taskDescription;
     dueDate;
     priorityLevel;
     completed;
     tasks=[];
     

     constructor(taskDescription,dueDate,priorityLevel) {
        this.taskDescription = taskDescription;
         this.dueDate=dueDate;
         this.priorityLevel = priorityLevel;
         this.completed = false;
        }


    
        showMenu() {
            console.log('Welcome to JS TODO-APP');
            console.log('***************************');
            console.log('Select an action:');
            console.log('1) Add a new task');
            console.log('2) List all tasks');
            console.log('3) List completed tasks');
            console.log('4) Mark a task as done');
            console.log('5) Delete a task');
            console.log('6) Sort tasks by the due date');
            console.log('7) Sort tasks by priority');
            console.log('8) Clear all tasks');
            console.log('***************************');

            const r1 = readline.createInterface({
              input : process.stdin,
              output:process.stdout
          });
            r1.question('What\'s your choice?', (choice) => {
              switch (choice) {
                case '1':
                  this.addTask();
                  break;
                case '2':
                  this.lsitAllTask();
                  break;
                case '3':
                  this.listCompletedTasks();
                  break;
                case '4':
                  this.markTheTaskAsDone();
                  break;
                case '5':
                  this.deleteTask();
                  break;
                case '6':
                  this.sortTaskByDueDate();
                  break;
                case '7':
                  this.sortTaskByPriority();
                  break;
                case '8':
                  this.clearAllTasks();
                  break;
                default:
                  console.log('Invalid choice. Please choose again.');
              }
            });

          }


          lsitAllTask(){
            this.tasks.forEach((task,index) => {
                console.log(`Task  ${index + 1}:`);
                console.log(`Description: ${task.taskDescription}`);
                console.log(`Due Date: ${task.dueDate}`);
                console.log(`Priority: ${task.priorityLevel}`);
                console.log(`Completed: ${task.completed}`);
           } );
           this.showMenu()

           }
           addTask(){
    
            const r1 = readline.createInterface({
                input : process.stdin,
                output:process.stdout
            });
    
            r1.question('Enter the task description: ', description => {
              r1.question('Enter the due date: ', dueDate => {
                r1.question('Enter the priority: ', priority => {
                  const newTaskToAdded = new Task(description, dueDate, priority);
                  this.tasks.push(newTaskToAdded);
                  console.log('Task added successfully -_-');
                  r1.close();
                  this.showMenu()

                });
              });
            });

    
           }
    
           deleteTask(){
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
              });
    
              rl.question('Enter the task number that you went delete it : ' , numberTask =>{
                const indexTask = numberTask - 1 ;
                if(indexTask < 0 || indexTask >= this.tasks.length){
                    console.log('Invalid');
                }else {
                    this.tasks.splice(indexTask,1);
                    console.log('This taske deleted');
    
    
                }
                rl.close();
                this.showMenu()
              });
    
           }
    
           listCompletedTasks(){
                const completedTask =this.tasks.filter(task => task.completed);
                if(completedTask.length==0){
                    console.log("No task completed");
                }else   
                 {
                    console.log('Completed tasks:');
                    completedTask.forEach((task ,index) => console.log(`Task ${index + 1}: ${task.taskDescription}`))
                
                } 
                this.showMenu()

    
           }
    
           sortTaskByPriority(){
    
            this.tasks.sort((task1 , task2 )=> task1.priorityLevel - task2.priorityLevel);
            console.log('sorted by priority');
            this.showMenu()
           }
    
           sortTaskByDueDate(){
            this.tasks.sort((task1 , task2 )=> new Date(task1.dueDate) - new Date(task2.dueDate) );
            console.log('sorted by dueDate');
            this.showMenu()
           }
    
           clearAllTasks(){
            this.tasks.splice(0,this.tasks.length)
            console.log('all tasks deleted');
            this.showMenu()

           }
    
           markTheTaskAsDone(){
            const r2 = readline.createInterface({
                input: process.stdin,
                output: process.stdout
              });
    
              r2.question('Enter the number your task that you need make it completed : ' , taskNumber => {
                const taskIndex = taskNumber -1;
                if(taskIndex<0 || taskIndex >=this.tasks.length ){
                    console.log("inValid");
                }else 
                {
                    this.tasks[taskIndex].completed=true;
                    console.log("this task become completed");
    
                }
                r2.close();
                this.showMenu()


              });
           }

      
}


const defaultTasks = [
  new Task("Finish project","2023-05-27",2),
  new Task("Buy groceries","2023-05-24",1),
  new Task("Call a friend","2023-05-26",3)
];
const newTask = new Task()
newTask.tasks.push(...defaultTasks);


newTask.showMenu();

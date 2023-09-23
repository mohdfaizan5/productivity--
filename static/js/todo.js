const allTodos = [
  { task: 'complete 3 projects', isCompleted: false, priority: 3, date: new Date() },
  { task: 'Do laundry', isCompleted: true, priority: 1, date: new Date() },
  { task: 'Learn physics', isCompleted: false, priority: 1, date: new Date() },
]

let checkBox = document.querySelector('button')
checkBox.addEventListener('click', (e) => {
  console.log(this, 'hi', e.parentElement)
})

// to speak our pending tasks
function tellTodayTask() {
  speak('Todays tasks are')
  let taskNo = 0;
  allTodos.forEach((eachTask, i) => {
    console.log(eachTask.task, i)
    if (!eachTask.isCompleted) {
      taskNo++;
      speak(`task ${taskNo} is ${eachTask.task}`)
    }
  })
}

// Fetching the data and displaying:
console.log("displaying tasks")
let ul = document.querySelector('ul')
allTodos.forEach((eachTask) => {
  console.log(eachTask)

  let newElement = document.createElement('li')

  let isStriked;
  if (eachTask.isCompleted) {
    isStriked = 'todo_completed'
    isChecked = "checked='true'"
  }
  else {
    isStriked = ''
    isChecked = ''
  }

  console.log(isStriked, isChecked)
  newElement.innerHTML = `
        <input type="checkbox" ${isChecked}'>
        <span class="${isStriked}">${eachTask.task}</span>
      `


  ul.appendChild(newElement)

})


// On submitting the task
let taskInput = document.querySelector('#taskInput')
let priorityInput = document.querySelector('#priorityInput')
document.querySelector('#submitInput').addEventListener('click', () => {
  allTodos.push({
    task: taskInput.value,
    isCompleted: false,
    priority: Number(priorityInput.value),
    date: new Date()
  })
  console.log(allTodos)

  let ul = document.querySelector('ul')
  let newElement = document.createElement('li')
  newElement.innerHTML = `
        <input type="checkbox" '>
        <span >${taskInput.value}</span>
      `
  ul.appendChild(newElement)


})


// for check the boxes and striking text
ul.addEventListener('click', event=>{
  event.target.className = 'todo_completed'
  console.log(event.target.parentElement)
})
///////////////////////////////////////////////
////// Academic Planner
let TASKS = [
  {
    id: 1,
    description: "Go to the mall with friends",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    completed: false,
  },
  {
    id: 2,
    description: "Hang out, grab a bite and a drink",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    completed: true,
  },
];
let TASKS_FILTER = "all"; // all | pending | completed

const tasksEl = document.getElementById("tasks");

const numAllEl = document.getElementById("num-all");
const numPendingEl = document.getElementById("num-pending");
const numCompletedEl = document.getElementById("num-completed");

const numButtonPending = document.getElementById("num-button-pending");

const allToggle = document.getElementById("all-toggle");
const pendingToggle = document.getElementById("pending-toggle");
const completedToggle = document.getElementById("completed-toggle");

// Paint tasks to screen
const paintTasks = () => {
  let allTasks = 0;
  let pendingTasks = 0;
  let completedTasks = 0;

  TASKS.forEach((task) => {
    allTasks += 1;
    if (task.completed) completedTasks += 1;
    else pendingTasks += 1;
  });

  numAllEl.textContent = allTasks;
  numPendingEl.textContent = pendingTasks;
  numCompletedEl.textContent = completedTasks;

  if (pendingTasks) {
    numButtonPending.textContent = pendingTasks;
    numButtonPending.style.display = "flex";
  } else {
    numButtonPending.style.display = "none";
  }

  if (!TASKS.length) {
    tasksEl.innerHTML = `<li class="tasks__empty">You have no tasks</li>`;
    return;
  }

  const tasksToDisplay = TASKS.filter((task) => {
    if (TASKS_FILTER === "pending") return !task.completed;
    if (TASKS_FILTER === "completed") return task.completed;
    return true;
  });

  if (tasksToDisplay.length) {
    let render = "";

    tasksToDisplay.forEach((task) => {
      render += `
            <li class="task">
                <input type="checkbox" onClick="toggleTaskCompleted(${task.id})" ${task.completed ? "checked" : ""} />
                <div class="task__main">
                    <p class="task__name ${task.completed ? "task__name--completed" : ""}">${task.description}</p>
                    <div class="task__info">
                        ${
                          task.completed
                            ? `<span class="task__status task__status--completed">Completed</span>`
                            : `<span class="task__status task__status--pending">Pending</span>`
                        }
                        <p>${task.startTime} ⇒ ${task.endTime}</p>
                    </div>
                </div>
                <div class="task__controls">
                    <button onClick="editTask(${task.id})">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path
                            d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                            ></path>
                            <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                            ></path>
                        </svg>
                    </button>
                    <button onClick="deleteTask(${task.id})">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </li>
        `;
    });

    tasksEl.innerHTML = render;
  } else {
    tasksEl.innerHTML = `<li class="tasks__empty">There are no tasks in current filter. Switch to all</li>`;
  }
};

// Different status toggle
allToggle.addEventListener("click", () => {
  allToggle.classList.add("active");
  pendingToggle.classList.remove("active");
  completedToggle.classList.remove("active");

  TASKS_FILTER = "all";
  paintTasks();
});

pendingToggle.addEventListener("click", () => {
  allToggle.classList.remove("active");
  pendingToggle.classList.add("active");
  completedToggle.classList.remove("active");

  TASKS_FILTER = "pending";
  paintTasks();
});

completedToggle.addEventListener("click", () => {
  allToggle.classList.remove("active");
  pendingToggle.classList.remove("active");
  completedToggle.classList.add("active");

  TASKS_FILTER = "completed";
  paintTasks();
});

// Function for individual tasks
const toggleTaskCompleted = (id) => {
  TASKS = TASKS.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );

  paintTasks();
};

const deleteTask = (id) => {
  TASKS = TASKS.filter((task) => task.id !== id);

  paintTasks();
};

const editTask = (id) => {
  const task = TASKS.find((task) => task.id === id);
  alert(`Working on it: ${task.description}`);
};

// Clear and add task
const clearTasksButton = document.getElementById("clear-tasks-button");

clearTasksButton.addEventListener("click", () => {
  TASKS = [];

  paintTasks();
});

const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", () => {
  console.log("Working on it");
});

const addEditTaskForm = document.getElementById("task-form");

addEditTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

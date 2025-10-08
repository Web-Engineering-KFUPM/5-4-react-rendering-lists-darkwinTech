// import DueBadge from "./DueBadge";
//
//
// export default function TaskItem({ task, onToggle, onDelete }) {
// return (
// <li className="task" key={task.id}>
// <label className="taskMain">
// {/* 🟩 PART B (Anchor): Checkbox exists; students should wire onToggle(task.id) */}
// <input type="checkbox" />
//
//
// {/* 🟩 PART B (Anchor): Only render <DueBadge /> if task is NOT done (logical &&) */}
//
//
// {/* Task title goes here */}
// {/* Example: <span className="title">{task.title}</span> */}
// </label>
//
//
// {/* 🟩 PART B (Anchor): Delete button should call onDelete(task.id) */}
// <button className="ghost" aria-label="Delete task">
// ✕
// </button>
// </li>
// );
// }
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className="task">
            <label className="taskMain">
                {/* checkbox toggles */}
                <input
                    type="checkbox"
                    checked={!!task.isDone}
                    onChange={() => onToggle(task.id)}
                    aria-label={`Mark "${task.title}" as done`}
                />

                {/* only show DueBadge if NOT done */}
                {!task.isDone && task.dueDate && <DueBadge dueDate={task.dueDate} />}

                {/* title */}
                <span className={`title ${task.isDone ? "done" : ""}`}>
          {task.title}
        </span>
            </label>

            {/* delete button */}
            <button
                className="ghost"
                aria-label="Delete task"
                onClick={() => onDelete(task.id)}
            >
                ✕
            </button>
        </li>
    );
}

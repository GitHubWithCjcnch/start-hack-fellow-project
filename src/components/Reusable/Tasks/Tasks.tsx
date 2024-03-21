import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faListCheck } from '@fortawesome/free-solid-svg-icons';

interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  date: string;
  personName: string;
  personPhotoUrl: string;
}

interface TaskProps {
  task: TaskData;
  handleComplete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, handleComplete }) => (
  <div className="flex justify-between items-center my-2">
    <div className='flex flex-row space-x-3'>
      <button onClick={() => handleComplete(task.id)} className="focus:outline-none border-[3px] rounded-full flex align-center justify-center border-[#666666]">
        <FontAwesomeIcon icon={task.completed ? faCheckCircle : faCircle} className={task.completed ? 'text-gray-500' : 'text-[#999999]'} size={'lg'} />
      </button>
      <span className={`${task.completed ? 'line-through text-gray-500 font-bold' : 'text-white font-bold'} mx-2`}>
        {task.title}
      </span>
    </div>
    <div className='flex flex-row space-x-3'>
      <span className="text-sm text-gray-700">{task.date}</span>
      <img src={task.personPhotoUrl} alt={task.personName} className="rounded-full w-6 h-6 ml-2"/>
    </div>
  </div>
)

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>([
    { id: 1, title: 'Task 1', completed: false, date: '2021-09-14', personName: 'John', personPhotoUrl: '/path/to/photo1.jpg'},
    { id: 2, title: 'Task 2', completed: false, date: '2021-09-15', personName: 'Jane', personPhotoUrl: '/path/to/photo2.jpg'},
  ]);

  const handleComplete = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return task;
    }));
  }

  return (
    <div className="rounded-sm bg-[#191919] p-4 text-white">
      <h1 className="font-semibold text-lg mb-4 flex items-center space-x-4">
        <FontAwesomeIcon icon={faListCheck} />
        <span className="mr-2">Tasks</span>
      </h1>
        {tasks.slice(0, 4).map(task => {
          return <Task key={task.id} task={task} handleComplete={handleComplete} />;
        })}
      <a href="/all-tasks" className="text-blue-500 hover:text-blue-700">See all tasks</a>
    </div>
  );
}

export default Tasks;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faTasks } from '@fortawesome/free-solid-svg-icons';
import photo from '../../../assets/asana_logo.png'
import { Link } from 'react-router-dom';

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
  <div className="flex justify-between items-center mb-5">
    <div className='flex flex-row space-x-3 items-center'>
      <FontAwesomeIcon icon={task.completed ? faCheckCircle : faCircle} className={task.completed ? 'text-[#666666] cursor-pointer' : 'text-[#999999] cursor-pointer'} size={'lg'} onClick={() => handleComplete(task.id)} />
      <span className={`${task.completed ? 'line-through text-gray-500 font-semibold' : 'text-white font-semibold'} mx-2`}>
        {task.title}
      </span>
    </div>
    <div className='flex flex-row space-x-3 items-center'>
      <span className="text-sm text-white font-semibold">{task.date}</span>
      <img src={photo} alt={task.personName} className="rounded-full w-6 h-6 ml-2"/>
    </div>
  </div>
);

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>([
    { id: 1, title: 'Task 1', completed: false, date: '2021-09-14', personName: 'John', personPhotoUrl: '../../../assets/asana_logo.png'},
    { id: 2, title: 'Task 2', completed: false, date: '2021-09-15', personName: 'Jane', personPhotoUrl: '../../../assets/asana_logo.png'},
  ]);

  const handleComplete = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    }));
  };

  const sortedTasks = [...tasks].sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);

  return (
    <div className="rounded-sm bg-[#191919] p-4 text-white">
      <h1 className="font-semibold text-lg mb-4 flex items-center space-x-4">
        <FontAwesomeIcon icon={faTasks} />
        <span className="mr-2">Tasks</span>
      </h1>
      {sortedTasks.map(task => {
        return <Task key={task.id} task={task} handleComplete={handleComplete} />;
      })}
      <Link to="/all-tasks" className="font-bold text-[#FE8902] hover:text-[#ff8f42]">See all tasks</Link>
    </div>
  );
};

export default Tasks;
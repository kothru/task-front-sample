import { TaskTable } from './TaskTable'
import { useState } from 'react';
import { Dialog } from './Dialog';
import { Task } from './type';

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialogOpen = () => setDialogOpen(!dialogOpen)
  const [dialogOpenTask, setDialogOpenTask] = useState<Task>()
  return (
    <div>
      <h2>Task Table</h2>
      <TaskTable toggleDialogOpen={toggleDialogOpen} setDialogOpenTask={setDialogOpenTask} />
      <Dialog dialogOpen={dialogOpen} toggleDialogOpen={toggleDialogOpen} dialogOpenTask={dialogOpenTask} />
    </div>
  )
}

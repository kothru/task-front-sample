import { TaskTable } from './TaskTable'
import { useState } from 'react';
import { Dialog } from './Dialog';
import { DialogOpenButton } from './DialogOpenButton';

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialogOpen = () => setDialogOpen(!dialogOpen)
  return (
    <div>
      <h2>Task Table</h2>
      <TaskTable toggleDialogOpen={toggleDialogOpen} />
      <Dialog dialogOpen={dialogOpen} toggleDialogOpen={toggleDialogOpen} />
    </div>
  )
}

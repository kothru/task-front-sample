import { TaskTable } from './TaskTable'
import { useState } from 'react';
import { Dialog } from './Dialog';
import { DialogOpenButton } from './DialogOpenButton';

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggledialogOpen = () => setDialogOpen(!dialogOpen)
  return (
    <div>
      <h2>Task Table</h2>
      <TaskTable toggledialogOpen={toggledialogOpen} />
      <Dialog dialogOpen={dialogOpen} toggledialogOpen={toggledialogOpen} />
    </div>
  )
}

import { DialogOpenButtonProps } from "./type";

export const DialogOpenButton: React.VFC<DialogOpenButtonProps> = (props) => {
  const onClick = () => {
    props.setDialogOpenTask(props.task)
    props.toggleDialogOpen()
  }
  return (
    <menu>
      <button className="btn btn-sm btn-primary" type="button" onClick={onClick}>Edit</button>
    </menu>
  )
}
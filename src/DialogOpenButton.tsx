import { DialogOpenButtonProps } from "./type";

export const DialogOpenButton: React.VFC<DialogOpenButtonProps> = (props) => {
  const onClick = () => props?.toggledialogOpen()
  return (
    <menu>
      <button className="btn btn-primary" type="button" onClick={onClick}>Edit</button>
    </menu>
  )
}
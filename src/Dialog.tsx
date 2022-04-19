import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { UPDATE_ACTUAL } from "./query";
import { DialogProps, Task } from './type';

type FormProps = Pick<Task, 'id' | 'actual'>;

export const Dialog: React.VFC<DialogProps> = (props) => {
  const [updateActual] = useMutation(UPDATE_ACTUAL);
  const { register, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      id: 1,
      actual: 100,
    }
  });
  const onSubmit = (formData: FormProps) => {
    const inputValues = [
      { id: formData.id, actual: parseInt(formData.actual.toString()) }
    ]
    updateActual({ variables: { tasks: inputValues } })
    props.toggledialogOpen()
  }
  return (
    <dialog id="actualInputDialog" className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 bg-neutral" open={props.dialogOpen}>
      <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        <div className="card bg-neutral text-neutral-content">
          <div className="card-body">
            <h2 className="card-title justify-start">Edit Actual</h2>
            <div className="form-control w-full">
              <label htmlFor="my-range" className="label">
                <span className="label-text">Neil Gottlieb II</span>
              </label>
              <input type="range" id="my-range" className="range" min="0" max="100" {...register("actual")} />
            </div>
            <input type="hidden" {...register("id")} />
            <menu className="mt-6 card-actions justify-end">
              <button className="btn btn-ghost" type="reset">Reset</button>
              <button id="confirmBtn" className="btn btn-primary" type="submit">Confirm</button>
            </menu>
          </div>
        </div>
      </form>
    </dialog>
  )
}
export function ModalForm() {
  return (
    <>
      <label htmlFor="my-modal" className="btn modal-button">open modal</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-neutral text-neutral-content">
          <div className="card bg-neutral text-neutral-content">
            <div className="card-body">
              <h2 className="card-title justify-start">Edit Actual</h2>
              <div className="form-control w-full">
                <label htmlFor="my-range" className="label">
                  <span className="label-text">Neil Gottlieb II</span>
                </label>
                <input type="range" min="0" max="100" id="my-range" className="range" />
              </div>
              <div className="mt-6 card-actions justify-end">
                <label htmlFor="my-modal" className="btn btn-primary">Accept</label>
                <label htmlFor="my-modal" className="btn btn-ghost">Deny</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
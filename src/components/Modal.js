import React from 'react'
import ReactPlayer from 'react-player/youtube';

function Modal({title,link}) {
  return (
    <>
    <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#videomodal">
    Play
  </button>
  {/* Modal */}
  <div className="modal fade" id="videomodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <ReactPlayer url={link} height={'100%'} width={'100%'} />
          
        </div>
        {/* <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div> */}
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Modal
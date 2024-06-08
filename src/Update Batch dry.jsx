import './App.css'

function DryBatch() {
  const arr = []
  return (
    <>
      <div className='history-header'>
        <div class="back-btn">Back</div>
        <h2>Update Batch</h2>
      </div>

      <div className='batch-edit'>
          <div className='batch-progress'>
            <div className='circle on'></div>
            <div className='dash on'></div>
            <div className='circle on'></div>
            <div className='dash off'></div>
            <div className='circle off'></div>
            <div className='dash off'></div>
            <div className='circle off'></div>
          </div>
          <div className='detail-form'>
            <h2>Dry leaves</h2>
            <h3>Weight</h3>
            <input type='text' placeholder='Weight (in kg)' />
          </div>
          <div className='image-upload'></div>
          <div className='batch-buttons'>
            <div className='batch-btn'>Update Batch</div>
          </div>
      </div>
    </>
  )
}

export default DryBatch

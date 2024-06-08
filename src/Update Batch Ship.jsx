import './App.css'

function ShipBatch() {
  const arr = []
  return (
    <>
      <div className='history-header'>
        <div class="back-btn">Back</div>
        <h2>Update Batch</h2>
      </div>

      <div className='batch-edit'>
        <div className='batch-edit-top'>
          <div className='batch-progress'>
            <div className='circle on'></div>
            <div className='dash on'></div>
            <div className='circle on'></div>
            <div className='dash on'></div>
            <div className='circle on'></div>
            <div className='dash on'></div>
            <div className='circle on'></div>
          </div>
          <div className='detail-form'>
            <h2>Shipping</h2>
            <h3>Assigned Harbor Guard</h3>
            <input type='text' placeholder='Harbor Guard ID' />
          </div>
        </div>
        <div className='batch-buttons'>
          <div className='batch-btn'>Ship Batch</div>
        </div>
      </div>
    </>
  )
}

export default ShipBatch

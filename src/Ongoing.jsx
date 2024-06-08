import './App.css'

function Ongoing() {
  const arr = []
  return (
    <>
      <div className='history-header'>
        <div class="back-btn">Back</div>
        <h2>Ongoing Batches</h2>
      </div>

      <div className='search-history'>
        <input id='batch-number' type='text' placeholder='Search' />
      </div>

      <div className='history-content'>
        <label>Batches</label>
        <div className='content-item'>
          <div className='content-details'>
            <h2>//Batch ID//</h2>
            <h3>Status</h3>
            <p>//Status//</p>
            <h3>Weight</h3>
            <p>//in kg//</p>
          </div>
          <div className='batch-progress'>
            <div className='circle on'></div>
            <div className='dash off'></div>
            <div className='circle off'></div>
            <div className='dash off'></div>
            <div className='circle off'></div>
            <div className='dash off'></div>
            <div className='circle off'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ongoing

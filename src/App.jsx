import './App.css'

function App() {
  const arr = []
  return (
    <>
      <div className='user-detail'>
      <div class="profile-picture"></div>
        <div class="profile-details">
            <div class="profile-name">Full Name</div>
            <div class="profile-location">Location</div>
        </div>
      </div>

      <div className='track-batches'>
        <label>Track your batches</label>
        <div className='search-container'>
          <div className='input-container'>
            <input id='batch-number' type='text' placeholder='Ref number' />
          </div>
          <div className='search-btn'></div>
        </div>
      </div>

      <div className='feature-container'>
        <label>Features</label>
        <div className='features'>
          <div className='feature'></div>
          <div className='feature'></div>
          <div className='feature'></div>
        </div>
      </div>

      <div className='recents'>
        <div className='recents-label'>
            <label>Recent Batches</label>
            <span>See All</span>
        </div>
        <div className='batch-display-home'>
          <div className='batch-details'>
            <h2>//Batch no.//</h2>
            <h3>Status</h3>
            <p>//Status//</p>
            <h3>Weight</h3>
            <p>//in kg//</p>
          </div>
          <div className='batch-display-color' />
        </div>
      </div>
    </>
  )
}

export default App

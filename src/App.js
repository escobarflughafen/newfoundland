import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <h1>sphinx in the face</h1>
      <nav style={{ fontFamily: "Helvetica Neue; sans-serif", borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/posts">posts</Link> |{' '}
        <Link to="/archives">archives</Link> |{' '}
        <Link to="/about">about</Link>  |{' '}
        <Link to="/tools">tools</Link>
      </nav>
      <Outlet />
    </div>
  );

}

export default App;

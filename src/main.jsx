import ReactDOM from 'react-dom/client';
import mySum from 'src/mySum.js'

function App() {
  return (
    <>
      <h1>Hello. {mySum(1, 2)}</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

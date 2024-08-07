import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <p style={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>Todo Redux</p>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App

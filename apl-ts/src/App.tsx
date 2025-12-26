import './App.css'
import { ClubCard } from './components/ClubCard/ClubCard'
import { clubs } from './data/clubs'

function App() {
  

  return (
    <div className="app">
      <h1>История клубов АПЛ</h1>

      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  )
}

export default App

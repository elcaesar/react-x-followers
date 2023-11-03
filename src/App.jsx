import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

const users = [
  {
    userName: 'aceeesar',
    name: 'Cesar Romero',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Duran',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas Chein',
    isFollowing: false
  }
]
export function App() { 
  return (
    <>
      <section className="App">
        <span className="titleCard">You might like</span>
        {
          users.map(({userName, name, isFollowing}) => (
            <XFollowCard 
              key = {userName}
              userName = {userName}
              name = {name}
              isFollowing = {isFollowing}
            >
            {name}
            </XFollowCard>
          ))
        }
      </section>
    </>
  )}


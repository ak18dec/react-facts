import { createRoot } from 'react-dom/client'
import './App.css'
const root = createRoot(document.getElementById('root'))

root.render(
  temporaryMain()
)


function temporaryMain() {
  return (
    <main>
      <img src="/src/assets/react.svg" alt="React Logo" />
      <h1>Fun Facts about React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k starts on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}
import './style.css'
import { Counter } from './Counter'
import { Profile } from './Profile'
export const App = () => {
  // const example = "const" // eslient rule check
  return (
    <>
      <h1 style={{ fontSize: '25px' }}>
        React TypeScript Webpack Starter Template
      </h1>
      <h2 className="color-green">Style Class color-green added</h2>
      <h2>ENV VAR NAME: {process.env.name}</h2>
      <h2> ENV MODE NAME : {process.env.NODE_ENV}</h2>
      <Counter />
      <Profile />
    </>
  )
}

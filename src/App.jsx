import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var landingSubHeading = "Find the cheapest data"
var landingParagraph = "uMoya gets data bundle information from all the major mobile providers in South Africa and shows you the cheapest bundles in a seamless interface. uMoya also shows you how the prices change over time, average data prices, along with plenty of other metrics. Never overspend on data again."
var appName = "umoya"


function NavBar(props){
  return (
    <>
      <nav>
        <a className="logo-text">{props.logoText}</a>
      </nav>
    </>
  )
}

function SearchButton(){
  return (
    <>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
    </>

  )
}

function SearchDataList(){
  return (
    <>
      <input id="carrier-search" list="carriers" placeholder='Search for a specific carrier (e.g. MTN)'></input>
      <datalist id="carriers">
        <option value="MTN">MTN</option>
        <option value="Vodacom">Vodacom</option>
        <option value="Cell C">Cell C</option>
        <option value="Telkom">Telkom</option>
        <option value="Rain">Rain</option>
      </datalist>
    </>
  )
}

function SearchBar(){
  return (
    <>
    <div>
      <SearchDataList/><SearchButton/>
    </div>
    </>
  )
}

function SubHeading(props){
  return (
    <>
      <h2>{props.text}</h2>
    </>
  )
}

function Paragraph(props){
  return (
    <>
      <p>{props.text}</p>
    </>
  )
}

function Description(props){
  return (
    <>
      <div>
        <SubHeading text={props.subHeadingText}/> 
        <Paragraph text={props.paragraphText}/>
      </div>
    </>

  )
}

function ChartContainer(){
  return(
    <>
      <div>

      </div>
    </>
  )
}


function StatsContainer(){
  return (
    <>
      <div>
        <ChartContainer/>
        <ChartContainer/>
        <ChartContainer/>
        <ChartContainer/>
      </div>
    </>
    )
}

function LandingContainer(){
  return(
    <>
      <SearchBar/>
      <Description subHeadingText={landingSubHeading} paragraphText={landingParagraph}/>
      <StatsContainer/>
    </>
  )
}

function App(){
  return (
    <> 
      <NavBar logoText={appName}/>
      <LandingContainer/>
    </>
  )
}




















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App

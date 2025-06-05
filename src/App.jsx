import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ResponsiveContainer, BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis, Text} from 'recharts'

var landingSubHeading = "Find the cheapest data"
var landingParagraph = "uMoya gets data bundle information from all the major mobile providers in South Africa and shows you the cheapest bundles in a seamless interface. uMoya also shows you how the prices change over time, average data prices, along with plenty of other metrics. Never overspend on data again."
var appName = "umoya"


function NavBar(props){
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />  */}
              <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">{props.logoText}</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

function SearchButton(){
  return (
    <>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
    </>

  )
}

function SearchDataList(){
  return (
    <>
      <form className="max-w-screen mx-auto">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" list="carriers" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a specific carrier (e.g. MTN)" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        
        </div>
         <datalist id="carriers">
              <option value="MTN">MTN</option>
              <option value="Vodacom">Vodacom</option>
              <option value="Cell C">Cell C</option>
              <option value="Telkom">Telkom</option>
              <option value="Rain">Rain</option>
          </datalist>
      </form>     
    </>
  )
}







function SearchBar(){
  return (
    <>
    <div>
      <SearchDataList/>
    </div>
    </>
  )
}

function Heading(props){
  return (
    <>
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{props.text}</h2>
    </>
  )
}


function SubHeading(props){
  return (
    <>
      <h2 className="mb-4 text-4xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{props.text}</h2>
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
        <Heading text={props.subHeadingText}/> 
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


 const data = [
    {name: "MTN", value: 15},
    {name: "Vodacom", value: 7},
    {name: "Telkom", value: 5},
    {name: "Rain", value: 10},
    {name: "Cell C", value: 12}
  ]


function HorizontalBarChartContainer(){

 

  return (
    <>
      <div className="bar-chart-container">
        
        <ResponsiveContainer width="100%" height="100%">
          {/* <SubHeading text="Chart Heading"/> */}
          
          <BarChart layout = "horizontal" data={data} width={500} height={500} margin={{left:0}} padding={{right:0}}>
            <text x={500 / 2} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
              <tspan fontSize="14">Chart Title</tspan>
            </text>
            <Bar stroke="purple" fill="white" dataKey="value" radius = {[10, 10, 0, 0]}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip cursor={{fill:'rgba(150, 0, 150, 0.1)'}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
    
  )

}

function VerticalBarChartContainer(){

 

  return (
    <>
      <div className="bar-chart-container">
        
        <ResponsiveContainer width="100%" height="100%">
          {/* <SubHeading text="Chart Heading"/> */}
          <BarChart layout = "vertical" data={data} width={500} height={500}>
            <Bar stroke="purple" fill="white" dataKey="value" radius = {[0, 10, 10, 0]}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
            <XAxis />
            <YAxis dataKey="name" type="category" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
    
  )

}

function StatsContainer(){
  return (
    <>
      <div className="stats-container">
        <HorizontalBarChartContainer/>
        <HorizontalBarChartContainer/>
        <HorizontalBarChartContainer/>
        <HorizontalBarChartContainer/>
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

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Header from '../Componets/Header'
import '../src/commonResource/css/bootstrap.css'
import '../src/commonResource/css/styles.css'
import Header from '../Componets/Header.jsx'
import Firstsection from '../Componets/Firstsection.jsx'
import Section1 from '../Componets/Sections/Section1.jsx'
import Section2 from '../Componets/Sections/Section2.jsx'
import Section3 from '../Componets/Sections/Section3.jsx'
import Section4 from '../Componets/Sections/Section4.jsx'
import Section5 from '../Componets/Sections/Section5.jsx'
import Section6 from '../Componets/Sections/Section6.jsx'
import Footer from '../Componets/Footer.jsx' 



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Header/> 
    <Firstsection/>
    <Section1> </Section1>
    <Section2> </Section2>
    <Section3> </Section3>
    <Section4> </Section4>
    <Section5> </Section5>
    <Section6> </Section6>
    <Footer> </Footer>
      
    </>
  )
}

export default App

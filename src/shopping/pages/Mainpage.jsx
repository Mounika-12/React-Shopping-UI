import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents ,Ladies} from '../data'
import WomenCollections from '../components/WomenCollections'

const Mainpage = () => {
const [gentsData, setGentsData] = React.useState(Gents)
const [ladiesData, setLadiesData] = React.useState(Ladies)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsData={gentsData}/>
        <WomenCollections ladiesData={ladiesData}/>
        <Footer />
    </div>
  )
}

export default Mainpage
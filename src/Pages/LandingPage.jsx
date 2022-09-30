import BuildAndGrow from '../Components/BuildAndGrow'
import ECommerceService from '../Components/ECommerceService'
import Layout from '../Layout/Layout'
import WeAreProviding from '../Components/WeAreProviding'
import OurClients from '../Components/OurClients'
import { ourClients, waitingFor } from "../Constant/RetailryConstant";
import GetStarted from '../Components/GetStarted';
import CoustomContext from '../Context/CoustomContext'
//Need to improve rerendering process
function LandingPage() {
  return (
    <>
   <CoustomContext>
   <Layout>
    <BuildAndGrow/>
    <ECommerceService/>
    <WeAreProviding/>
    <OurClients ourClients={ourClients} />
    <GetStarted />
    <OurClients ourClients={waitingFor} />
   </Layout>
   </CoustomContext>
    </>
  )
}

export default LandingPage

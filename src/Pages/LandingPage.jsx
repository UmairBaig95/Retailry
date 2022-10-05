import BuildAndGrow from '../Components/BuildAndGrow'
import ECommerceService from '../Components/ECommerceService'
import Layout from '../Layout/Layout'
import WeAreProviding from '../Components/WeAreProviding'
import OurClients from '../Components/OurClients'
import { ourClients, waitingFor, buildAndGrow } from "../Constant/RetailryConstant";
import GetStarted from '../Components/GetStarted';
import CoustomContext from '../Context/CoustomContext'
//Need to improve rerendering process
function LandingPage() {
  const [data] = buildAndGrow;
  return (
    <>
   <CoustomContext>
   <Layout>
    <BuildAndGrow props={data}/>
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

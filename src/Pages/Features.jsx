import Layout from '../Layout/Layout';
import CoustomContext from '../Context/CoustomContext'
import BuildAndGrow from '../Components/BuildAndGrow';
import FeaturesNav from '../Components/FeaturesNav';
import {eCommerceFeatures, FeaturesData} from '../Constant/FeatureData';
import {waitingFor} from "../Constant/RetailryConstant";
import DigitalStore from '../Components/DigitalStore';
import ProductItems from '../Components/ProductItems';
import RoundTheClock from '../Components/RoundTheClock'
import OurClients from '../Components/OurClients';

export default function Features() {
  const [eCommerceFeaturesData] = eCommerceFeatures;
  const digitalStore = FeaturesData.find(e => e.id === 'featureOne');
  const ordersCampaigns = FeaturesData.find(e => e.id === 'featureThree');
  const sEOMarketing = FeaturesData.find(e => e.id === 'featureFive');
  const productsItems = FeaturesData.find(e => e.id === 'featureTwo');
  const administratorDashboard = FeaturesData.find(e => e.id === 'featureFour');
  const roundTheClockAssistance = FeaturesData.find(e => e.id === 'featureSix');
  return (
    <>
  <CoustomContext>
    <Layout>
    <BuildAndGrow props={eCommerceFeaturesData}/>
    <FeaturesNav/>
    <DigitalStore data={digitalStore}/>
    <ProductItems data={productsItems}/>
    <DigitalStore data={ordersCampaigns}/>
    <ProductItems data={administratorDashboard}/>
    <DigitalStore data={sEOMarketing}/>
    <RoundTheClock data={roundTheClockAssistance}/>
    <OurClients ourClients={waitingFor} />
   </Layout>
   </CoustomContext>
    </>
  )
}

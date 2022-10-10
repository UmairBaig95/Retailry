import Layout from "../Layout/Layout";
import CoustomContext from "../Context/CoustomContext";
import BuildAndGrow from "../Components/BuildAndGrow";
import FeaturesNav from "../Components/FeaturesNav";
import { eCommerceFeatures, FeaturesData } from "../Constant/FeatureData";
import FeatureSection from "../Components/FeaturesSections";
import { waitingFor } from "../Constant/RetailryConstant";
import RoundTheClock from "../Components/RoundTheClock";
import OurClients from "../Components/OurClients";

export default function Features() {
  const [eCommerceFeaturesData] = eCommerceFeatures;
  const roundTheClockAssistance = FeaturesData.find(
    (e) => e.id === "featureSix"
  );
  return (
    <>
      <CoustomContext>
        <Layout>
          <BuildAndGrow props={eCommerceFeaturesData} />
          <FeaturesNav />
          <FeatureSection data={FeaturesData} />
          <RoundTheClock data={roundTheClockAssistance}/>
          <OurClients ourClients={waitingFor} />
        </Layout>
      </CoustomContext>
    </>
  );
}

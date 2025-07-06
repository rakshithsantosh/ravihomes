import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Buying = () => {
  return (
    <div>
      <Parallax className="flex items-center justify-center" pages={3}>
        <ParallaxLayer
          style={{
            backgroundImage: "url(/images/buying.jpg)",
            backgroundSize: "cover",
          }}
        >
          <h1>THE HOME BUYING PROCESS</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <div>
            <h2>Our First Meeting</h2>
            <ul>
              <li>Understand your goals, needs, and financial capacity.</li>
              <li>
                Homeownership offers control over your living space, investment
                opportunities, and tax benefits.
              </li>
              <li>I will support you throughout the entire process.</li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div>
            <h2>Financial Preparation</h2>
            <ul>
              <li>
                Build your ‘Green File’ with important financial documents.
              </li>
              <li>
                Know your credit rating and avoid big purchases or hard credit
                checks.
              </li>
              <li>
                Present your best financial self to maximize loan approval
                opportunities.
              </li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <div>
            <h2>Determining Where to Live</h2>
            <ul>
              <li>Narrow down your desired area based on your priorities.</li>
              <li>
                Each neighborhood has a unique vibe; I can provide expert
                recommendations on the West Coast.
              </li>
              <li>Match your needs with the perfect community.</li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <div>
            <h2>Finding the Perfect Home</h2>
            <ul>
              <li>Enjoy searching and exploring homes.</li>
              <li>I will help ensure you make a lasting choice.</li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5}>
          <div>
            <h2>Making an Offer</h2>
            <ul>
              <li>
                Build rapport and stay organized to create a reliable reputation
                with other agents.
              </li>
              <li>
                Discuss offer strategies after reviewing home sales in the area.
              </li>
              <li>
                Leave wiggle room for negotiation and work closely with me to
                present a strong offer.
              </li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6}>
          <div>
            <h2>Inspection of the Property</h2>
            <ul>
              <li>
                Complete necessary inspections to understand the property’s
                condition.
              </li>
              <li>
                Address challenges ahead of time through negotiation or
                preparation.
              </li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7}>
          <div>
            <h2>Closing - Almost There!</h2>
            <ul>
              <li>
                I will support you during the final inspection and fee payments.
              </li>
              <li>
                Understand the closing statements and sign the final documents.
              </li>
              <li>Once signed, the house is yours.</li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={8}>
          <div>
            <h2>Moving In</h2>
            <ul>
              <li>Assistance with moving and settling in.</li>
              <li>
                Access to a network of trusted experts for moving, home design,
                and maintenance.
              </li>
              <li>
                Ensure utilities are in your name and contact necessary vendors.
              </li>
            </ul>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Buying;

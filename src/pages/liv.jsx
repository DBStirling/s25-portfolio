import React, { useState } from "react";
import ModalImage from "react-modal-image";
import CtaButton from '../components/CtaButton/CtaButton';
import HoverPopUp from '../components/HoverPopUp/HoverPopUp.jsx'
import ImageToggle from '../components/ImageToggle/imageToggle.jsx'
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniDE from '../assets/Images/mini-de-thumb-simple.png'
import miniMFP from '../assets/Images/mini-mfp-thumb-simple.png'
import figureOne from '../assets/Images/flow/flow-one.png'
import figureTwoOne from '../assets/Images/flow/flow-two-one.png'
import figureTwoTwo from '../assets/Images/flow/flow-two-two.png'
import figureThree from '../assets/Images/flow/flow-three.png'
import figureFive from '../assets/Images/flow/flow-five.png'
import figureSix from '../assets/Images/flow/flow-six.png'
import figureSeven from '../assets/Images/flow/flow-seven.gif'
import figureEight from '../assets/Images/flow/flow-eight.png'
import figureNine from '../assets/Images/flow/flow-nine.gif'
import figureTen from '../assets/Images/flow/flow-ten.jpg'
import figureEleven from '../assets/Images/flow/flow-eleven.png'
import figureTwelve from '../assets/Images/flow/flow-twelve.gif'
import figureThirteen from '../assets/Images/flow/flow-thirteen.png'








import "../styles/caseStudy.css"

export default function flow() {

    const [showVoiceFlow, setShowVoiceFlow] = useState(false);

    const handleImageClick = () => {
        setShowVoiceFlow((prev) => !prev);
        console.log("clickReceived")
    };

    // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // const [msg, setMsg] = useState('')
    // const [showMsg, setShowMsg] = useState(false)

    // const handleMouseEnter = () => {
    //     setShowMsg(true);
    //     console.log('enter')
    // };

    // const handleMouseLeave = () => {
    //     setShowMsg(false);
    //     console.log()
    // };

    // setMsg('hello')

  function scrollToPrototype() {
    const section = document.getElementById('prototypeSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='device-container'>
      <div className="main-content-case">
        <div className="sub-section introduction">
          <div className="title">
          Designing a hybrid free trial experience for LIV, helping new and old users learn the ropes.
          </div>
          <div className="context">
            <div className="ht-pair">
              <div className="heading">My Role</div>
              <p>UX/UI Designer (Intern)</p>
            </div>
            <div className="ht-pair">
              <div className="heading">What is LIV?</div>
              <div>
              <p>LIV is the all-in-one property management solution offered by Unify, a Canadian prop-tech 
                startup working with property ownership groups such as QuadReal and Lane Properties. LIV helps 
                property operators manage parcel deliveries, amenity booking, maintenance requests and much more. 
                Alongside a complex operator portal on desktop, they offer a mobile tenant experience app.
              </p>
              </div>
            </div>
            <div className="ht-pair">
              <div className="heading">Setting the Scene</div>
              <div>
              <p>
                As their first ever intern and second UX Designer, <b>I had the unique opportunity to shape their internship 
                program and work as the lead designer on a high-impact feature</b> to be shipped in early 2025.
              </p>
              <p>
                I was tasked with designing a free-trial experience for new users. I led the interaction and 
                customer experience design, completing competitive analysis, wireframes and design mockups. I 
                collaborated with a senior designer who provided feedback through weekly meetings and provided 
                final approval on the visual design. 
              </p>
              </div>
            </div>
          </div>
          <CtaButton
            text='Cut To The Chase'
            clickFunctio={scrollToPrototype}
          />
        </div>
        <div className="sub-section the-problem">
          <Divider
          title={'Why a free trial?'}/>
          <div className="the-problem-body ht-pair">
            <div className="heading">
            Potential customers want to see and feel the product before committing{" "}
            </div>
            <p>
              Speaking to customer-facing co-workers, <b>this was a primary blocker voiced by users</b> during demos and sales calls. 
              I was tasked with creating a free trial experience that would nullify concerns and build user confidence, but 
              how else could I provide value to new users and the sales team through this project?
            </p>
            <p> 
              Operating in a highly competitive market for property management solutions, <b>LIV differentiates itself with strong UX 
              and an abundance of useful features</b> for tenant and operator user types. Beyond user feedback, this design-centric 
              value proposition highlighted the importance of getting our product into users' hands, allowing them to experience 
              the difference for themselves. Similarly, implementing a free trial will help new users build confidence in the platform 
              before committing financially. This is expected to help convert trial users into paying customers.
            </p>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'Defining Success'}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <p style={{fontSize: '20px'}}> I identified 3 key objectives after discussing the my intentions for the project with the product manager, senior designer and marketing team.  </p>
            </div>
            <div className='row-container'
                style={{display: 'flex', flexDirection: 'row', width: "100%", gap: "64px"}}
                >
                <div className="pain-point ht-pair">
                <div className="heading">
                    1. Introduce Key Features
                </div>
                <p>
                  <b>Guide users through the platform's essential features</b> without overwhelming them. Focused walkthroughs highlight the core functionality that delivers the most value, ensuring users understand what sets the platform apart.
                </p>
                </div>
                <div className="pain-point ht-pair">
                <div className="heading">
                    2. Build the Confidence of on-the-fence Users
                </div>
                <p>
                  <b>Help users feel comfortable navigating the platform</b> through intuitive onboarding, tooltips, and real-time feedback. By empowering users to perform key actions effortlessly, they gain trust in the platform's reliability and value.
                </p>
                </div>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    3. Convert Free Trials Into Leads
                </div>
                <p>
                  <b>Turn trial users into paying customers</b> by strategically demonstrating ROI throughout the experience and immersing the user in the trial experience. 
                </p>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Competitive Analysis"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
              <div className="header">
                Turning competitor weaknesses into our competitive edge
              </div>
                <p>
                  I began by looking at competitor free trials in the prop-tech space. This research helped me understand what worked 
                  well and what didn’t. More importantly, it allowed me to pinpoint key pain points, which I leveraged to create differentiating 
                  features for our platform. Click into the following images to learn what I took away from each trial. 
                </p>
                
                <div
                    style={{ cursor: "pointer" }}
                >
                    <ImageToggle
                        image1={figureTwoOne} 
                        image2={figureTwoTwo}
                        altText="Wealth confidence considering age"
                    />
                </div>
                <div
                    style={{ cursor: "pointer" }}
                >
                    <ImageToggle
                        image1={figureTwoOne} 
                        image2={figureTwoTwo}
                        altText="Wealth confidence considering age"
                    />
                </div>
                <div
                    style={{ cursor: "pointer" }}
                >
                    <ImageToggle
                        image1={figureTwoOne} 
                        image2={figureTwoTwo}
                        altText="Wealth confidence considering age"
                    />
                </div>
                <p style={{fontSize: '20px', marginBottom: '32px'}}> After translating the responses into a FigJam (my whiteboard of choice), <b>I used affinity 
                    mapping to identify similarities and prioritize opportunities.</b> The following pain points, like manually documenting spending and managing 
                    subscriptions, became evident through the mapping.
                </p>
            </div>
            <div className="pain-point ht-pair"
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
            >
                <div className="heading">
                    1. How might we simplify expense tracking?
                </div>
                <p>
                    <b>Automate transaction logging.</b> the repetitive nature of logging expenses is as a primary deterrent for respondents.                     
                </p>
                <p>
                  <b> Categorize transactions.</b> automate the grouping of essential, non-essential and/or subscription purchases.
                </p>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    2. How might we help them manage subscriptions?
                </div>
                <p>
                  <b>Extrapolate short-term purchases. </b>
                    subscription models thrive on short-term thinking. They count on the average person’s inability to translate $9.99 a month into $119.88 yearly or even $1198.80 a decade from now. The average respondent had 3 subscriptions and this number is only expected to grow as students age and subscription models become even more prevalent.
                </p>
                <p>
                  <b>Make decisions accessible in-app.</b>
                    Companies typically offer more than one subscription plan and oftentimes take advantage of making the cancel button hard to find. Furthermore, we should help students find which subscription plan is the right one for them.
                </p>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    3. How might we streamline budget creation?
                </div>
                <p>
                  <b>Do it for them.</b> Most students wanted the same things (saving for tution, rent and books while having some pocket change) and didn't want to take the time to set up budget plans. 
                  Why not create them an expense-first plan, then let them adjust and learn from there? Their optimism makes this a great launch point to learn about budgeting basics and build strong habits.
                </p>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Addressing Expense Tracking"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    How can we automate expenses? Isn’t banking data pretty... you know, private?
                </div>
                <p style={{fontSize: '20px'}}>
                    To implement automated expense tracking, Flow would rely on <b>API integrations from providers like Plaid, Yodlee or FinBox.</b> These services 
                    allow users to securely connect their bank accounts and share data, such as transactions or balances, with their explicit consent. This 
                    makes it fairly simple to link users’ financial data to Flow.
                </p>
                <p style={{marginBottom: '32px'}}>
                    That said, <b>a major drawback of relying on these integrations is scalability.</b> If these services become 
                    the backbone of an application, changes in pricing and/or policy could skyrocket expenses and hurt performance. 
                </p>
                <div 
                    className='image-container-new' 
                    style={{
                        margin: '0 auto', 
                        maxWidth: '800px', 
                        width: '100%'
                    }}
                    >
                    <img src={figureFive} 
                    style={{ 
                        width: '100%'
                    }}/>
                </div>
            </div>
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    How can we reliably categorize expenses?
                </div>
                <p> Purchases at places like Chipotle or a university bookstore are easy to classify as essential or non-essential by using <b>merchant name 
                    identification</b>, a method already employed by most banks. However, transactions at stores like Walmart present a challenge. The data 
                    retrieved from the API lacks the granular detail or context needed to distinguish between essential and non-essential items, making accurate categorization 
                    impossible based solely on the transaction's face value. Similarly, purchases from small businesses or mom-and-pop shops face a similar challenge. 
                </p>
                <p style={{fontSize: '20px', marginBottom: '32px'}}>
                    <b>Lock-screen categorization and crowdsourcing can help streamline expense tracking.</b> By enabling users to quickly categorize ambiguous 
                    purchases directly from their lock screen, expense tracking becomes more accurate with minimal required effort. Furthermore, 
                    this data can be used at scale to provide context for new merchant IDs. Here's how this feature could work. 
                </p>
                <div className="protopype-container">
                    <div className="prototype" style={{width: '100%', maxWidth: '800px'}}>
                    <iframe
                        className="actual-prototype"
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)",}}
                        width="800px"
                        height="800px"
                        src="https://embed.figma.com/proto/eSpJa9p4Vbp5ycE7yQ8xWa/Flow-Design-File?page-id=2287%3A11771&node-id=2469-17462&node-type=frame&viewport=1198%2C564%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2469%3A17462&embed-host=share"
                        allowFullScreen=""
                    />
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Addressing Subscription Management"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    How can we identify subscriptions? 
                </div>
                <div 
                    className='image-container-new' 
                    style={{
                        margin: '0 auto', 
                        maxWidth: '800px', 
                        width: '100%'
                    }}
                    >
                    <img src={figureSix} 
                    style={{ 
                        width: '100%'
                    }}/>
                </div>
                <p>
                We can identify recurring subscriptions by analyzing the merchant name and transaction value of repeated payments. Once identified, the merchant name and billing date can track subscriptions and account for pricing changes.
                </p>
                {/* <p style={{marginBottom: '32px'}}> To enhance scalability, identified subscriptions can be stored in a central database. This allows 
                    for cross-referencing other users’ transactions, enabling quicker subscription identification while reducing the number of queries 
                    required.
                </p> */}
            </div>
            <div className='pain-point ht-pair'>
                <div className='heading'>
                  Removing the guesswork
                </div>
                <p style={{fontSize: '20px', marginBottom: '32px'}}>
                  Given that <b>88% of respondents lack a dedicated method of managing subscriptions</b>, Flow provides a page that lists all subscriptions, including plan names, 
                  transaction details, and billing dates. It also shows total monthly and annual spending with real-world comparisons, helping them put their long-term spending into perspective.
                </p>
                <div 
                    className='image-container-new' 
                    style={{
                        // margin: '0 auto', 
                        maxHeight: '800px', 
                        width: '100%'
                    }}
                    >
                    <img src={figureSeven} 
                    style={{ 
                        height: '100%',
                        maxWidth: '100%'
                    }}/>
                </div>
                <p style={{marginTop: '64px', fontSize: '20px'}}> If a subscription is suboptimal (e.g., it can be improved by switching plans or is redundant due to similar services), the user receives 
                  an optimization suggestion. They can act on it via the Kabob menu on the subscription card by confirming to switch or cancel the plan. Once confirmed, a VoiceFlow agent 
                  sends an email to the merchant’s customer support to update the plan. <span style={{textDecoration: 'underline', cursor: "pointer"}} onClick={handleImageClick}>For more details, check out 
                    a subscription management agent I built with friends using VoiceFlow to handle this task.</span>
                </p>
                {showVoiceFlow && (
                    <div 
                        className='image-container-new' 
                        style={{
                            margin: '0 auto', 
                            maxWidth: '800px', 
                            width: '100%'
                        }}
                        >
                        <img src={figureNine} 
                        style={{ 
                            width: '100%'
                        }}/>
                    </div>)}
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Addressing Budgeting woes"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                Keeping it simple
                </div>
                <p style={{fontSize: '20px'}}>
                A <b>short in-app budgeting quiz</b> retrieves basic user information along with their long-term goals, fixed 
                expenses and miscellaneous financial gains. 
                </p>
                <p style={{marginBottom: '32px'}}>
                Instead of including this quiz within the onboarding, I made it an in-app feature and used the onboarding real-estate 
                to create an introductory flow. This reduced onboarding time, ensuring more users explored the app before encountering 
                a lengthy quiz that might deter their interest. Making the quiz necessity-only was also crucial for this reason.
                </p>
                <div 
                  className="row-container" 
                  style={{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    flexWrap: 'wrap',
                    gap: "64px", 
                    margin: "0 auto", // Center the container
                  }}
                >
                  <div 
                    className="image-container-new" 
                    style={{
                      flex: 1, 
                      maxWidth: "800px", 
                      minWidth: '275px',
                      height: "auto"
                    }}
                  >
                    <img 
                      src={figureEleven} 
                      style={{
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                      }} 
                      alt="Figure Eleven"
                    />
                  </div>
                  <div 
                    className="image-container-new" 
                    style={{
                      flex: 1, 
                      maxWidth: "400px", 
                      width: '100%',
                      minWidth: '275px',
                      height: "auto"
                    }}
                  >
                    <img 
                      src={figureTwelve} 
                      style={{
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                      }} 
                      alt="Figure Twelve"
                    />
                  </div>
                </div>
                <p style={{marginTop: '32px'}}>
                The second feature, the <b>monthly spending huddle</b>, offers a detailed recap of the user’s spending. This includes insights into 
                where they spent the most, how their spending was categorized, and overall trends that help them understand their financial 
                habits better. The goal here was to go beyond the typical banking report—I wanted to create a moment of reflection and planning, 
                giving users the tools to identify areas for improvement and actionable ways to tame their spending.
                </p>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Design System"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                  Prioritizing consistency and adaptability (building a good design system)
                </div>
                <div 
                    className="image-container-new" 
                    style={{
                      flex: 1, 
                      maxWidth: "800px", 
                      height: "auto"
                    }}
                  >
                    <img 
                      src={figureThirteen} 
                      style={{
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                      }} 
                      alt="Figure Eleven"
                    />
                  </div>
                <p>
                  I used warm colors like soft oranges and muted yellows with rounded elements to create a welcoming feel. Furthermore, 
                  I made sure that the information architecture and interactions fit users’ mental models to make it truly welcoming. 
                  I also ensured that components and styles were flexible enough to adapt to future features, making the system easy 
                  to expand as the product evolved. 
                </p>
            </div>
          </div>
        </div>
        <div className="sub-section prototype">
          <Divider
          title={'interactive prototype'}/>
          <div className="protopype-container" id="prototypeSection">
            <div className="prototype">
              <iframe
                className="actual-prototype"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800px"
                height="800px"
                src="https://embed.figma.com/proto/eSpJa9p4Vbp5ycE7yQ8xWa/HackWestern-Design-File?page-id=2287%3A11771&node-id=2287-11772&node-type=frame&viewport=1198%2C564%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2287%3A11796&embed-host=share"
                allowFullScreen=""
              />
{/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/eSpJa9p4Vbp5ycE7yQ8xWa/HackWestern-Design-File?page-id=2287%3A11771&node-id=2287-11772&node-type=frame&viewport=1198%2C564%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2287%3A11796&embed-host=share" allowfullscreen></iframe> */}
            </div>
          </div>
        </div>
        <div className="sub-section refelecton">
          <Divider
          title={'reflection'}/>
          <div className="reflection-body">
          <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <div className="heading">
                Takeaway - Research can be surprising
                </div>
              </div>
              <p>
              When conducting interviews and reviewing responses, I quickly realized that students weren’t as pessimistic 
              about their finances as I expected. In fact, most were overly confident, even if they didn’t know how to budget 
              properly. This reminded me that user behavior can be very hard to predict and reinforced the importance of 
              ground-level learning to get a clear understanding of real user needs—not just assumptions.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
              <div className="heading">
                If I had more time, I would <b>conduct usability testing</b>
              </div>
              </div>
              <p>
              While I spent a lot of time on conceptual work and prototyping, I didn’t have the 
              chance to get the prototype into the hands of others. Gathering their feedback 
              would have been extremely helpful in identifying any design flaws or areas where my 
              assumptions didn’t match up with how they would actually use the app.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <div className="heading">
                  If I had more <span style={{textDecoration: 'line-through'}}>time</span> data security 
                  expertise and time, <b>I would consider pursuing this idea seriously.</b>
                </div>
              </div>
              <p>
                I'm driven by building things that add value to people's everyday lives amd this would do exactly that.
                I also built a strong foundation, designing thoroughly tackling logistics and consulting developers.
                Despite this, I'm hesitant to store people’s real-life financial data, which acts as a huge deterrent 
                in pursuing development. I'll never say never, though.
              </p>
            </div>
            <ThanksSection
            title1={'Don Efficace'}
            tag1={'Product'}
            miniThumb1={miniDE}
            link1={'/donEfficace'}
            title2={'MyFitnessPal'}
            tag2={'Case Study'}
            link2={'/myFitnessPal'}
            miniThumb2={miniMFP}
            showWork={true}
            />
        </div>
        </div>
      </div>
    </div>
  )
}

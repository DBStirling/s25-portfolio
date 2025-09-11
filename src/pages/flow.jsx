import React, { useState } from "react";
import ModalImage from "react-modal-image";
import CtaButton from '../components/CtaButton/CtaButton';
import HoverPopUp from '../components/HoverPopUp/HoverPopUp.jsx'
import ImageToggle from '../components/ImageToggle/imageToggle.jsx'
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniLIV from '../assets/Images/mini-liv-thumb-simple.png'
import miniDE from '../assets/Images/mini-de-thumb-simple.png'
import miniPersona from '../assets/Images/mini-pe-thumb.png'
// import miniMFP from '../assets/Images/mini-mfp-thumb-simple.png'
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
          Reimagining budgeting for students with a necessity-first mobile app.
          </div>
          <div className="context">
            <div className="ht-pair">
              <div className="heading">My Role</div>
              <p>User Research, Wireframing, Visual Design, Prototyping - solo passion project! </p>
            </div>
            <div className="ht-pair">
              <div className="heading">Setting the scene</div>
              <div>
              <p>Budgeting has always felt unnecessarily intimidating and I've personally struggled
                to manage my money when I'm not on co-op. I wanted to create an extremely simple way for students
                to save for tuition, pay rent on time, and scrape together pocket change. That’s where 
                Flow comes in.</p>
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
          title={'the problem'}/>
          <div className="the-problem-body ht-pair">
            <div className="heading">
            Traditional budgeting models don’t accommodate the variable and sparse incomes of students.{" "}
            </div>
            <p>Income is hard for students to come by. They’re either jobless or working part-time throughout the 
                year, which makes the 70/20/10 or 50/30/20 models hard to adopt. Given the cookie-cutter approach 
                of these models, they’re not a suitable approach for students of varying 
                backgrounds, program types and financial goals.
            </p>
            <p>After discussing with friends, it appeared that we were all stuck in the same money management limbo, illustrated below. 
            </p>
            <div 
                className='image-container-new' 
                style={{
                    margin: '0 auto', 
                    maxWidth: '800px', 
                    width: '100%'
                }}
                >
                <img src={figureOne} 
                style={{ 
                    width: '100%'
                }}/>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'user research'}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    Students are optimistically confused about their finances.
                </div>
                <p style={{fontSize: '20px'}}> I collected over 30 responses from an anonymous survey and a handful of unmoderated interviews with other students. 
                    I identified the three following themes in their responses. </p>
            </div>
            <div className='row-container'
                style={{display: 'flex', flexDirection: 'row', width: "100%", gap: "64px"}}
                >
                <div className="pain-point ht-pair">
                <div className="heading">
                    1. Short-term thinking
                </div>
                <p>
                Students <b>struggle to grasp the long-term impacts of their purchases</b> and find it hard to manage their spending accordingly.
                </p>
                </div>
                <div className="pain-point ht-pair">
                <div className="heading">
                    2. Lack of Guidance
                </div>
                <p>
                <b>Students don’t know how much they should be saving, spending or investing in any given week</b> since they're frequently faced with new expenses (increasing tuition, moving apartments, required textbooks, etc.).
                </p>
                </div>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    3. Ignorance is Bliss
                </div>
                <p style={{marginBottom: '48px'}}>
                Despite not knowing <em>how</em>, <b>the majority of respondents were confident in their ability
                to save money for future expenses.</b> Funny enough, this confidence decreased with age as the majority 
                of non-positive responses came from older respondents. Toggle the image to see the breakdown.
                </p>
                <div
                    style={{ cursor: "pointer" }}
                >
                    <ImageToggle
                        images={[figureTwoOne, figureTwoTwo]}
                        altText="Wealth confidence considering age"
                    />
                </div>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'Bringing it together'}/>
          <div className="key-pain-points-body">
            <div 
            // style={{background: 'rgba(247, 246, 246, 0.5)', 
            //     backdropFilter: 'blur(10px)', 
            //     padding: '16px 40px', 
            //     borderLeft: "12px solid rgba(173, 166, 232, 0.50)", 
            //     borderRadius: '0px 12px 12px 0px'}}
            >
                <div className='heading'
                style={{fontSize: '32px'}}
                >
                  How might we use this confidence to simplify personalized budget creation and walk them through long-term saving?
                </div>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Ideation + How Might We's?"}/>
          <div className="key-pain-points-body">
          {/* {showMsg && (
            <HoverPopUp
                x={cursorPosition.x}
                y={cursorPosition.y}
                msg={msg}
            />)} */}
            <div className='pain-point ht-pair'>
                <div 
                    className='image-container-new' 
                    style={{
                        margin: '0 auto', 
                        maxWidth: '800px', 
                        width: '100%'
                    }}
                    >
                    <img src={figureThree} 
                    style={{ 
                        width: '100%'
                    }}/>
                </div>
                {/* <div className='heading'>
                    Identifying jobs that efficiently sum up these needs
                </div> */}
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
            title1={'Persona'}
            tag1={'Product'}
            miniThumb1={miniPersona}
            link1={'/persona'}
            title2={'LIV'}
            tag2={'Product'}
            link2={'/liv'}
            miniThumb2={miniLIV}
            showWork={true}
            />
        </div>
        </div>
      </div>
    </div>
  )
}

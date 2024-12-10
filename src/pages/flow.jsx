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
              <p>Budgeting has always felt unnecessarily intimidating. As a co-op student, I struggled 
                to manage my finances during the months I wasn’t working. The endless spreadsheets and complex 
                formulas my friends relied on only made things worse. I knew there had to be an easier way to 
                save for tuition, pay rent on time, and still have some money left over for fun. That’s where 
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
                of these models, it’s hard to believe that they’re a suitable approach for students of all 
                backgrounds, program types and financial goals.
            </p>
            <p>My personal experience wasn't too far off from this, either, and the stories that I've heard from friends 
                seem to be right on the money. It appeared that we were all stuck in the same money management limbo, illustrated below. 
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
                <p style={{fontSize: '20px'}}> I collected over 30 responses from an anonymous survey and unmoderated interviews with students. 
                    I identified 3 main themes in the responses. </p>
            </div>
            <div className='row-container'
                style={{display: 'flex', flexDirection: 'row', width: "100%", gap: "64px"}}
                >
                <div className="pain-point ht-pair">
                <div className="heading">
                    1. Short-term thinking
                </div>
                <p>
                Students <b>struggle to grasp the long-term impacts of their purchases</b> and struggle to tame their spending as a result.
                </p>
                </div>
                <div className="pain-point ht-pair">
                <div className="heading">
                    2. Lack of Guidance
                </div>
                <p>
                <b>They don’t know how much they should be saving, spending or investing in any given week</b> since they're frequently hit with new expenses (increasing tuition, moving apartments, more required textbooks, etc.).
                </p>
                </div>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    3. Blind confidence
                </div>
                <p style={{marginBottom: '48px'}}>
                Despite not knowing <em>how</em>, <b>the majority of respondents were confident in their ability
                to save money for future expenses.</b> Funny enough, this confidence decreased with age as the majority 
                of non-positive responses came from older respondants. Click on the image to see the proportion.
                </p>
                <ImageToggle
                    image1={figureTwoOne} 
                    image2={figureTwoTwo}
                    altText='Wealth confidence considering age'
                />
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'North Star Question'}/>
          <div className="key-pain-points-body">
            <div 
            style={{background: 'rgba(247, 246, 246, 0.5)', 
                backdropFilter: 'blur(10px)', 
                padding: '16px 40px', 
                borderLeft: "12px solid rgba(173, 166, 232, 0.50)", 
                borderRadius: '0px 12px 12px 0px'}}
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
                <div className='heading'>
                    Identifying jobs that efficiently sum up these needs
                </div>
                <p style={{fontSize: '20px', marginBottom: '32px'}}> After translating the responses into a FigJam (my whiteboard of choice), I used affinity 
                    mapping to identify similarities and prioritize opportunities. Among the above mentioned themes, a handful of pain 
                    points became more evident, like manually documenting spending and managing subscriptions.
                </p>
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
            </div>
            <div className="pain-point ht-pair"
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
            >
                <div className="heading">
                    1. How might we simplify expense tracking?
                </div>
                <p>
                    Beyond summing up the number of purchases in a given week, month or beyond, these transactions need to be categorized and logged in the correct categories of expenditure.
                </p>
                <p>
                    It became increasingly apparent that transaction logging needed to be automated. Many of our respondents listed this repetitive task as a central deterrent to budgeting.
                </p>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    2. How might we help manage subscriptions?
                </div>
                <p>
                    Subscription models thrive on short-term thinking. They count on the average person’s inability to translate $9.99 a month into $119.88 yearly or even $ 1198.80 a decade from now. The average respondent had 3 subscriptions and this number is only expected to grow as students age and subscription models become even more prevalent.
                </p>
                <p>
                    Companies typically offer more than one subscription plan and oftentimes rely on the cancel button being notoriously hard to find.
                </p>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    3. How might we streamline budget creation for students?
                </div>
                <p> 
                    Despite being optimistic about their ability to save, most students don’t know the first thing about saving, investing and budgeting.
                </p>
                <p>
                    Going hand-in-hand with short-term thinking, it was clear that they didn’t know how much they were supposed to tuck away and save on any given day.
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
                    First off, how can it be automated? Isn’t banking data pretty private?
                </div>
                <p style={{fontSize: '20px'}}>
                    To implement automated expense tracking, we would rely on API integrations from providers like Plaid, Yodlee or FinBox. These services 
                    allow users to securely connect their bank accounts and share data, such as transactions or balances, with their explicit consent. This 
                    makes it fairly simple to link users’ financial data to Flow.
                </p>
                <p style={{marginBottom: '32px'}}> That said, a drawback of relying on these integrations is scalability. If the 
                    providers were to impose stricter API limits or increase the cost of API calls as their user base grows, it could lead to challenges 
                    in maintaining performance or controlling costs.  
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
                <p> Purchases at places like Chipotle or a university bookstore are easy to classify as essential or non-essential by using the merchant name 
                    for identification, a method already employed by most banks. However, transactions at stores like Walmart present a challenge. The data 
                    retrieved from the API lacks the granular detail needed to distinguish between essential and non-essential items, making accurate categorization 
                    impossible based solely on the transaction's face value. Similarly, purchases from small businesses or mom-and-pop shops face a similar challenge. 
                    The merchant ID is often unrecognizable or generic, making it difficult to categorize these transactions accurately without additional context.
                </p>
                <p style={{fontSize: '20px', marginBottom: '32px'}}>
                    <b>Lock-screen categorization and crowdsourcing can help streamline expense tracking, making for a much more seamless experience.</b> By enabling users to quickly categorize ambiguous 
                    purchases directly from their lock screen, expense tracking becomes more accurate for individuals and improves for everyone as the app gains 
                    more users. Here's how this feature could work. 
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
                <p>
                    By analyzing the value and merchant associated with each transaction, we can identify recurring subscriptions through repeated 
                    transactions. Once identified, we can use the merchant name and transaction value to determine the exact plan a user is on. Going 
                    forward, subscriptions will be tracked using the merchant name and billing date to account for any pricing changes
                </p>
                <p style={{marginBottom: '32px'}}> To enhance scalability, identified subscriptions can be stored in a central database. This allows 
                    for cross-referencing other users’ transactions, enabling quicker subscription identification while reducing the number of queries 
                    required.
                </p>
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
            </div>
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    Now, how do we simplify subscription management?
                </div>
                <p style={{fontSize: '20px'}}>
                    <b>Simply by removing the guesswork.</b>  Flow has a dedicated page where all of a user’s subscriptions are stored along with their plan name, transaction details and upcoming 
                    billing dates. At the top of the page, they can find the sum of their recurring spending on a monthly and annual basis with a real-world 
                    comparison to put their purchase in perspective.
                </p>
                <p style={{marginBottom: '32px'}}>Given that <b>88% of the survey respondents don’t have a dedicated way of managing their ongoing subscriptions,</b> 
                    this page will ensure that they’re more informed about their subscriptions
                </p>
                <div 
                    className='image-container-new' 
                    style={{
                        // margin: '0 auto', 
                        maxHeight: '800px', 
                        // width: '100%'
                    }}
                    >
                    <img src={figureSeven} 
                    style={{ 
                        height: '100%'
                    }}/>
                </div>
                <p style={{marginTop: '64px'}}> In the case that any of their subscriptions are suboptimal (they can be optimized 
                    by switching to an alternative plan or are made redundant by owning similar services), the user is prompted with 
                    an optimization suggestion. The optimization suggestion can be acted on through the Kabob menu on the right of the 
                    card and by confirming that you would like to either switch your subscription or cancel it altogether. After confirming 
                    the decision, we initialize a VoiceFlow agent and use it to email the customer-help email to begin the process of updating 
                    the user’s plan. If you’re curious about the implementation, <span style={{textDecoration: 'underline'}} onClick={handleImageClick}>check this out. </span> 
                    Myself and a few friends built a subscription management agent using VoiceFlow to complete this very task.
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
                Building personalized budgets
                </div>
                <p>
                Understanding that granular financial data would be retrieved by the banking integration, I approached budget creation with the belief 
                that ‘less is more’. I designed a short budgeting quiz that retrieved basic user information along with their long-term goals, fixed 
                expenses and miscellaneous financial gains. 
                </p>
                <p style={{marginBottom: '32px'}}>
                Although I initially  included this quiz within the onboarding, I opted to make it an in-app feature and used the onboarding real-estate 
                to create an introductory flow. This reduced the user onboarding time and would ensure that more users were introduced to the application 
                before completing a long quiz which could deter their interest. The quiz being necessity-only was extra important for this reason as well. 
                </p>
                <div 
                  className="row-container" 
                  style={{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    gap: "64px", 
                    maxWidth: "60%", 
                    margin: "0 auto" // Center the container
                  }}
                >
                  <div 
                    className="image-container-new" 
                    style={{
                      flex: 1, 
                      maxWidth: "800px", 
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
                The second feature is the monthly huddle, which provides a detailed recap of the user’s spending. This includes insights into where they spent 
                the most, how their spending was categorized, and overall trends that help them understand their financial habits better. The goal here was to 
                go beyond the typical banking report—I wanted to create a moment of reflection and planning, giving users the tools to identify areas for 
                improvement and actionable ways to  tame their spending.
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
                Designing for consistency and adaptability
                </div>
                <p style={{marginBottom: '32px'}}>
                I wanted the app to feel relaxed and comforting, so I opted for warm primary colors like soft oranges and muted yellows, paired 
                with rounded elements to create a welcoming experience. However, the most important factor for achieving this was making sure that 
                the information architecture, design architecture and interactions fit users’ mental models. I also ensured that components and 
                styles were flexible enough to adapt to future features, making the system easy to expand as the product evolved. 
                </p>
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
                width="1000px"
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
                If I had more time, I would <b>conduct usability testing</b>
              </div>
              </div>
              <p>
              While I spent a lot of time on conceptual work and prototyping, I didn’t have the 
              chance to get the prototype into the hands of real students. Gathering their feedback 
              would have been extremely helpful in identifying any design flaws or areas where my 
              assumptions didn’t match up with how students would actually use the app.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <div className="heading">
                  If I had more <span style={{textDecoration: 'line-through'}}>time</span> data security 
                  expertise, <b>I would consider pursuing this, seriously.</b>
                </div>
              </div>
              <p>
              I took on the project because of how useful it would be to the everyday student and I’m driven 
              by building things that add value to everyday lives. I’m proud of the foundation that I’ve built 
              with basic logistics and thorough design. I’m tempted to transform this foundation into something 
              real and have friends in development who would be just as interested to join, but we’re all equally 
              weary about storing people’s real-life financial data. I’ll never say never though, I just need to 
              be bored enough on a Saturday afternoon.
              </p>
            </div>
            {/* <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <div>

                </div>
                <div className="heading">
                Tackling Complex Problems:
                </div>
              </div>
              <p>
              Designing Flow meant thinking through the technical side of things, like how to securely integrate 
              banking data and ensure accurate transaction categorization. Consulting with developer friends helped 
              me gain a better understanding of what’s feasible. This process gave me extra practice in aligning 
              design concepts with technical limitations and making smarter decisions when working on complex features.
              </p>
            </div> */}
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <div className="heading">
                Research can be surprising
                </div>
              </div>
              <p>
              When conducting user research, I quickly realized that students weren’t as pessimistic about their 
              finances as I expected. In fact, most were overly confident, even if they didn’t know how to budget 
              properly. This reminded me that user behavior can be unpredictable and reinforced the importance of 
              ground-level learning to get a clear understanding of real user needs—not just assumptions.
              </p>
            </div>
            <ThanksSection
            title1={'Don Efficace'}
            tag1={'Product'}
            miniThumb1={miniDE}
            link1={'/donEfficace'}
            title2={'Diet Me'}
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

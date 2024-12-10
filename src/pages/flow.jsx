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
                <div className="protopype-container" id="prototypeSection">
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
        <div className="sub-section jobs-tbd">
          <Divider
          title={'jobs to be done'}/>
          <div className="jobs-tbd-body">
            <div className="jobs-tbd-text ht-pair">
              <div className="heading">
                How might we help MyFitnessPal balance business and user needs?
              </div>
              <p>Despite being disliked by users, paywalling key features works. It
              helped increase the percentage of users on premium plan subscriptions
              and contributed to a 25% year-on-year increase in revenue.&nbsp;
              </p>
              <p>
              Instead of reversing these changes, we can make the user experience more
              satisfying by implementing design changes that are inspired by newly
              identified pain points.
              </p>
              <p>
              Ultimately, revenue can always be driven by providing value to the user.
              Designing around the user’s pain points will improve utility and drive
              both daily users and premium plan subscriptions as the app is in the
              hands of more happy users.
              </p>
            </div>
            {/* <div className="hmw-section">
              <div className="hmw-indiv-section">
                <div className="heading centered-text">
                  How might we make the fitness world less intimidating for users?
                </div>
                <div className="hmw-container ">
                  <img className="hmw nh" src={hmw11} />
                  <img className="hmw nh" src={hmw12} />
                  <img className="hmw nh" src={hmw13} />
                  <img className="hmw nh" src={hmw14} />
                </div>
              </div>
              <div className="hmw-indiv-section">
                <div className="heading centered-text">
                  How might we implement accountability partners to increase user
                  motivation and success rates?
                </div>
                <div className="hmw-container">
                  <img className="hmw nh funky-sizing" src={hmw21} />
                  <img className="hmw nh funky-sizing" src={hmw22} />
                  <img className="hmw nh funky-sizing" src={hmw23} />
                </div>
              </div>
              <div className="hmw-indiv-section">
                <div className="heading  centered-text">
                  How might we make it easier for users to navigate MyFitnessPal?
                </div>
                <div className="hmw-container">
                  <img className="hmw nh" src={hmw31} />
                  <img className="hmw nh" src={hmw32} />
                  <img className="hmw nh" src={hmw33} />
                  <img className="hmw nh" src={hmw34} />
                  <img className="hmw nh" src={hmw35} />
                  <img className="hmw nh" src={hmw36} />
                </div>
              </div>
            </div> */}
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
                {/* <img
                  className="reflection-icon nh"
                  src={wrenchIcon}
                  alt="wrench icon"
                /> */}
                <div className="heading">Modular design systems are a lifesaver.</div>
              </div>
              <p>
              Learning how to use auto-layout, components and styles is the best thing
              I’ve ever done in Figma.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                {/* <img
                  className="reflection-icon nh"
                  src={targetIcon}
                  alt="target icon"
                /> */}
                <div className="heading">Sometimes, less can be more.</div>
              </div>
              <p>
                Keep it simple and make sure to not overwhelm the user.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                {/* <img
                  className="reflection-icon nh"
                  src={groupIcon}
                  alt="group icon"
                /> */}
                <div className="heading">
                  Always and I mean, ALWAYS seek feedback!
                </div>
              </div>
              <p>
              Usability tests, user interviews and A/B tests are great ways to know if
              you’re going in the right direction.
              </p>
            </div>
            <ThanksSection
            title1={'Don Efficace'}
            tag1={'Product'}
            miniThumb1={miniDE}
            link1={'/donEfficace'}
            title2={'Diet Me'}
            tag2={'Exploration'}
            link2={'/dietMe'}
            miniThumb2={miniMFP}
            showWork={true}
            />
        </div>
        </div>
      </div>
    </div>
  )
}

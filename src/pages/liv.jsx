import React, { useState } from "react";
import ModalImage from "react-modal-image";
import CtaButton from '../components/CtaButton/CtaButton';
import HoverPopUp from '../components/HoverPopUp/HoverPopUp.jsx'
import ImageToggle from '../components/ImageToggle/imageToggle.jsx'
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniDE from '../assets/Images/mini-de-thumb-simple.png'
import miniFlow from '../assets/Images/mini-flow-thumb-simple.png'
import figureOneOne from '../assets/Images/liv/liv-one-one.png'
import figureOneTwo from '../assets/Images/liv/liv-one-two.png'
import figureTwoOne from '../assets/Images/liv/liv-two-one.png'
import figureTwoTwo from '../assets/Images/liv/liv-two-two.png'
import figureThreeOne from '../assets/Images/liv/liv-three-one.png'
import figureThreeTwo from '../assets/Images/liv/liv-three-two.png'
import figureFour from '../assets/Images/liv/liv-five.png'
import figureFive from '../assets/Images/liv/liv-five.png'
import figureSix from '../assets/Images/liv/liv-six.png'
import figureSeven from '../assets/Images/liv/liv-seven.png'
import figureEightOne from '../assets/Images/liv/liv-eight-one.png'
import figureEightTwo from '../assets/Images/liv/liv-eight-two.png'
import figureEightThree from '../assets/Images/liv/liv-eight-three.png'










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
    const section = document.getElementById('theSolution');
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
              <div className="heading">
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
                        images={[figureOneOne, figureOneTwo]} 
                        altText="Takeaways from Buildium"
                    />
                </div>
                <div
                    style={{ cursor: "pointer" }}
                >
                    <ImageToggle
                        images={[figureTwoOne, figureTwoTwo]} 
                        altText="Takeaways from Prism"
                    />
                </div>
                <div
                    style={{ cursor: "pointer", marginBottom: '32px' }}
                >
                    <ImageToggle
                        images={[figureThreeOne, figureThreeTwo]} 
                        altText="Takeaways from Spaceflow"
                    />
                </div>
                <p style={{fontSize: '20px'}}> Then, I looked at Asana & Zendesk, focussing on visual and interaction design conventions that would be useful regardless of the industry. See the high-level view of my competitive analysis below.
                </p>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points" id="theSolution">
          <Divider
          title={"The Solution"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    Striking a balance between guided tutorial and sandbox experiences
                </div>
                <p>
                  Based on insights from the competitive analysis, I determined that it would be best to combine guided elements of a tutorial with the autonomy provided by an open sandbox 
                  environment. <b>This allows new users to build confidence by successfully completing routine tasks through feature walkthroughs and then snowball the small wins with unguided 
                  exploration within the sandbox environment</b> to mimic a more realistic environment. This creates a much better experience for users who are 
                  commonly confused or bored in complete tutorial or sandbox environment. See the differences, pros and cons between the two trial methods below.
                </p>
                <div 
                    className='image-container-new' 
                    style={{
                        margin: '0 auto', 
                        maxWidth: '600px', 
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
                    How would this work?
                </div>
                <p> 
                  Users will be onboarded into a sandbox populated with dummy data, first completing a short questionnaire to help personalize their sandbox with their name, portfolio type 
                  and resident count. Following the short questionnaire, they’re shown the ropes of the trial -- learning how to progress, go back and where to find the free trial menu for 
                  further navigation. Once introduced, the user completes two guided feature walkthroughs before getting unrestricted access to the sandbox. <b>See the flow below.</b>
                </p>
                <div 
                    className='image-container-new' 
                    style={{
                        margin: '0 auto', 
                        maxWidth: '600px', 
                        width: '100%'
                    }}
                    >
                    <img src={figureSix} 
                    style={{ 
                        width: '100%'
                    }}/>
                </div>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Introducing Key Features"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    Maximizing trial value for various user needs
                </div>
                <p>
                    Knowing the importance of brevity in guided tutorials, I decided to focus on LIV’s two most popular features according to customer usage data. Furthermore, LIV’s maintenance request and building update features are useful to operators regardless of the size or type of their property — all buildings face plumbing issues and can benefit from building-wide communication.
                </p>
                <p>
                  Before designing the walkthroughs, <b>I met with customer-facing team members who walked me through the common ways that existing customers used each feature.</b> I mapped out these processes and matched them up with wireframes that naturally took the user through key actions, such as assigning a technician to a maintenance request or resolving an open ticket. I did this for both key features and made notes on the functionality required at each step of the guided tutorial to define pop-up design constraints.</p>
                <div 
                    className='image-container-new' 
                    style={{
                        margin: '0 auto', 
                        maxWidth: '800px', 
                        width: '100%'
                    }}
                    >
                    <img src={figureSeven} 
                    style={{ 
                        width: '100%'
                    }}/>
                </div>
            </div>
            <div className='pain-point ht-pair'>
                <div className='heading'>
                  Designing a universal guided pop-up
                </div>
                <p>I went through two main pop-up design iterations. <b>Click through below to see the changes and some of the rationale behind them.</b> Along with the pop-ups, I also iterated through various feedback animation designs. I started with an oscillating purple highlight and ended with a much simpler blue bordered highlight as it fit more within the design scheme and would be an easier development implementation without trade-off. I worked through these visual design changes with the mentorship and feedback of the senior designer and our development team to ensure the quality and feasibility of design choices. 
                </p>
                <div
                    style={{ cursor: "pointer", margin: '32px 0', maxWidth: '800px' }}
                >
                    <ImageToggle
                        images={[figureEightOne, figureEightTwo, figureEightThree]} 
                        altText="Guided pop-up iterations"
                    />
                </div>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Building User Confidence"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair' style={{ textAlign: 'left' }}>
                <div className='heading'>
                  Writing for users on autopilot
                </div>
                <p style={{fontSize: '20px'}}>
                  A major component of building user confidence is content design. Each pop-up needed to be easily scannable while still providing enough context to assist confused users, if necessary.
                </p>
                <p>
                  The key to writing content for the guided tutorial was understanding that <b>every feature, action, or concept would be entirely new to the user</b>. Although obvious, this reality cannot be stated enough. I made sure to use simple language and short sentences, prioritizing concise, context-driven copy to explain actions in a more familiar way. 
                </p>
                <p style={{marginBottom: '32px'}}>
                  Working in a startup means that you get to wear many hats and it put me in the position to learn a great deal about content design. Through exploring forums and reading various articles, <b>I put together a short list of content design rules that I used for the tutorial.</b>
                </p>
                <ol style={{ paddingLeft: '0', listStylePosition: 'inside', fontSize: '20px' }}>
                  <li style={{ marginBottom: '12px' }}>Write in active voice, starting with actions or objectives.</li>
                  <li style={{ marginBottom: '12px' }}>Use ‘you’ or ‘your’ to make it personally applicable for the user.</li>
                  <li style={{ marginBottom: '12px' }}>Make it concise.</li>
                  <li style={{ marginBottom: '12px' }}>Reveal information only when relevant.</li>
                  <li>Write for all reading levels.</li>
                </ol>
            </div>
            <div className='pain-point ht-pair'>
              <div className="heading">Supporting user autonomy with a free trial menu</div>
                <p style={{margin: '32px 0'}}>
                  Users are bound to have different interests or needs, so the trial was modularly designed to promote roaming and exploration. This keeps users engaged by avoiding an impersonal linear tutorial experience. To reflect this modularity, I designed a free trial menu, enabling the user to navigate between any section within the guided tutorial or enter the open sandbox. The free trial menu is universally available as an overlay in the bottom right of the user’s screen and displays user progress along with secondary actions like booking a demo or providing feedback. View the below prototypes to see the first and last iterations of the free trial menu.
                </p>
            </div>
            <div className='pain-point ht-pair' style={{ textAlign: 'left' }}>
                  <div className="heading">Free trial menu changes</div>
                  <ol style={{paddingLeft: '0', listStylePosition: 'inside', fontSize: '20px' }}>
                    <li style={{ marginBottom: '12px' }}>Adjusted primary color to match trial UI</li>
                    <li style={{ marginBottom: '12px' }}>Added more context; both on the free trial menu & their progress in the trial</li>
                    <li style={{ marginBottom: '12px' }}>Re-prioritized the sections and the secondary actions</li>
                    <li>Made secondary actions more visually distinct</li>
                  </ol>
                  <div className="protopype-container">
                    <div className="prototype" style={{width: '100%', maxWidth: '800px'}}>
                    <iframe
                        className="actual-prototype"
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)",}}
                        width="800px"
                        height="800px"
                        src="https://embed.figma.com/proto/wM3rV16a3ZEupVvfADI99S/Sandbox-File?page-id=0%3A1&node-id=23-5746&viewport=-25554%2C11610%2C0.46&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A5746&embed-host=share"
                        allowFullScreen=""
                    />
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Converting Free Trials into Sales Leads"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair' style={{ textAlign: 'left' }}>
                <div className='heading'>
                  Looking past the design. What now?
                </div>
                <p>
                Although the product hasn’t launched yet, we are confident that providing a high-quality experience during the free trial will directly improve conversion rates. By showcasing the LIV platform’s value upfront, we aim to convert users into paying customers and enable our sales team to engage with more interested leads.
                </p>
                <p>
                To enhance and simulate ongoing user engagement, we integrated email notifications into the sandbox experience. For instance, users who schedule maintenance requests during the trial will receive email updates when a technician cancels at the last minute or completes the job. This showcases the value of the platform’s behind-the-scenes automation and highlights the time saved for the user, helping to drive conversions by mimicking real-world usage.
                </p>
                <p>
                To maintain the quality of the trial experience, I collaborated with the development team to ensure that A/B testing can be implemented once analytics become available. I wrote development tickets illustrating the functionality of splitting users into test groups and tracking variable performance, which will be used to habitually assess and improve its interaction/visual design where needed. I also advocated for usability testing, which will provide richer context beyond the short round of feedback provided in the trial.
                </p>
                <p style={{fontSize: '20px'}}>
                It's almost out! When the free trial is released, I'll be the first to link it here, so you can take a look for yourself. 
                </p>
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
                Takeaway - It’s okay to challenge design systems
                </div>
              </div>
              <p>
              Working within a design system is great for maintaining consistency and even reducing development effort, but these are not always the priority of a product team. My first iteration of the guided pop-up was based off of an existing admin pop-up component and as a result was hard to differentiate from the existing LIV UI. Not to mention, creating a new component doesn’t always require truck loads of development effort. If a new component can provide more value to the user than the original, then who’s to say it isn’t worth developing? Big ideas and designs only get reigned in and reduced on their way to implementation, so why not start big?
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
              <div className="heading">
              Takeaway - Take the time to document for developers
              </div>
              </div>
              <p>
              No matter how intuitive design implementation may be to yourself and your fellow designers, there is no guarantee that the developers are in the same boat. In fact, it’s almost guaranteed that they’re in a completely different ship. After all, they have a fresh pair of eyes and they haven't contemplated this design for 72 hours like you have. Avoid the heartache and take the time to explain your process. Thoroughly comment, prototype and document interactions along with exact padding sizes to save your team time and effort in the long-run.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <div className="heading">
                If I had more time, I would expand the key feature list.
                </div>
              </div>
              <p>
              The two guided tutorials within this trial can serve as the foundation for an interactive onboarding tutorial. As they have already bought into LIV services, onboarding customers would likely have more interest and incentive in learning about each feature. Adding tutorials, with the same components, for amenity booking, visitor assignment and everything else could help reduce the troubleshooting burden on the sales team — which will be increasingly important as Unify continues to scale. Beyond just our team, this feature would significantly help customers as they’re able to receive real-time feedback and guidance on how to use our features.
              </p>
            </div>
            <ThanksSection
            title1={'Flow'}
            tag1={'Case Study'}
            miniThumb1={miniFlow}
            link1={'/flow'}
            title2={'Don Efficace'}
            tag2={'Product'}
            miniThumb2={miniDE}
            link2={'/donEfficace'}            
            showWork={true}
            />
        </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from "react";
import ModalImage from "react-modal-image";
import CtaButton from '../components/CtaButton/CtaButton';
import HoverPopUp from '../components/HoverPopUp/HoverPopUp.jsx'
import ImageToggle from '../components/ImageToggle/imageToggle.jsx'
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniDE from '../assets/Images/mini-de-thumb-simple.png'
import miniFlow from '../assets/Images/mini-flow-thumb-simple.png'
import figureOne from '../assets/Images/persona/plg-funnel.png'
import figureTwoOne from '../assets/Images/persona/persona-two-one.png'
import figureTwoTwo from '../assets/Images/persona/persona-two-two.png'
import figureThreeOne from '../assets/Images/persona/persona-three-one.png'
import figureThreeTwo from '../assets/Images/persona/persona-three-two.png'
import figureFour from '../assets/Images/liv/liv-four.jpg'
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
            Building Persona's PLG strategy with a Growth Design Toolkit
          </div>
          <div className="context">
            <div className="ht-pair">
              <div className="heading">My Role</div>
              <p>Product Design Intern</p>
            </div>
            <div className="ht-pair">
              <div className="heading">What is Persona?</div>
              <div>
              <p>
                <b>Persona is a leading identity platform that helps companies verify and manage customer identities,
                detect fraud, and stay compliant</b>. It provides a flexible and configurable suite of tools, 
                from document and database checks to orchestration and case management, that businesses, like 
                Walmart, DoorDash and OpenAI can tailor to their specific trust and safety needs.
              </p>
              </div>
            </div>
            <div className="ht-pair">
              <div className="heading">The tl;dr</div>
              <div>
              <p>
                Growth at Persona had no dedicated design support, leading to inconsistent, unoptimized touchpoints 
                across a $6M annualized PLG pipeline. Users struggled with awareness, education, and discoverability, 
                which left revenue opportunities uncaptured.
              </p>
              <p>
                <b>I created a growth design toolkit with reusable components</b> — including product tours, growth cards, 
                gated feature patterns, and a revamped self-serve flow — <b>to establish consistency, improve in-product 
                education, and make upsell opportunities clearer.</b> This work laid the foundation for a scalable, 
                user-centered PLG strategy at Persona.
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
          title={'Setting the Scene'}/>
          <div className="the-problem-body ht-pair">
            <div className="heading">
            Growth design @ Persona is democratized across product teams.{" "}
            </div>
            <p>
                This leaves the implementation of growth strategies up to individual contributors on siloed teams, {" "}
                <b>resulting in an increasing pile-up of inconsistent and unoptimized growth touchpoints.</b> 
            </p>
            <p> 
                Furthermore, growth design content isn’t typically tied to core product functionality. It discusses 
                plan pricing, feature access and education opportunities, which stand out from the rest of the core product 
                functionality and as a result, it would benefit from having a consistent visual language of its own.
            </p>
          </div>
        </div>
        <div className="sub-section the-problem">
          <Divider
          title={"Growth Design's Role in Acquisition"}/>
          <div className="the-problem-body ht-pair">
            <div className="heading">
                PLG is only half of the equation.{" "}
            </div>
            <p>
                Persona’s small and medium-sized business (SMB) funnel consists of hands-on sales processes, led by sales 
                teams, and more hands-off Product-Led Growth (PLG) strategies motioned by Growth.
            </p>
            <p> 
                <b>Hands-on processes are highly effective, bringing in the majority of revenue quarter to quarter, 
                but they’re also resource-intensive</b>. They require SDRs, account executives, sales engineers and countless 
                other hands to close deals, which makes lead prioritization and resource rationing a necessary evil.
            </p>
            <p> 
                <b>PLG is the winning strategy for smaller clients that aren’t scooped up by our sales team, oftentimes, 
                venture-backed startups with growing use cases</b>. This is where we win small deals and increase client 
                spend marginally over a large volume aggregate. The problem is that we don’t have a dedicated PLG strategy 
                or the design resources to capitalize on it.

                I NEED TO ADD AN IMAAAAAAAAAAGGGGGGGEEEEEEEEEEE
            </p>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'Key Pain Points'}/>
          <div className="key-pain-points-body">
            {/* <div className='pain-point ht-pair'>
                <p style={{fontSize: '20px'}}> I identified 3 key objectives after discussing the my intentions for the project with the product manager, senior designer and marketing team.  </p>
            </div> */}
            <div className="pain-point ht-pair">
                <div className="heading">
                    "Customers aren’t going to increase their monthly spend by $1000, just because something looks good.”
                </div>
                <p>
                    Although the designer in me winces at this statement, its true for most products, and is especially 
                    prevalent in the space of compliance, trust & safety, and fraud prevention. The demand for Persona's 
                    products are largely driven by external requirements and regulations, which makes it <b>essential for clients 
                    to have a strong conviction in the value of a feature to increase their spend. </b>
                </p>
            </div>
            <div className="pain-point ht-pair">
                <div className="heading">
                    "Customers use different words, not <i>I want AAMVA verification.</i>"
                </div>
                <p>
                    Persona also has an understanding problem: most users don’t speak the same language as our team and product. 
                    No one asks for “AAMVA verification”, they say, “I want to verify driver’s licenses.”, which <b>creates a critical 
                    gap in understanding between key users and the services they may need.</b>
                </p>
            </div>

            <div className="pain-point ht-pair">
                <div className="heading">
                    "When I used Persona at [my last company], we didn’t know what options we had"
                </div>
                <p>
                    Persona also has a discoverability issue, where users often don’t know what’s available to them. This is similar 
                    to the previous pain point, but is not an issue with presentation, but where content is available, highlighting 
                    our <b>need to improve feature discoverability and socialization.</b>
                </p>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Buyer's Mental Model"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
              <div className="heading">
                Several boxes need to be checked before making a purchase
              </div>
                <p>
                  The funnel begins with the user's awareness of their options — both what they currently have and what they 
                  could purchase — and then moves into education. Through education, we aim to build genuine conviction in the 
                  value of our features for their specific use case. From there, users enter the decision stage, where our 
                  goal is to make their path towards attaining the feature as simple as possible, thus maximising the number 
                  who move through to purchase.
                </p>
                <div 
                    className='image-container-new' 
                    style={{
                        margin: '0 auto', 
                        maxWidth: '480px', 
                        width: '100%',
                        marginTop: '32px'
                    }}
                    >
                    <img src={figureOne} 
                    style={{ 
                        width: '100%'
                    }}/>
                </div>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Diagnosis"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
              <div className="heading">
                Persona’s existing growth design only addresses the first and last phases of this funnel. 
              </div>
                <p>
                  Our teal ‘limited’ badges communicate their access to a given feature, but it doesn’t help the user understand 
                  the feature and lacks a clear, actionable next step.
                </p>
                <div
                    style={{ cursor: "pointer" }}
                >
                    <ImageToggle
                        images={[figureTwoOne, figureTwoTwo]} 
                        altText="Gated Feature Badge Critique"
                    />
                </div>
            </div>
            <div className='pain-point ht-pair'>
                <p>
                  Our self-serve flow guides the user from the desired feature to a persona inquiry, verifying their identity and 
                  finalizing their purchase. However, the flow has dead ends, leading to unnecessary drop off, and has limited 
                  portability since it can only be triggered by an active CTA or a clickable parent container.
                </p>
                <div
                    style={{ cursor: "pointer" }}
                >
                    <ImageToggle
                        images={[figureThreeOne, figureThreeTwo]} 
                        altText="Upsell Flow Primary Modal Critique"
                    />
                </div>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points" id="theSolution">
          <Divider
          title={"The Solution"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <div className='heading'>
                    Striking a balance between sandbox and guided tutorial experiences
                </div>
                <p>
                  Based on insights from the competitive analysis, I determined that it would be best to combine guided elements of a tutorial with the autonomy provided by an open sandbox 
                  environment. <b>This allows new users to build confidence by successfully completing routine tasks through feature walkthroughs and then snowball the small wins with unguided 
                  exploration within the sandbox environment to mimic a more realistic usage.</b> This creates a much better experience for users who are 
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
                  and resident count. Following the short questionnaire, they’re shown how the trial will work -- learning how to progress, go back and where to find the free trial menu for 
                  further navigation. Once introduced, the user completes two guided feature walkthroughs before getting unrestricted access to the sandbox. <b>See the simplified CX journey flow below.</b>
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
                <p>I went through two main pop-up design iterations. <b>Click through below to see the changes and their rationale.</b> Along with the pop-ups, 
                I also iterated through various animations for responsive interaction feedback. I started with an oscillating purple highlight and ended with a much simpler blue 
                bordered highlight as it fit more within the design scheme and would be an easier development implementation without any significant trade-offs. I worked through 
                these visual design changes with the mentorship and feedback of the senior designer and our development team to ensure the quality and feasibility 
                of design choices. 
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
                  The key to writing content for the guided tutorial was understanding that <b>every feature, action, or concept would be entirely new to the user</b>. Although obvious, this reality cannot be stated enough. I made sure to use simple language and short sentences, prioritizing concise, context-driven copy to explain actions and not concepts. 
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
                  Users are bound to have different interests or needs, so the trial was modularly designed to promote roaming and exploration. This keeps users engaged by avoiding an 
                  impersonal and linear tutorial experience. The free trial menu enables users to navigate between any section within the guided tutorial or enter the open sandbox. 
                  It is universally available as an overlay in the bottom right of the user’s screen and displays user progress along with secondary actions like booking a demo or 
                  providing feedback. View the below prototypes to see the first and last iteration.
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
                {/* <p>
                Although the product hasn’t launched yet, we are confident that providing a high-quality experience during the free trial will directly improve conversion rates. By showcasing the LIV platform’s value upfront, we aim to convert users into paying customers and enable our sales team to engage with more interested leads.
                </p> */}
                <p>
                To enhance and simulate ongoing user engagement, we integrated email notifications into the sandbox experience. For instance, users who schedule a maintenance service during the trial will receive automated email updates when a technician accepts and completes the job. This showcases the value of the platform’s behind-the-scenes automation and highlights the time saved for the user, helping to drive conversions by mimicking real-world usage.
                </p>
                <p>
                To maintain the quality of the trial experience, I collaborated with the development team to ensure that A/B testing can be implemented once it is shipped and analytics become available. I wrote development tickets illustrating the functionality of splitting users into test groups and tracking variable performance, which will be used to habitually assess and improve its interaction/visual design where needed. I also advocated for usability testing, which will provide richer context beyond the short round of feedback provided in the trial.
                </p>
                <p style={{fontSize: '20px'}}>
                Check back soon! When the trial is shipped, I'll link it here, so you can take a look for yourself. 
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
              Working within a design system is great for maintaining consistency and reducing development effort, but these are not always the priority of a product team. My first iteration of the guided pop-up was based off of an existing admin pop-up component and as a result was hard to differentiate from the existing LIV UI. Not to mention, creating a new component doesn’t always require truck loads of development effort. If a new component can provide more value to the user than the original, then who’s to say it isn’t worth developing? Big ideas and designs only get reigned in and reduced on their way to implementation, so why not start big?
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

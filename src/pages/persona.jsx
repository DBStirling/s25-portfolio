import React, { useState } from "react";
import ModalImage from "react-modal-image";
import CtaButton from '../components/CtaButton/CtaButton';
import HoverPopUp from '../components/HoverPopUp/HoverPopUp.jsx'
import ImageToggle from '../components/ImageToggle/imageToggle.jsx'
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniLIV from '../assets/Images/mini-liv-thumb-simple.png'
import miniFlow from '../assets/Images/mini-flow-thumb-simple.png'
import figureOne from '../assets/Images/persona/plg-funnel.png'
import figureTwoOne from '../assets/Images/persona/persona-two-one.png'
import figureTwoTwo from '../assets/Images/persona/persona-two-two.png'
import figureThreeOne from '../assets/Images/persona/persona-three-one.png'
import figureThreeTwo from '../assets/Images/persona/persona-three-two.png'
import figureFour from '../assets/Images/persona/growth-card-one.png'
import figureFive from '../assets/Images/persona/growth-card-two.png'
import figureSix from '../assets/Images/persona/growth-card-three.png'
import figureSeven from '../assets/Images/persona/illustration-bank.png'
import figureEight from '../assets/Images/persona/plan-illustrations.png'
import figureNine from '../assets/Images/persona/self-serve-flow.png'



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
            Building Persona's Product-Led Growth (PLG) strategy with a Growth Design Toolkit
          </div>
          <div className="context">
            <div className="ht-pair">
              <div className="heading">My Role</div>
              <p>Product Design Intern - I led this project with the help of many Personerd critiques :)</p>
            </div>
            <div className="ht-pair">
              <div className="heading">What is Persona?</div>
              <div>
              <p>
                <b>Persona is a leading identity platform that helps companies verify and manage customer identities,
                detect fraud, and stay compliant</b>. It provides a flexible and configurable suite of tools, 
                from document and database checks to orchestration and case management, that businesses can tailor to 
                their specific trust and safety needs. Persona is a leader in this space, with major clients such as 
                Walmart, DoorDash and Lyft.
              </p>
              </div>
            </div>
            <div className="ht-pair">
              <div className="heading">The tl;dr</div>
              <div>
              <p>
                Growth at Persona doesn't have dedicated design support, leading to inconsistent, unoptimized touchpoints 
                across a $6M annualized Product-Led Growth (PLG) pipeline. Users struggle with product awareness, education, and discoverability, 
                leaving useful features and revenue opportunities uncaptured.
              </p>
              <p>
                <b>I created a growth design toolkit with reusable components</b> — including product tours, growth cards, 
                feature gating patterns, an illustration bank and a revamped self-serve flow — <b>to establish consistency, improve in-product 
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
            <p style={{fontSize: '20px'}}>
                This leaves the implementation of growth strategies up to individual contributors on siloed teams, {" "}
                <b>resulting in an increasing pile-up of inconsistent and unoptimized growth touchpoints.</b> 
            </p>
            {/* <p> 
                Furthermore, growth design content isn’t typically tied to core product functionality. It discusses 
                plan pricing, feature access and education opportunities, which stand out from the rest of the core product 
                functionality and as a result, it would benefit from having a consistent visual language of its own.
            </p> */}
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
                teams, and more hands-off PLG strategies motioned by Growth.
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
                    prevalent in the space of compliance, trust & safety, and fraud prevention, where customer demand  
                    is largely driven by external requirements and regulations. This makes it harder to increase client 
                    spend, at ultimately <b>requires Persona to truly prove valuable to users and build conviction in 
                    those who are on the fence.</b>
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
                  could purchase — and then moves into education. <b>Through education, we aim to build genuine conviction in the 
                  value of our features for their specific use case.</b> From there, users enter the decision stage, where our 
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
                  the feature and lacks a clear, actionable next step. <em>P.S. Click on the images for critique</em>
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
        {/* <div className="sub-section key-pain-points" id="theSolution">
          <Divider
          title={"Defining Success"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair'>
                <p>
                  The challenge is that users’ needs vary, and they engage with features at different stages of the funnel. Rather 
                  than a single flow or branching path, <b>the solution needs to be woven throughout the product</b> — surfacing value over 
                  time, slowly winning users over and engaging with them when they’re ready. <b>To be successful, we must:</b>
                </p>
                <div className='heading'>
                  1. Improve Awareness: clearly show users what they do and don’t have access to.
                </div>
                <div className='heading'>
                  2. Improve education: build conviction in the value of desired features.
                </div>
                <div className='heading'>
                  3. Expand growth touchpoints: ensure coverage across every phase of the funnel simultaneously.
                </div>
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
        </div> */}
        <div className="sub-section key-pain-points">
          <Divider
          title={'Defining Success'}/>
          <div className="key-pain-points-body">
            <p style={{fontSize: '20px'}}>
              The challenge is that users’ needs vary, and they engage with features at different stages of the funnel. Rather 
              than a single flow or branching path, <b>the solution needs to be woven throughout the product</b> — surfacing value over 
              time, slowly winning users over and engaging with them when they’re ready. To be successful, we must:
            </p>
            <div className='row-container'
                style={{display: 'flex', flexDirection: 'row', width: "100%", gap: "64px"}}
                >
                <div className="pain-point ht-pair">
                  <div className="heading">
                    1. Improve Awareness
                  </div>
                    <p>
                      Clearly show users what they do and don’t have access to, while socializing other useful parts of the product.
                    </p>
                </div>
                <div className="pain-point ht-pair">
                  <div className="heading">
                    2. Improve Education
                  </div>
                    <p>
                      Teach users how features benefit them and build genuine conviction in the value of the features.
                    </p>
                </div>
                <div className="pain-point ht-pair">
                  <div className="heading">
                    3. Expand Growth Touchpoints
                  </div>
                    <p>
                      Ensure growth design elements across the product cover every phase of the expansion funnel, such that users 
                      always have access to a growth touchpoint.
                    </p>
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
                  1 solution, 5 tools
                </div>
                <p style={{fontSize: '20px'}}>
                  The growth design toolkit includes <b>product tours, growth cards, an illustration bank, feature gating and an improved self-serve flow</b>,
                  that the growth team can apply across different product areas. I created components and rule sets for their 
                  application, allowing the team to stay mobile and work on the fly while remaining grounded in a consistent 
                  visual design language.
                </p>
                <div className="heading" style={{ marginTop: '32px' }}>
                  Product Tours
                </div>
                <p>
                  Created a product tour design system as the <b>go-to tool for in-product education</b>, as it explains features 
                  and updates within the context of the app. <em>P.S. go full screen on the prototype</em>
                </p>
                <div className='pain-point ht-pair' style={{ textAlign: 'left' }}>
                      <div className="protopype-container">
                        <div className="prototype" style={{width: '100%', maxWidth: '800px', marginBottom: '24px'}}>
                        <iframe
                            className="actual-prototype"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)",}}
                            width="800px"
                            height="600px"
                            src="https://embed.figma.com/proto/5d0uL476UvbRxoL3VOOqsD/Product-Tours?page-id=755%3A5805&node-id=927-29291&viewport=-1841%2C75%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=927%3A29291&embed-host=share"
                            allowFullScreen="true"
                        />
                      </div>
                        {/* <ul style={{paddingLeft: '0', listStylePosition: 'inside', fontSize: '20px' }}>
                        <li style={{ marginBottom: '12px' }}>The pulsing highlight grabs attention and visually elevates the popover</li>
                        <li style={{ marginBottom: '12px' }}>The box highlight is more precise than the traditional popover carat</li>
                        <li style={{ marginBottom: '0px' }}>The popover is designed as a 'fork' of our existing modal styles</li>
                      </ul> */}
                    </div>
                </div>
                <div className="heading" style={{ marginTop: '32px' }}>
                  Growth Cards
                </div>
                <p>
                  Created an embedded card style to socialize information and resources within the product, linking product tours, help 
                  centre articles and product release notes.
                </p>
                <ModalImage
                    style={{ width: '100%'}}
                    // className='summary-img'
                    small={figureFour}
                    large={figureFour}
                    alt="Home Page Card"
                    hideDownload={true}
                    imageBackgroundColor={"white"}
                />
                <ModalImage
                    style={{ width: '100%'}}
                    // className='summary-img'
                    small={figureFive}
                    large={figureFive}
                    alt="Solution Library Card"
                    hideDownload={true}
                    imageBackgroundColor={"white"}
                />
                <ModalImage
                    style={{ width: '100%'}}
                    // className='summary-img'
                    small={figureSix}
                    large={figureSix}
                    alt="Gated Feature Card"
                    hideDownload={true}
                    imageBackgroundColor={"white"}
                />
                <div className="heading" style={{ marginTop: '32px' }}>
                  Illustration Bank
                </div>
                <p>
                  Created an illustration bank for the growth team to use in conjunction with the growth cards, working closely with our 
                  Brand team to update existing work and revamp our plan illustrations.
                </p>
                <ModalImage
                    style={{ width: '100%'}}
                    // className='summary-img'
                    small={figureSeven}
                    large={figureSeven}
                    alt="Illustration Bank"
                    hideDownload={true}
                    imageBackgroundColor={"white"}
                />
                <ModalImage
                    style={{ width: '100%'}}
                    // className='summary-img'
                    small={figureEight}
                    large={figureEight}
                    alt="Solution Library Card"
                    hideDownload={true}
                    imageBackgroundColor={"white"}
                />
                <div className="heading" style={{ marginTop: '32px' }}>
                  Feature Gating
                </div>
                <p>
                  Redesigned how gated features are presented, making limited access clear while balancing upsell opportunities and overall 
                  visual hierarchy. <em>P.S. Go full screen in the top right of the prototype</em>
                </p>
                <div className="protopype-container">
                  <div className="prototype" style={{width: '100%', maxWidth: '800px', marginBottom: '24px'}}>
                  <iframe
                      className="actual-prototype"
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)",}}
                      width="800px"
                      height="600px"
                      src="https://embed.figma.com/proto/blkaL1r2yg3A98IfiVm7UI/%F0%9F%94%A7-Growth-Toolkit?page-id=431%3A28426&node-id=787-27471&viewport=-2535%2C1899%2C0.31&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=787%3A27471&embed-host=share"
                      allowFullScreen="true"
                  />
                </div>
                <div className="heading" style={{ marginTop: '32px' }}>
                  Self-Serve Flow
                </div>
                <p>
                  Reworked the self-serve flow to improve plan value propositions, content writing and cut out high-friction steps.
                </p>
                <ModalImage
                    style={{ width: '100%'}}
                    // className='summary-img'
                    small={figureNine}
                    large={figureNine}
                    alt="Illustration Bank"
                    hideDownload={true}
                    imageBackgroundColor={"white"}
                />
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={"Post Design"}/>
          <div className="key-pain-points-body">
            <div className='pain-point ht-pair' style={{ textAlign: 'left' }}>
              <div className='heading'>
                Using metrics to inform design decisions
              </div>
              {/* <p style={{fontSize: '20px'}}> */}
              <p>
                This project was an exciting opportunity to bring intentional design into a $6M annualized PLG pipeline that has seen little 
                design love. Although my work isn't on prod yet, I discussed tests with the team before leaving and <b>outlined key metrics </b>that 
                could inform future design decisions. <b>I also left design variants that can be used to swap out on production and 
                continue the iterative testing.</b>
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
                  What I would do with more time
                </div>
              </div>
              <p>
                With more time, <b>I’d extend this work into a full overhaul of Persona’s solution library.</b> This tool lets users add 
                out-of-the-box solutions to their implementation, substantially lowering the bar of education. It would pair naturally 
                with my efforts to improve in-product education. At the end of the day, clever design and intentional content writing 
                can only go so far, and the solution library is where we can bridge the gap between learning and doing.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
              <div className="heading">
                Key learning
              </div>
              </div>
              <p>
                One of my biggest takeaways was how to present designs for feedback and handle the variety of perspectives that come 
                with it. <b>Feedback is invaluable, but it needs to be contextualized,</b> by understanding who it’s coming from, what lens they’re 
                looking through, and which parts are most relevant to them. I learned to take input with a grain of salt, filter it through the 
                problem I was solving, and use it to critically inform the next iteration of my designs.
              </p>
            </div>
            <ThanksSection
                title1={'LIV'}
                tag1={'Product'}
                link1={'/liv'}
                miniThumb1={miniLIV}
                title2={'Flow'}
                tag2={'Case Study'}
                miniThumb2={miniFlow}
                link2={'/flow'}
                showWork={true}
            />
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

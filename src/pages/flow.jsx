import React from 'react'
import ModalImage from "react-modal-image";
import CtaButton from '../components/CtaButton/CtaButton';
import ImageToggle from '../components/ImageToggle/imageToggle.jsx'
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniDE from '../assets/Images/mini-de-thumb-simple.png'
import miniMFP from '../assets/Images/mini-mfp-thumb-simple.png'
import figureOne from '../assets/Images/flow/flow-one.png'
import figureTwoOne from '../assets/Images/flow/flow-two-one.png'
import figureTwoTwo from '../assets/Images/flow/flow-two-two.png'



import "../styles/caseStudy.css"

export default function flow() {

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
                <p>
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

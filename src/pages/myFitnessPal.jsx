import React from 'react'
import CtaButton from '../components/CtaButton/CtaButton';
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection.jsx'
import oldNewSolution from '../assets/Images/mfp/old-new-solution.png'
import chatSolution from '../assets/Images/mfp/chat-solution.png'
import noomLogo from '../assets/Images/mfp/noom-icon.png'
import fitBitLogo from '../assets/Images/mfp/fitbit-icon.png'
import LoseItLogo from '../assets/Images/mfp/loseit-icon.png'
import LifesumLogo from '../assets/Images/mfp/lifesum-icon.png'
import hmw11 from '../assets/Images/mfp/hmw1-1.png'
import hmw12 from '../assets/Images/mfp/hmw1-2.png'
import hmw13 from '../assets/Images/mfp/hmw1-3.png'
import hmw14 from '../assets/Images/mfp/hmw1-4.png'
import hmw21 from '../assets/Images/mfp/hmw2-1.png'
import hmw22 from '../assets/Images/mfp/hmw2-2.png'
import hmw23 from '../assets/Images/mfp/hmw2-3.png'
import hmw31 from '../assets/Images/mfp/hmw3-1.png'
import hmw32 from '../assets/Images/mfp/hmw3-2.png'
import hmw33 from '../assets/Images/mfp/hmw3-3.png'
import hmw34 from '../assets/Images/mfp/hmw3-4.png'
import hmw35 from '../assets/Images/mfp/hmw3-5.png'
import hmw36 from '../assets/Images/mfp/hmw3-6.png'
import diaryChanges from '../assets/Images//mfp/diary-changes.png'
import discoverChanges from '../assets/Images/mfp/discover-changes.png'
import oldImage from '../assets/Images/mfp/old-plans-page.png'
import newImage from '../assets/Images/mfp/new-plans-page.png'
import discoverPage from '../assets/Images/mfp/discover-page.png'
import chatPage from '../assets/Images/mfp/alex-chat-page.png'
import wrenchIcon from '../assets/Images/mfp/wrench-icon.png'
import targetIcon from '../assets/Images/mfp/target-icon.png'
import groupIcon from '../assets/Images/mfp/group-icon.png'

import "../styles/caseStudy.css"

export default function myFitnessPal() {

  // function scrollToPrototype() {
  //   const section = document.getElementById('prototypeSection');
  //   const sectionPosition = section.offsetTop; // Get the top position of the section
  //   window.scrollTo({
  //     top: sectionPosition,
  //     behavior: 'smooth' // Smooth scrolling behavior
  //   });
  // }

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
            Revamping MyFitnessPal’s User Experience to Motivate Disgruntled Users
            &amp; Better Fit Business Needs
          </div>
          <div className="context">
            <div className="ht-pair">
              <div className="heading">My Role</div>
              <p>Complete solo project that I worked on from December 2023 to April 2024 over two main design sprints.</p>
            </div>
            <div className="ht-pair">
              <div className="heading">What is MyFitnessPal?</div>
              <div>
              <p>Millions of people use MyFitnessPal to log their meals and track calories on a daily basis, providing users’ with in-depth breakdowns of their day-to-day nutrition and their progress in achieving goals. </p>
              <p>It also helps users find workouts, recipes and fitness communities through a Discover feature. Additionally, the Plans page provides long-term step-by-step eating and exercise solutions.</p>
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
              After acquiring MyFitnessPal in 2020, Francisco Partners introduced
              major changes that prioritized profitability and left the needs of users
              on the backburner.{" "}
            </div>
            <p>
            The private equity firm hid key features, such as barcode scanning, behind
            premium subscriptions, increased the number of external advertisements and
            implemented additive features that did not address primary use cases for
            users. The addition of these changes over the years created an
            increasingly more disjointed user experience as the interface was not
            reworked to address the differences.
            </p>
          </div>
        </div>
        <div className="sub-section the-solution">
          <Divider
          title={'the solution'}/>
          <div className="the-solution-body">
            <div className='solution-column'>
              <div className="solution-item ht-pair">
                <div className="heading">1. Revamped Landing Page</div>
                <ul>
                  <li className='list-item-cs'>
                    Combined <em>Food Log, Nutrition</em> and <em>Progress </em>into a
                    Diary landing page.{" "}
                  </li>
                  <li  className='list-item-cs'>
                    Added a side scroll to quickly access recent meals and nutrition.
                  </li>
                  <li  className='list-item-cs'>
                    For the average user who is logging their calories and tracking
                    their progress on a daily basis,{" "}
                    <b>
                      this landing page provides quick access to all necessary use
                      cases.
                    </b>
                  </li>
                  <ul style={{ marginLeft: 20 }}>
                    <li  className='list-item-cs'>
                      MyFitnessPal is primarily a calorie-counting app. By reducing
                      the friction for using these calorie-counting features,
                      long-time users are serviced and newcomers will be able to
                      overcome the learning curve much quicker.{" "}
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="solution-item ht-pair">
                <div className="heading">2. Updated Navigation Bar</div>
                <ul>
                  <li  className='list-item-cs'>
                    <b>
                      The updated navigation bar emphasizes the Discover and Plans
                      pages.
                    </b>{" "}
                    These pages, which increase user retention and promote premium
                    subscriptions, are now more accessible to users who previously
                    struggled to find them.
                  </li>
                  <li  className='list-item-cs'>
                    The <em>Newsfeed</em> was removed from the navigation bar to
                    prevent clutter and make room for a universal quick add button.
                  </li>
                  <ul style={{ marginLeft: 20 }}>
                    <li  className='list-item-cs'>
                      The universal quick add button allows users to add foods,
                      exercises and even water intake from any page within the app!
                      This addition services the calorie-counting function of the app,
                      as well.
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="solution-image-container">
                <img
                  src={oldNewSolution}
                  alt="solution images with brief description"
                />
              </div>
            </div>
            <div className="solution-column">
              <div className="solution-image-container">
                <img
                  src={chatSolution}
                  alt="solution images with brief description"
                />
              </div>
              <div className="solution-item ht-pair">
                <div className="heading" style={{ gap: 8 }}>
                  3. Introducing Alex, your Personal Fitness Persona!
                </div>
                <ul>
                  <li  className='list-item-cs'>
                    <b>Alex helps onboard users to the world of fitness.</b> They can
                    curate meal recommendations that fit users’ unique dietary goals
                    and helps you navigate the confusing path on the way to a healthy
                    lifestyle.{" "}
                  </li>
                  <li  className='list-item-cs'>
                    Alex serves as an accountability partner for users struggling to
                    stick to their routine or diet. As they can keep up with users on
                    a personal basis, Alex can resonate with users and build trust all
                    while proving to be a reliable source of health information.{" "}
                  </li>
                  <li  className='list-item-cs'>
                    Leveraging already-gathered data (vast databases of recipes,
                    exercises and fitness concepts) to create a generative AI chatbot.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-section user-research">
          <Divider
          title={'user research'}/>
          <div className="user-research-body">
            <div className="user-research-text ht-pair">
              <div className="heading">
                Many users are intimidated, confused, annoyed or all of the above when
                using the app.
              </div>
              <p>
              I interviewed three MyFitnessPal users to get a better insight into what
              works well and what doesn’t. In addition, I consulted online forums,
              such as App Store Reviews and Reddit, to validate interviewee concerns
              and to hedge potential blind spots that were not discussed. Take a
              scroll below to see some of the insights!
              </p>
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'key pain points'}/>
          <div className="key-pain-points-body">
            <div className="pain-point ht-pair">
              <div className="heading">
                1. There is a poor balance between user and business needs
              </div>
              <p>
              Long-term users, in particular, feel that too much of the app has been
              hidden by premium access. This has greatly limited the value and
              usability of the app.
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">
                2. There is a lack of motivational factors
              </div>
              <p>
              Consistently eating the right foods is hard, but the act of logging it
              into MyFitnessPal isn’t it. Users need a stronger source of motivation
              than just the days logged streak. It is not enough to motivate users to
              stick to their health plans and continue using MyFitnessPal.
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">
                3. Becoming health-conscious is confusing
              </div>
              <p>
              New users want to improve their habits through MyFitnessPal but it's
              difficult to know where to start and even harder to find trustworthy
              knowledge sources along the way.&nbsp;
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">
                4. It’s difficult to navigate the app
              </div>
              <p>
              Navigating through the app proves challenging due to its complex layout
              and lack of intuitive design cues.
              </p>
            </div>
          </div>
        </div>
        <div className="sub-section lit-analysis">
          <Divider
          title={'literary analysis'}/>
          <div className="lit-analysis-body ht-pair">
            <div className="heading" style={{ gap: 8 }}>
              Accountability Partners: "A 5% chance of NOT achieving your goal”
            </div>
            <div>
              <p className="lit-analysis-text">
                conducting user interviews, I began researching articles discussing
                topics in motivation, commitment and achievement. The white paper
                research helped assign concepts to what I had learned in the
                interviews and occasionally provided a better insight into the demands
                of those looking to change their lives for the better. Most insightful
                of all was this statistic from the
                {/* <a href="https://www.afcpe.org/news-and-publications/the-standard/2018-3/the-power-of-accountability/">
                        American Society of Training and Development. </a> */}
                American Society of Training and Development
              </p>
              <p>
                <b> When making the conscious decision to achieve a goal, you only have
                  a 40% likelihood of succeeding. However, when you have scheduled
                  appointments with an accountability partner, the odds jump to 95%!
                </b>        
                <a href="https://www.afcpe.org/news-and-publications/the-standard/2018-3/the-power-of-accountability/">
                  Source
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="sub-section competitive-analysis">
          <Divider
          title={'competitive analysis'}/>
          <div className="competitive-analysis-body">
            <div className="competitive-analysis-text ht-pair">
              <div className="heading">
                Competitors are solving the same issues in more innovative ways.
              </div>
              <p>
                Since the early 2010s, MyFitnessPal has been the go-to calorie
                counting app on the market. This leading status in conjunction with
                its largest-in-market food databases have afforded it a decade-long
                market advantage. However, this advantage will diminish over years of
                stagnation as competitors innovatively tailor their solutions to user
                needs.&nbsp;
              </p>
              <p>
                Noom focusses on the psychology of weight loss. It has successfully
                founded its platform on instilling sources of intrinsic motivation in
                users. Additionally, Fitbit leverages its hardware to provide physical
                insights that its calorie-counting competitors cannot match.
                Conversely, Lose It! and Lifesum are the most comparable to
                MyFitnessPal. They provide a nearly-identical user experience but have
                yet to remove key features from users on free plans.
              </p>
            </div>
            <div className="competitor-icon-container">
              <div className="competitor-identifier">
                <img
                  className="competitor-icon"
                  src={noomLogo}
                  alt="Noom logo"
                />
                <div>Noom</div>
              </div>
              <div className="competitor-identifier">
                <img
                  className="competitor-icon"
                  src={fitBitLogo}
                  alt="Fitbit logo"
                />
                <div>FitBit</div>
              </div>
              <div className="competitor-identifier">
                <img
                  className="competitor-icon"
                  src={LoseItLogo}
                  alt="Lose It! logo"
                />
                <div>Lose It!</div>
              </div>
              <div className="competitor-identifier">
                <img
                  className="competitor-icon"
                  src={LifesumLogo}
                  alt="LifeSum logo"
                />
                <div>LifeSum</div>
              </div>
            </div>
            <div className="competitive-analysis-text ht-pair">
              <div className="heading">SWOT Analysis</div>
              <p>
                A SWOT analysis is a strategic planning tool used to assess the
                strengths, weaknesses, opportunities, and threats related to a
                project, business venture, or in this case, a UX design. It was
                employed to help identify internal and external factors that may
                positively or negatively impact the success of this redesign. As it
                provides a top-level approach, SWOT analysis allow individuals to draw
                a variety of conclusions which must be further fleshed out in their
                own right.
              </p>
            </div>
            <div className="swot-container">
              <div className="swot-card ht-pair">
                <div className='heading'>Strengths</div>
                <ol>
                  <li className='list-item-cs'>Largest food databases in market.</li>
                  <li className='list-item-cs'>Among calorie counting apps, it has competitive exercise databases.</li>
                  <li className='list-item-cs'>Largest market share among calorie counting apps (40%).</li>
                </ol>
              </div>
              <div className="swot-card ht-pair">
                <div className='heading'>Weaknesses</div>
                <ol>
                  <li className='list-item-cs'>Reliance on user-generated inputs to maintain food and exercise databases. </li>
                  <li className='list-item-cs'>As long as MyFitnessPal maintains its large market share, this issue is kept at bay.</li>
                </ol>
              </div>
              <div className="swot-card ht-pair">
                <div className='heading'>Opportunities</div>
                <ol>
                  <li className='list-item-cs'>Personalized recommendations, leveraging its extensive databases.</li>
                  <li className='list-item-cs'>Expanding beyond calorie tracking, providing meal and exercise planning options.</li>
                  <li className='list-item-cs'>Implement features which utilize the advantages of having an accountability partner.</li>
                </ol>
              </div>
              <div className="swot-card ht-pair">
                <div className='heading'>Threats</div>
                <ol>
                  <li className='list-item-cs'>The lack of psychological motivators in getting users to stay on track with their fitness plans (effectively used by noom).</li>
                  <li className='list-item-cs'>Feedback on eating & lifestyle decisions are purely numerical via calories or grams eaten over or under the goal amount.</li>
                  <li className='list-item-cs'>Doesn’t focus on habit building to promote consistency (effectively used by LifeSum).</li>
                </ol>
              </div>
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
            <div className="hmw-section">
              <div className="hmw-indiv-section">
                <div className="heading centered-text">
                  How might we make the fitness world less intimidating for users?
                </div>
                <div className="hmw-container ">
                  <img className="hmw" src={hmw11} />
                  <img className="hmw" src={hmw12} />
                  <img className="hmw" src={hmw13} />
                  <img className="hmw" src={hmw14} />
                </div>
              </div>
              <div className="hmw-indiv-section">
                <div className="heading centered-text">
                  How might we implement accountability partners to increase user
                  motivation and success rates?
                </div>
                <div className="hmw-container">
                  <img className="hmw funky-sizing" src={hmw21} />
                  <img className="hmw funky-sizing" src={hmw22} />
                  <img className="hmw funky-sizing" src={hmw23} />
                </div>
              </div>
              <div className="hmw-indiv-section">
                <div className="heading  centered-text">
                  How might we make it easier for users to navigate MyFitnessPal?
                </div>
                <div className="hmw-container">
                  <img className="hmw" src={hmw31} />
                  <img className="hmw" src={hmw32} />
                  <img className="hmw" src={hmw33} />
                  <img className="hmw" src={hmw34} />
                  <img className="hmw" src={hmw35} />
                  <img className="hmw" src={hmw36} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-section nav-issues">
          <Divider
          title={'addressing navigation'}/>
          <div className="nav-issues-body">
            <div className="nav-issue diary-page-changes">
              <div className="nav-issue-text ht-pair">
                <div className="heading">Diary Page Changes</div>
                <ul>
                  <li  className='list-item-cs'>
                    The daily tracking pages, progress, nutrition and food log, were
                    grouped into Diary so that they would all be available on the
                    app’s landing page.{" "}
                  </li>
                  <ul style={{ marginLeft: 20 }}>
                    <li  className='list-item-cs'>
                      Without leaving the landing page, the user knows what their next
                      meal could look like and they are reminded of the progress that
                      they’ve made so far. Not only will this reduce friction for the
                      user, but it will keep them motivated.&nbsp;
                    </li>
                  </ul>
                  <li  className='list-item-cs'>
                    Newsfeed was removed from the navigation bar and placed at the
                    bottom of the diary as through the newsfeed, they see public diary
                    updates from their friends and themselves.
                  </li>
                </ul>
              </div>
              <img
                className="nav-issue-img"
                src={diaryChanges}
                alt="diary page flow chart"
              />
            </div>
            <div className="nav-issue discover-page-changes">
              <div className="nav-issue-text ht-pair">
                <div className="heading">Discover Page Changes</div>
                <ul>
                  <li  className='list-item-cs'>
                    The freshly formed discover page groups a handful of features
                    which previously resided exclusively at the bottom of the user
                    dashboard.{" "}
                  </li>
                  <ul style={{ marginLeft: 20 }}>
                    <li  className='list-item-cs'>
                      Searching for recipes, finding friends and logging unique
                      workouts are all high-value features that address user needs and
                      as a result are much more useful when they receive a dedicated
                      page.
                    </li>
                  </ul>
                  <li  className='list-item-cs'>
                    The discover page effectively switched places with the Newspage,
                    as the former entered the nav bar and the latter was placed at the
                    bottom of the diary landing page.
                  </li>
                </ul>
              </div>
              <img
                className="nav-issue-img"
                src={discoverChanges}
                alt="discover page flow chart"
              />
            </div>
            <div className="nav-issue-visual ht-pair">
              <div className="heading centered-text">Navigation Bar Changes</div>
              <div className="nav-issue-iterations">
                <div className="iteration">
                  <div className="iteration-1-text ht-pair">
                    <div className="heading">Iteration 1</div>
                    <p>
                      To reduce confusion, a 3-page header with distinguished colours to
                      communicate to the user where they were within the app at all
                      times.
                    </p>
                    <ul style={{ marginLeft: 20 }}>
                      <li  className='list-item-cs'>
                        As the navigation bar became redundant with this change, it
                        was removed to clear up space for the scrollable UI and a
                        quick add button.
                      </li>
                    </ul>
                  </div>
                  <img
                    className="iteration-img"
                    src={oldImage}
                  />
                </div>
                <div className="iteration">
                  <img
                    className="iteration-img"
                    src={newImage}
                  />
                  <div className="iteration-2-text ht-pair">
                    <div className="heading">Iteration 2</div>
                    <p>
                    However, the high placement of the header led to ergonomic issues
                    in ¾ of users.
                    </p>
                    <ul style={{ marginLeft: 20 }}>
                      <li  className='list-item-cs'>
                        As a result, an improved navigation bar with an accessible
                        quick add button, replaced the header.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-section cc">
          <Divider
          title={'Addressing Confusion & Commitment'}/>
          <div className="cc-body">
            <div className="cc-text ht-pair">
              <div className="heading">
                Alex is a generative AI chatbot that leverages MyFitnessPal’s rich
                databases of recipes, exercises and fitness knowledge to answer user’s
                endless questions on their journey.
              </div>
              <div className="cc-item-container">
                <div className="cc-item ht-pair">
                  <div className="heading">
                    1. Users can trust Alex’ answers to their questions
                  </div>
                  <ul>
                    <li  className='list-item-cs'>
                      Newly health-conscious people have countless questions regarding
                      exercise form, unhealthy foods and more. However, getting health
                      advice from the internet is beyond dubious thanks to the
                      ever-changing science and the countless businesses out to make a
                      buck.&nbsp;
                    </li>
                    <li  className='list-item-cs'>
                      By providing a chat-bot that can accurately answer
                      health-related questions on a consistent basis, MyFItnessPal is
                      creating a safe space for users who have more questions than
                      they know what to do with.
                    </li>
                  </ul>
                </div>
                <div className="cc-item ht-pair">
                  <div className="heading">
                    2. Alex can uniquely interact with each user
                  </div>
                  <ul>
                    <li  className='list-item-cs'>
                      Unlike personal trainers and online forums, who can only see so
                      many people in a given day or take days on end to respond, a
                      chatbot doesn’t have these limitations.
                    </li>
                    <li  className='list-item-cs'>
                      It can take each user’s unique MyFitnessPal history, food logs
                      and habits to create personal recommendations and save users
                      hours of their time searching for recipes and workout
                      plans.&nbsp;
                    </li>
                    <li  className='list-item-cs'>
                      The chatbot leverages all of the data which is already on
                      MyFitnessPal
                    </li>
                  </ul>
                </div>
                <div className="cc-item ht-pair">
                  <div className="heading">
                    3. Alex acts as an accountability partner
                  </div>
                  <ul>
                    <li  className='list-item-cs'>
                      Although choosing Alex as your accountability partner may not
                      yield the full 95% likelihood of success that a real-life
                      partner would, it is a safe middle ground for users who aren’t
                      yet willing to share such personal information.
                    </li>
                    <li  className='list-item-cs'>
                      Alex will automatically check-in with users who are new to the
                      app and all users on plans, regardless of their current success
                      in completing it. Alex uses a friendly manner and positive
                      reinforcement to encourage forming new habits.&nbsp;
                    </li>
                    <li  className='list-item-cs'>
                      Unlike many friends and family, Alex is reliably knowledgeable,
                      which gives users a centralized source of information to tap
                      into whenever their progress has slowed, they have concerns or
                      are just looking for a chat!
                    </li>
                  </ul>
                </div>
                <div className="cc-item ht-pair">
                  <div className="heading">What sets Alex apart as a solution?</div>
                  <p>
                  Unlike the other solutions, Alex addresses several of the key user
                  pain points while leveraging databases and assets that MyFitnessPal
                  already possesses. Thanks to MyFitnessPal’s leading market share and
                  user base, they have the necessary capital and data availability to
                  make a comprehensive model which competitors will be unable to
                  match. An AI-powered personal fitness persona is unheard of in the
                  health app industry and gives MyFitnessPal an edge that is unlikely
                  to be dulled anytime soon.&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="cc-img-container">
              <img
                className="cc-img"
                src={discoverPage}
                alt="discover page UI"
              />
              <img
                className="cc-img"
                src={chatPage}
                alt="Alex chat UI"
              />
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
                max-width="1400px"
                min-width="400px"
                height="800px"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcoyErte94NOlLnoIuSMiXO%2FMyFitnessPal-UX-Redesign-by-David-Stirling%3Fpage-id%3D279%253A59%26type%3Ddesign%26node-id%3D327-3306%26viewport%3D806%252C-855%252C0.14%26t%3D5UOPms8pw6VT00yj-1%26scaling%3Dscale-down%26starting-point-node-id%3D327%253A3306%26mode%3Ddesign"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
        <div className="sub-section refelecton">
          <Divider
          title={'reflection'}/>
          <div className="reflection-body">
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <img
                  className="reflection-icon"
                  src={wrenchIcon}
                  alt="wrench icon"
                />
                <div className="heading">Modular design systems are a lifesaver.</div>
              </div>
              <p>
              Learning how to use auto-layout, components and styles is the best thing
              I’ve ever done in Figma.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <img
                  className="reflection-icon"
                  src={targetIcon}
                  alt="target icon"
                />
                <div className="heading">Sometimes, less can be more.</div>
              </div>
              <p>
                Keep it simple and make sure to not overwhelm the user.
              </p>
            </div>
            <div className="reflection-item ht-pair">
              <div className="reflection-header">
                <img
                  className="reflection-icon"
                  src={groupIcon}
                  alt="group icon"
                />
                <div className="heading">
                  Always and I mean, ALWAYS seek feedback!
                </div>
              </div>
              <p>
              Usability tests, user interviews and A/B tests are great ways to know if
              you’re going in the right direction.
              </p>
            </div>
            <ThanksSection/>
          </div>
        </div>
      </div>
    </div>
  )
}

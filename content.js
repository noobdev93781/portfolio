// ── CARD METADATA ─────────────────────────────────────────────────────────────
// To update a card: edit title, desc, readTime, or date here.
// To update article content: edit the html() function in the articles object below.

const cardData = [
  {
    id: 'sentiment',
    tag: 'Employee Experience',
    title: 'Employee Sentiment: How to Measure, Analyse, and Improve It in 2026',
    desc: 'How to measure the emotional state of your workforce in real time, analyse what the data reveals, and act on it before disengagement becomes attrition.',
    readTime: '15 min read',
    date: 'May 2026'
  },
  {
    id: 'fail',
    tag: 'HR Strategy',
    title: 'Why Employee Surveys Fail and How to Fix It',
    desc: 'Every year HR runs surveys hoping to surface honest feedback. The results end up in a deck and quietly disappear. A deep-dive into why it happens, with a 3-layer framework to fix it.',
    readTime: '12 min read',
    date: 'Mar 2026'
  },
  {
    id: 'tools',
    tag: "Buyer's Guide",
    title: '15 Best Employee Pulse Survey Platforms for HR Teams',
    desc: 'A comprehensive comparison of 15 pulse survey tools, with 7 highlighted picks rated on features, usability, and the ability to drive meaningful, actionable feedback.',
    readTime: '26 min read',
    date: 'Feb 2026'
  },
  {
    id: 'dashboard',
    tag: 'Product Deep-Dive',
    title: 'Employee Survey Dashboards Explained: Your Complete Guide to Smarter Feedback Insights',
    desc: "What every HR leader needs to know about turning a flood of survey responses into clear, visual insights that actually drive decisions, and what most tools miss.",
    readTime: '16 min read',
    date: '2026'
  }
];

// Render blog cards from cardData
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  const arrowSvg = '<svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  grid.innerHTML = cardData.map(card => `
    <div class="blog-card" onclick="openReader('${card.id}')">
      <span class="blog-tag">${card.tag}</span>
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
      <div class="blog-card-footer">
        <div class="blog-meta">
          <span>${card.readTime}</span>
          <span class="blog-meta-sep"></span>
          <span>${card.date}</span>
        </div>
        <span class="read-btn">Read ${arrowSvg}</span>
      </div>
    </div>
  `).join('');
});


// ── ARTICLE CONTENT ───────────────────────────────────────────────────────────
// Each entry: url (opens in new tab), html() (full article body for the reader modal)

const articles = {
  sentiment: {
    url: 'https://www.vantagecircle.com/en/blog/employee-sentiment/',
    html: () => `
<h1>Employee Sentiment: How to Measure, Analyse, and Improve It in 2026</h1>

<p><strong>Employee sentiment</strong> is the collective emotional state of your workforce: how people feel about their work, their manager, and the organisation. Tracking it continuously and acting on what it shows is how HR teams catch disengagement before it becomes attrition.</p>

<p>HR has more data than ever. Turnover rates, absenteeism figures, performance scores. What those numbers don't tell you is how the person behind them is actually feeling. Sentiment fills that gap, and it shifts before the hard metrics do.</p>

<h2>What Is Employee Sentiment?</h2>

<p>Employee sentiment is the sum of how your people feel about their work, their colleagues, and the organisation they work for. It is not static. It shifts after a difficult appraisal conversation, a restructure announcement, a promotion someone did not get. It varies by department, by manager, by role level. Real-time sentiment tracking means catching those shifts as they happen, not waiting for an annual survey to tell you what already happened.</p>

<p>Three terms get used interchangeably in most HR conversations. They are not the same:</p>

<table>
  <thead>
    <tr><th>Term</th><th>What it measures</th><th>When it applies</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Employee sentiment</strong></td><td>The emotional state of your workforce right now</td><td>Always on — shifts continuously</td></tr>
    <tr><td><strong>Employee engagement</strong></td><td>Commitment to and investment in the job and organisation</td><td>Captured at a moment in time</td></tr>
    <tr><td><strong>Employee morale</strong></td><td>Team spirit and collective mood</td><td>Tied to a specific event or period</td></tr>
  </tbody>
</table>

<p>Sentiment is the broadest of the three. An employee can score high on engagement, work hard, and meet every target while holding negative sentiment about how the organisation treated a colleague, where they see their career going, or whether leadership is being straight with them. The engagement score misses it. The sentiment score catches it.</p>

<blockquote>
<p>Employee sentiment is how your workforce actually feels, as opposed to how productive they appear or how committed they look on paper. It is the signal that precedes the behaviour.</p>
</blockquote>

<h2>Why Employee Sentiment Analysis Matters</h2>

<p>Gallup's State of the Global Workplace 2024 report found that only <strong>23%</strong> of employees globally felt engaged at work at its peak. That figure has since fallen to just <strong>20%</strong> in 2025, the lowest level since 2020. The other <strong>80%</strong> are either going through the motions or actively working against the organisation. Gallup estimates this costs the global economy approximately <strong>$10 trillion</strong> in lost productivity annually.</p>

<p>That gap does not show up as a single dramatic event. It shows up as flat output, missed deadlines, a sudden wave of resignations from a team that looked fine on paper. Employee sentiment analysis is how you see it forming before any of those things happen.</p>

<p><strong>Retention.</strong> According to Gallup research, replacing a single employee costs between <strong>0.5x and 2x</strong> their annual salary. US businesses lose approximately <strong>$1 trillion</strong> each year to voluntary turnover alone. More telling: <strong>52%</strong> of exiting employees say their manager or organisation could have done something to prevent them from leaving, and <strong>51%</strong> report that no leader spoke with them about their job satisfaction in the three months before they resigned. Sentiment data creates that conversation window before it closes permanently.</p>

<p><strong>Productivity.</strong> Gallup's meta-analysis of 456 studies across 276 organisations found that business units in the top quartile for engagement show <strong>18% higher productivity</strong> and <strong>23% greater profitability</strong> than those in the bottom quartile. They also record <strong>81% less absenteeism</strong>. These are not marginal differences. They are the difference between a team that delivers and one that just shows up.</p>

<p><strong>Equity and inclusion.</strong> Aggregated data hides inequity. A company-wide sentiment score of 70 looks healthy until you split it by department, geography, or demographic group. Properly segmented sentiment data reveals where different groups are experiencing the organisation differently. Without that view, disparities stay invisible until they become complaints or attrition.</p>

<p><strong>Change management.</strong> Restructures, leadership transitions, and return-to-office policies all shift how people feel about work. Continuous sentiment tracking tells you which teams absorbed a change well and which are still unsettled, so you can direct communication and support where it is actually needed.</p>

<h2>Types of Employee Sentiment</h2>

<table>
  <thead>
    <tr><th></th><th>Thriving</th><th>Watch closely</th><th>At risk</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Positive</strong></td><td>Trusts leadership, refers colleagues for roles, high survey participation, strong eNPS promoter</td><td></td><td></td></tr>
    <tr><td><strong>Neutral</strong></td><td></td><td>Does minimum required, disengaging quietly, responds to nudges, passive on eNPS</td><td></td></tr>
    <tr><td><strong>Negative</strong></td><td></td><td></td><td>Skips surveys, rising absenteeism, disengaged in meetings, active attrition risk</td></tr>
  </tbody>
</table>

<h3>Positive Sentiment</h3>
<p>Employees holding positive sentiment trust the people they work for, feel recognised for their contributions, and believe the organisation has their interests in mind. They absorb uncertainty better than most, refer colleagues for open roles, and tend to speak positively about the organisation externally. This is not loyalty purchased by pay. It is the product of consistent, fair treatment over time.</p>

<h3>Neutral Sentiment</h3>
<p>Neutral sentiment is the category most organisations underestimate. These employees are not unhappy enough to leave but not invested enough to contribute meaningfully. Gallup research found that at least <strong>50%</strong> of the US workforce qualifies as "quiet quitters": people who do their job and nothing more. A targeted nudge can shift them. Left alone for long enough, they tend to drift toward negative.</p>

<h3>Negative Sentiment</h3>
<p>Negative sentiment is not always loud. Sometimes it is a team that goes quiet in meetings. Sometimes it is a spike in short-term sick leave. A 2022 MIT Sloan Management Review study found that a toxic workplace culture is <strong>10.4 times</strong> more predictive of attrition than compensation. Negative sentiment is the early signal of that toxicity forming.</p>

<h2>How to Measure Employee Sentiment</h2>

<p>No single tool captures the full picture. Effective sentiment measurement programmes combine quantitative methods (which give you scale and trend data) with qualitative methods that provide the context behind the numbers.</p>

<table>
  <thead>
    <tr><th>Method</th><th>Type</th><th>Best for</th><th>Ideal frequency</th><th>Limitation</th></tr>
  </thead>
  <tbody>
    <tr><td>Pulse surveys</td><td>Quantitative</td><td>Real-time tracking, trend detection</td><td>Weekly or monthly</td><td>Low depth per question</td></tr>
    <tr><td>Annual engagement surveys</td><td>Quantitative</td><td>Deep benchmarking</td><td>Yearly</td><td>Data is stale by the time it is reviewed</td></tr>
    <tr><td>eNPS</td><td>Quantitative</td><td>Loyalty and advocacy measurement</td><td>Quarterly</td><td>Single metric with no explanatory power alone</td></tr>
    <tr><td>Open-ended survey questions</td><td>Qualitative</td><td>Context, nuance, root cause discovery</td><td>Any survey</td><td>Requires analysis time or AI processing</td></tr>
    <tr><td>Focus groups and interviews</td><td>Qualitative</td><td>Exploratory research</td><td>Ad hoc</td><td>Not scalable; subject to social desirability bias</td></tr>
    <tr><td>Internal social listening</td><td>Qualitative</td><td>Candid, unprompted signal from Slack, Teams, etc.</td><td>Continuous</td><td>Difficult to analyse at scale without AI</td></tr>
  </tbody>
</table>

<h3>The Employee Sentiment Score</h3>
<p>A sentiment score quantifies where your workforce sits on a spectrum from negative to positive, typically expressed as a number between 0 and 100. Most platforms calculate it from a combination of survey response ratings, open-ended response sentiment (AI classifies each response as positive, neutral, or negative), and eNPS as a cross-check on overall advocacy.</p>

<p>No universal benchmark exists for what constitutes a "good" score. What matters more than the absolute number is the trend over time and the variance between departments. A company-wide score of 72 can look healthy until you see that one department is sitting at 18.</p>

<h3>How Often to Measure</h3>
<p>Quarterly is the minimum for meaningful trend data. Monthly pulse surveys give faster signal without meaningful fatigue risk when kept to under five minutes. For teams going through significant change, monthly or fortnightly check-ins let you track the impact in near-real time.</p>

<h2>Employee Sentiment Survey Questions: 15 Examples</h2>

<h3>Engagement</h3>
<ol>
  <li>On a scale of 1 to 5, how motivated do you feel to give your best effort at work right now?</li>
  <li>Do you feel your contributions are recognised by your manager?</li>
  <li>How often do you feel proud to work for this organisation?</li>
</ol>

<h3>Wellbeing</h3>
<ol start="4">
  <li>How well does your current workload allow you to maintain a healthy work-life balance?</li>
  <li>Do you feel your organisation takes employee wellbeing seriously?</li>
  <li>On a scale of 1 to 5, how supported do you feel when going through a difficult time at work?</li>
</ol>

<h3>Manager Relationship</h3>
<ol start="7">
  <li>Does your manager give you feedback that helps you do your job better?</li>
  <li>How comfortable do you feel raising a concern directly with your manager?</li>
  <li>Does your manager acknowledge your achievements in a meaningful way?</li>
</ol>

<h3>Psychological Safety</h3>
<ol start="10">
  <li>Do you feel safe sharing an unpopular opinion in a team setting?</li>
  <li>If you made a mistake at work, would you feel comfortable being honest about it with your team?</li>
</ol>

<h3>Recognition</h3>
<ol start="12">
  <li>Do you feel the effort you put in is fairly recognised by the organisation?</li>
  <li>How often do you receive specific, meaningful recognition for your work?</li>
</ol>

<h3>Growth and Development</h3>
<ol start="14">
  <li>Does your current role give you opportunities to learn new skills?</li>
  <li>Do you see a clear path for advancement at this organisation?</li>
</ol>

<h2>How to Analyse Employee Sentiment Data</h2>

<ol>
  <li><strong>Segment before you summarise.</strong> A company-wide average almost always misleads. Always break the data down by department, location, tenure, and role level before drawing any conclusions.</li>
  <li><strong>Look for outliers, not averages.</strong> The average might be 70. The outlier is the department sitting at 22. That is where to start.</li>
  <li><strong>Cross-reference with operational metrics.</strong> Low sentiment in a department with rising absenteeism or declining output confirms the signal.</li>
  <li><strong>Read the open-ended responses.</strong> Numbers tell you where the problem is. Open-ended text tells you why.</li>
  <li><strong>Get the data to the right people.</strong> Department-level sentiment goes to the department manager. Company-level patterns go to leadership.</li>
</ol>

<h2>Turning Sentiment Into Action</h2>

<p><strong>When sentiment is positive:</strong> Acknowledge it and understand exactly what is driving it. Protect those conditions deliberately during periods of change. High sentiment is not self-sustaining.</p>

<p><strong>When sentiment is neutral:</strong> Look at the open-ended responses. Neutral employees are often waiting for a signal that the organisation is worth committing to. A development conversation, a new responsibility, or direct and specific recognition can shift the balance.</p>

<p><strong>When sentiment is negative:</strong> Do not rush to reassure. Understand the root cause first. Address the cause, not the symptom, and use follow-up pulse surveys to measure whether the change had any effect.</p>

<p><strong>On communication:</strong> Whatever you find, close the loop. Tell employees what the data showed, what you are doing about it, and when they will hear back. Gallup's 2024 research found that <strong>61%</strong> of employees who receive both feedback and recognition from their manager at least once a week are engaged — nearly three times the global average.</p>

<h2>FAQs</h2>

<h3>1. What is a good employee sentiment score?</h3>
<p>There is no universal benchmark. What matters more than the absolute score is the trend over time and the variance between departments. A company average of 72 with one department at 14 is a more urgent situation than a company average of 60 where all departments sit between 55 and 68.</p>

<h3>2. How does employee sentiment differ from employee engagement?</h3>
<p>Engagement measures how invested an employee is in their work and the organisation. Sentiment measures how they feel. An employee can be highly engaged while holding negative sentiment. Tracking both gives a fuller picture than either metric alone.</p>

<h3>3. How often should you measure employee sentiment?</h3>
<p>Quarterly is the minimum for meaningful trend data. Monthly pulse surveys give you faster signal. Gallup research found that <strong>51%</strong> of exiting employees report that no leader spoke with them about their job satisfaction in the three months before they resigned.</p>

<h3>4. How do you improve negative employee sentiment?</h3>
<p>Start with the data. Identify which departments, categories, or demographics are most affected, then read the open-ended responses to understand why. Prioritise root-cause interventions over broad-brush programmes. Then close the loop: tell employees what you found and what you are doing about it.</p>

<h3>5. Is employee sentiment analysis anonymous?</h3>
<p>It should be. Anonymity is what makes the data honest. Employees who believe their responses can be traced to them self-censor, which corrupts the signal. Effective sentiment platforms anonymise responses at collection and make the anonymity guarantee visible to employees at the point of survey completion.</p>
`
  },

  fail: {
    url: 'https://www.vantagecircle.com/en/blog/why-employee-surveys-fail/',
    html: () => `
<h1>Why Employee Surveys Fail and How to Fix It</h1>
<blockquote>Employee surveys fail because organisations collect feedback but have no system to convert it into decisions, owners, and visible action. The fix isn't a better survey tool. It's an operating rhythm that makes follow-through easier than avoidance.</blockquote>
<p>Every year, HR runs an employee survey hoping to surface honest feedback and uncover what's really going on inside the organization, yet more often than not, those efforts amount to nothing. The results get packaged into a deck, leaders sit through a meeting, and then the findings quietly disappear.</p>
<p>After a cycle or two of this, employees stop bothering to participate — not because they're disengaged, but because they've learned the hard way that nothing will change. The usual suspects get blamed: survey fatigue, bad tools, a distracted workforce. But the survey worked fine. The organization just has no idea how to act on what it learned.</p>

<h2>The Real Reason Employee Surveys Fail: No System for Follow-Through</h2>
<p>Implementation amnesia is what happens when a survey creates insight, but the organization has no reliable way to convert that insight into decisions, actions, and visible progress updates. In practice, it becomes a trust problem. Employees participate once, then watch priorities shift and the work stall.</p>
<p>Gallup's data reflects how common this is. Only <strong>8%</strong> of employees strongly agree that their organization takes action on survey results. That number matters because it describes the default employee expectation going into the second cycle.</p>

<h2>Three Things That Need to Exist Before Any Survey Tool Will Work</h2>
<h3>1. You need an executive who can actually approve spending</h3>
<p>If your survey "sponsor" can't shift budget or change priorities, you have a problem. Feedback without funding is just venting with extra steps.</p>
<h3>2. Your culture has to be able to handle bad news</h3>
<p>If every critical result gets explained away with "well, people don't understand the context," just stop surveying. You're not ready. Some organizations would rather preserve comfort than face reality, and no amount of data will change that.</p>
<h3>3. You have to be willing to fix less stuff</h3>
<p>You cannot simultaneously address compensation, career development, work-life balance, manager quality, and tooling gaps. Pick two things. Actually fix them. That beats a 12-point action plan that goes nowhere.</p>

<h2>Where Survey Programs Actually Die</h2>
<h3>Death by meeting</h3>
<p>The meeting happens, results get shared, and the discussion is genuinely good. Then it ends, and nobody has written down who is doing what by when. Two weeks later, the work that was discussed has quietly been absorbed by other priorities.</p>
<h3>Death by unfunded plans</h3>
<p>Someone in the room says "great idea, someone should really work on that," and the room nods along. But the follow-up questions never get asked: with what time, what budget, and whose existing priorities get bumped to make room?</p>
<h3>Death by unrealistic expectations</h3>
<p>The problem here is a mismatch between the actual issue and the suggested fix. When a company realizes pay is too low but tells managers to simply "talk more about careers," they are trying to solve a money problem with a conversation.</p>
<h3>Death by silence</h3>
<p>Most organisations share the results, promise a plan, and then disappear for six months. Silence does not just disappoint people; it teaches them that the survey is theatre. By the third cycle, you are no longer fighting low engagement but earned cynicism, which is a much harder thing to reverse.</p>

<h2>A Framework for Making Employee Surveys Work</h2>
<p>Stop making this a special HR project. Build it into how the business already runs. There are three layers:</p>
<ol>
  <li><strong>Executive Layer (Quarterly):</strong> An executive with real budget authority owns outcomes, makes 2-3 funded commitments publicly, and communicates decisions and trade-offs on a regular cadence.</li>
  <li><strong>Functional Layer (Monthly):</strong> Department heads translate enterprise commitments into specific team-level actions with named owners and simple progress scorecards.</li>
  <li><strong>Team Layer (Within 2 Weeks):</strong> Managers run a 20-minute structured conversation to identify one team-controlled action and one escalation item with a named owner.</li>
</ol>

<table>
  <thead><tr><th>What most organisations do</th><th>What actually works</th></tr></thead>
  <tbody>
    <tr><td>Share results in a deck, move on</td><td>Assign every result a named owner before the survey closes</td></tr>
    <tr><td>Run one annual survey</td><td>Run short recurring pulses tied to the business calendar</td></tr>
    <tr><td>HR owns follow-through</td><td>An executive with budget authority owns outcomes</td></tr>
    <tr><td>Build a 10-point action plan</td><td>Pick two things, fund them, fix them visibly</td></tr>
    <tr><td>Go silent after publishing results</td><td>Send regular updates naming what changed and why</td></tr>
    <tr><td>Give managers a dashboard</td><td>Give managers a script and a 20-minute conversation format</td></tr>
  </tbody>
</table>

<h2>How to Recover If You've Already Blown It</h2>
<p><strong>Weeks 1-2:</strong> Identify one executive who controls budget and can make funding decisions. Pick ONE thing to fix over the next 12 weeks. Train managers on how to have the conversation.</p>
<p><strong>Weeks 3-6:</strong> Run a short pulse on that one thing. Have managers discuss it within two weeks. Make small changes teams can see.</p>
<p><strong>Weeks 7-10:</strong> Scale what works. Fund one visible change at the company level. Communicate what changed and why, using actual names and dates.</p>
<p><strong>Weeks 11-12:</strong> Measure whether anything moved. Decide what to keep, what to stop, and what's next. Put the next cycle on the calendar before this one ends.</p>
<p>Twelve weeks. One theme. Visible progress. That's how you rebuild credibility.</p>

<h2>FAQs</h2>
<h3>1. What causes employee surveys to fail?</h3>
<p>Employee surveys fail when there is no system to act on the results. Feedback gets collected, discussed once, and then quietly dropped as other priorities take over. The problem is rarely the survey itself — it is the absence of clear ownership, funded commitments, and visible follow-through.</p>
<h3>2. How do you fix a survey program that has lost employee trust?</h3>
<p>Start by picking one issue and fixing it visibly within 12 weeks. Assign an executive owner, run a short follow-up pulse, and communicate what changed using specific names and dates. Employees rebuild trust through evidence, not promises.</p>
<h3>3. Why do employees stop participating in surveys?</h3>
<p>Employees disengage from surveys when they see no evidence that their feedback changes anything. Consistent follow-through is the only reliable way to sustain response rates over time.</p>
<h3>4. What should managers do with employee survey results?</h3>
<p>Managers should run a short team conversation within two weeks of results being shared. The goal is to identify one thing the team can control and one issue to escalate with a named owner. Speed and specificity matter more than comprehensiveness.</p>
`
  },

  tools: {
    url: 'https://www.vantagecircle.com/en/blog/top-employee-pulse-survey-tools/',
    html: () => `
<h1>15 Best Employee Pulse Survey Platforms for HR Teams (with 7 of our favourites)</h1>
<p>Employee surveys play a crucial role in shaping workplace culture and driving engagement. But with so many options available, it can be tough to decide which tool is the best fit for your team. In this blog, we'll explore 15 employee survey tools, also focusing on our top 7 picks — those that stand out for their features, usability, and ability to drive meaningful, actionable feedback.</p>
<p>This research was conducted by analyzing employee survey tools listed on G2, allowing us to provide you with insights based on real user reviews and industry feedback.</p>

<h2>Top 7 Employee Survey Tools (According to us)</h2>
<ul>
  <li><strong>Vantage Pulse</strong> — Best for organizations looking for a real-time, data-driven approach to employee engagement and continuous feedback.</li>
  <li><strong>SurveyMonkey</strong> — Ideal for creating simple, quick surveys and gathering feedback from teams with straightforward needs.</li>
  <li><strong>Qualtrics</strong> — A powerful solution for large enterprises with complex survey needs.</li>
  <li><strong>Officevibe</strong> — Great for capturing ongoing feedback, though it may not provide the depth of analytics offered by others.</li>
  <li><strong>Culture Amp</strong> — Great for measuring employee sentiment, with a focus on company culture.</li>
  <li><strong>15Five</strong> — Primarily focused on performance management and one-on-one meetings.</li>
  <li><strong>Infeedo Amber</strong> — Effective for automating engagement, but lacks some real-time, actionable insights.</li>
</ul>

<h2>1. Vantage Pulse</h2>
<p>Vantage Pulse is a comprehensive employee pulse survey tool that helps any organization listen to the employees' pulse at any stage by collecting, measuring, and acting on real-time employee feedback. It allows the managers to analyze trends, uncover factors of employee turnover, predict behaviors, and ultimately increase employee retention.</p>
<p><strong>Best for:</strong> Organizations of every size looking for a customizable, all-in-one solution to track ongoing employee engagement.</p>
<h3>Key features</h3>
<ul>
  <li>Automated Employee Lifecycle Surveys</li>
  <li>AI-Powered sentiment analysis</li>
  <li>Attrition Risk Indicator</li>
  <li>Heatmap with multi-level filtering</li>
  <li>Completely Anonymous</li>
  <li>Kiosk Survey for deskless workers</li>
  <li>Anonymous two-way conversations</li>
</ul>
<p><strong>Editor's Verdict:</strong> Vantage Pulse is excellent in the field of employee engagement. It's particularly well-suited for organizations that need an all-encompassing solution to track engagement and gather real-time feedback.</p>

<h2>2. SurveyMonkey</h2>
<p>SurveyMonkey is one of the most widely recognized survey platforms, known for its user-friendly interface and customizable survey options. Best for small to medium-sized businesses that need a straightforward, cost-effective tool for employee surveys.</p>

<h2>3. Culture Amp</h2>
<p>Culture Amp is a robust employee engagement and performance management tool that offers in-depth analytics and custom surveys to measure employee sentiment and track engagement across various stages of the employee lifecycle. Best for companies with a data-driven culture that require sophisticated analytics.</p>

<h2>4. 15Five</h2>
<p>15Five is a performance management tool designed to encourage continuous feedback, goal tracking, and employee development. Pricing: $4 per user/month (billed annually). Best for organizations with a strong focus on employee development and performance.</p>

<h2>5. Officevibe</h2>
<p>Officevibe is an intuitive employee engagement tool that uses pulse surveys to measure employee sentiment and provide actionable insights. Pricing: $5 per user/month. Best for small to mid-sized companies looking for a simple, easy-to-use tool.</p>

<h2>6. Amber by inFeedo</h2>
<p>Amber is an AI-powered chatbot that casually checks in with employees through one-to-one conversations, applying natural language processing to gauge sentiment and flag early signs of disengagement. Best for mid- to large-sized organizations that want an always-on, conversational listening solution.</p>

<h2>7. Qualtrics</h2>
<p>Qualtrics is an advanced survey platform offering highly customizable surveys and in-depth analytics. Best for large organizations needing a highly customizable survey platform with robust analytics and reporting.</p>

<h2>8–15: More Tools Worth Knowing</h2>
<ul>
  <li><strong>Microsoft Viva Glint</strong> — Best for enterprises already using Microsoft 365.</li>
  <li><strong>Workday Peakon Employee Voice</strong> — Best for global enterprises using Workday HCM.</li>
  <li><strong>Lattice</strong> — Best for mid-sized companies needing an all-in-one platform.</li>
  <li><strong>Leapsome</strong> — Best for teams needing a flexible and modular platform.</li>
  <li><strong>TINYpulse</strong> — Best for small to mid-sized organizations wanting simple, frequent feedback.</li>
  <li><strong>Quantum Workplace</strong> — Best for mid-to-large organizations with AI-generated insights.</li>
  <li><strong>QuestionPro</strong> — Best for detailed research and feedback across the entire employee lifecycle.</li>
  <li><strong>Leena AI</strong> — Best for organizations using AI to enhance engagement surveys via conversational interfaces.</li>
</ul>

<h2>How to Choose the Right Pulse Survey Tool</h2>
<ul>
  <li><strong>Team size:</strong> Small teams need quick setup; large enterprises need scalability and real-time predictive insights.</li>
  <li><strong>Survey frequency:</strong> Continuous feedback needs pulse-focused tools; deep analysis needs advanced customization.</li>
  <li><strong>Integration:</strong> Ensure compatibility with your existing HRIS and HR tech stack.</li>
  <li><strong>Budget:</strong> Smaller teams need cost-effective options; larger teams may justify advanced analytics.</li>
  <li><strong>Reporting:</strong> Look for segmentation, trend tracking, and demographic filtering if you need depth.</li>
</ul>

<h2>FAQs</h2>
<h3>Which survey tool is the best?</h3>
<p>The best tool depends on your organization's needs. Smaller teams may prefer straightforward, cost-effective tools, while larger organizations may need more comprehensive, feature-rich platforms with advanced reporting and analytics.</p>
<h3>Can these tools track changes in employee satisfaction over time?</h3>
<p>Yes, most employee survey tools offer the ability to track employee satisfaction over time, allowing organizations to measure shifts in engagement and adjust strategies accordingly.</p>
`
  },

  dashboard: {
    url: 'https://www.vantagecircle.com/en/blog/employee-survey-dashboard/',
    html: () => `
<h1>Employee Survey Dashboards Explained: Your Complete Guide to Smarter Feedback Insights</h1>

<h2>What Does an Employee Survey Dashboard Do?</h2>
<p>Feedback collection in organisations began in earnest during the 1920s, when industrial companies started using worker-attitude surveys to track morale. Today, a specialised employee survey dashboard brings that capability into modern HR practice with speed and scale.</p>
<p><strong>Data aggregation</strong> — The dashboard gathers responses from every touchpoint into one unified system. Instead of juggling Excel sheets or digging through email attachments, HR teams see all input aligned on one screen.</p>
<p><strong>Visualization</strong> — Dashboards translate data into visual cues: heatmaps that spotlight satisfaction gaps, line graphs that reveal engagement trends, and comparison charts that show how teams evolve over time.</p>
<p><strong>Real-time monitoring</strong> — Feedback loses impact when it arrives months later. A dashboard updates as employees respond, giving HR a live pulse of morale.</p>
<p><strong>Drill-down capability</strong> — Surface averages hide stories. A powerful dashboard lets leaders zoom in from company-wide sentiment to the micro-level: departments, regions, or tenure bands.</p>
<p><strong>Alerting and benchmarking</strong> — When engagement drops below a defined level, the system flags it. Benchmarking lets HR compare internal data to past surveys or industry standards.</p>

<h2>10 Key Metrics Every Dashboard Should Include</h2>
<h3>1. Employee Engagement Score</h3>
<p>This score reflects how emotionally and mentally connected employees feel to their work and organization. According to Gallup, engagement sits at 31% among U.S. employees.</p>
<h3>2. Participation Rate</h3>
<p>A consistent participation rate above 70% is considered healthy. When participation drops, it can signal survey fatigue, lack of trust, or weak communication from leadership.</p>
<h3>3. eNPS (Employee Net Promoter Score)</h3>
<p>Derived from the customer NPS model, eNPS measures employee advocacy. Leading organizations aim for +40 or higher.</p>
<h3>4. Manager Effectiveness</h3>
<p>Studies show that relationships with managers account for nearly 70% of variance in team engagement.</p>
<h3>5. Turnover Risk Indicators</h3>
<p>Employees who mark low scores in recognition, growth, or manager communication often show higher turnover probability within three to six months.</p>
<h3>6. Sentiment by Theme or Category</h3>
<p>Dashboards that categorize comments by topic help HR understand the story behind the scores.</p>
<h3>7. Diversity and Inclusion Metrics</h3>
<p>McKinsey (2023) found that companies in the top quartile for gender diversity were 39% more likely to outperform financially.</p>
<h3>8. Remote Work Experience Index</h3>
<p>Hybrid and remote work have reshaped engagement dynamics. Dashboards that separate metrics for remote, hybrid, and on-site employees uncover experience gaps.</p>
<h3>9. Well-Being and Burnout Scores</h3>
<p>According to Deloitte's 2024 Well-Being Report, 52% of employees feel emotionally exhausted, while only 43% believe their organizations support their mental health adequately.</p>
<h3>10. Open Feedback Volume and Sentiment Shift</h3>
<p>The volume of open comments and their sentiment trajectory help gauge communication openness. A sudden drop in comment volume may indicate fear of speaking up.</p>

<h2>How to Build or Customize a Dashboard</h2>
<ol>
  <li><strong>Choose the right platform</strong> — one that connects with your HRIS, performance management software, or payroll system.</li>
  <li><strong>Select your metrics</strong> — align them to your company's current priorities.</li>
  <li><strong>Segment your data</strong> — filter by department, role, location, or tenure to spot patterns.</li>
  <li><strong>Set up feedback channels</strong> — pulse surveys, kiosk/mobile surveys, and 360-degree feedback.</li>
  <li><strong>Customize for your needs</strong> — highlight data on what matters most right now.</li>
  <li><strong>Make it actionable</strong> — include tools to assign tasks, track progress, and follow up on results.</li>
</ol>

<h2>5 Common Challenges</h2>
<h3>1. Misinterpreting the Data</h3>
<p>Numbers don't tell the full story without context. A sudden drop in engagement might be caused by something external. Pair survey numbers with open-ended feedback and manager observations.</p>
<h3>2. Too Much Data, Not Enough Focus</h3>
<p>Focus on a few metrics that connect directly to your HR or business priorities. If turnover is a concern, prioritize engagement, eNPS, and exit survey data.</p>
<h3>3. No Clear Follow-Up</h3>
<p>Create action plans directly tied to specific dashboard findings, and track progress regularly.</p>
<h3>4. Low Stakeholder Buy-In</h3>
<p>Present data in leadership meetings, link it to KPIs, and share examples of improvements driven by past feedback.</p>
<h3>5. Inconsistent Data Quality</h3>
<p>Improving data quality starts with encouraging consistent participation and standardizing how surveys are conducted.</p>

<h2>Conclusion</h2>
<p>Employee survey dashboards give HR teams a practical way to turn feedback into action. The value comes from consistently reviewing the data, connecting it to business goals, and taking deliberate steps to improve the employee experience. When HR teams use dashboards effectively, they gain more than just reports — they gain a system for listening, responding, and continuously improving how people work and feel within the organization.</p>
`
  }
};


// ── COLLATERAL DOCS ───────────────────────────────────────────────────────────
// To add a new collateral: add a new entry with label, title, desc, and pages array.

const collDocs = {
  'sales-deck': {
    label: 'Sales Deck',
    title: 'Vantage Pulse Sales Presentation',
    desc: 'Full pitch deck for sales conversations. Opens with the disengagement cost problem, moves through product capabilities and competitive positioning, and closes with a direct book-a-demo CTA.',
    pages: Array.from({length:14}, (_,i) => 'collaterals/previews/sales-deck-p' + String(i+1).padStart(2,'0') + '.jpg')
  },
  'brochure-2pager': {
    label: '2-Page Brochure',
    title: 'Product Overview: Get Real Feedback. Make Real Change.',
    desc: 'Leave-behind for HR and executive buyers. Leads with the ROI case, covers the three-persona feature breakdown (Employees, HR Teams, Executives), and closes with a compliance badge strip covering ISO 27001, GDPR, SOC 2, and HIPAA.',
    pages: ['collaterals/previews/brochure-2pager-p01.jpg','collaterals/previews/brochure-2pager-p02.jpg']
  },
  'brochure-1pager': {
    label: '1-Page Brief',
    title: 'Unlock the Full Power of Recognition with Vantage Pulse',
    desc: 'Targeted one-pager for prospects already running a recognition program but not measuring its impact. Positions Vantage Pulse as the missing feedback layer.',
    pages: ['collaterals/previews/brochure-1pager-p01.jpg']
  }
};

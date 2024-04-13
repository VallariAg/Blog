---
title: "Hitchhiker's Guide to Outreachy and Google Summer of Code"
date: "2022-12-15T22:12:03.284Z"
description: "Complete guide for applicants - details about eligibility criteria, program schedules, selecting organizations or projects, proposal template, and a step-by-step walk through the program phases."
---

The goal of this blog is to provide the reader with all the information they need for applying to open-source programs "Google Summer of Code" and "Outreachy". I have past experience with these two programs so I can only share about these. There are more open-source programs which you can checkout [here](https://github.com/tapaswenipathak/Open-Source-Programs). 

> NOTE: 
> This guide is written according to rules as of 2022 and it's recommended to refer to the programs' official websites for updated information. 

**Brief introduction to the programs:**

Google Summer of Code (GSoC) and Outreachy are programs that offer a three-month paid internship opportunity to contribute to open-source projects. Outreachy specifically targets individuals affected by systemic bias and underrepresented groups in the technical industry, with the goal of enhancing diversity in open-source. These programs typically run in parallel, with similar application periods and internship dates (May-August).

Note: GSoC is an annual program, whereas Outreachy provides internships two times in an year: mid-year and end-year. See eligibility criteria section below to learn more. 

I'll be sharing details about program's eligibility criteria, program schedule, and a step-by-step walk through the program phases, and briefly discuss proposals.

#### Eligibility

The eligibility criteria for these programs may change evolve over time. Just a couple of years ago, GSoC broadened its eligibility criteria to include individuals who have graduated from university, when before it only accepted university students. As of 2022, the eligibility rules are:
- Applicants should be 18+ years of age.
- Both university and non-university students can apply in both the programs.
- All past GSoC interns are ineligible for Outreachy, including people who did not successfully finish their GSoC internship.
- You’re ineligible for GSoC if you have been selected twice for GSoC program in the past.
- You're ineligible for Outreachy if you are a past GSoC intern or a past Outreachy intern. It's preferable to intern at Outreachy before GSoC for this reason. 
- Outreachy requires proof of full-time commitment. Example: student applicants are required to submit academic calendar as proof for availability.  
- Outreachy provides internships two times in an year: May to August and December to March. 
	- If you are a student of a university in the [Northern Hemisphere](https://en.wikipedia.org/wiki/Northern_Hemisphere), you will only be eligible for the May to August internship cohort.
	- If you are a student of a university in the [Southern Hemisphere](https://en.wikipedia.org/wiki/Southern_Hemisphere), you will only be eligible for the December to March internship cohort.
	- If your university is near the equator, you may apply to any internship cohort.

For full details, checkout outreachy's eligibility rules [here](https://www.outreachy.org/docs/applicant/#eligibility) and GSoC rules [here](https://summerofcode.withgoogle.com/get-started).

#### Program Schedule

Usually the application period is around Feb-March and internship goes from May to August. Schedules differ in dates in each year, please check current year's schedule on their websites. 
 - Outreachy: https://www.outreachy.org/docs/applicant/#outreachy-schedule 
 - GSoC: https://developers.google.com/open-source/gsoc/timeline

<!--
#### Projects

GSoC offers two kinds of projects - 'Medium size' (~175 hours) and 'Large size' projects (~350 hours). 
- Usually, some of the GSoC projects are chosen for outreachy projects.
-->

#### Choosing Project / Organization 

You can explore organizations which have participated in these programs in the past which seem interesting to you. Another filter can be looking for projects which uses tech stack you're familiar with. If you have worked with Python before, at least understanding syntax won't be an added problem when navigating huge codebases of these open-source project. Though you don't need to restrict yourself with what you know at the moment as languages and technologies can be picked up, given you started early enough before the contribution period. 
 
 Once you decide on a project, clone the repository and try to setup on your local system to get it running. Maybe explore the user flow to understand the project and the features it provides. After this point, search for an issue tagged as "good-first-issue" or "low-hanging-fruit" on the project's issue tracker and try to solve that. We don't aim to understand the whole codebase, we start with a small bug and try to understand the code around that.   


#### Walk through GSoC Application Phases

![[gsoc-timeline.png]](./gsoc-timeline.png)

1. **Early start**:
	This is the stage where the organizations haven't released a project list yet. At this stage, I suggest you can:
    - Look at past organizations that participated in GSoC/Outreachy. Example, look here: https://summerofcode.withgoogle.com/archive/2021/organizations.
    - Work on “good-first-issues” or “low-hanging-fruits”. Issues are tagged with these to allow new contributors to search for small issues to get started. 
    - Send messages on community channel that you’re interested to contribute to XYZ project (or xyz issue) and how you can get started. 
        
2. **Organisation Application Period**:
	This is phase where organizations submits applications to be selected for GSoC - not really a call-for-action phase for applicants. However, you can:
    - Look out for discussion of projects which usually happen on public channels/ mailing list.
    - Explore projects you’re interested in and share your interest to the community.
    - Remember at this stage the organization itself is not selected yet and there is a chance they might not be selected for that year.
        
3. **Organisations Announced**:
	The contribution period starts where the applicants can connect with organization mentors and discuss the project with them.
    General good advise here is to contact the mentors about how to start, understand the project, and try to get few PRs opened (and possibly merged) before contribution period ends.
        
4. **Contributor Application Period**:
	This is when applicants can register for GSoC and applications for proposals open. There's around 2 weeks until the applications for proposals close. During the contribution period:
	- Continue working on PRs and try understanding the problem statement well. Share your questions in community channels or with mentors. 
	- Most importantly, **communicate your progress with the project mentors**. You might not get quick responses because mentors do get flooded with different applicants and their regular work. But it's good to keep them in-loop about your progress and understanding of the problem statement.  
	- Inquire mentors about a proposal template that the organization might wants you to follow. Every organization works differently, some might have a template and others might not. 
	- Write your proposals and share it with your mentors for review. Work on the changes they suggest, and share again.
	- Submit your proposal on the website early, usually you can later edit your submissions. (Read guidelines for that year to ensure you can edit it)

5. **Proposal Review Period**:
	After the proposal submission deadline, the organization reviews all the proposals. As a applicant you can stay in contact with mentors and keep working on your PRs.
        
6. **Contributor Projects Announced**:
	This is when the selected applicants are announced.
    If your're selected, reach out to mentors and ask them about next steps. If one's not selected, remember that open-source is bigger than GSoC/Outreachy programs, you can continue contributing to the organisation and ask guidance from community members. And with this year’s experience, you’ll be able to better navigate yourself next year.  
        
7. **Internship period**:
	Some good advise is to always keep your mentors in loop about what you're doing. And ask questions when stuck. 

#### Walk through Outreachy Application Phases

![[outreachy-timeline.png]](./outreachy-timeline.png)

1. **Initial application period**:
	Documents: You would need to fill a form with a required document which proves you can dedicate 40 hours a week by showing academic calendar. 
	
	Essay questions: Applicants are required to fill out 4 essay questions within 1000 characters each. Essay questions are:
	a. "Are you part of an underrepresented group (in the technology industry of the country listed above)? How are you underrepresented?"
	b. "What systemic bias or discrimination would you face if you applied for a job in the technology industry of your country?"
	c. "Does your learning environment have few people who share your identity or background? Please provide details."
	d. "What systemic bias or discrimination have you faced while building your skills?"
	For more informations, read [here](https://www.outreachy.org/docs/applicant/#application-period)

2. **Contribution Period**:
	Initial applications are manually reviewed and selected candidates are informed. They get access to the list of projects selected for that year. Rest of the contribution process is similar to GSoC's. By the end of the contribution period, you share your proposal details in a form on the official website. Refer to "Contributor Application Period" section in the above GSoC section and next section ("Proposals") for more information.  

3. **Intern selection period**:
	List of selected applicants is released. You'll receive an email from Outreachy about the next steps. 


#### Proposals

Since all organizations work differently, they might have different rules around proposals. Ask the organisations you're working with, if they have a template for writing proposals. If not, then this might give you an idea about what to include:
1. **Personal Details**: Including email, working timezone, preferred method of contact (email, hangouts, etc) and your working hours.
2. **About Section**: Briefly mention about your education, past internships/jobs, and profile links (LinkedIn, Github, etc).
3. **Contributions to the Selected Project**: Explain your previous work in the selected project. This is where you explain about the PRs you worked on during the contribution period.
4. **Past experience with chosen organization**: Share any previous work done on other projects in the same organization. 
5. **Past open-source contributions**: Share about past contributions in open-source projects from other organizations. Or share about your interests in open-source projects. 
6. **Relevant Projects done before**: Explain about projects done in similar tech stack or goals
7. **Project Details**: 
	1. Explain what you understand about the selected project in your own words. Show-off your understanding of the current work and your plan of action.
	2. List measurable outcome
8. **Proposed Timeline**: Explain week-by-week plan to go about the project - a full 12 week plan. 
9. **Availability**: Ensure that you would be able to devote 40 hours per week to this project. Explain if you would need some time off for exams. And how you would juggle that with an internship. If you know about your exams, plan your timeline around that by keeping a week or two for buffer.

**In outreachy's proposal, the above 4, 5, 6, and 8 points are mandatory to be filled**. For more details, see the application form during contribution period. 

<!-- #### My Experience 

During pandemic in early 2021 when I was in second year of my college, I started exploring open-source projects. I checked out projects like [Internet Archive](https://github.com/internetarchive) , [Postman](https://github.com/postmanlabs) , and [Oppia](https://github.com/oppia/oppia). That year, when applying for the programs, I faced some minor obstacles which ranged from my laptop not having enough resources to handle running a huge project like Oppia (to be fair, it couldn't handle a Figma tab either), to me becoming one of the depressing numbers of infected people in the second wave of COVID in India. Later in the year, I upgraded the memory of my laptop and also explored other projects like [Gitlab](https://gitlab.com/gitlab-org/gitlab) which seemed interesting with good local setup and documentation, but used technology like Ruby and Vue which I had never used by then. While struggling my way around building Ruby projects, I reached out to Gitlab's last year intern and asked about their experience. Eventually, I decided to move onto something within my knowledge of tech stack. My sister was a past intern at [Ceph](https://github.com/ceph) and so she encouraged me to check that out next. 
By early 2022, I saw a list of GSoC projects posted by Ceph and found one "Visualization of Ceph Cluster" project right in the sweet spot of interesting and within my technical knowledge of Angular which I had used for few projects in my first year of college. So, I contacted the mentors and they guided me and patiently reviewed my first few good-first-issues PRs for Ceph Dashboard. After my initial application for Outreachy was accepted, when the project list for Outreachy projects with Ceph were released, the Visualization project was not part of them. I decided to submit my proposal as GSoC intern instead, meanwhile I looked at the Outreachy ceph projects. One of them was called "Making Teuthology a better detective" with a different team at Ceph which used Python. I reached out to the mentors of the teuthology project and they shared a list of tasks to do. By the time the application deadline came, I had proposals ready for both the projects so I submitted them and got selected for both.

![gsoc-email.png](./gsoc-email.png)

![[outreachy-email.png]](./outreachy-email.png)

Though humans tend to forget/undermine their own past struggles, I do remember being stressed during my contribution period of Feb-April. I had somehow managed to again get COVID in January 2022 and then declined a Ruby internship offer to focus on my two work-in-progress Ceph projects and college. I can't advise on stress-management but I can recommend trying your best, taking breaks, and talking with your personal mentors. The advise that had the biggest impact on me was "Start before you're ready" which encourages learning by getting your hands dirty.

After some discussions and deliberation, I decided to withdraw from the GSoC project and do the Outreachy internship over the summer because I wanted to focus on one project and give that my best effort. During my internship, all of my mentors were kind and helped me enormously as I struggled with the workings of the project. They appreciated even subtle techniques in my code and gave me the freedom to learn through trial and error.


 -->

#### Closing notes

Key Takeaways:
1. Always be in contact with the mentors during the application period and the internship period - keep them updated.
2. Make your proposal as descriptive as possible - it's where you can show-off your understanding of the problem statement.
3. Open-source is bigger than these programs - you can always contribute and learn to these projects and become part of their community.

---

If you have any questions, you're welcome to share them with me. Good luck!

You can reach out to me via email at _vallariag+blog@gmail.com_, or:
- LinkedIn: https://www.linkedin.com/in/vallariag
- Twitter: https://twitter.com/VallariAg


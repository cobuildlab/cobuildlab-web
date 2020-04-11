---
id: 881
title: 'User Stories: How to write them?'
date: 2018-02-21T20:47:48+00:00
tags: 
template: development-post
image: ./media/04/4geeks.jpg
---
<span style="font-weight: 400;">User stories are part of many agile development methodologies. These arise in eXtremme Programing (XP) in response to one of the usual situations in the software development: the documentation of the requirements or the functional specifications, in this type of documents, everything that is needed to do the software is described, in traditional models, do not exist or there is very little communication between the team members and the client, each requirement or functional specification of the software is made up of interpretations made by the project leader of a need, each of these is established fixed way, that is to say in the course of the execution of the project this does not change since on this one a previous planning was realized, and a modification can alter the risk of the project. &nbsp;&nbsp;&nbsp;&nbsp;</span>

<span style="font-weight: 400;">The main reason why in agile methodologies the use of extensive documents that describe the functionalities of the software is irrelevant, is because they do not lead to satisfactory results, since they only cover, so to speak, a minimum percentage (7%) in human communication According to Albert Mehrabian, human communication is made up of three parts:</span>

<span style="font-weight: 400;"><br /> 1. In 7%: The content (the words, what was said)<br /> 2. At 38%: The tone of voice<br /> 3. In 55% facial expressions.&nbsp;</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>

<span style="font-weight: 400;">That is, for better results there is nothing like a face-to-face communication, where client, project leader and members of the development team participate in the elaboration of the &#8220;functional requirements&#8221;, which must be short and precise that describe in very few words what is wanted and not how the product should be made, this is known as User Stories.</span><span style="font-weight: 400;"><br /> </span>

<span style="font-weight: 400;">A user story is composed of three elements, also known as &#8220;the three Cs&#8221; of the user stories:</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>**1. Card:** <span style="font-weight: 400;">All user history must be able to be described on a small piece of paper. If this is not possible, it means that too much information is being communicated.</span><span style="font-weight: 400;"><br /> </span>**2. Conversation:** <span style="font-weight: 400;">All user history must have a conversation regarding its content with the Product Owner, you must know how to respond to questions about the value and the expected result of the implementation. This conversation can occur at any time, as it is most common during the execution or selection of the Backlog or the Sprint Planning.</span><span style="font-weight: 400;"><br /> </span>**3. Confirmation:** <span style="font-weight: 400;">All user history must be explained so that the work team knows what they want to do and what the Product Owner expects. This expected value is known as acceptance criteria.</span><span style="font-weight: 400;"><br /> </span>

**What information should be in the user stories?** <span style="font-weight: 400;">It is known that user stories must be short and precise. There is no format to perform the user stories, just take into account the components (the three Cs) and a few fields that are considered necessary to adequately describe a user history. In this way, our user history can contain the following information:</span><span style="font-weight: 400;"><br /> </span>

**ID:** <span style="font-weight: 400;">user history identifier.</span><span style="font-weight: 400;"><br /> </span> <span style="font-weight: 400;"><br /> </span>**Title:** <span style="font-weight: 400;">a descriptive title of the user&#8217;s history.</span><span style="font-weight: 400;"><br /> </span>

**Description:** <span style="font-weight: 400;">synthesized description of the user history. While the style may be free, the user story must answer three questions: </span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;"><strong>Who benefits?</strong> It seeks to understand which user role will need to perform this function in the system. Any person who interacts with the system must fit with any of the identified user roles, and these can range from the most general to the most specific, depending on the purpose of the system. Example: assistant, team manager, salesperson, human resources technician, etc.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;"><strong> What do you want?</strong> It seeks to understand what functionality the user wants to make through the use of the system. It is very important to emphasize that this part of user stories should focus on the what, and not on the how because the latter is something that the development team must respond to when seeking to provide solutions to the user story.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;"><strong> What is the benefit?</strong> It seeks to understand what is the added value that this user story has for the user of the system. This is probably the most forgotten part of the user story since users often feel that they are simply being asked for a justification for their request. However, this is the part that informs the Product Owner how much-added value the system will have if this user story is prioritized</span>
</li>

**Estimation:** <span style="font-weight: 400;">estimation of the implementation time of the user&#8217;s history in development units, known as history points (these units will represent the theoretical development time/person stipulated at the beginning of the project).</span><span style="font-weight: 400;"><br /> </span> <span style="font-weight: 400;"><br /> </span>**Value:** <span style="font-weight: 400;">value (usually numerical) that the user history brings to the client or user. The objective of the team is to maximize the value and satisfaction perceived by the client or user in each iteration. This field will determine, along with the time, the order in which the user stories are going to be implemented.</span><span style="font-weight: 400;"><br /> </span> <span style="font-weight: 400;"><br /> </span>**Dependencies:** <span style="font-weight: 400;">a user story should not be dependent on another story, but sometimes it is necessary to maintain the relationship. In this field, the identifiers of other stories on which it depends will be indicated.</span><span style="font-weight: 400;"><br /> </span> <span style="font-weight: 400;"><br /> </span>**Acceptance tests:** <span style="font-weight: 400;">consensus tests between the client or user and the team that the code must overcome to complete the implementation of the user history. This field is also commonly referred to as &#8220;acceptance criteria or conditions.&#8221;</span><span style="font-weight: 400;"><br /> </span>

**Writing a User StoryCommon****
  
** <span style="font-weight: 400;">Mike Cohn suggests a certain way of writing User Stories in the following format:</span><span style="font-weight: 400;"><br /> </span> 

<p style="text-align: center;">
  <i><span style="font-weight: 400;">As a < </span></i><b><i>type of user </i></b><i><span style="font-weight: 400;">>, </span></i><b><i>I want </i></b><i><span style="font-weight: 400;">< some goal > </span></i><b><i>so that</i></b><i><span style="font-weight: 400;"> < some reason ></span></i>
</p>

<p style="text-align: center;">
  (Advantages of the “As a user, I want” user story template, Mike Cohn,2008)
</p>

 <span style="font-weight: 400;">The wording is done in the first person, in this way is invited whoever reads the user&#8217;s story to be put in the user&#8217;s place.</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>

<table>
  <tr>
    <td colspan="3">
      <b>#1</b>
    </td>
  </tr>
  
  <tr>
    <td colspan="3">
      <b>Record of notes</b>
    </td>
  </tr>
  
  <tr>
    <td colspan="3">
      <span style="font-weight: 400;">As a teacher, I need to record student grades to keep track of approved and failed students.</span>
    </td>
  </tr>
  
  <tr>
    <td>
      <b>Estimation: 3</b>
    </td>
    
    <td>
      <b> Value: 60 </b>
    </td>
    
    <td>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;Dependencies:</b><b></b></p> 
      
      <p>
        &nbsp;
      </p>
    </td>
  </tr>
  
  <tr>
    <td colspan="3">
      <b>Acceptance Conditions:</b><b><br /> </b><span style="font-weight: 400;">&#8211; Record of notes per student (only numerical values)</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;">&#8211; Satisfactory note registration notice</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;">&#8211; Calculation of the average of approved and failed</span>
    </td>
  </tr>
</table>

<p style="text-align: center;">
  <b>Illustration User History Tab.</b>
</p>

**What is INVEST? Characteristics of a user history****
  
** <span style="font-weight: 400;">Bill Wake in 2003 described in his article &#8220;INVEST in Good Stories, and SMART Tasks&#8221;, a way to &#8220;check&#8221; that a user story is well written. INVEST is the acronym for Independiente, Negotiable, Valuable, Estimable, Small, and Testable.</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>**Independent:** <span style="font-weight: 400;">It is important that each user story can be planned and implemented in any order. For this, they should be totally independent. Dependencies between user stories can be reduced by combining them into one or dividing them differently.</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>**Negotiable:** <span style="font-weight: 400;">A user history is a short description of a need that does not include details. The stories must be negotiable since their details will be agreed by the client/user and the team during the &#8220;conversation&#8221; phase. Therefore, a user history with too many details should be avoided because it would limit the conversation about it.</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>**Valuable:** <span style="font-weight: 400;">A user story has to be valuable to the client or the user. One way to make a story valuable to the client or the user is to write it himself.</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>**Estimable:** <span style="font-weight: 400;">A good user history should be estimated with sufficient precision to help the client or user to prioritize and plan their implementation. The estimate will usually be made by the team and is directly related to the size of the user&#8217;s history (a large user history is more difficult to estimate) and with the team&#8217;s knowledge of the need expressed (in the case lack of knowledge, more phases of conversation about it will be necessary).</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>**Small:** <span style="font-weight: 400;">The user stories should include at most a few weeks/person of work. There are even teams that restrict them to days/person. A short description helps to reduce the size of a user&#8217;s story, facilitating its estimation.</span><span style="font-weight: 400;"><br /> </span><span style="font-weight: 400;"><br /> </span>**Testable:** <span style="font-weight: 400;">The user history should be able to be tested (&#8220;confirmation&#8221; phase of the user history). If the client or user does not know how to prove the user&#8217;s history it means that it is not completely clear or that it is not valuable. If the team cannot prove a user history, they will never know if it has finished or not.</span><span style="font-weight: 400;"><br /> </span>

[**Pamela Brito Linkeding**](https://www.google.com/url?q=https://www.linkedin.com/in/britopamela/&sa=D&source=hangouts&ust=1519821387286000&usg=AFQjCNHPRWAPWzcv7na2Cx7WlcdwqTtaHQ)

---
title: "User Stories: How to write them?"
date: "2018-02-28T18:04:52.000Z"
category: 
image: "./media/userstories.jpg"
---

**User stories** are part of many agile development methodologies. These arise in extremme Programing (XP) in response to one of the usual situations in the software development: the documentation of the requirements or the functional specifications, in this type of documents, everything that is needed to do the software is described, in traditional models, do not exist or there is very little communication between the team members and the client, each requirement or functional specification of the software is made up of interpretations made by the project leader of a need, each of these is established fixed way, that is to say in the course of the execution of the project this does not change since on this one a previous planning was realized, and a modification can alter the risk of the project.

The main reason why in agile methodologies the use of extensive documents that describe the functionalities of the software is irrelevant, is because they do not lead to satisfactory results, since they only cover, so to speak, a minimum percentage (7%) in human communication According to Albert Mehrabian, human communication is made up of three parts:

- 1.  In 7%: The content (the words, what was said)

- 2.  At 38%: The tone of voice

- 3.  In 55% facial expressions.

That is, for better results there is nothing like a face-to-face communication, where client, project leader and members of the development team participate in the elaboration of the "functional requirements", which must be short and precise that describe in very few words what is wanted and not how the product should be made, this is known as **User Stories**.

A user story is composed of three elements, also known as "the three Cs" of the user stories:

**1\. Card:** All user history must be able to be described on a small piece of paper. If this is not possible, it means that too much information is being communicated.

**2\. Conversation:** All user history must have a conversation regarding its content with the Product Owner, you must know how to respond to questions about the value and the expected result of the implementation. This conversation can occur at any time, as it is most common during the execution or selection of the Backlog or the Sprint Planning.

**3\. Confirmation:** All user history must be explained so that the work team knows what they want to do and what the Product Owner expects. This expected value is known as acceptance criteria.

<title-3 align="centered">What information should be in the user stories?</title-3>

It is known that user stories must be short and precise. There is no format to perform the user stories, just take into account the components (the three Cs) and a few fields that are considered necessary to adequately describe a user history. In this way, our user history can contain the following information:

**ID:** user history identifier.

**Title:** a descriptive title of the user's history.

**Description:** synthesized description of the user history.

While the style may be free, the user story must answer three questions:

<title-3 align="centered">Who benefits?</title-3>

It seeks to understand which user role will need to perform this function in the system. Any person who interacts with the system must fit with any of the identified user roles, and these can range from the most general to the most specific, depending on the purpose of the system. Example: assistant, team manager, salesperson, human resources technician, etc.

<title-3 align="centered">What do you want?</title-3>

It seeks to understand what functionality the user wants to make through the use of the system. It is very important to emphasize that this part of user stories should focus on the what, and not on the how because the latter is something that the development team must respond to when seeking to provide solutions to the user story.

<title-3 align="centered">What is the benefit?</title-3>

It seeks to understand what is the added value that this user story has for the user of the system. This is probably the most forgotten part of the user story since users often feel that they are simply being asked for a justification for their request. However, this is the part that informs the Product Owner how much-added value the system will have if this user story is prioritized

**Estimation:** estimation of the implementation time of the user's history in development units, known as history points (these units will represent the theoretical development time/person stipulated at the beginning of the project).

**Value:** value (usually numerical) that the user history brings to the client or user. The objective of the team is to maximize the value and satisfaction perceived by the client or user in each iteration. This field will determine, along with the time, the order in which the user stories are going to be implemented.

**Dependencies:** a user story should not be dependent on another story, but sometimes it is necessary to maintain the relationship. In this field, the identifiers of other stories on which it depends will be indicated.

**Acceptance tests:** consensus tests between the client or user and the team that the code must overcome to complete the implementation of the user history. This field is also commonly referred to as "acceptance criteria or conditions."

**Writing a User Story** Mike Cohn suggests a certain way of writing User Stories in the following format:

_As a <_ **_type of user_** _>,_ **_I want_** _< some goal >_ **_so that_** _< some reason >_

(Advantages of the “As a user, I want” user story template, Mike Cohn,2008)

The wording is done in the first person, in this way is invited whoever reads the user's story to be put in the user's place.

**1**

**Record of notes**

As a teacher, I need to record student grades to keep track of approved and failed students.

**Estimation: 3**

**Value: 60**

**Dependencies:**

**Acceptance Conditions:** \- Record of notes per student (only numerical values) - Satisfactory note registration notice - Calculation of the average of approved and failed

**Illustration User History Tab.**

<title-3>What is Invest? Characteristics of a user history<title-3>

Bill Wake in 2003 described in his article "INVEST in Good Stories, and SMART Tasks", a way to "check" that a user story is well written. INVEST is the acronym for Independiente, Negotiable, Valuable, Estimable, Small, and Testable.

**Independent:** It is important that each user story can be planned and implemented in any order. For this, they should be totally independent. Dependencies between user stories can be reduced by combining them into one or dividing them differently.

**Negotiable:** A user history is a short description of a need that does not include details. The stories must be negotiable since their details will be agreed by the client/user and the team during the "conversation" phase. Therefore, a user history with too many details should be avoided because it would limit the conversation about it.

**Valuable:** A user story has to be valuable to the client or the user. One way to make a story valuable to the client or the user is to write it himself.

**Estimable:** A good user history should be estimated with sufficient precision to help the client or user to prioritize and plan their implementation. The estimate will usually be made by the team and is directly related to the size of the user's history (a large user history is more difficult to estimate) and with the team's knowledge of the need expressed (in the case lack of knowledge, more phases of conversation about it will be necessary).

**Small:** The user stories should include at most a few weeks/person of work. There are even teams that restrict them to days/person. A short description helps to reduce the size of a user's story, facilitating its estimation.

**Testable:** The user history should be able to be tested ("confirmation" phase of the user history). If the client or user does not know how to prove the user's history it means that it is not completely clear or that it is not valuable. If the team cannot prove a user history, they will never know if it has finished or not.

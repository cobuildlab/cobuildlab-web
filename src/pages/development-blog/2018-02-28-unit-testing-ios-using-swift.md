---
id: 900
title: Unit Testing in IOS using Swift
date: 2018-02-28T18:47:40+00:00
tags: 
template: development-post
image: /wp-content/uploads/2018/02/swift.jpg
---
As developers, we should use tests to save time on important tasks, few we do it because we never have &#8220;time&#8221;, while less tests we make, it is more likely that the code is less stable and then fails.

Noting that in the world of software development there are many types of tests, here are some of them:

  * Testing: Access to verify individually each of the app functions, usually represented by a method in the source code.
  * Functional Testing: They allow us to verify that the functionality that performs our app fulfill the requirements of it.
  * Built-in tests: check the integration of different elements in the software, once they have been verified.
  * Grants Performance Tests: they verify the performance offered by the different features that our app includes.

Before getting into the subject, I will let you know what unit tests are for those people that are just entering to this field.

A unit test, in precise words, is what checks the development of the functionality of the code quick and simple.

Like everything else, this has certain characteristics that are important to know:

  * It tests small amounts of code.
  * It should not depend or affect other tests (Independent).
  * It is repeatable and predictable, should not hit the order, and the times that you repeat the test, the result has to be the same all the time.
  * Automatable, the test should not require manual intervention.

Implementing unit testing has its advantages.

  * Mainly is, less errors and they are easier to locate.
  * They reduce the amount of errors and the time in locating them.
  * Promotes the change.
  * Unit tests allow you to reorder the code as it allows to test the changes.

Adopting the use of unit tests as a discipline should not be seen as a disadvantage, quite the opposite, we must understand that this activity will help us to save time in the future and also the occurrence of errors. The use of these will allow us to progressively improve the quality of the code we develop in the measure that we increase its application in our projects.

What types of tests exist in Xcode?

In Xcode There are mainly two types of testing:

  * Logical Unit Testing: they verify the correct operation of a snippet of the code independently (without being in our app). They can only run in the Simulator of Xcode.
  * Testing of application: they verify the correct operation of fragments of code in our app. This enables us to verify, among others, that the IBActions IBOutlets connections in our app are correct, and even that the controls and drivers of our app work correctly with respect to our model. Also, these tests will allow us to verify a specific functionality of a device, such as the use of geolocation, accelerometer, etc.Good practice for writing test cases.Following the directions in the Guide Xcode Unit Testing Guide, it suggests us to have in mind the following:
  * Define the requirements of your API: we must define for each of the methods of our project, the possible ranges of input values, what exceptions should occur in which cases, and the return values for each of the caseloads.
  * Write unit tests while you write your code: this means that we do not have to leave the writing test to the end , but this has to be an iterative process throughout the development of our app.
  * Check the minimum and maximum values: it means that if our method expects to receive a value between 0 and 100, let&#8217;s test cases for the values 0, 50, and 100 for example.
  * Use negative tests: these tests verify that our code behaves correctly in the face of incorrect parameters, as for example a value of 200 for the previous method.
  * Give coverage to the bugs with test cases: when we amend our code to fix a bug detected, write a test case to automatically check the correction of this bug in the future.

Here is a basic example of IOS Unit Testing:

This is the Test class where we have the methods to test.

<pre class="prettyprint">import Foundation

class Test {
    
    //This function adds two numbers.
    func sum(a:Int, b:Int) -&gt; Int {
        return a+b
    }
    
    //This function subtracts two numbers.
    func sub(a:Int, b:Int) -&gt; Int {
        return a-b
    }
    
    //This function divides two numbers.
    func div(a:Int, b:Int) -&gt; Int {
        return a/b
    }
    
    //This function multiplies two numbers.
    func mul(a:Int, b:Int) -&gt; Int {
        return a*b
    }
}
</pre>

Later, on our Unit Test file we should create a method that must have the word &#8216;test&#8217; before anything else, for example:

<li class="p1">
  <span class="Apple-converted-space">    t</span>estExample()
</li>
<li class="p1">
  <span class="Apple-converted-space">    </span>testValidation()
</li>
<li class="p1">
  <span class="Apple-converted-space">    </span>testGenerate()
</li>

<pre class="prettyprint">func testExample() {
        let test = Test()
        
        //This a success case.
        XCTAssertEqual(test.sum(a: 2, b: 2), 4, "Function works perfectly.")
        
        //This a fail case
        XCTAssertNotEqual(test.sum(a: 2, b: 2), 5)
    }
</pre>

The last step is run the test, we have to press the play button and Xcode test the code.

<img class="alignnone size-large wp-image-909" src="https://community.4geeks.co/wp-content/uploads/2018/02/Screen-Shot-2018-02-27-at-3.20.15-PM-2-1024x640.png" alt="" width="800" height="500" />

&nbsp;
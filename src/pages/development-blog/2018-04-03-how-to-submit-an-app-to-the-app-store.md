---
id: 1038
title: How to submit an app to the App Store?
date: 2018-04-03T04:53:07+00:00
tags: 
template: development-post
---

<p class="p2">
  <span class="s1">To enjoy the Apps, it is essential to follow the steps:</span>
</p>

<p class="p2">
  <span class="s1">First, open access to keychains. This is an application where you can sort and manage your passwords. Inside this, you must request a certificate from a certification authority.<span class="Apple-converted-space">  </span>For this you must click on the name of the application in the menu bar and look for the option “Certificate Assistant” and at that same moment request a certificate from a certification authority.</span>
</p>

![Keychain access](./wp-content/uploads/2018/04/pic1-1024x340.png)

<p class="p2">
  <span class="s1">Fill the requested fields and choose the option “Save the certificate on the hard drive”. In this way you can have it always at hand (Don’t change the name of the certificate).</span>
</p>

<p class="p2">
  <span class="s1">In case your keychain isn’t validated, you should visit the sites: Apple Certification and add the downloaded certificate to your keychain. You just have to double click on the certificate to be automatically added to your keychain.</span>
</p>

<p class="p2">
  <span class="s1">Login to your Apple Developer Account (where you previously created your developer account) once inside, click on “Certificates, Identifiers & Profiles”.</span>
</p>

<img class="alignnone size-large wp-image-1047" src="https://community.4geeks.co/wp-content/uploads/2018/04/pic2-1024x422.png" alt="" width="800" height="330" />

<p class="p2">
  <span class="s1">Once inside to the menu, on the left side you can see everything that will be needed from now on.</span>
</p>

<p class="p2">
  <span class="s1">First we must do is create a production certificate. This certificate will be unique and you will have to use it for all the Apps that you want to publish. For that reason, it is important to keep it in a folder and always have it at hand.<span class="Apple-converted-space">  </span>To create this certificate, go to the certificates menu and click on production. At the top you will find a plus symbol (+), click on it to create your certificate and choose the “App Store and Ad hoc”. Then must click on “Continue” until the platform ask to upload “Certificated Signing Request” (this certificate is downloaded from our keychain) and we will create our certificate that must be download to our Mac.</span>
</p>

<p class="p2">
  <span class="s1">You must double click on your new certificate so that it is automatically added to the keychain. Then, click on the new certificate on the keychain so that the menu opens and we can export our final certificate, which must have an extension “p12”. You will have to store it on your Mac with the production name and add a password that is easy to remember, because you will have to enter it again. Keep in mind that this certificate is unique and you can use it for all your Apps.</span>
</p>

<img class="size-full wp-image-1048 aligncenter" src="https://community.4geeks.co/wp-content/uploads/2018/04/pic3.png" alt="" width="366" height="226" />

<p class="p2">
  <span class="s1">Now, inside of our Apple Developer Account we go to “iOS Apps IDs” to create the unique ID of our App. For this you must click on the button with plus symbol (+) and complete the requested information such as the name of your App, the Bundle ID and the Push Notification option. The Bundle ID is a unique application code, just copy it and paste it into the Developer Account. In the App Services select the “Push Notifications”, otherwise you cannot send these messages.</span>
</p>

<p class="p2">
  <span class="s1">Finally, we must go to the “Provisioning Profiles” menu and choose the “Distribution” option. There, we must click on plus symbol (+) to create a distribution profile. Choose the App Store and then search for your App ID inside the list. Also you must choose the distribution certificate that you are using and that’s it. You should only download the file and save it on your Hard Drive.</span>
</p>

<p class="p2">
  <span class="s1">Now it’s time to go to iTunes Connect. There, you must create a new App to be able to add all the information that previously has been prepared like the icon and the screenshots.</span>
</p>

<img class="alignnone size-large wp-image-1049 aligncenter" src="https://community.4geeks.co/wp-content/uploads/2018/04/pic4-1024x493.png" alt="" width="800" height="385" />

<p class="p2">
  <span class="s1">Inside iTunes Connect complete the information that appears in each of the menus. First you will find the general information of the App as the “Pack ID” and “SKU”. Also choose a category for your App and the classification of it. Then select whether the application will be immediately when Apple Verifies or whenever you want.</span>
</p>

<img class="size-large wp-image-1050 aligncenter" src="https://community.4geeks.co/wp-content/uploads/2018/04/pic5-1024x312.png" alt="" width="800" height="244" />

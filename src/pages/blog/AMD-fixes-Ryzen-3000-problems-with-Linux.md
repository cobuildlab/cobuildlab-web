---
title: "AMD fixes Ryzen 3000 problems with Linux"
date: "2019-07-29T16:00:00.000Z"
template: blog
tags: News
image: "./media/ryzen 3000.jpg"
---

<title-2>AMD fixes Ryzen 3000 problems with Linux</title-2>


Everything indicates that at least for the moment, it is not possible to reach the frequencies promised by AMD in the presentation of this generation of processors. When AMD first launched its Ryzen 3000 series processors on July 7, 2019 they were unable to launch Bungie’s most popular title: Destiny 2. Many reviews have appeared throughout the Internet, indicating problems in several fronts, especially those related to overclocking. Not being able to play Destiny 2 on Windows 10, and not being able to boot up Linux using more recent kernels are two vastly different and curious bugs that early Zen2 buyers have run up against.

Regarding the complications with the Linux open-source operating system, this affects all 2019 distributions. Any version of this OS based on kernel 5.0, 5.1 and 5.2 presents problems. So the issue is that the RdRand instruction prevents the system from booting on MAD Ryzen 3000 processors.

The situation with the Open Source system is even worse due to an error detected in systemd, the more widespread init (component in charge of booting the system and managing the services) and the one used by the most well-known distributions , which is preventing the proper functioning of certain modern Linux on Ryzen 3000, despite promising numbers at the performance level.

The bug has localized in the RdRand function, which runs directly and collides with systemd. It results in erroneous values thrown by RdRand at system startup when using a modern Linux such as Ubuntu 19.04, since curiously in Ubuntu 18.04, current LTS and AMD-tested version, this problem does not even occur by updating the kernel. Fortunately, there is already a solution published in the Git repository of systemd, so the bug should be fixed in Ubuntu 19.10 and direct competitors such as Fedora 31.

"AMD has identified the root cause and implemented a BIOS fix for an issue impacting the ability to run certain Linux distributions and Destiny 2 on Ryzen 3000 processors.  We have distributed an updated BIOS to our motherboard partners, and we expect consumers to have access to the new BIOS over the coming days." said an AMD representative in a statement.

The bug has localized in the RdRand function, which runs directly and collides with systemd. It results in erroneous values thrown by RdRand at system startup when using a modern Linux such as Ubuntu 19.04, since curiously in Ubuntu 18.04, current LTS and AMD-tested version, this problem does not even occur by updating the kernel. Fortunately, there is already a solution published in the Git repository of systemd, so the bug should be fixed in Ubuntu 19.10 and direct competitors such as Fedora 31.

"AMD has identified the root cause and implemented a BIOS fix for an issue impacting the ability to run certain Linux distributions and Destiny 2 on Ryzen 3000 processors.  We have distributed an updated BIOS to our motherboard partners, and we expect consumers to have access to the new BIOS over the coming days." said an AMD representative in a statement.

The recently released BIOS version would not only have to fix the failure of systemd and Linux, but also another one found in Destiny 2 when played from Windows.

Now that AMD is taking an active role in correcting the situation of Ryzen 3000 and Radeon RX 5700 let's hope that soon enough Windows and Linux users start to have fully functional drivers, microcodes and BIOSes. 



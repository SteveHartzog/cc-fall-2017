const sessions = [
  {
    "id": "bot-framework",
    "topic": "Bot Framework, Azure and You",
    "description": "The latest version of ASP .NET Core introduces some great new capabilities with VS2017, the inclusion of Razor pages and new SPA templates. Come join Microsoft Senior Technical Evangelist Shahed Chowdhuri at NoVA Code Camp to learn about the future of web apps with ASP.NET Core 2.0! ",
    "speaker": "shahed-chowdhuri",
    "room": "3054",
    "timeSlot": "1"
  },
  {
    "id": "full-stack-typescript",
    "topic": "Full Stack TypeScript",
    "description": "We'll start with a look at what full stack has been with ASP.NET, and then look at how it has changed with TypeScript. We will then look at how TypeScript works from configuration of the environment to acquiring TypeScript definitions for your libraries. Finally we will look at a complete TypeScript application with ts-node and tsc.",
    "speaker": "steve-hartzog",
    "room": "3054",
    "timeSlot": "2"
  },
  {
    "id": "build-angular4",
    "topic": "How to Build an App with Angular 4 & Material 2",
    "description": "Angular 4 & Material 2 enables best-in-class web development experience and capabilities. In this session, we will be creating a local weather forecast app from scratch covering the basic concepts of using Angular CLI, Material 2, HttpClient, Router, RxJS Observables, Reactive Forms, Input Validations and the new element and property binding syntax. We will then leverage npm scripts for Docker to containerize and publish the app publicly and quickly using Zeit Now.",
    "speaker": "doguhan-uluca",
    "room": "3054",
    "timeSlot": "3"
  },
  {
    "id": "introduction-to-vue",
    "topic": "A Gentle Introduction to Vue.JS",
    "description": "Vue.js is quickly gaining popularity as a preferred front end framework, and rightfully so. It strikes a delicate balance between being simple enough to drop in and use quickly but powerful enough to extend to full single-page applications and other complex use cases. In this talk aimed at both JavaScript beginners and experts alike we'll start with the fundamental concepts of Vue.js and learn how to add it to your pages with only a handful of extra code. We'll also look at why you might want to apply Vue.js and how it fits into the bigger picture of an MVC server-side application. By the time we're done, I guarantee you'll be as excited about this framework as I am.",
    "speaker": "dave-glick",
    "room": "3054",
    "timeSlot": "4"
  },
  {
    "id": "browser-security",
    "topic": "Browser Security for Web Developers",
    "description": "Modern browsers offer a host of features for securing your web application. In this talk we take a look at ten browser features that help you write secure web application.  We talk about writing sites that reduce the risk of impersonation and surveillance, and look at ways to help ensure that third party libraries used on your site are more secure.",
    "speaker": "steve-albers",
    "room": "3054",
    "timeSlot": "5"
  },
  {
    "id": "xamarin-vs-ionic",
    "topic": "Xamarin vs. Ionic: A Mobile, Cross Platform, Shootout",
    "description": "Learn the pro's and con's of two leading approaches for sharing code between iOS and Android mobile apps. This talk will compare building hybrid html/javascript apps in Ionic 2 and Apache Cordova with building fully native ones in Xamarin. We'll cover development speed, quality of end result, maintainability, unit testing, and ramp-up time. You'll come away from this talk with the skills to choose between a native or hybrid architecture for your next cross-platform mobile project.",
    "speaker": "lee-richardson",
    "room": "3058",
    "timeSlot": "1"
  },
  {
    "id": "mobile-devops-part1",
    "topic": "Mobile DevOps with Visual Studio Mobile Center Part 1: Build and Distribute",
    "description": "Learn how to streamline the CI/CD pipeline for your mobile apps. Mobile Center allows you to automatically build and kickoff tests on physical devices (in the cloud) each time you push commits to your code repository and automatically distribute your builds to your beta testers. In this talk we'll explore the Build and Distribution capabilities of Mobile Center and I will show how to setup it all up with a real mobile app. Be sure to checkout Part 2 of this topic in Keith Fung's afternoon session where he'll show how to use Mobile Center to automate UI testing, analytics and crash reporting for mobile apps.",
    "speaker": "ed-snider",
    "room": "3058",
    "timeSlot": "2"
  },
  {
    "id": "mobile-devops-part2",
    "topic": "Mobile DevOps with Visual Studio Mobile Center Part 2: Testing and Analytics",
    "description": "Part 2 of a series to further explore Mobile DevOps with Visual Studio Mobile Center. This session will focus on ensuring your mobile apps are built up to snuff. Testing to get it right the first time; analytics to see how users are using your app; and crash reports to proactively catch those pesky bugs.",
    "speaker": "keith-fung",
    "room": "3058",
    "timeSlot": "3"
  },
  {
    "id": "reactive-programming",
    "topic": "Reactive Programming with Commands, Actors and Events",
    "description": "Command Query Responsibility Segregation is a pattern which is used to manage impedance mismatch between how your application uses data and how the underlying store manages data so that transactional updates can be served with equal agility as read-only queries. From the functional paradigm prospective, the CQRS pattern can be seen as a set of referentially transparent functions that model decisions and interpretation. Moreover, with the event of micro-services and with the combination of the Actor model, the fundamental design of this pattern can dramatically simplify the overall architecture of your application. In this session, we’ll look at the pros and cons to this approach to system architecture and design and how we can build an event driven system using a messaging framework/toolset like, but not only, Observables and Actors.",
    "speaker": "riccardo-terrell",
    "room": "3058",
    "timeSlot": "5"
  },
  {
    "id": "integration-junction",
    "topic": "Integration Junction: What's Your Function",
    "description": "Desperate to make the disparate come together??? During this session, I will go over some of the common patterns of integration and provide an overview of Microsoft's tools for integration: Azure Functions, Flow, Logic Apps, and WebJobs. I will cover the who, what, when, where, and why of all these approaches and provide some examples that will get you on your way to gluing your systems together for the enterprise.",
    "speaker": "labrina-loving",
    "room": "3062",
    "timeSlot": "1"
  },
  {
    "id": "stretching-dotnet",
    "topic": "Stretching .NET: An Introcution to ElasticSearch .NET",
    "description": "ElasticSearch.NET is a fantastic client for the ElasticSearch DB, which has a number of performance advantages and great use cases for solving modern development problems. In this session, you'll learn some background about ElasticSearch.NET, and will work through a real-world use case for utilizing it in your applications.",
    "speaker": "sean-killeen",
    "room": "3062",
    "timeSlot": "2"
  },
  {
    "id": "azure-functions",
    "topic": "It's a Brand-New Backend - Azure Functions",
    "description": "In this day with all the buzz about serverless, this session is about Azure Functions. We will show how to create these function with the recently added capabilities in Visual Studio 2017. We will build functions using C# and EF talking to Sql Server databases. We will talk about the advantages using functions over traditional Web API backend ends. We talk how this can be used for web or mobile frontends. This session will end showing a real-world example.",
    "speaker": "van-van-lowe",
    "room": "3062",
    "timeSlot": "3"
  },
  {
    "id": "getting-started-with-ms-graph-apis",
    "topic": "Getting Started with Microsoft Graph APIs",
    "description": "Microsoft Graph (previously called Office 365 unified API) exposes multiple APIs from Microsoft cloud services through a single REST API endpoint (https://developer.microsoft.com/en-us/graph/ ). Using the Microsoft Graph, we can turn formerly difficult or complex queries into simple navigations. Using a single authentication token The Microsoft Graph gives us a unified API endpoint for accessing aggregated data from multiple Microsoft cloud services like email, calendar, contacts, files in One drive for business in a single response. In this demo-driven session, we will cover the insights of Microsoft Graph and build the working Add-In. We will cover how we can consume the data from different Microsoft services into our custom add-in/application. You will learn: What is Microsoft Graph? Best practices of using Microsoft Graph Impact of the Graph in the new Microsoft and how you will benefit from this API How to authenticate with Azure AD to obtain single token How to connect to the Microsoft Graph from multiple platforms (.NET, PowerShell, AngularJS)?",
    "speaker": "prashant-bhoyar",
    "room": "3062",
    "timeSlot": "4"
  },
  {
    "id": "azure-powershell-101",
    "topic": "Azure PowerShell 101: quick automation tips",
    "description": "Let’s dive into Azure fundamentals and clear out some myth about cloud computing. Learn about different script automation options that are currently available. Get a solid understanding of PowerShell commands and capabilities. In this demo heavy session, we will learn how to provision Azure resources with a breeze.",
    "speaker": "elkhan-yusubov",
    "room": "3062",
    "timeSlot": "5"
  },
  {
    "id": "what-is-canjs",
    "topic": "What is CanJS?",
    "description": "CanJS is an evolving and improving set of client side JavaScript architectural libraries that balances innovation and stability. \
    CanJS includes everything you need to build a modern, well architected JavaScript application: \
    Observable objects \
    Computed properties \
    Live binding templates \
    Custom elements \
    Service modeling and intelligent data caching \
    Routing",
    "speaker": "wahid-alimi",
    "room": "3026",
    "timeSlot": "1"
  },
  {
    "id": "r-for-non-data-nerds",
    "topic": "R for Non-Data Nerds (Like Me)",
    "description": "Harvard Business Review called data science “the sexiest career of the 21st century.” But what if you’re not ready for the cover of a romance novel? This overview of the data language R with fun samples and use cases will get developers of any background up to speed.",
    "speaker": "dan-stalcup",
    "room": "3026",
    "timeSlot": "2"
  },
  {
    "id": "alexa-controlled-thermostat",
    "topic": "Alexa Controlled Multi-Zone IoT Thermostat",
    "description": "In this presentation, we’ll take a deep dive into what Amazon Alexa is (and what it isn’t). We’ll look at the flow from Echo/ Echo Dot all the way to the device and learn about what occurs at what stage in the flow. We’ll then play with a live Alexa controlled multi-zone IoT thermostat device and get a feel for the kinds of things one can do with Alexa or any Natural Language Processing engine. \
    This presentation is chock-full of code and demos. During the course of this presentation, we’ll dive deep into the following: \
    Using TypeScript to build a Node.JS application with Visual Studio and full debugging support \
    Designing and building TypeScript, Node.JS application for Amazon AWS Lambda \
    Creating and Designing an Alexa Skill \
    Deploying and Testing an Alexa Skill \
    Azure Worker Roles (C#) \
    Azure Table Storage (C#) \
    Azure Notification Hubs (C#)",
    "speaker": "shiv-kumar",
    "room": "3058",
    "timeSlot": "4"
  },
  {
    "id": "rasberrypi-sensehat-fun",
    "topic": "RasberryPi SenseHat Fun!",
    "description": "The Internet Of Things (IOT) is upon us! Let's rejoice and be nerds, in this session come enjoy a simple introduction to the Sense HAT Raspberry PI shield. No prior knowledge of the Raspberry PI, sensor or electronics required. We will build some real life samples of what can be done for fun and profit with a simple Raspberry PI and a Sense HAT shield.",
    "speaker": "roberto-hernandez",
    "room": "3026",
    "timeSlot": "4"
  },
  {
    "id": "python-flask",
    "topic": "Python Flask Dockerized Development Environment",
    "description": "In this talk you are going to learn about creating a Dockerized Python Web Development environment using Flask. Flask is a modern Web Development framework and in this session we are going to look at how we can leverage the Docker Containers to setup a Dev and Production environment to ensure that we have debugging capabilities.",
    "speaker": "vinit-patankar",
    "room": "3028",
    "timeSlot": "2"
  },
  {
    "id": "docker-workshop",
    "topic": "Docker Workshop",
    "speaker": "wyn-van-devanter",
    "description": "This is a getting started workshop for using Docker, and focuses on using it for development since that is a logical and no-risk place to start. We will use an ASP.NET Core app for the exercise, but any app on most stacks that can run on Linux should work. You will be guided through running a container from an image from Docker Hub. Then you'll create your own image & container, in order to build and run an app inside the container, without having to install anything locally except Docker. NOTICE Please go through the steps in “Preparation” before attending, in order to not waste time with setup and to get the large, needed images (do it over wi-fi as they’re over 2gb). https://github.com/excellalabs/docker-workshop-1 ",
    "room": "3028",
    "timeSlot": "3"
  },
  {
    "id": "docker-workshop",
    "topic": "Docker Workshop",
    "description": "This is a getting started workshop for using Docker, and focuses on using it for development since that is a logical and no-risk place to start. We will use an ASP.NET Core app for the exercise, but any app on most stacks that can run on Linux should work. You will be guided through running a container from an image from Docker Hub. Then you'll create your own image & container, in order to build and run an app inside the container, without having to install anything locally except Docker. NOTICE Please go through the steps in “Preparation” before attending, in order to not waste time with setup and to get the large, needed images (do it over wi-fi as they’re over 2gb). https://github.com/excellalabs/docker-workshop-1 ",
    "speaker": "wyn-van-devanter",
    "room": "3028",
    "timeSlot": "4"
  },
  {
    "id": "building-docker-cluster",
    "topic": "Building a Docker Cluster using Rasberry Pis",
    "description": "",
    "speaker": "patrick-leong",
    "room": "3028",
    "timeSlot": "5"
  },
  {
    "id": "tech-talk",
    "topic": "So you wanna give a tech talk? (Tech talk tips & tricks)",
    "description": "Imagine that Great Amazing Thing you just worked on, and OH WHAT A STORY YOU COULD TELL! It has bells, whistles, drama, intrigue. There's some crafty code and a rarely-used workaround that could Change The World As We Know It! It talks about a new framework! And you have jokes! And pictures! And and and... \
    And... you have a huge audience filling seats. Different backgrounds. Different primary spoken language. Different eyesight & hearing. Different coding skills. Different attention spans. HOW WILL YOU SURVIVE!?!? \
    Having given, and watched, a huge bunch* of talks worldwide, I've learned many things that help (and hurt) presentations. In this talk, I'll attempt to use the \"things that help\" to show you things that help AND things that hurt** in hopes that all of our future talks can help more and hurt less. \
    * \"huge bunch\" - some ridiculously-high number which gets larger every time I tell the story \
    ** these things don't really hurt. But they may make you cringe. Or sigh. Or gasp.",
    "speaker": "david-makogen",
    "room": "3028",
    "timeSlot": "1"
  },
  {
    "id": "hacking-alzheimers",
    "topic": "Hacking Alzheimers",
    "description": "TBD",
    "speaker": "stan-reeser",
    "room": "3026",
    "timeSlot": "3"
  },
  {
    "id": "web-parts",
    "topic": "Intro to Visual Web Parts in SharePoint",
    "description": "In SharePoint, Web Parts are an essential component of ASP.NET technologies used to present dynamic information to users and are arguably the most common customization created for SharePoint. In this presentation, we discuss and demonstrate how to build a web part using Visual Studio and its visual design tools. We’ll create a visual web part and use LINQ to SharePoint to retrieve data from a SharePoint list to be displayed in our new visual web part. We’ll then build and deploy our web part to a SharePoint site to see it in action! In SharePoint, Web Parts are an essential component of ASP.NET technologies used to present dynamic information to users and are arguably the most common customization created for SharePoint. In this presentation, we discuss and demonstrate how to build a web part using Visual Studio and its visual design tools. We’ll create a visual web part and use LINQ to SharePoint to retrieve data from a SharePoint list to be displayed in our new visual web part. We’ll then build and deploy our web part to a SharePoint site to see it in action! All along the way we will be using Azure Virtual Machines to host our SharePoint development farm in the Cloud, so you’ll get an intro to Azure as well!",
    "speaker": "david-patrick",
    "room": "3026",
    "timeSlot": "5"
  }
];

export default sessions;
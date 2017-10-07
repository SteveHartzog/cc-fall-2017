import { reportWebpackReadiness } from 'aurelia-cli';
const speakers = [
  {
    "id": "shahed-chowdhuri",
    "firstName": "Shahed",
    "lastName": "Chowdhuri",
    "location": "Washington DC",
    "description": "Author, @Microsoft Sr Tech Evangelist, @1776 mentor, @OnekSoftGames indie dev, https://t.co/d3EF8lRfwN blogger, FB admin #XboxOne #Unity #HoloLens Indie Devs",
    "web": "http://fb.com/ShahedCodes",
    "linkedin": "",
    "twitter": "shahedC",
    "img": "797547977258729472/-ucbzSYa.jpg"
  },
  {
    "id": "steve-hartzog",
    "firstName": "Steve",
    "lastName": "Hartzog",
    "location": "Woodbridge, VA",
    "description": "Dark matter developer enjoying the JavaScript renaissance and TypeScript reformation. :)",
    "web": "http://webrenaissance.org",
    "linkedin": "",
    "twitter": "SteveHartzog",
    "img": "862842031051333633/B3hfKQ6I_400x400.jpg"
  },
  {
    "id": "doguhan-uluca",
    "firstName": "Doguhan",
    "lastName": "Uluca",
    "location": "Washington, DC",
    "description": "Technologist, DCist, JavaScript'er",
    "web": "http://www.techtalkdc.com/",
    "linkedin": "",
    "twitter": "duluca",
    "img": "593198758571048960/iJPVxqkG.jpg"
  },
  {
    "id": "dave-glick",
    "firstName": "Dave",
    "lastName": "Glick",
    "location": "Northern Virginia",
    "description": ".NET and OSS Enthusiast / Microsoft MVP / @wyamio static generator for blogs, docs, and more / @dotnetissues / Scripty code gen / https://t.co/T4xtlgtmF6",
    "web": "http://daveaglick.com/",
    "linkedin": "",
    "twitter": "daveaglick",
    "img": "872150388786450433/8kvJUF5h.jpg"
  },
  {
    "id": "steve-albers",
    "firstName": "Steve",
    "lastName": "Albers",
    "location": "",
    "description": "",
    "web": "",
    "linkedin": "",
    "twitter": "SteveAlbers",
    "img": "1385271262/Steve.jpg"
  },
  {
    "id": "lee-richardson",
    "firstName": "Lee",
    "lastName": "Richardson",
    "location": "Reston VA",
    "description": "Web and mobile developer and maker, with a passion for .Net, OSS and CI. Founder of @SirenOfShame.",
    "web": "http://www.leerichardson.com/",
    "linkedin": "",
    "twitter": "lprichar",
    "img": "443737079529238528/o3TVfzHv_400x400.jpeg"
  },
  {
    "id": "ed-snider",
    "firstName": "Ed",
    "lastName": "Snider",
    "location": "Northern VA",
    "description": "Developer at @InfernoRedTech. Microsoft MVP. #Xamarin MVP. Organizer of @DCMobileDev. Author of \"Mastering Xamarin.Forms\" book (http://book.sndr.io ).",
    "web": "http://www.edsnider.net/",
    "linkedin": "",
    "twitter": "edsnider",
    "img": "912766520689938432/eFuoE6Yj_400x400.jpg"
  },
  {
    "id": "keith-fung",
    "firstName": "Keith",
    "lastName": "Fung",
    "location": "Abingdon, MD",
    "description": "Software Developer, Father, & Evening Coder",
    "web": "http://keithrfung.github.io/",
    "linkedin": "",
    "twitter": "keithrfung",
    "img": "842167302401449984/QvKwdXwe_400x400.jpg"
  },
  {
    "id": "stan-reeser",
    "firstName": "Stan",
    "lastName": "Reeser",
    "location": "",
    "description": "Inventive Technology Strategist | Swiss Army Knife Consultant | IT Journeyman | ENTP personality | Whale Shark Diver",
    "web": "",
    "linkedin": "",
    "twitter": "stanreeser",
    "img": "616505257733025793/TfNcfYag.jpg"
  },
  {
    "id": "riccardo-terrell",
    "firstName": "Riccardo",
    "lastName": "Terrell",
    "location": "Maryland, USA",
    "description": "",
    "web": "http://www.rickyterrell.com/",
    "linkedin": "",
    "twitter": "TRikase",
    "img": "2869598655/fbdf133edcffac15ea82b1a55041dd04.jpeg"
  },
  {
    "id": "labrina-loving",
    "firstName": "LaBrina",
    "lastName": "Loving",
    "location": "Bethesda, MD",
    "description": "Architect/Lead in all things Microsoft and AngularJS/Ionic --- tech geek by day, cosmo girl by night, socially conscious always.",
    "web": "http://chixcancode.com/",
    "linkedin": "",
    "twitter": "chixcancode",
    "img": "588135424905891840/Mbv21jkW.jpg"
  },
  {
    "id": "sean-killeen",
    "firstName": "Sean",
    "lastName": "Killeen",
    "location": "Arlington, VA",
    "description": "Full-Stack .NET dev / Senior Consultant at Excella Consulting. Trying to be all the human I can be with the time I have.",
    "web": "http://seankilleen.com/",
    "linkedin": "seankilleen",
    "twitter": "sjkilleen",
    "img": "475328539764350980/6PZTkWBn.jpeg"
  },
  {
    "id": "van-van-lowe",
    "firstName": "Van",
    "lastName": "Van Lowe",
    "location": "Washington, DC",
    "description": ".Net Web & Database Developer",
    "web": "",
    "linkedin": "",
    "twitter": "lvanlowe",
    "img": "2851972151/ec96b0f9ab7669f478c2febaad843349.jpeg"
  },
  {
    "id": "prashant-bhoyar",
    "firstName": "Prashant",
    "lastName": "Bhoyar",
    "location": "Washington DC Metro",
    "description": "Microsoft MVP, Trusted Technical Advisor, Senior Consultant @WithumCPA Speaker Organizer of @DCMetroO365, User Group & #SPSBMore, Antarctic Service Medal Winner",
    "web": "http://about.me/pgbhoyar",
    "linkedin": "",
    "twitter": "pgbhoyar",
    "img": "446853392556503040/m9BYsHqg.jpeg"
  },
  {
    "id": "elkhan-yusubov",
    "firstName": "Elkhan",
    "lastName": "Yusubov",
    "location": "Columbia, MD",
    "description": "Passionated life long learner, trainer, Dad & husband who loves building simple solutions. Any opinions expressed here are my own.",
    "web": "",
    "linkedin": "",
    "twitter": "ElYusubov",
    "img": "638375625187852288/B8ao6EI-.png"
  },
  {
    "id": "wahid-alimi",
    "firstName": "Wahid",
    "lastName": "Alimi",
    "location": "",
    "description": "",
    "web": "",
    "linkedin": "",
    "twitter": "FutbolFan",
    "img": "915678334037774337/NmSWFdsX_400x400.jpg"
  },
  {
    "id": "shiv-kumar",
    "firstName": "Shiv",
    "lastName": "Kumar",
    "location": "Gainesville, VA",
    "description": "Studied Electronics Eng.. Am a Software Engineer (C#). Lately, programming MCUs. Arduino, Particle, MSP432 NUCELO F401RE, NUCLEO F411RE",
    "web": "http://www.matlus.com/",
    "linkedin": "",
    "twitter": "ShivKmr003",
    "img": "719708990767140865/N504w_PL.jpg"
  },
  {
    "id": "roberto-hernandez",
    "firstName": "Roberto",
    "lastName": "Hernandez",
    "location": "38.855377,-77.387319",
    "description": "",
    "web": "http://www.overridethis.com/",
    "linkedin": "",
    "twitter": "hernandezrobert",
    "img": "463339388647116801/xfgMF23Q.jpeg"
  },
  {
    "id": "vinit-patankar",
    "firstName": "Vinit",
    "lastName": "Patankar",
    "location": "Herndon, VA",
    "description": "Managing Partner Amogh Consultants, Technology Enthusiast",
    "web": "http://www.amoghconsultants.com/",
    "linkedin": "",
    "twitter": "patvin80",
    "img": "781220169037250560/yOkexkiH.jpg"
  },
  {
    "id": "wyn-van-devanter",
    "firstName": "Wyn",
    "lastName": "Van Devanter",
    "location": "Washington, DC",
    "description": "I am a software developer focusing on web applications and ultimately making the computer do useful things efficiently.",
    "web": "",
    "linkedin": "",
    "twitter": "wynv",
    "img": "498894146/synt_pic_-_Copy.jpg"
  },
  {
    "id": "patrick-leong",
    "firstName": "Patrick",
    "lastName": "Leong",
    "location": "Arlington, VA",
    "description": "Professional .NET fumbler, soccer player, and devoted father to a robot named Jeeves.",
    "web": "",
    "linkedin": "",
    "twitter": "thepatleong",
    "img": "845032272621383681/26D6Fl80_400x400.jpg"
  },
  {
    "id": "david-makogen",
    "firstName": "David",
    "lastName": "Makogen",
    "location": "39.16266253,-77.23638147",
    "description": "I do all my Code Improvement shopping at Home Repo.",
    "web": "https://www.dmak.io/",
    "linkedin": "",
    "twitter": "dmakogon",
    "img": "663406817070989312/gcgP1jnQ.jpg"
  },
  {
    "id": "david-patrick",
    "firstName": "David",
    "lastName": "Patrick",
    "location": "Jarrettsville, MD",
    "description": "MCT - Former MVP - DBA - DBD - SharePoint - SQL Server - http://t.co/x472IbU2H3 - C#",
    "web": "http://about.me/DavidEPatrick",
    "linkedin": "",
    "twitter": "DavidEPatrick",
    "img": "470526942542716928/CwtGzTAI.jpeg"
  },
  {
    "id": "dan-stalcup",
    "firstName": "Dan",
    "lastName": "Stalcup",
    "location": "Herndon, VA",
    "description": "Consultant & .NET Developer for @ExcellaCo",
    "web": "http://danstalcup.com/",
    "linkedin": "",
    "twitter": "StalcupDan",
    "img": "910666753172058112/AgLerMbN.jpg",
  }
];

export default speakers;
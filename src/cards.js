export default [
    

    {
        id: "google-classroom",
        name: "Google Classroom",
        url: "https://classroom.google.com",
        tagline: "Classroom allows educators to manage classes, set assignments and interact with students all in one place.",
        description: "Classroom connects students and instructors using tools such as Google Docs, Calendar, Drive, and Forms to build a streamlined platform for learning. Teachers can create classes, distribute assignments, communicate and stay organized whilst students can see their assignments on their To-Do page, share resources and interact in the class stream.",
        colour: "#FDBC45",
        assets: {
            logo: {
                styles: "",
                image: require('./img/google_classroom.png')
            },
            cover: {
                styles: "background-size: cover !important;",
                image: require('./img/classroom_screenshot.jpg')
            }
        },
        activities: [
            "connect",
            "collaborate",
            "curate"
        ],
        uses: [
            "Assessment",
            "Discussion",
            "Feedback"
        ],
        submitter: {
            name: "A Rhead",
            title: "Learning Developer"
        },
        videoURL: "https://www.youtube.com/embed/UPgnim0Q5cs?rel=0&amp;showinfo=0?&cc_load_policy=1",
        framework: {
            enhance: "Set up a class and keep it organised by applying topics to posts. Structure materials by week, lesson, theme or assignment.",
            empower: "Add learning resources in Google formats, amending sharing settings for students to edit or add comments.",
            extend: "Use the Classroom stream to set up discussion topics or create quick polls that engage students inbetween lessons."
        }
    },
    
    {
        id: "gdocs",
        name: "Google Docs",
        url: "https://www.google.com/docs/about",
        tagline: "An online word processor that allows you to write, edit and collaborate wherever you are.",
        description: "As part of GSuite (formerly Google Apps for Education), Google Docs is a simple but powerful word processing application that helps to create documents from any device. As well as familiar features for formatting and styling, Docs makes it possible to work together in real-time. Sharing files is easy too, with adjustable security settings that make emailing multiple copies of the same document a thing of the past.",
        colour: "#5793EF",
        assets: {
            logo: {
                styles: "background-color: #343A40; background-size: 20px; background-position: 50% 50%;",
                image: require('./img/docs.png')
            },
            cover: {
                styles: "background-color: #fff;",
                image: require('./img/docs_background.png')
            }
        },
        activities: [
            "create",
            "collaborate"
        ],
        uses: [
            "Collaborative writing",
            "Feedback",
            "Workbooks"
        ],
        submitter: {
            name: "M Davys",
            title: "Senior Teaching Fellow in Law"
        },
        videoURL: "https://www.youtube.com/embed/ns0U3zkHG7w?rel=0&amp;showinfo=0?&cc_load_policy=1",
        framework: {
            enhance: "Convert a resource that would normally be given to students in a paper or static electronic format into a Google Doc and share it for students to annotate and make their own.",
            empower: "Organise an 'edit-a-thon' where groups of students are encouraged to collaborate in real-time on a Google Doc to demonstrate their knowledge of a particular topic.",
            extend: "Ask students to share their Google Doc and provide feedback by annotating and inserting comments that prompt further discussion or revisions to their original work."
        }
    },
    
    {
        id: "medium",
        name: "Medium",
        url: "https://medium.com/",
        tagline: "A blogging platform that makes writing and sharing posts simple.",
        description: "Medium simplifies the writing process, producing great looking articles that can easily be shared online. Author your own or show your appreciation for other posts by using the applaud feature, or bookmark articles to read later. Medium allows anybody to read, write and respond to stories, with licensing options to allow others to remix and reuse your posts. Found an article that needs more discussion? Write a reponse underneath or highlight specific text and add comments inline.",
        colour: "#000",
        assets: {
            logo: {
                styles: "background-color: #000; background-size: 30px; background-position: 50% 60%; border: 3px solid #000;",
                image: require('./img/medium.png')
            },
            cover: {
                styles: "",
                image: require('./img/medium_logo.png')
            }
        },
        activities: [
            "create",
            "check"
        ],
        
        uses: [
            "Blogging",
            "Discussion",
            "Portfolios",
            "Reflection"
        ],
        submitter: {
            name: "Tom Maurice",
            title: "Digital Communications Officer"
        },
        videoURL: "https://www.youtube.com/embed/U0QOonYmDuU?rel=0&amp;showinfo=0?&cc_load_policy=1",
        framework: {
            enhance: "Start a module blog, writing occasional articles that summarise topics or respond to a related post from another source or Medium author.",
            empower: "Encourage students to respond to your article, asking questions inline or offering their own thoughts. Responses do not have to made public.",
            extend: "Set a reflective task that asks students to write their own posts, either keeping to the same topic or setting a new theme. Add their posts to a class publication."
        }
    },
    
    {
        id: "mentimeter",
        name: "Mentimeter",
        url: "https://www.mentimeter.com",
        tagline: "An online polling tool that encourages audience participation.",
        description: "Energise presentations and make lectures more interactive by building informal quizzes and polls that students can respond to using any Internet connected device. Live results are displayed on-screen or hidden until the presenter chooses to reveal them. Great for formative feedback and to monitor understanding.",
        colour: "#00a5bd",
        assets: {
            logo: {
                styles: "background-color: #00a5bd",
                image: require('./img/mentimeter.png')
            },
            cover: {
                styles: "",
                image: require('./img/mentimeter_logo.jpg')
            }
        },
        activities: [
            "create",
            "captivate",
            "check"
        ],
        uses: [
            "Assessment",
            "Polls",
            "Quizzes",
            "Feedback"
        ],
        submitter: {
            name: "Dr C Little",
            title: "Learning Developer"
        },
        videoURL: "https://www.youtube.com/embed/f1s7UhcIA7I?rel=0&amp;showinfo=0?&cc_load_policy=1",
        framework: {
            enhance: "Plan an icebreaker activity that poses a quick quiz to help gauge students prior knowledge and to introduce topics that are due to be covered.",
            empower: "Integrate your slides with Mentimeter and use Reactions to help indicate when students are ready to move on or don't understand.",
            extend: "Create a short answer question that asks students to suggest revision topics. Turn the answers into a poll and use it to inform the next session's content."
        }
    },

    {
        id: "office-lens",
        name: "Office Lens",
        url: "https://twitter.com/msofficelens",
        tagline: "Capture images of whiteboards and documents to make them into readable learning resources.",
        description: "Simply put, Office Lens puts a scanner in your pocket. Frame your shot, shoot from any angle, and like magic, it digitises notes from whiteboards or physical documents for you to easily tidy up. Office Lens uses optical character recognition (OCR) to recognise and convert static images into searchable, editable documents such as Word or PDF. Never lose your sticky notes again!",
        colour: "#D83C18",
        assets: {
            logo: {
                styles: "background-size: 40px; background-position: 50% 20%;",
                image: require('./img/officelens.jpg')
            },
            cover: {
                styles: "background-size: cover !important;",
                image: require('./img/officelens_background.jpg')
            }
        },
        activities: [
            "create",
            "capture"
        ],
        uses: [
            "Notetaking",
            "Annotating",
            "Documenting"
        ],
        submitter: {
            name: "K Beaumont",
            title: "Learning Developer"
        },
        videoURL: "https://www.youtube.com/embed/s5_giVIUWr4?rel=0&amp;showinfo=0?&cc_load_policy=1",
        framework: {
            enhance: "Share images of whiteboard notes with students after class, or encourage them to capture their own and use as a revision resource later on.",
            empower: "Encourage students to take pictures of their written notes and use them as a starting point for wider research and to add to more detailed, typed notes.",
            extend: "Using their captured notes, ask students to create quizzes and test each other's knowledge and understanding of topics covered in class."
        }
    },

    {
        id: "padlet",
        name: "Padlet",
        url: "https://www.padlet.com",
        tagline: "Padlet creates digital noticeboards that make sharing and collaborating easy.",
        description: "Padlet provides a flexible digital canvas to add a variety of content. Drag in a video, snap a picture, write text posts or upload documents! Make it even more individual by choosing custom wallpapers and themes. Padlets can be selectively shared and edited among multiple contributors, in real time.",
        colour: "#FF4A76",
        assets: {
            logo: {
                styles: "background-color: #202338;",
                image: require('./img/padlet.jpg')
            },
            cover: {
                styles: "",
                image: require('./img/padlet_logo.png')
            }
        },
        activities: [
            "create",
            "collaborate",
            "curate"
        ],
        uses: [
            "Mindmapping",
            "Presentation",
            "Discussion"
        ],
        submitter: {
            name: "T Hinchcliffe",
            title: "Head of Student Learning & Development"
        },
        videoURL: "https://www.youtube.com/embed/P9CJauuNw8c?rel=0&amp;showinfo=0?&cc_load_policy=1",
        framework: {
            enhance: "Ask students to engage with a lecture topic by adding their thoughts and questions onto a Padlet wall, forming the basis for a discussion.",
            empower: "Pre-load a collection of resources onto a Padlet wall and ask students to critique them, sharing their responses as comments underneath.",
            extend: "Collect feedback and take questions from students by maintaining a Padlet wall throughout the semester. Tidy and share it with future cohorts."
        }
    },

    {
        id: "pinterest",
        name: "Pinterest",
        url: "https://www.pinterest.com",
        tagline: "Upload, save and manage visual content (e.g. images and video) via collections known as pinboards.",
        description: "Pinterest is a visual bookmarking tool that helps to discover and save creative ideas. Known as pins, images and videos can be uploaded, saved and categorised into collections  (pinboards) that can be kept private or shared online. Pinboards can be split into sections and made collaborative, allowing others to add content. Pinterest's bookmarking tool can also be used to quickly save content from around the web.",
        colour: "#BD081C",
        assets: {
            logo: {
                styles: "background-color: #BD081C; background-size: 30px; background-position: 50% 25%;",
                image: require('./img/pinterest.png')
            },
            cover: {
                styles: "background-size: cover !important;",
                image: require('./img/pinterest_logo.jpg')
            }
        },
        activities: [
            "create",
            "collaborate",
            "curate"
        ],
        uses: [
            "Bookmarking",
            "Collating",
            "Researching"
        ],
        submitter: {
            name: "Dr E de Quincey",
            title: "Senior Lecturer in Computing"
        },
        videoURL: "https://www.youtube.com/embed/qFdxRkYldT8?rel=0&amp;showinfo=0?&cc_load_policy=1",
        framework: {
            enhance: "Use a pinboard to curate and share visual content with students. Collate media relevant to the module/topic being taught.",
            empower: "Open up the module pinboard for contributions and ask students to pin media they think relevant. Ask them to discuss/critique their choices.",
            extend: "In groups, encourage students to create a collaborative pinboard. Assess it as a virtual poster, requiring a narrative that explains their choices and how it relates to a particular topic."
        }
    },

    {
        id: "pocket",
        name: "Pocket",
        url: "https://www.getpocket.com",
        tagline: "A social bookmarking tool that saves web content across all of your devices.",
        description: "Pocket saves and organises interesting articles, videos and other web content so you can return to it later. Once saved, your personalised library is available on any device, from anywhere — even offline. Easily share items via email or post them to Twitter and Facebook for others to discover.",
        colour: "#EF3E56",
        assets: {
            logo: {
                styles: "background-size: 40px; background-position: 50% 30%; border: solid 3px #fff;",
                image: require('./img/pocket.png')
            },
            cover: {
                styles: "",
                image: require('./img/pocket_logo.png')
            }
        },
        activities: [
            "curate"
        ],
        uses: [
            "Bookmarking",
            "Collating",
            "Researching"
        ],
        submitter: {
            name: "Dr J Herbert",
            title: "Senior Lecturer in Politics"
        },
        videoURL: "https://biteable.com/watch/embed/video-placeholder-1602227/9a0c58e895f0d2a844c91c1718fb40c2786b47d1?autoplay=1",
        framework: {
            enhance: "Begin building a reading list by installing Pocket on your devices, including the add-on available for most modern web browsers (e.g. Google Chrome).",
            empower: "Start using tags and favourites to organise your list. Tags can be applied to multiple items to build categorised sub-lists.",
            extend: "Set up a module Twitter account or use a hashtag (e.g. #HUM1020) to start sharing articles with students from your Pocket reading list."
        }
    },

    {
        id: "snagit",
        name: "Snagit",
        url: "http://www.snagit.com",
        tagline: "Capture screenshots or record video to visually explain anything from your screen.",
        description: "Snagit is an all-in-one tool for image and video capture, making it easy to create a variety of learning resources. For example, produce step-by-step tutorials, short introductory videos or annotated images. Snagit's integrated editor simplifies the process by providing a range of professional markup options.",
        colour: "#2C72B7",
        assets: {
            logo: { 
                styles: "background-color: #2C72B7; background-size: 32px; background-position: 50% 25%; border: solid 3px #fff;",
                image: require('./img/snagit.png')
            },
            cover: {
                styles: "background-size: cover !important;",
                image: require('./img/snagit_logo.jpg')
            }
        },
        activities: [
            "create",
            "capture"
        ],
        uses: [
            "Screencasting",
            "Annotating",
            "Editing"
        ],
        submitter: {
            name: "E Tennant",
            title: "English Language Teaching Fellow"
        },
        videoURL: "https://biteable.com/watch/embed/video-placeholder-1602227/9a0c58e895f0d2a844c91c1718fb40c2786b47d1?autoplay=1",
        framework: {
            enhance: "Record and upload a short video that introduces yourself, the topics you'll be covering and what assessments to expect.",
            empower: "Narrate a recommended text (e.g. journal article), identifying key points to promote skills that students can apply in their wider reading.",
            extend: "Use Snagit to record audiovisual feedback based on anonymised draft submissions to help resolve common assignment issues."
        }
    },

    {
        id: "socrative",
        name: "Socrative",
        url: "https://www.socrative.com",
        tagline: "An app that encourages student participation via online polls and quizzes for real time feedback.",
        description: "SEngage students with Socrative, an app that helps to build activities that provide feedback as learning happens. Launch pre-prepared quizzes or ask ad-hoc questions to quickly assess students and get immediate insights into their understanding at class, individual or question level. Automatically populated results visualise feedback, either to be shared with the class or collected anonymously by the tutor.",
        colour: "#8EB4CF",
        assets: {
            logo: {
                styles: "background-color: #ffffff; background-size: 30px; background-position: 50% 60%; border: 3px solid #ffffff;",
                image: require('./img/socrative.png')
            },
            cover: {
                styles: "",
                image: require('./img/socrative_logo.png')
            }
        },
        activities: [
            "create",
            "captivate",
            "check"
        ],
        uses: [
            "Assessment",
            "Polls",
            "Quizzes",
            "Feedback"
        ],
        submitter: {
            name: "Dr R Leach",
            title: "Head of Social Science and Public Policy"
        },
        videoURL: "https://biteable.com/watch/embed/video-placeholder-1602227/9a0c58e895f0d2a844c91c1718fb40c2786b47d1?autoplay=1",
        framework: {
            enhance: "Design a short quiz using different question types to informally check students understanding during a lecture or seminar.",
            empower: "Ask students to work in pairs or small groups to discuss their answers before responding to the quiz. Use a 'Space Race' for added competitiveness.",
            extend: "Download the feedback report and identify areas which students had difficulty with. Use it to recap topics or inform future learning design."
        }
    }
]
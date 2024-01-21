const mockData = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    enrolled: true,
    progress: "30%",
    dueDate: "31-01-2024",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "Python Programming",
    instructor: "Emily Davis",
    description:
      "Deepen your Python skills with advanced concepts and projects.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn.activestate.com/wp-content/uploads/2021/12/python-coding-mistakes.jpg",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Advanced Data Structures",
        content:
          "Explore advanced data structures like sets, dictionaries, and tuples.",
      },
      {
        week: 2,
        topic: "Object-Oriented Programming",
        content: "Understand and implement OOP principles in Python.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "Olivia Anderson",
        email: "olivia@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 101,
    name: "Data Science Essentials",
    instructor: "Michael Johnson",
    description:
      "Learn the foundational concepts of data science and analysis.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
    duration: "12 weeks",
    schedule: "Wednesdays and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    enrolled: true,
    progress: "70%",
    dueDate: "25-02-2024",
    prerequisites: ["Basic knowledge of statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications.",
      },
      {
        week: 2,
        topic: "Data Analysis with Python",
        content: "Using Python for data manipulation and analysis.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "Daniel White",
        email: "daniel@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 3
  {
    id: 3,
    name: "Frontend Web Development Bootcamp",
    instructor: "Jessica Turner",
    description:
      "Intensive bootcamp covering HTML, CSS, and JavaScript for frontend development.",
    enrollmentStatus: "Closed",
    thumbnail: "https://img-b.udemycdn.com/course/750x422/3636926_91c7_2.jpg",
    duration: "4 weeks",
    schedule: "Mondays and Thursdays, 6:30 PM - 8:30 PM",
    location: "In-Person",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic understanding of web technologies"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Basics",
        content: "Introduction to HTML and CSS for web design.",
      },
      {
        week: 2,
        topic: "JavaScript Fundamentals",
        content: "Fundamental concepts of JavaScript for frontend development.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 301,
        name: "Sophia Turner",
        email: "sophia@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 4
  {
    id: 4,
    name: "Machine Learning Fundamentals",
    instructor: "Matthew Lee",
    description:
      "An introduction to machine learning algorithms and applications.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://emeritus.org/in/wp-content/uploads/sites/3/2023/01/What-is-machine-learning-Definition-types.jpg.optimal.jpg",
    duration: "10 weeks",
    schedule: "Tuesdays and Fridays, 7:00 PM - 9:00 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Understanding the basics of machine learning and its types.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content: "Exploring supervised learning algorithms.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 401,
        name: "Liam Parker",
        email: "liam@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 5
  {
    id: 5,
    name: "Mobile App Design Workshop",
    instructor: "Ava Martinez",
    description:
      "Hands-on workshop on designing user-friendly mobile applications.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/1*TwB7bgCXlv9rreV8-b7nSg.jpeg",
    duration: "6 weeks",
    schedule: "Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic knowledge of UI/UX design"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Mobile App Design",
        content: "Understanding the principles of effective mobile app design.",
      },
      {
        week: 2,
        topic: "Wireframing and Prototyping",
        content: "Creating wireframes and prototypes for mobile apps.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 501,
        name: "Ethan Garcia",
        email: "ethan@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 6
  {
    id: 6,
    name: "Full-Stack JS Development",
    instructor: "Zoe Adams",
    description:
      "Comprehensive course covering both frontend and backend JavaScript development.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
    duration: "14 weeks",
    schedule: "Wednesdays and Saturdays, 5:30 PM - 7:30 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Frontend Development with React",
        content: "Building responsive user interfaces with React.",
      },
      {
        week: 2,
        topic: "Backend Development with Node.js",
        content: "Creating server-side applications using Node.js.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 601,
        name: "Mia Robinson",
        email: "mia@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 7
  {
    id: 7,
    name: "Cybersecurity Fundamentals",
    instructor: "Elijah Brown",
    description:
      "Explore the fundamentals of cybersecurity and best practices for online security.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg",
    duration: "8 weeks",
    schedule: "Mondays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic understanding of computer networks"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Overview of cybersecurity threats and concepts.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Securing computer networks and data transmission.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 701,
        name: "Jackson Wright",
        email: "jackson@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 8
  {
    id: 8,
    name: "Digital Marketing Strategies",
    instructor: "Aria Taylor",
    description:
      "Learn effective digital marketing strategies for online businesses.",
    enrollmentStatus: "Closed",
    enrolled: true,
    progress: "99%",
    dueDate: "29-01-2024",
    thumbnail:
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-1309160,resizemode-75,msid-102779211/jobs/mid-career/what-is-a-digital-marketing-agency.jpg",
    duration: "10 weeks",
    schedule: "Tuesdays and Fridays, 7:30 PM - 9:30 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of online marketing"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Overview of digital marketing channels and strategies.",
      },
      {
        week: 2,
        topic: "Social Media Marketing",
        content: "Creating effective social media marketing campaigns.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 801,
        name: "Logan Harris",
        email: "logan@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 9
  {
    id: 9,
    name: "Game Development with Unity",
    instructor: "Aiden Wilson",
    description: "Learn making games using the Unity game engine.",
    enrollmentStatus: "Open",
    thumbnail: "https://img-b.udemycdn.com/course/750x422/2514486_c4e0.jpg",
    duration: "12 weeks",
    schedule: "Wednesdays and Saturdays, 4:00 PM - 6:00 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic understanding of programming"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Unity",
        content: "Overview of the Unity game development environment.",
      },
      {
        week: 2,
        topic: "Creating Your First Game",
        content: "Building a simple game project with Unity.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 901,
        name: "Grace Martinez",
        email: "grace@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 10
  {
    id: 10,
    name: "Artificial Intelligence Basics",
    instructor: "Caleb Rodriguez",
    description:
      "An introduction to the basics of artificial intelligence and machine learning.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://www.rrce.org/blog/wp-content/uploads/2022/11/Artifical-Intelligence.-Machine-Learning-at-RRCE.png",
    duration: "8 weeks",
    schedule: "Mondays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Overview of Artificial Intelligence",
        content: "Understanding the concepts and applications of AI.",
      },
      {
        week: 2,
        topic: "Machine Learning Algorithms",
        content: "Exploring fundamental machine learning algorithms.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1001,
        name: "Lily Turner",
        email: "lily@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 11
  {
    id: 11,
    name: "UI/UX Design Principles",
    instructor: "Brayden Carter",
    description:
      "Learn the principles of user interface and user experience design.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://xpeedstudio.com/wp-content/uploads/2022/09/ux_design_principles.png",
    duration: "6 weeks",
    schedule: "Tuesdays and Fridays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic design knowledge"],
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    syllabus: [
      {
        week: 1,
        topic: "Introduction to UI/UX Design",
        content:
          "Understanding the fundamentals of user interface and user experience design.",
      },
      {
        week: 2,
        topic: "Wireframing and Prototyping",
        content: "Creating wireframes and prototypes for effective design.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1101,
        name: "Natalie Lewis",
        email: "natalie@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 12
  {
    id: 12,
    name: "Cloud Computing Essentials",
    instructor: "Gabriel Baker",
    description:
      "Explore the essentials of cloud computing and popular cloud platforms.",
    enrollmentStatus: "Closed",
    thumbnail: "https://www.clouve.com/wp-content/uploads/2020/10/photo1.png",
    duration: "10 weeks",
    schedule: "Wednesdays and Saturdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of networking"],
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cloud Computing",
        content: "Overview of cloud computing concepts and services.",
      },
      {
        week: 2,
        topic: "Popular Cloud Platforms",
        content: "Exploring popular cloud platforms and their features.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1201,
        name: "Connor Mitchell",
        email: "connor@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 13
  {
    id: 13,
    name: "React.js Fundamentals",
    instructor: "Avery Taylor",
    description:
      "Learn the fundamentals of building web applications with React.js.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://trisectinstitute.com/wp-content/uploads/2021/12/best-react-js-training-institute-1.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic knowledge of HTML and JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React.js",
        content: "Overview of React.js and its component-based architecture.",
      },
      {
        week: 2,
        topic: "State and Props",
        content: "Understanding state and props in React.js applications.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1301,
        name: "Harper Bennett",
        email: "harper@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 14
  {
    id: 14,
    name: "iOS Development with Swift",
    instructor: "Jordan Clark",
    description:
      "Learn iOS app development using the Swift programming language.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://aletsys.com/blog-pictures/mobile-apps/ios-app-development-on-swift-01.png",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 7:30 PM - 9:30 PM",
    location: "Online",
    enrolled: false,
    progress: "NA",
    dueDate: "NA",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Swift",
        content: "Getting started with the Swift programming language.",
      },
      {
        week: 2,
        topic: "Building iOS User Interfaces",
        content: "Creating user interfaces for iOS applications.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1401,
        name: "Mason Turner",
        email: "mason@example.com",
      },
      // Additional enrolled students...
    ],
  },
];
export default mockData;

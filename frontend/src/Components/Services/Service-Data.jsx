import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import "./Service-Data.css";

const serviceData = {
  "Career Counseling": {
    category: "Before IT",
    title: "Career Counseling",
    intro:
      "Get personalized guidance to understand your strengths, interests and suitable IT career options.",

    sections: [
      {
        title: "Personalized Career Guidance",
        paragraphs: [
          "Choosing an IT career should not be based only on popular technologies or current trends. A suitable career path should consider your interests, existing skills, learning ability and long-term career goals.",
          "Career counseling helps you understand your strengths and interests and connect them with suitable IT career opportunities. Instead of trying to learn everything, you can focus on a career direction that matches your goals."
        ]
      },
      {
        title: "Understanding Suitable IT Career Options",
        paragraphs: [
          "The IT industry provides several career paths, and each path requires different skills and interests. Understanding these options can help you make a better decision before choosing a course."
        ],
        options: [
          {
            title: "Web Development",
            text:
              "Web development focuses on creating websites and web applications. It can be suitable for people who enjoy programming, creating user interfaces and building applications."
          },
          {
            title: "Data Analytics",
            text:
              "Data Analytics focuses on collecting, analyzing and presenting information. It may be suitable for people who enjoy numbers, patterns and problem-solving."
          },
          {
            title: "Software Testing",
            text:
              "Software testing involves checking applications, identifying problems and ensuring that software works correctly. It can be suitable for people who are detail-oriented and enjoy finding errors."
          },
          {
            title: "Cloud & DevOps",
            text:
              "Cloud and DevOps involve infrastructure, deployment, automation and managing applications. These areas can suit people interested in systems and technology infrastructure."
          }
        ]
      },
      {
        title: "Technology Selection Guidance",
        paragraphs: [
          "After identifying a possible career direction, the next step is choosing the technologies required for that career.",
          "For example, someone interested in Web Development can begin with HTML, CSS and JavaScript, followed by technologies such as React, Node.js and Express.",
          "The goal is not to learn every technology available. Instead, choose a focused technology stack that supports your career goal and learn it step by step."
        ]
      },
      {
        title: "Career Roadmap Suggestions",
        paragraphs: [
          "Once you choose a career direction and technology stack, create a structured learning roadmap.",
          "You don't need to complete everything at once. Focus on one stage, build your skills through practice and gradually move to the next stage."
        ],
        roadmap: [
          "Fundamentals",
          "Programming",
          "Technology Stack",
          "Projects",
          "Git & GitHub",
          "Resume",
          "Interview Preparation",
          "Job Search"
        ]
      }
    ],

    conclusion:
      "Based on your current stage and career interests, your immediate priority should be to choose one clear IT career direction rather than trying to learn multiple technologies at the same time. Start by understanding the responsibilities and skills required for your selected career, then choose a suitable technology stack and follow a structured learning roadmap.",

    nextStep:
      "Identify the IT career path that best matches your interests and strengths. Once you have selected your direction, choose the required technologies and begin following a structured learning roadmap."
  },

  "Technology Selection": {
    category: "Before IT",
    title: "Technology Selection",
    intro:
      "Get guidance to choose the right technology based on your career goals, interests and learning path.",

    sections: [
      {
        title: "Understanding Technology Selection",
        paragraphs: [
          "Choosing the right technology is an important step when starting an IT career. You do not need to learn every technology available. Instead, you should choose technologies that match your career goal and gradually build your skills.",
          "Different IT careers require different technology combinations. Understanding what each technology is used for can help you make a better learning decision."
        ]
      },
      {
        title: "Web Development",
        paragraphs: [
          "If you are interested in creating websites and web applications, Web Development can be a suitable path. You can start with HTML, CSS and JavaScript and then move toward frontend and backend technologies."
        ],
        technologies:
          "HTML → CSS → JavaScript → React → Node.js → Express → MongoDB"
      },
      {
        title: "Data Analytics",
        paragraphs: [
          "If you enjoy working with numbers, information and patterns, Data Analytics may be a suitable direction. The focus is on understanding data and using it to support better decisions."
        ],
        technologies:
          "Excel → SQL → Python → Data Visualization"
      },
      {
        title: "Software Testing",
        paragraphs: [
          "Software Testing focuses on checking applications, finding defects and ensuring that software behaves as expected. It can be suitable for people who are detail-oriented and enjoy problem-solving."
        ],
        technologies:
          "Manual Testing → SQL → API Testing → Automation Testing"
      },
      {
        title: "Cloud & DevOps",
        paragraphs: [
          "Cloud and DevOps focus on application deployment, infrastructure, automation and managing systems. These areas can be suitable for people interested in servers, systems and cloud technologies."
        ],
        technologies:
          "Linux → Git → Docker → Cloud Platforms → CI/CD"
      },
      {
        title: "How to Choose the Right Technology",
        paragraphs: [
          "Start with your career goal rather than choosing a technology simply because it is popular. Consider what type of work you enjoy, how much time you can spend learning and what skills are required for the career you want.",
          "Once you choose a direction, avoid switching between many technologies. Build a strong foundation in one path first and gradually add related technologies."
        ]
      }
    ],

    conclusion:
      "The best technology for you is not necessarily the most popular technology. It should be a technology that supports your career goal and matches the type of work you want to do. Choose one clear career direction, identify the technologies required for that direction and learn them step by step.",

    nextStep:
      "Identify the IT career you want to pursue first. Then select the core technologies required for that career and create a focused learning plan instead of trying to learn multiple technologies at once."
  },

  "Course Recommendation": {
    category: "Before IT",
    title: "Course Recommendation",
    intro:
      "Get guidance to choose a suitable course and learning path based on your career goals, interests and current skills.",

    sections: [
      {
        title: "Understanding Course Selection",
        paragraphs: [
          "Choosing an IT course is an important decision because the course you select will influence the technologies you learn, the projects you build and the career opportunities you can pursue.",
          "A good course should match your career goal, current knowledge, available learning time and preferred learning style. Instead of selecting a course only because it is popular, focus on whether it provides the skills required for your target career."
        ]
      },
      {
        title: "Identify Your Career Goal",
        paragraphs: [
          "Before selecting a course, first identify the type of IT work you want to pursue. For example, Web Development, Data Analytics, Software Testing and Cloud & DevOps require different learning paths.",
          "Having a clear direction makes it easier to compare courses and avoid learning unnecessary technologies."
        ]
      },
      {
        title: "What to Look for in a Course",
        paragraphs: [
          "A useful course should provide a strong foundation, practical exercises, real-world projects and guidance on how the learned skills are applied in professional environments.",
          "You should also consider the course duration, curriculum, project work, support available and whether the technologies taught are relevant to your career goal."
        ]
      },
      {
        title: "Building a Learning Path",
        paragraphs: [
          "A structured learning path usually starts with fundamentals and gradually moves toward advanced concepts and practical projects.",
          "Avoid trying to complete several unrelated courses at the same time. Build a strong foundation in one direction before adding additional skills."
        ],
        roadmap: [
          "Choose Career Direction",
          "Select Suitable Course",
          "Learn Fundamentals",
          "Build Projects",
          "Develop Professional Skills",
          "Prepare Resume",
          "Prepare for Interviews",
          "Start Job Search"
        ]
      }
    ],

    conclusion:
      "The right course is the one that takes you closer to your career goal in a structured and practical way. Focus on the skills you actually need, complete projects while learning and gradually build a professional profile.",

    nextStep:
      "Choose one clear career direction, compare suitable courses based on their curriculum and practical training, and select a learning path that you can consistently follow."
  },

  "Project Guidance": {
    category: "During IT",
    title: "Project Guidance",
    intro:
      "Get practical guidance to plan, build and present IT projects while developing your technical skills.",

    sections: [
      {
        title: "Why Projects Matter",
        paragraphs: [
          "Projects help you move from understanding concepts to actually applying them. A well-planned project demonstrates how you solve problems, organize your work and use technology to create a working solution.",
          "Projects also give you useful material for your resume, GitHub profile and technical interviews."
        ]
      },
      {
        title: "Choosing the Right Project",
        paragraphs: [
          "Choose a project that matches your current skill level and gradually introduce more advanced features. A smaller completed project is more valuable than a large project that remains unfinished.",
          "Try to build something that solves a practical problem rather than simply copying a tutorial project."
        ]
      },
      {
        title: "Project Development Process",
        paragraphs: [
          "Start by identifying the problem and defining the features. Then plan the technologies, create the application structure and develop the project step by step.",
          "Test your project regularly and document the important decisions you make during development."
        ],
        roadmap: [
          "Identify Problem",
          "Plan Features",
          "Choose Technologies",
          "Develop",
          "Test",
          "Fix Issues",
          "Deploy",
          "Document Project"
        ]
      }
    ],

    conclusion:
      "The goal of project guidance is not simply to complete a project. It is to help you understand how to plan, develop, test and present a project professionally.",

    nextStep:
      "Choose one practical project related to your career path and start by defining its problem, features and technology stack."
  },

  "Resume Building": {
    category: "During IT",
    title: "Resume Building",
    intro:
      "Learn how to create a professional IT resume that clearly presents your skills, projects and career goals.",

    sections: [
      {
        title: "Understanding an IT Resume",
        paragraphs: [
          "An IT resume should quickly communicate what you can do, what technologies you know and what practical work you have completed.",
          "The resume should be clear, concise and focused on information that is relevant to the position you are applying for."
        ]
      },
      {
        title: "Important Resume Sections",
        paragraphs: [
          "A professional IT resume commonly includes a professional summary, technical skills, projects, education, experience and relevant certifications or achievements.",
          "Your projects are especially important when you are starting your IT career because they demonstrate how you have applied your technical knowledge."
        ],
        roadmap: [
          "Professional Summary",
          "Technical Skills",
          "Projects",
          "Education",
          "Experience",
          "Certifications",
          "Achievements"
        ]
      },
      {
        title: "Presenting Your Projects",
        paragraphs: [
          "Describe projects by explaining the problem, technologies used and your contribution. Focus on what you actually built rather than simply listing the project name.",
          "Whenever possible, include links to your GitHub repository or deployed project."
        ]
      }
    ],

    conclusion:
      "A strong IT resume should present your skills honestly and show evidence of your practical abilities. Keep it focused on the role you are applying for and update it as you gain new skills and projects.",

    nextStep:
      "Prepare a simple, focused resume and add your strongest projects with the technologies you used and the work you personally completed."
  },

  "Git & GitHub Guidance": {
    category: "During IT",
    title: "Git & GitHub Guidance",
    intro:
      "Learn how to use Git and GitHub to manage your projects and present your development work professionally.",

    sections: [
      {
        title: "Understanding Git and GitHub",
        paragraphs: [
          "Git is a version control system that helps developers track changes in their code. GitHub provides an online platform where repositories can be stored and shared.",
          "Using Git and GitHub helps you maintain your project history and makes your work easier to manage."
        ]
      },
      {
        title: "Essential Git Skills",
        paragraphs: [
          "You should understand how to create repositories, track changes, commit work, create branches and work with remote repositories.",
          "Regular commits with meaningful messages make your project history easier to understand."
        ],
        roadmap: [
          "Create Repository",
          "Track Changes",
          "Commit Changes",
          "Create Branches",
          "Push to GitHub",
          "Pull Changes",
          "Resolve Conflicts"
        ]
      },
      {
        title: "Building a Professional GitHub Profile",
        paragraphs: [
          "Your GitHub profile can act as a portfolio of your development work. Keep important projects organized and provide useful README files explaining what each project does.",
          "Avoid uploading unnecessary files such as passwords, secret keys or environment variables."
        ]
      }
    ],

    conclusion:
      "Git and GitHub are valuable professional skills for developers because they help you manage your work and demonstrate your development experience.",

    nextStep:
      "Create a clean GitHub repository for your strongest project, add a useful README and maintain your project using meaningful commits."
  },

  "Resume Review": {
    category: "After IT",
    title: "Resume Review",
    intro:
      "Get guidance to identify weaknesses in your existing resume and improve how your skills and experience are presented.",

    sections: [
      {
        title: "Understanding Resume Review",
        paragraphs: [
          "A resume review focuses on whether your resume clearly communicates your skills, projects and suitability for the role you are targeting.",
          "Small improvements in structure, wording and relevance can make your resume easier for recruiters to understand."
        ]
      },
      {
        title: "Common Areas to Review",
        paragraphs: [
          "Check whether your resume has a clear professional summary, relevant technical skills, well-written project descriptions and consistent formatting.",
          "Remove unnecessary information and make sure the technologies and skills you mention are supported by your actual knowledge or projects."
        ],
        roadmap: [
          "Resume Structure",
          "Professional Summary",
          "Technical Skills",
          "Project Descriptions",
          "Formatting",
          "Job Relevance",
          "Final Review"
        ]
      }
    ],

    conclusion:
      "A resume review helps you present your existing experience more effectively without adding information that is not accurate. The goal is to make your resume clear, relevant and professional.",

    nextStep:
      "Review your resume against the type of job you want and make sure your strongest relevant skills and projects are easy to find."
  },

  "Mock Interview": {
    category: "After IT",
    title: "Mock Interview",
    intro:
      "Practice common IT interview situations and improve your communication, technical explanation and interview confidence.",

    sections: [
      {
        title: "Why Mock Interviews Matter",
        paragraphs: [
          "Knowing technical concepts is only one part of an interview. You also need to explain your knowledge clearly and respond confidently to questions.",
          "Mock interviews provide an opportunity to practice before attending a real interview."
        ]
      },
      {
        title: "Technical Interview Preparation",
        paragraphs: [
          "Prepare questions related to your programming fundamentals, technologies, projects and problem-solving abilities.",
          "You should be able to explain the projects listed on your resume, including the technologies used, challenges faced and solutions you implemented."
        ]
      },
      {
        title: "Communication and Confidence",
        paragraphs: [
          "Practice answering questions in a clear and structured way. If you do not know an answer, explain what you understand rather than guessing.",
          "Regular practice can help you become more comfortable discussing your skills and experiences."
        ],
        roadmap: [
          "Introduction",
          "Technical Questions",
          "Project Discussion",
          "Problem Solving",
          "Behavioral Questions",
          "Questions for Interviewer",
          "Feedback"
        ]
      }
    ],

    conclusion:
      "Interview preparation becomes more effective when you combine technical revision with repeated practice. Focus on understanding your projects and explaining your knowledge clearly.",

    nextStep:
      "Start practicing common technical and project-based questions and record yourself answering them so you can identify areas for improvement."
  },

  "Job Search Strategy": {
    category: "After IT",
    title: "Job Search Strategy",
    intro:
      "Learn how to organize your IT job search and approach suitable opportunities with a focused strategy.",

    sections: [
      {
        title: "Understanding the IT Job Search",
        paragraphs: [
          "Finding an IT job requires more than submitting the same resume to every company. A focused job search starts with identifying suitable roles and understanding the skills employers are looking for.",
          "Your resume, projects, professional profiles and interview preparation should all support the type of role you want."
        ]
      },
      {
        title: "Choosing Suitable Job Roles",
        paragraphs: [
          "Start by identifying entry-level roles that match your skills. For example, someone with web development skills may consider junior frontend, backend or full-stack roles depending on their knowledge.",
          "Read job descriptions carefully and identify recurring skills so you can understand what employers commonly expect."
        ]
      },
      {
        title: "Organizing Your Job Search",
        paragraphs: [
          "Maintain a simple record of the companies and positions you apply for. Track the application date, role, company, status and any follow-up required.",
          "Quality applications that match your skills are generally more useful than sending large numbers of unrelated applications."
        ],
        roadmap: [
          "Choose Target Role",
          "Prepare Resume",
          "Build Portfolio",
          "Find Relevant Jobs",
          "Apply",
          "Track Applications",
          "Prepare Interviews",
          "Follow Up"
        ]
      }
    ],

    conclusion:
      "A focused job search strategy helps you spend your time on roles that match your skills and career direction. Consistency, preparation and learning from each application can make your job search more organized.",

    nextStep:
      "Choose one or two target job roles, prepare your resume and portfolio for those roles, and begin tracking relevant applications consistently."
  }
};

function Service() {

  const location = useLocation();
  const navigate = useNavigate();

  const service =
    location.state?.service || "Career Counseling";

  const [checkingAccess, setCheckingAccess] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {

    const checkAccess = async () => {

      const token = localStorage.getItem("token");

            // User must be logged in
      if (!token) {
        navigate("/login");
        return
      }
      try {
        const response = await fetch(
  `https://quickfix-it.onrender.com/api/payment/check-access/${encodeURIComponent(service)}`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);
        const data = await response.json();

        console.log("access response:", data);

        if (!response.ok || !data.access) {
          setHasAccess(false);

          navigate("/payment", {
            state: {
              service: service
            }
          })
          return;
        }
        // Payment found

        setHasAccess(true);

      } catch (error) {

        console.log("access check error:", error);

        setHasAccess(false);

      } finally {
        setCheckingAccess(false)
      }

    }

    checkAccess();
  }, [service, navigate])

  // While backend is checking payment
  if (checkingAccess) {
    return (
      <div className="service-page">
        <div className="service-card" >

          <h1>Checking Access...</h1>
          <p>Please wait.</p>

        </div>
      </div>
    )
  }
  // Dont render paid content wothout access

  if (!hasAccess) {
    return (null);
  }

  const data = serviceData[service];

  if (!data) {
    return (
      <div className="service-page">
        <div className="service-card">
          <h1>Service Not Found</h1>

          <p>
            We could not find the requested service.
          </p>

          <Link to="/services" className="back-services-btn">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-page">

      <div className="service-card">

        <span className="service-category">
          {data.category}
        </span>

        <h1>{data.title}</h1>

        <p className="service-intro">
          {data.intro}
        </p>


        {/* Detailed Sections */}

        {data.sections.map((section, index) => (

          <section
            className="service-section"
            key={index}
          >

            <h2>{section.title}</h2>

            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph}
              </p>
            ))}


            {/* Career options */}

            {section.options?.map((option, optionIndex) => (

              <div
                className="service-option"
                key={optionIndex}
              >

                <h3>{option.title}</h3>

                <p>{option.text}</p>

              </div>

            ))}


            {/* Technology stack */}

            {section.technologies && (

              <div className="technology-stack">

                <strong>
                  Common technologies:
                </strong>

                <p>
                  {section.technologies}
                </p>

              </div>

            )}


            {/* Roadmap */}

            {section.roadmap && (

              <div className="service-roadmap">

                {section.roadmap.map((step, stepIndex) => (

                  <span key={stepIndex}>
                    {step}
                  </span>

                ))}

              </div>

            )}

          </section>

        ))}


        {/* Conclusion */}

        <section className="service-conclusion">

          <h2>
            Your {data.title} Conclusion
          </h2>

          <p>
            {data.conclusion}
          </p>

        </section>


        {/* Recommended Next Step */}

        <div className="service-next-step">

          <h3>Recommended Next Step</h3>

          <p>
            {data.nextStep}
          </p>

        </div>


        <Link
          to="/services"
          className="back-services-btn"
        >
          Back to Services
        </Link>

      </div>

    </div>
  );
}

export default Service;
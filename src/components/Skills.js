import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const skills = [
    { 
      name: "Java", 
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png", 
      description: "Java is a high-level, object-oriented programming language widely used for enterprise applications.",
      link: "https://www.java.com/"
    },
    { 
      name: "J2EE", 
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      description: "J2EE is a platform for developing and running distributed, multitier architecture applications.",
      link: "https://www.oracle.com/java/technologies/java-ee-glance.html"
    },
    { 
      name: "Hibernate", 
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      description: "Hibernate is an ORM framework for Java, simplifying database interactions.",
      link: "https://hibernate.org/"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      description: "JavaScript is a versatile programming language used to create interactive web applications.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    { 
      name: "SQL", 
      logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
      description: "SQL is used to manage and manipulate relational databases.",
      link: "https://www.w3schools.com/sql/"
    },
    { 
      name: "HTML", 
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      description: "HTML is the standard language for structuring web pages.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    { 
      name: "CSS", 
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      description: "CSS is used to style and layout web pages.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    { 
      name: "Bootstrap", 
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      description: "Bootstrap is a front-end framework for developing responsive websites.",
      link: "https://getbootstrap.com/"
    },
    { 
      name: "SDLC", 
      logo: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
      description: "SDLC defines the stages of software development from planning to maintenance.",
      link: "https://www.tutorialspoint.com/sdlc"
    },
    { 
      name: "Spring Boot", 
      logo: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
      description: "Spring Boot is a Java-based framework for creating production-ready applications.",
      link: "https://spring.io/projects/spring-boot"
    },
    { 
      name: "React", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "React is a JavaScript library for building user interfaces.",
      link: "https://reactjs.org/"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="200" className="heading" id="skills">
          Skills & Technologies
        </h2>
        <div className="degrees-intro-content">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/826/724/non_2x/programmer-developer-engineer-with-laptop-sitting-at-the-office-desk-holding-a-pen-while-coding-and-developing-concept-illustration-free-vector.jpg"
            alt="Skills Cover"
            className="degrees-intro-image"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
          <h2 className="degrees-intro-title" data-aos="fade-left" data-aos-delay="400">
            🚀 Mastering Technologies: Innovating, Building, and Enhancing Digital Solutions 💡
          </h2>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="col-md-3 mb-4 skill-card"
              onClick={() => window.open(skill.link, "_blank")}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

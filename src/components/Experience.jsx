import VerticalTimeline from "./reactTL";
const TIMELINE = [
  {
    role: "MERN Stack Intern",
    company: "ITI",
    period: "2025",
    points: [
      "Learning full-stack development with MongoDB, Express.js, React, and Node.js.",
      "Building end-to-end web applications with modern JavaScript technologies.",
      "Implementing RESTful APIs and database integration.",
    ],
  },
  {
    role: "Python Intern",
    company: "ITI",
    period: "2025",
    points: [
      "Learned the basics of Python programming, including Object-Oriented Programming (OOP) and Data Structures.",
      "Gained experience with data manipulation techniques and Python best practices.",
    ],
  },
  {
    role: "Web Intern",
    company: "NTI",
    period: "2025",
    points: [
      "Learned HTML, CSS, and JavaScript fundamentals.",
      "Built small practice projects to apply web development concepts.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "",
    period: "2025",
    points: [
      "Worked on freelance projects delivering custom web solutions for clients.",
      "Built responsive websites and web applications using modern frameworks.",
      "Collaborated with clients to gather requirements and deliver tailored solutions.",
    ],
  },
];

export default function Page() {
  return (
    <div id="experience" className="min-h-screen  p-8">
      <h2 className="text-3xl md:text-4xl font-bold hero-heading text-center">Experience</h2>
      <VerticalTimeline items={TIMELINE} align="alternate" />
    </div>
  );
}



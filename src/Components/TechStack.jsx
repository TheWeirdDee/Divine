/* eslint-disable no-unused-vars */
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";

export default function TechSection() {
  const techStack = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  ];

  return (
    <div className="bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h3 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Education</h3>
            <p className="text-gray-300">
              Codar Academy{" "}
              <span className="italic">Full Stack Web Development</span> (2023 –
              2024)
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Technical Skills
            </h3>

            <div className="p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 hover:bg-white/10 transition rounded-lg p-2"
                  >
                    <Icon size={22} color={color} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent mb-3 font-semibold md:mt-36">
              Soft Skills
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Language</h3>
            <p className="text-gray-300">English (Professional)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

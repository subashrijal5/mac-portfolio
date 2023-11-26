import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Subash RIjal. I am From Nepal. I have completed HND leading to
              computing and system development on 2017. Then I started to work as web
              developer.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Artificial Intelligence / IOT and Robotics"
      },

      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:subashrijal5@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                subashrijal5@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/subashrijal5"
                target="_blank"
                rel="noreferrer"
              >
                @subashrijal5
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/subash-rijal-75319b179/"
                target="_blank"
                rel="noreferrer"
              >
                Subash Rijal
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://subashrijal.com.np"
                target="_blank"
                rel="noreferrer"
              >
                https://subashrijal.com.np
              </a>
            </li>
            <li>
              Blog and writings:{" "}
              <a
                className="text-blue-300"
                href="https://bhudex.com"
                target="_blank"
                rel="noreferrer"
              >
                https://bhudex.com
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;

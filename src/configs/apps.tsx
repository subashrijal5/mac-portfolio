import FaceTime from "~/components/apps/FaceTime";
import Terminal from "~/components/apps/Terminal";
import Safari from "~/components/apps/Safari";
import Dog from "~/components/apps/Dog";
import VSCode from "~/components/apps/VSCode";

import type { AppsData } from "~/types";
import Blogs from "~/components/apps/Blogs";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "dog",
    title: "About Myself",
    desktop: true,
    show: true,
    width: 860,
    height: 500,
    img: "img/icons/dog.jpg",
    content: <Dog />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    img: "img/icons/facetime.png",
    height: 530,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:subashrijal5@gmail.com"
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/subashrijal5"
  },
  {
    id: "blogs",
    title: "Blogs",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 600,
    img: "img/icons/blog.png",
    content: <Blogs />
  }
];

export default apps;

import type { DogData } from "~/types";

const dog: DogData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "A passionate and a minimalism enthusiast who lives to learn ...."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "tech-stacks",
        title: "My Tech Stacks",
        file: "markdown/tech-stacks.md",
        icon: "i-octicon:browser",
        excerpt: "My tech Stacks..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "inertia-generator",
        title: "Inertia Generator",
        file: "https://raw.githubusercontent.com/subashrijal5/inertia-generator/master/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A CRUD generator for React and Laravel with artisan command...",
        link: "https://github.com/subashrijal5/inertia-generator"
      },
      {
        id: "password-generator",
        title: "Password Generator",
        file: "https://raw.githubusercontent.com/subashrijal5/password-generator/master/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A simple password generator...",
        link: "https://github.com/subashrijal5/password-generator"
      },
      {
        id: "laravel-chatgpt ",
        title: "Chatgpt Laravel!",
        file: "https://raw.githubusercontent.com/subashrijal5/laravel-chatgpt/master/readme.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "A simple openAI api wrapper for chatgpt composer package...",
        link: "https://github.com/subashrijal5/laravel-chatgpt"
      },
      {
        id: "google-calendar-clone",
        title: "Typescript Calendar !",
        file: "https://raw.githubusercontent.com/subashrijal5/calender-app/master/README.md",
        icon: "i-ri:calendar-2-fill",
        excerpt: "A simple typescript calendar app...",
        link: "https://github.com/subashrijal5/calender-app"
      },
      {
        id: "payment-gateway",
        title: " Payment Gateway!",
        file: "https://raw.githubusercontent.com/subashrijal5/payment-gateway/master/README.md",
        icon: " i-ri:secure-payment-fill",
        excerpt: "A composer package to integrate multiple payment gateways...",
        link: "https://github.com/subashrijal5/payment-gateway"
      },
      {
        id: "cgenerator",
        title: "Com Generator!",
        file: "https://raw.githubusercontent.com/subashrijal5/cgenerator/master/README.md",
        icon: "i-ri:tools-line",
        excerpt: "A npm library to generate component from cli...",
        link: "https://www.npmjs.com/package/@subashrijal5/cgenerator"
      }
    ]
  }
];

export default dog;

import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", `#`, 0)} target="_blank" class="flex flex-col gap-4 p-4 text-center duration-200 border border-solid rounded-lg cursor-pointer sm:p-6 md:p-8 border-violet-700 group hover:border-violet-400"><div class="grid px-4 mx-auto -mt-10 text-5xl duration-200 bg-white dark:bg-slate-950 place-items-center md:text-6xl sm:-mt-12 md:-mt-14 lg:-mt-16"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="text-xl font-medium sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex items-center justify-between flex-1 gap-4"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:h-0 after:w-full dark:after:bg-white after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-[4]"><a${add_attribute("href", step.href, 0)} target="_blank">Go to →</a></p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Smart VisCare",
      icon: "fa-solid fa-eye",
      href: "https://github.com/mohdsaqib07/smart-viscare"
    },
    {
      name: "iNotebook",
      icon: "fa-solid fa-book",
      href: "https://github.com/mohdsaqib07/smartNotes"
    },
    {
      name: "Mechanical Keyboard Simulator",
      icon: "fa-regular fa-keyboard",
      href: "https://github.com/mohdsaqib07/Mechanical-Keyboard-Simulator"
    }
  ];
  let benefits = [
    {
      name: "a self taught developer",
      desc: "I am a passionate and self-motivated developer who embarked on a journey into the world of programming entirely on my own. Being a self-taught developer, I have honed my skills through dedication, curiosity, and a love for problem-solving. My journey has been marked by countless hours of learning, experimenting, and building, allowing me to explore various programming languages and technologies."
    },
    {
      name: "A good designer",
      desc: "I am a dedicated designer with a keen eye for aesthetics and a fervent passion for user experience (UX) design. With a strong foundation in design principles and a deep understanding of user behavior, I craft visually stunning and intuitively functional digital experiences. My work is driven by a meticulous attention to detail, creativity, and an unwavering commitment to delivering exceptional user-centric designs."
    },
    {
      name: "Time Management:",
      desc: "I am a highly organized and results-driven individual with exceptional time management skills. I excel in efficiently prioritizing tasks, optimizing schedules, and meeting deadlines. My ability to manage time effectively allows me to remain focused, productive, and composed even in high-pressure situations."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 gap-10 py-8 lg:grid-cols-2 sm:py-14" data-svelte-h="svelte-ewulms"><div class="flex flex-col gap-6 text-center lg:justify-center lg:text-left md:gap-8 lg:gap-10"><h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-violet-400">Mohd</span> Saqib <br>Full Stack <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favourite tech</span> includes JavaScript (NEXT.JS or SvelteKit) , TailWindCSS , Node.js + Express.js &amp; PostgreSQL or MongoDB , Python and Many More!</p> <a href="https://www.linkedin.com/in/mohd-saqib-142a68250/" target="_blank" class="relative px-6 py-3 mx-auto overflow-hidden text-base bg-white rounded-full blueShadow lg:mr-auto lg:ml-0 sm:text-lg md:text-xl poppins group text-slate-950 "><h4 class="relative z-[9]">Get in Touch →</h4></a></div> <div class="relative grid shadow-2xl place-items-center"><img${add_attribute("src", "images/new_image3.png", 0)} alt="mohdsaqib" class="object-cover max-h-[70vh] z-[2]"></div></section> <section id="projects" class="flex flex-col gap-24 py-20 lg:py-32"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-wjqplx"><h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work ?</h3></div> <a href="https://github.com/mohdsaqib07" target="_blank" class="flex items-center gap-2 px-4 py-2 mx-auto -mt-10 -mb-4 duration-200 border border-black border-solid rounded-md dark:border-white sm:-mb-0 hover:border-violet-700 dark:hover:border-violet-700" data-svelte-h="svelte-1jpl8tw"><i class="fa-brands fa-github"></i> <p>Check the Repo</p></a> <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-15whmxi">SmartVisCare is heath care app creatd with <strong class="text-violet-400">Wind32API Tkinter Pystray &amp; Wind10Toast</strong> Tkinter Used to Create all the GUI components while pyinstaller is used to create it&#39;s .exe file.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1jy1bvz">iNotebook is  a webapp creatd with <strong class="text-violet-400">NEXT.JS Bcrypt.js Argon2 &amp; MongoDB + TailWindCSS</strong> MongoDB is used for all the storage related operations .</p>
                Using this app you can save your notes and read it efficiently.`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-42ytc2">This Mechanical Keyboard simulator creatd with <strong class="text-violet-400">PyGame PyAudio Tkinter &amp; Pystray</strong> PyAudio handles all the mechanical voice related operations.</p>`;
    }
  })}</div></section> <section id="about" class="relative flex flex-col gap-16 py-20 pt-10 lg:pt-16 lg:py-32 sm:gap-20 md:gap-24"><div class="flex flex-col gap-2 relative text-center before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1a6otv"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more ?</h6> <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto text-lg font-semibold poppins sm:text-xl md:text-2xl" data-svelte-h="svelte-naoz6z">I am . . .</p> <div class="flex flex-col capitalize gap-20 mx-auto w-full max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="text-4xl font-semibold poppins sm:text-5xl md:text-6xl text-slate-500">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl capitalize sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p class="">${escape(benefit.desc)}</p></div> </div>`;
  })}</div> <h5 class="text-2xl font-semibold text-center sm:text-3xl poppins" data-svelte-h="svelte-13u4e1m">The <span class="text-violet-400 poppins">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-18kysw6"><table class="text-center bg-white rounded text-slate-700"><thead class="border-b border-solid border-slate-200"><tr class=""><th></th> <th class="p-2 px-4 whitespace-nowrap">Candidate #1</th> <th class="p-2 px-4 whitespace-nowrap">Candidate #2</th> <th class="p-2 px-4 whitespace-nowrap">Candidate #3</th> <th class="p-4 px-8 text-white whitespace-nowrap bg-violet-700">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="py-4 pl-4 pr-8 text-sm font-semibold border-r border-white border-solid whitespace-nowrap">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="text-green-500 fa-solid fa-check"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="py-4 pl-4 pr-8 text-sm font-semibold border-r border-white border-solid whitespace-nowrap">Programming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="text-green-500 fa-solid fa-check"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="py-4 pl-4 pr-8 text-sm font-semibold border-r border-white border-solid whitespace-nowrap">Problem Solver</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="text-green-500 fa-solid fa-check"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="py-4 pl-4 pr-8 text-sm font-semibold border-r border-white border-solid whitespace-nowrap">Time Management</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="text-green-500 fa-solid fa-check"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic opacity-50 sm:hidden" data-svelte-h="svelte-453w0m"><p>Scroll to see more →</p></div> <p class="mx-auto capitalize" data-svelte-h="svelte-f949z3">Why not invest ?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

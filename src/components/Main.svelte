<script>
	import Step from './Step.svelte';
    let steps = [
        {
            name:"Smart VisCare",
            icon:"fa-solid fa-eye",
            href:"https://github.com/mohdsaqib07/smart-viscare"
        },
        {
            name:"iNotebook",
            icon:"fa-solid fa-book",
            href:"https://github.com/mohdsaqib07/smartNotes"
        },
        {
            name:"Mechanical Keyboard Simulator",
            icon:"fa-regular fa-keyboard",
            href:"https://github.com/mohdsaqib07/Mechanical-Keyboard-Simulator"
        },
    ]
    let benefits = [
        {name:"a self taught developer",desc:"I am a passionate and self-motivated developer who embarked on a journey into the world of programming entirely on my own. Being a self-taught developer, I have honed my skills through dedication, curiosity, and a love for problem-solving. My journey has been marked by countless hours of learning, experimenting, and building, allowing me to explore various programming languages and technologies."},
        {name:"A good designer",desc:"I am a dedicated designer with a keen eye for aesthetics and a fervent passion for user experience (UX) design. With a strong foundation in design principles and a deep understanding of user behavior, I craft visually stunning and intuitively functional digital experiences. My work is driven by a meticulous attention to detail, creativity, and an unwavering commitment to delivering exceptional user-centric designs."},
        {name:"Time Management:",desc:"I am a highly organized and results-driven individual with exceptional time management skills. I excel in efficiently prioritizing tasks, optimizing schedules, and meeting deadlines. My ability to manage time effectively allows me to remain focused, productive, and composed even in high-pressure situations."},
    ]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Mohd</span> Saqib <br />Full Stack <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favourite tech</span> includes JavaScript (NEXT.JS or SvelteKit) , TailWindCSS , Node.js + Express.js & PostgreSQL or MongoDB , Python and Many More!
            </p>
            <a href="https://www.linkedin.com/in/mohd-saqib-142a68250/" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 ">
                <h4 class="relative z-[9]">Get in Touch &rarr;</h4> 
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/newprofile1.png"} alt="mohdsaqib" class="object-cover max-h-[70vh] z-[2]" />
        </div>
    </section>
    
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
           <div class="flex flex-col text-center gap-2">
            <h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work ? </h3>
        </div>
        <a href="https://github.com/mohdsaqib07" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
        <i class="fa-brands fa-github"></i>
        <p>Check the Repo</p>
        </a>
         <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
              <Step step={steps[0]} >
               <p>SmartVisCare is heath care app creatd with <strong class='text-violet-400'>Wind32API Tkinter Pystray & Wind10Toast </strong> Tkinter Used to Create all the GUI components while pyinstaller is used to create it's .exe file. </p>
            </Step>
              <Step step={steps[1]} >
                <p>iNotebook is  a webapp creatd with <strong class='text-violet-400'>NEXT.JS Bcrypt.js Argon2 & MongoDB + TailWindCSS </strong> MongoDB is used for all the storage related operations . </p>
                Using this app you can save your notes and read it efficiently.
            </Step>
              <Step step={steps[2]} >
                <p>This Mechanical Keyboard simulator creatd with <strong class='text-violet-400'>PyGame PyAudio Tkinter & Pystray </strong> PyAudio handles all the mechanical voice related operations.</p>
            </Step>
         </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
       <div class="flex flex-col gap-2 relative text-center before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
       <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more ?</h6>    
       <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
    <div class="flex flex-col capitalize gap-20 mx-auto w-full max-w-[800px]">
        {#each benefits as benefit,index }
             <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index+1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl capitalize">
                        {benefit.name}
                    </h3>
                    <p class="">{benefit.desc}</p>
                </div>
             </div>
        {/each}
    </div>
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">The <span class="text-violet-400 poppins">Complete</span> Package</h5>
    <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
        <table class="bg-white text-slate-700 text-center rounded">
            <thead class="border-b border-solid border-slate-200">
                <tr class="">
                    <th />
                    <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                    <th class="whitespace-nowrap p-4 px-8 bg-violet-700 text-white">Me</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-solid border-slate-200">
                    <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Dedication</td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
                <tr class="border-b border-solid border-slate-200">
                    <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Programming Ability</td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
                <tr class="border-b border-solid border-slate-200">
                    <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Problem Solver</td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
                <tr class="border-b border-solid border-slate-200">
                    <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Dedication</td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
        <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto capitalize">Why not invest ?</p>
    </section>
</main>
<script>
  import ThemeToggle from "./ThemeToggle.svelte";

    export let y;
    let tabs = [
        {
            "name":"Projects",
            "link":"#projects"
        },
        {
            "name":"About me",
            "link":"#about"
        },
    ]
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-solid " + (
    y>0 ?'py-4 bg-white dark:bg-slate-950 border-violet-950' : 'py-6 bg-transparent border-transparent'
)}>
    <h1 class="font-medium">
        <b class="font-bold poppins">Mohd</b> Saqib
    </h1>
        <div class="items-center hidden gap-4 pr-4 ml-auto sm:flex">
            <ThemeToggle />
            {#each tabs as tab,index }
                <a href={tab.link} class="duration-200 hover:text-violet-900 dark:hover:text-violet-400">
                    <p>{tab.name}</p>
                </a>
            {/each}
            
        </div>
        <a href="https://www.linkedin.com/in/mohd-saqib-142a68250/" target="_blank" class="relative px-5 py-2 overflow-hidden bg-white rounded-full bluShadow group text-slate-950">
            <div class="absolute top-0 z-0 w-full h-full duration-200 right-full bg-violet-400 opacity-20 group-hover:translate-x-full"></div>
            <h4 class="relative z-[9]">Get in Touch</h4>
        </a>
</header>
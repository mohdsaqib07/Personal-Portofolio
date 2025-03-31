<script>
    export let step;
</script>

<a href={`#`} target="_blank" class="flex flex-col gap-4 p-4 text-center duration-200 border border-solid rounded-lg cursor-pointer sm:p-6 md:p-8 border-violet-700 group hover:border-violet-400">
<div class="grid px-4 mx-auto -mt-10 text-5xl duration-200 bg-white dark:bg-slate-950 place-items-center md:text-6xl sm:-mt-12 md:-mt-14 lg:-mt-16">
    <i class={step.icon} />
</div>
<h3 class="text-xl font-medium sm:text-2xl md:text-3xl">{step.name}</h3>
<slot />
<div class="flex items-center justify-between flex-1 gap-4">
    <div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:h-0 after:w-full   dark:after:bg-white after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
        <p class="relative z-[4]"><a href={step.href} target="_blank">Go to &rarr;</a></p>
    </div>
</div>
</a>
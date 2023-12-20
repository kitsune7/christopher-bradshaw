<script lang="ts">
  import { Fox, Github } from '$lib/assets'
</script>

<header class="flex items-center justify-between bg-black px-4 py-1">
  <div class="group flex items-center gap-4">
    <Fox />
    <p class="hidden text-black transition-all group-hover:text-white md:block">
      I really like foxes...
    </p>
  </div>
  <a
    href="https://github.com/kitsune7/christopher-bradshaw"
    class="wiggle group no-underline hover:no-underline"
    target="_blank"
  >
    <div class="flex items-center gap-4">
      <p class="hidden h-full text-black transition-all group-hover:text-white md:block">
        See the source code
      </p>
      <Github class="transition-all hover:scale-125" />
      <span class="sr-only">Opens a new window</span>
    </div>
  </a>
</header>

<style>
  .wiggle:hover {
    animation: wiggle 1.5s infinite;
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(5deg);
    }
    15% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>

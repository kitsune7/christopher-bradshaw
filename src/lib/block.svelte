<script lang="ts">
  export let typing = false
</script>

<span class="relative -top-1" class:blinking={!typing}>&#9608;</span>

<style>
  .blinking {
    animation: blinker 1060ms step-end infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
</style>

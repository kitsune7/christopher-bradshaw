<script lang="ts">
  import { Block, Header } from '$lib'
  import { onMount } from 'svelte'

  type TypedMessage = { currentText: string; message: string }

  let heading: TypedMessage = { currentText: '', message: "Hi, I'm Chris" }
  let subHeading: TypedMessage = {
    currentText: '',
    message: 'A passionate technophile with an eye for detail.',
  }

  const setHeading = (message: string) => {
    heading.currentText = message
  }
  const setSubHeading = (message: string) => {
    subHeading.currentText = message
  }
  const runTypewriter = async (
    typedMessage: TypedMessage,
    setFunction: (message: string) => void,
    typingSpeed = 50,
  ) => {
    for (let i = 0; i < typedMessage.message.length; i++) {
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          setFunction(typedMessage.currentText + typedMessage.message.charAt(i))
          resolve()
        }, typingSpeed),
      )
    }
  }

  onMount(() => {
    runTypewriter(heading, setHeading).then(() => runTypewriter(subHeading, setSubHeading))
  })
</script>

<main class="grid h-full grid-rows-[auto_1fr] bg-zinc-900">
  <Header />

  <hgroup class="flex flex-col items-center justify-center gap-4 p-4 text-center text-white">
    <h1>
      {heading.currentText}
      {#if heading.currentText !== heading.message}
        <Block />
      {/if}
    </h1>
    <p class="text-2xl">
      {subHeading.currentText}
      {#if heading.currentText === heading.message}
        <Block />
      {/if}
    </p>
  </hgroup>
</main>

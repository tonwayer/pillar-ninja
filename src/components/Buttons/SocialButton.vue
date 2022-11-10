<template>
  <div class="relative px-2">
    <a :href="link" class="w-[45px] h-[45px] rounded-full bg-white text-black flex items-center justify-center mt-2 hover:mt-0 transition-all">
      <Icon :icon="icon" class="w-[20px]" width="20px" />
    </a>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
  props: {
    icon: {
      type: String,
    },
    link: {
      type: String,
      default: '#'
    }
  },
  components: {
    Icon,
  },
  data() {
    return {}
  }
}
</script>
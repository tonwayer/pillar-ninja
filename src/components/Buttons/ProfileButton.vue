<template>
  <div class="relative py-3">
    <a :href="link" class="w-full py-[11px] px-[60px] min-h-[62px] flex items-center bg-white text-black justify-center rounded-[16px] hover:text-[#6ed0f8] border-[2px] border-white hover:border-[#6ed0f8] transition-all relative">
      <Icon :icon="icon" class="absolute left-4" width="18px" />
      {{ title }}
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
    title: {
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
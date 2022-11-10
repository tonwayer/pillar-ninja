<template>
  <div :class="className">
    <button class="w-[45px] h-[45px] rounded-full bg-white text-black flex items-center justify-center mt-2 hover:mt-0 transition-all">
      <Icon icon="ei:share-apple" class="w-[20px]" width="20px" />
    </button>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
  props: {
    className: {
      type: String,
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
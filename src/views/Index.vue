<template>
  <div class="min-h-[100vh] bg-black text-white flex justify-center bg-[url('https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_1920,h_1080/page-background/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=de37a0c0-6093-11ed-93c9-838fbfe63661')] bg-cover">
    <div class="flex flex-col items-center pt-6 max-w-[640px] w-full relative">
      <share-button className="absolute right-0" />
      <div class="flex flex-col items-center w-full mb-6">
        <img src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=563671d0-608c-11ed-8c08-2da9c01df491" alt="avatar" class="w-[100px] h-[100px] rounded-full" />
        <h1 className="font-[1rem] mt-4 font-bold">Ninja</h1>
        <h1 className="mt-1">I love video games</h1>
      </div>
      <div class="w-full mb-6">
        <profile-button title="Ninja Gaming" icon="akar-icons:youtube-fill" />
        <profile-button title="Ninja Vods" icon="akar-icons:youtube-fill" />
        <profile-button title="Ninja Shorts" icon="akar-icons:youtube-fill" />
        <profile-button title="GFUEL" icon="ant-design:barcode-outlined" />
        <profile-button title="Instagram" icon="akar-icons:instagram-fill" />
        <profile-button title="Twitter" icon="akar-icons:twitter-fill" />
        <profile-button title="Twitch" icon="akar-icons:twitch-fill" />
        <profile-button title="Merch!" icon="clarity:shopping-cart-solid" />
        <profile-button title="Text me" icon="bx:mobile-alt" />
        <profile-button title="Masterclasses" icon="fa:graduation-cap" />
      </div>
      <div class="flex justify-center mb-10">
        <social-button icon="ic:round-email" />
        <social-button icon="akar-icons:facebook-fill" />
        <social-button icon="akar-icons:tiktok-fill" />
      </div>
      <div class="flex opacity-[0.5] transition-all hover:opacity-[1] mb-6 cursor-pointer">
        <span>Powered by Pillar</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileButton from '@/components/Buttons/ProfileButton.vue'
import SocialButton from '@/components/Buttons/SocialButton.vue'
import ShareButton from '@/components/Buttons/ShareButton.vue'

export default {
  data() {
    return {
    };
  },
  components: {
    ProfileButton,
    SocialButton,
    ShareButton,
  },
};
</script>

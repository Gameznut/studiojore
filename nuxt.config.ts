// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/studiojore/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      title: "📷Studio Jore",
      script: [
        {
          children: `window.addEventListener("load", function() {
                      var preloader = document.getElementById("preloader");
                        setTimeout(() => {
                        preloader.style.opacity = 0;
                        setTimeout(() => (preloader.style.display = 'none'), 600);
                      }, 450);
                    });
          `,
        },
      ],
      meta: [
        {
          name: "description",
          content: "Studio Jore a brand agency where you an get the best image",
        },
      ],
      link: [],
    },
    pageTransition: { name: "page", mode: "default" },
  },
  css: ["~/assets/css/main.css", "~/assets/css/global.css"],
  modules: ["nuxt-icon", "@nuxt/image-edge"],
  experimental: {
    payloadExtraction: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

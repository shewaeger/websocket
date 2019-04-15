module.exports = {
    outputDir: '../src/main/resources/static/frontend',
    indexPath: '../../templates/web-socket-tester.html',
    publicPath: '/ws/',
    devServer: {
      watchOptions: {
        poll: 1000,
      },
      proxy: {
        '^/ws/web-socket-api': {
          // target: 'http://192.168.38.118:8080',
          target: 'http://localhost:8080',
        },
      },
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/scss/utilities/_variables.scss";
            @import "@/assets/scss/utilities/_mixins.scss";
          `,
        },
      },
    },
  };
  
require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./src/routes-sitemap').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://simmmple.com/')
          .save('./public/sitemap.xml')
  );
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,   //*Deger true olursa  eski html dosyasini siler ve yenisini olusturur.False olursa index001.html seklinde diger dosyalari olusturur
    charts: true,  //*Testlerin fail ve pass durumlariyla ilgili rapora bir grafik ekler
    reportPageTitle: 'Toolshop Project Report',  //*rapor basliginin degistirilmesini saglar
    // reportFilename: "[status]_[datetime]-[name]-report",
    // timestamp: "longDate",
    // embeddedScreenshots: true,
    // inlineAssets: true,
    // saveAllAttempts: false,
    // ignoreVideos: true,
    // videoOnFailOnly: false
  },
    

  screenshotOnRunFailure:true,   //!npx cypress run komutu ile calistirildiginda test fail olursa ekran goruntusu alir.(false yaparsak ekran goruntusu almaz)
  trashAssetsBeforeRuns:true,    //! (npx cypress run) test tekrar calistirildiginda run yapmadan once ekran goruntusu sayfalarini ve videolari  temizler
  video:true,                    //!(npx cypress run) var sayilan degeri false. Test calistirildiginda video ceker
  retries: {  
    runMode: 0,  // npx cypress run komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
    openMode: 0,  // npx cypress open komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
    },                          
  e2e: {
    baseUrl:'https://practicesoftwaretesting.com/#/',
    env:{
      register:'auth/register'

    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});

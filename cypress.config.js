const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,   //*Deger true olursa  eski html dosyasini siler ve yenisini olusturur.False olursa index001.html seklinde diger dosyalari olusturur
    charts: true,  //*Testlerin fail ve pass durumlariyla ilgili rapora bir grafik ekler
    reportPageTitle: 'Toolshop Project Report',  //*rapor basliginin degistirilmesini saglar
    reportFilename: "[name]_[status]-[datetime]-report", //*Rapor dosyasini isimlendirmak icin kullanilir
    timestamp: "shortDate", //*Dosya ismindeki tarih alaninin duzenlenmesinde kullanilir.shortDate veya longDate kullanilabilir
    embeddedScreenshots: true, //*Resim dosyasinin HTML dosyasina gomulerek eklenmesini saglar, secenek true ise
    inlineAssets: true,  //*Assets klasorunun HTML dosyasina gomulerek eklenmesini saglar
    saveAllAttempts: false,  //*fail olan testlerde eger test tekrari yapiyorsak sadece son teste ait ekran goruntusunu rapora ekler
    ignoreVideos: false,  //* true secenegi ile  videolari gormezden gelir, ignor eder.Rapora eklemez. 
    videoOnFailOnly: false //* true secenegi ile kullanildiginda, sadece fail olan testler icin rapora video eklenir
  },
  screenshotOnRunFailure:true,   //!npx cypress run komutu ile calistirildiginda test fail olursa ekran goruntusu alir.(false yaparsak ekran goruntusu almaz)
  trashAssetsBeforeRuns:true,    //! (npx cypress run) test tekrar calistirildiginda run yapmadan once ekran goruntusu sayfalarini ve videolari  temizler
  video:true,                    //!(npx cypress run) var sayilan degeri false. Test calistirildiginda video ceker
  retries: {  

    runMode: 0,  // *npx cypress run komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
    openMode: 0,  // *npx cypress open komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
    },                          
  e2e: {
    baseUrl:'https://practicesoftwaretesting.com/#/',
    env:{  
      register:'auth/register',
      login:'auth/login',
      dashboard:'admin/dashboard'
    },   //degiskenler

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});

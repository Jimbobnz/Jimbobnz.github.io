window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [ 
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/Account%20API/Account%202021-09-14.yaml", name: "Account API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/Address%20API/Address%202021-09-14.yaml", name: "Address API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/BIC%20API/BIC%202021-11-29.yaml", name: "BIC API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/Bank%20API/Bank%202021-09-14.yaml", name: "Bank API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/Contact%20API/Contact%202021-09-14.yaml", name: "Contact API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/Customer%20API/Customer%202021-09-14.yaml", name: "Customer API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Communication/master/Service%20-%20Document/Document%202023-11-22.yaml", name: "Document API" },
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/Name%20API/Name%202023-07-27.yaml", name: "Name API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Customer%20Services%20Suite/Period%20API/Period%202021-10-28.yaml", name: "Period API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Service%20-%20Income/Income%20API%202024-03-16.yaml", name: "Income API"},
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Customer-and-Account/master/Service%20-%20IRD%20Number%20Validation/Customer%20Service%2020220510.yaml", name: "IRD Number Validation API" },
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Communication/master/Service%20-%20Notifications/Notifications%2020230331.yaml", name: "Notification API" },
		{url: "PIRCalculator20230308.yaml", name: "PIR Calculator API" },
		{url: "https://raw.githubusercontent.com/InlandRevenue/Gateway_Services-Transaction-data-services/master/TDS%20API-20231201.yaml", name: "TDS API" }
	    
	],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};

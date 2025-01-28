window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [ 
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Account%202020-09-30.yaml", name: "Account API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Address%202021-09-14.yaml", name: "Address API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/BIC%202021-11-29.yaml", name: "BIC API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Bank%202021-09-14.yaml", name: "Bank API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Bill%202022-08-22.yaml", name: "Bill API"},
	    	{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Contact%202021-09-14.yaml", name: "Contact API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Customer%202021-09-14.yaml", name: "Customer API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Document%202023-11-22.yaml", name: "Document API" },
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Name%202023-07-27.yaml", name: "Name API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Period%202021-10-28.yaml", name: "Period API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Income%20API%202024-03-16.yaml", name: "Income API"},
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Customer%20Service%2020220510.yaml", name: "IRD Number Validation API" },
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/Notifications%2020230331.yaml", name: "Notification API" },
		{url: "https://raw.githubusercontent.com/Jimbobnz/Jimbobnz.github.io/refs/heads/main/PIRCalculator20230308.yaml", name: "PIR Calculator API" }
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

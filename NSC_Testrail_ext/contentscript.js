var s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
//s.innerText  = "console.log($(\'td#contentContainer p\').text())";
s.innerHTML  = "$(document).ready(function() {\r\n  if (window.location.href.match(\"http:\\\/\\\/testrail.nsc-tech.ru\\\/.*\\\/cases\\\/view\\\/\")) {\r\n    console.log(\"url matched. Search parts for replace\")\r\n    var arr = $(\'td#contentContainer p\')\r\n    $.ajax({\r\n      url: \"http:\/\/localhost:11111\/testData\/getTestData\",\r\n\r\n      dataType: \"text\",\r\n      success: function(data) {\r\n\r\n        var json = $.parseJSON(data);\r\n        for (var s in arr) {\r\n\r\n          var row = arr[s].innerHTML;\r\n          for (var key in json) {\r\n            if (row.match(key)) {\r\n              console.log(\"part has been found: \" + key + \" : \" + json[key]);\r\n              $(\'td#contentContainer p\').html(function(index, html) {\r\n                return html.replace(\"$[\" + key + \"]\", json[key]);\r\n              })\r\n            }\r\n          }\r\n        }\r\n      }\r\n    })\r\n  }\r\n})";
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
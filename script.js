var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.zoom.us",
  "port": null,
  "path": "/v2/users/1997sprocks@gmail.com/meetings?page_number=1&page_size=30&type=live",
  "headers": {
    "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ2ZXIiOiI2IiwiY2xpZW50SWQiOiJfMkcxOGU4NFE4T1cyejRuZGNjRGlRIiwiY29kZSI6IkZQSmF5a2hnekpfSXloT01tMHVSbE9tVnFZRzh3LVdMQSIsImlzcyI6InVybjp6b29tOmNvbm5lY3Q6Y2xpZW50aWQ6XzJHMThlODRROE9XMno0bmRjY0RpUSIsImF1dGhlbnRpY2F0aW9uSWQiOiI0NjJkNzIyNmRjZjBkMTVmMjQ3MzU2MjAxOTk1ZmY3NyIsImVudiI6W251bGxdLCJ1c2VySWQiOiJJeWhPTW0wdVJsT21WcVlHOHctV0xBIiwiZ3JvdXBOdW1iZXIiOjAsImF1ZCI6Imh0dHBzOi8vb2F1dGguem9vbS51cyIsImFjY291bnRJZCI6IjFtWjZwcjNQUy15NktvYmtERmkwblEiLCJuYmYiOjE1NzYxNjQwNTMsImV4cCI6MTU3NjE2NzY1MywidG9rZW5UeXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNTc2MTY0MDUzLCJqdGkiOiJiMjZkZmUwZC0zMjhlLTRlYTktOTVkMi01MTQzOWExZjQyNGQiLCJ0b2xlcmFuY2VJZCI6MH0.C8REoAbdJvuDKWc9hTLrfBQIVjW3BYQxMYSISABm69nPXV_JzlbF9kw-11X-Cin0nyhbrWovzAGw4lQJAFqsvg"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
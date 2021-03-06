// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls7371/providers/Microsoft.DataLakeStore/accounts/xplattestadls6675?api-version=2015-10-01-preview', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name is belong to another owner.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '93',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8661d13b-843f-4d1e-98b7-9af809fdab5e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5b2e649b-1a6a-455c-a87f-00494e916a68',
  'x-ms-routing-request-id': 'WESTUS:20160525T002654Z:5b2e649b-1a6a-455c-a87f-00494e916a68',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls7371/providers/Microsoft.DataLakeStore/accounts/xplattestadls6675?api-version=2015-10-01-preview', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name is belong to another owner.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '93',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '8661d13b-843f-4d1e-98b7-9af809fdab5e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5b2e649b-1a6a-455c-a87f-00494e916a68',
  'x-ms-routing-request-id': 'WESTUS:20160525T002654Z:5b2e649b-1a6a-455c-a87f-00494e916a68',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 25 May 2016 00:26:54 GMT',
  connection: 'close' });
 return result; }]];
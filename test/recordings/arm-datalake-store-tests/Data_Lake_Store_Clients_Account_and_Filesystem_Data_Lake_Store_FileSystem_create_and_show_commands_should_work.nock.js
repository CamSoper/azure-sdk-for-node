// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6a996bc-041d-417b-b1af-f352fcaf0a72',
  'set-cookie': [ 'UserPrincipalSession=a1c60f61-f09a-4980-9403-a6459f59a9f2; path=/; secure; HttpOnly' ],
  'server-perf': '[e6a996bc-041d-417b-b1af-f352fcaf0a72][ AuthTime::1446.03356542864::PostAuthTime::583.374677090996 ][HdfsMkdirsV2 :: 00:00:098 ms]%0a[MKDIRS :: 00:00:101 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:03 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6a996bc-041d-417b-b1af-f352fcaf0a72',
  'set-cookie': [ 'UserPrincipalSession=a1c60f61-f09a-4980-9403-a6459f59a9f2; path=/; secure; HttpOnly' ],
  'server-perf': '[e6a996bc-041d-417b-b1af-f352fcaf0a72][ AuthTime::1446.03356542864::PostAuthTime::583.374677090996 ][HdfsMkdirsV2 :: 00:00:098 ms]%0a[MKDIRS :: 00:00:101 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:03 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1464136023492,\"modificationTime\":1464136023492,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0bd62a29-2e86-450a-8f65-2524228c5b49',
  'set-cookie': [ 'UserPrincipalSession=035bc84c-9d00-40da-b8cb-3b78d4d9bbbf; path=/; secure; HttpOnly' ],
  'server-perf': '[0bd62a29-2e86-450a-8f65-2524228c5b49][ AuthTime::1568.35540379057::PostAuthTime::594.495230779627 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:081 ms]%0a[GetFileStatus :: 00:00:083 ms]%0a[GETFILESTATUS :: 00:00:083 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:04 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1464136023492,\"modificationTime\":1464136023492,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0bd62a29-2e86-450a-8f65-2524228c5b49',
  'set-cookie': [ 'UserPrincipalSession=035bc84c-9d00-40da-b8cb-3b78d4d9bbbf; path=/; secure; HttpOnly' ],
  'server-perf': '[0bd62a29-2e86-450a-8f65-2524228c5b49][ AuthTime::1568.35540379057::PostAuthTime::594.495230779627 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:081 ms]%0a[GetFileStatus :: 00:00:083 ms]%0a[GETFILESTATUS :: 00:00:083 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:04 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9761.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': 'ebdaebaa-7672-4ca6-90d7-da9d0d974bf1',
  'set-cookie': [ 'UserPrincipalSession=312c7e24-000b-45be-a2fa-3c155bc8b94d; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[ebdaebaa-7672-4ca6-90d7-da9d0d974bf1][ AuthTime::1542.6937391526::PostAuthTime::628.710783630253 ][FsOpenStream :: 00:00:137 ms]%0a[Open :: 00:00:139 ms]%0a[Write :: 00:00:001 ms]%0a[CREATE :: 00:00:142 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:04 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9761.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': 'ebdaebaa-7672-4ca6-90d7-da9d0d974bf1',
  'set-cookie': [ 'UserPrincipalSession=312c7e24-000b-45be-a2fa-3c155bc8b94d; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[ebdaebaa-7672-4ca6-90d7-da9d0d974bf1][ AuthTime::1542.6937391526::PostAuthTime::628.710783630253 ][FsOpenStream :: 00:00:137 ms]%0a[Open :: 00:00:139 ms]%0a[Write :: 00:00:001 ms]%0a[CREATE :: 00:00:142 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:04 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136024940,\"modificationTime\":1464136024940,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '338204cf-ac0f-4861-b167-607fca201306',
  'set-cookie': [ 'UserPrincipalSession=b0e87520-45c5-4650-b716-310a0c822dbe; path=/; secure; HttpOnly' ],
  'server-perf': '[338204cf-ac0f-4861-b167-607fca201306][ AuthTime::1468.70323426929::PostAuthTime::567.978420241588 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:075 ms]%0a[GetFileStatus :: 00:00:077 ms]%0a[GETFILESTATUS :: 00:00:077 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:06 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136024940,\"modificationTime\":1464136024940,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '338204cf-ac0f-4861-b167-607fca201306',
  'set-cookie': [ 'UserPrincipalSession=b0e87520-45c5-4650-b716-310a0c822dbe; path=/; secure; HttpOnly' ],
  'server-perf': '[338204cf-ac0f-4861-b167-607fca201306][ AuthTime::1468.70323426929::PostAuthTime::567.978420241588 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:075 ms]%0a[GetFileStatus :: 00:00:077 ms]%0a[GETFILESTATUS :: 00:00:077 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:06 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9761.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '9ee66882-5926-4bf7-af65-3d684a925fbb',
  'set-cookie': [ 'UserPrincipalSession=a2b9fe2f-891c-4ce1-b7e2-3a750082ca16; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[9ee66882-5926-4bf7-af65-3d684a925fbb][ AuthTime::1511.02238006768::PostAuthTime::567.969918123373 ][FsOpenStream :: 00:00:126 ms]%0a[Open :: 00:00:128 ms]%0a[FsAppendStream :: 00:00:078 ms]%0a[Write :: 00:00:082 ms]%0a[CREATE :: 00:00:213 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:07 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9761.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '9ee66882-5926-4bf7-af65-3d684a925fbb',
  'set-cookie': [ 'UserPrincipalSession=a2b9fe2f-891c-4ce1-b7e2-3a750082ca16; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[9ee66882-5926-4bf7-af65-3d684a925fbb][ AuthTime::1511.02238006768::PostAuthTime::567.969918123373 ][FsOpenStream :: 00:00:126 ms]%0a[Open :: 00:00:128 ms]%0a[FsAppendStream :: 00:00:078 ms]%0a[Write :: 00:00:082 ms]%0a[CREATE :: 00:00:213 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:07 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136027923,\"modificationTime\":1464136028013,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f067d763-b3df-49e2-8e25-338f0f73334c',
  'server-perf': '[f067d763-b3df-49e2-8e25-338f0f73334c][ AuthTime::671.052817288442::PostAuthTime::170.222448235054 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:018 ms]%0a[GetFileStatus :: 00:00:019 ms]%0a[GETFILESTATUS :: 00:00:019 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:08 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136027923,\"modificationTime\":1464136028013,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f067d763-b3df-49e2-8e25-338f0f73334c',
  'server-perf': '[f067d763-b3df-49e2-8e25-338f0f73334c][ AuthTime::671.052817288442::PostAuthTime::170.222448235054 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:018 ms]%0a[GetFileStatus :: 00:00:019 ms]%0a[GETFILESTATUS :: 00:00:019 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:08 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136027923,\"modificationTime\":1464136028013,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136024940,\"modificationTime\":1464136024940,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78042abb-17c7-4c9c-9ccd-60b245dd05fe',
  'set-cookie': [ 'UserPrincipalSession=872ac215-d00b-4071-8589-f66334139086; path=/; secure; HttpOnly' ],
  'server-perf': '[78042abb-17c7-4c9c-9ccd-60b245dd05fe][ AuthTime::1535.85128545749::PostAuthTime::564.556863493144 ][HdfsListStatus :: 00:00:088 ms]%0a[ListStatus :: 00:00:090 ms]%0a[MSLISTSTATUS :: 00:00:090 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:08 GMT',
  connection: 'close',
  'content-length': '570' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136027923,\"modificationTime\":1464136028013,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1464136024940,\"modificationTime\":1464136024940,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78042abb-17c7-4c9c-9ccd-60b245dd05fe',
  'set-cookie': [ 'UserPrincipalSession=872ac215-d00b-4071-8589-f66334139086; path=/; secure; HttpOnly' ],
  'server-perf': '[78042abb-17c7-4c9c-9ccd-60b245dd05fe][ AuthTime::1535.85128545749::PostAuthTime::564.556863493144 ][HdfsListStatus :: 00:00:088 ms]%0a[ListStatus :: 00:00:090 ms]%0a[MSLISTSTATUS :: 00:00:090 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:27:08 GMT',
  connection: 'close',
  'content-length': '570' });
 return result; }]];
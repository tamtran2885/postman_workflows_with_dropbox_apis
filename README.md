# dropbox-api-postman collection

This repo is a placeholder to maintain Dropbox API Postman Collection.

## Keys used in APIs:

- Client ID: the client identifier issued to the client during the Application registration process.
- Client Secret: the client secret issued to the client during the Application registration process.
- Auth URL: the end point for authorization server. This is used to get the authorization code.
- Access Token URL: the end point for authorization server. This is used to exchange the authorization code for an access token.

## Run and test collection:

#### 1. Fork the collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6?action=collection%2Ffork&collection-url=entityId%3D16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6%26entityType%3Dcollection%26workspaceId%3Dfbdea7d7-a03d-4269-8090-270c57da2e0a#?env%5BDropbox_env%5D=W3sia2V5IjoiQXBwX2tleSIsInZhbHVlIjoidWw3dGdqYm5xNnUzcjA2IiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImFueSIsInNlc3Npb25WYWx1ZSI6InVsN3RnamJucTZ1M3IwNiIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJBcHBfc2VjcmV0IiwidmFsdWUiOiI4dXVkczgybHRjcmlkeTkiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6Ijh1dWRzODJsdGNyaWR5OSIsInNlc3Npb25JbmRleCI6MX0seyJrZXkiOiJBdXRoX3VybCIsInZhbHVlIjoiaHR0cHM6Ly93d3cuZHJvcGJveC5jb20vb2F1dGgyL2F1dGhvcml6ZSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly93d3cuZHJvcGJveC5jb20vb2F1dGgyL2F1dGhvcml6ZSIsInNlc3Npb25JbmRleCI6Mn0seyJrZXkiOiJBY2Nlc3NfdG9rZW5fdXJsIiwidmFsdWUiOiJodHRwczovL2FwaS5kcm9wYm94YXBpLmNvbS9vYXV0aDIvdG9rZW4iLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6Imh0dHBzOi8vYXBpLmRyb3Bib3hhcGkuY29tL29hdXRoMi90b2tlbiIsInNlc3Npb25JbmRleCI6M30seyJrZXkiOiJhY2Nlc3NfdG9rZW4iLCJ2YWx1ZSI6InNsLkJSSDJOaHZfYnNwaThHRWFIVTlSazB6N21LYVdVdFcyTHF0ZllKN2h2V1FxSlBqaHRWdlZXZGUySktqU1RHUVVzbm5SSUpCM182TzFhVExBYkV4Vm5sMU9UWGRuZHBHdl9zRDY5SFAxTDJsZ1pDcjhTdVdLRkt5QWUtX0hCSnJrZ1hvNGl3c1J6U3MiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoidGV4dCIsInNlc3Npb25WYWx1ZSI6InNsLkJSSDJOaHZfYnNwaThHRWFIVTlSazB6N21LYVdVdFcyTHF0ZllKN2h2V1FxSlBqaHRWdlZXZGUySktqU1RHUVVzbm5SSUpCM182TzFhVExBYkV4Vm5sMU9UWGRuZHBHdl9zRDY5SFAxTDJsZ1pDcjhTdVdLRkt5QWUtX0hCSnJrZ1hvNGl3Li4uIiwic2Vzc2lvbkluZGV4Ijo0fV0=)

#### 2. The collection uses local variables which are available throughout the requests in the collection and are independent of environments.

#### 3. Generate Access Token using OAuth 2

- After sharing the collection, the access token will not persist in the new workspace. Therefore, it is necessary to regenerate a new access token. In the Authorization tab of the collection, select Get New Access Token.

- By default, requests inside the collection will inherit auth from the parent, and they will use the same auth specified at the collection level.

#### 4. Modify upload file request

Because the file path would be invalid after sharing requests between different machines, Collection Runner would not support uploading file. Before running collection, it is essential to manually select file to be uploaded in the request body. In this collection, it is supposed that the request will upload a text file (.txt), so it is important to manually select a text file to run successfully the collection later.

#### 5. Use Collection Runner to run API requests in a specified sequence.

## Reference:

- Postman (https://www.postman.com/)
- Javascript (https://www.javascript.com/)
- Newman (https://www.npmjs.com/package/newman)

## Repository

- https://github.com/tamtran2885/postman_workflows_with_dropbox_apis

---
title: "How to create a folder and a file using the googledrive api in nodejs"
date: 2019-07-15T01:00:00+00:00
tags: 
template: development-post
image: ./media/blocks.jpg
---

## 1) Create a Gmail account:

- Go to [https://www.google.com/gmail/about/#](https://www.google.com/gmail/about/#)
- Create an Account

## 2) Enable Google Drive API

- Go to [https://developers.google.com/drive/api/v3/quickstart/nodejs](https://developers.google.com/drive/api/v3/quickstart/nodejs)
- Click the ENABLE API Button
- Download the `credentials.json` file

## 3) Install `googleapis`

- In your project folder:

`npm install googleapis @ 39 --save`

## 4) Authenticate

to interact with google drive we need to authenticate, that is done with the features we downloaded a while ago and a token.json file that contains access tokens and user updates, this file is created automatically when the authorization flow is completed by first time.

something very important is that depending on what we are doing in our application we need a type of permission, as in our application we will work with folders and files we need the access area that this case would be: 

`https://www.googleapis.com/auth/drive.file`

For more information see https://developers.google.com/drive/api/v3/about-auth

```javascript
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), uploadFile);
    /**
    * Create an OAuth2 client with the given credentials, and then execute the
    * given callback function.
    * @param {Object} credentials The authorization client credentials.
    * @param {function} callback The callback to call with the authorized client.
    */
    function authorize(credentials, callback) {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
        // Check if we have previously stored a token.
        fs.readFile(TOKEN_PATH, (err, token) => {
          if (err) 
            return getAccessToken(oAuth2Client, callback);
          oAuth2Client.setCredentials(JSON.parse(token));
          callback(oAuth2Client);
        });
    }
    /**
    * Get and store new token after prompting for user authorization, and then
    * execute the given callback with the authorized OAuth2 client.
    * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
    * @param {getEventsCallback} callback The callback for the authorized client.
    */
    function getAccessToken(oAuth2Client, callback) {
        const authUrl = oAuth2Client.generateAuthUrl({access_type: 'offline',scope: SCOPES,});
    
        console.log('Authorize this app by visiting this url:', authUrl);
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
        
          rl.question('Enter the code from that page here: ', (code) => {
              rl.close();
              oAuth2Client.getToken(code, (err, token) => {
                if (err) return console.error('Error retrieving access token', err);
                oAuth2Client.setCredentials(token);
                // Store the token to disk for later program executions
                fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                  if (err) return console.error(err);
                  console.log('Token stored to', TOKEN_PATH);
                });
                callback(oAuth2Client);
              });
          });
    }
})
    
function uploadFile(auth,) {
    const drive = google.drive({ version: 'v3', auth });
    const fileMetadata = {
    'name': name,
    'mimeType': 'application/vnd.google-apps.folder'
    };
    
    drive.files.create({resource: fileMetadata,fields: 'id' }, function (err, file) {
        if (err) {
          console.error(err);
        } else {
            // create file
            const folderId = file.data.id
            const fileCreate = {'name': name, parents : [folderId] }
            const fileMedia = { mimeType: 'text/plain', body : comment }
            
            drive.files.create({resource: fileCreate, media: fileMedia, fields: 'id'},function (err) {
                if(err){
                console.log(err)
                }
                else{
                console.log('OK')
                }
            })
        }
    });
            
}
```

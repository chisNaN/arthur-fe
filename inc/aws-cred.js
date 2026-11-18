AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:a7af27d5-4151-49c8-89cd-260758e533d4'
});

AWS.config.credentials.get(function(err) {
    if (err) {
        console.log("Error: "+err);
        return;
    }});
    console.log("Cognito Identity Id: " + AWS.config.credentials.identityId);
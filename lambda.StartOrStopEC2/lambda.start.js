const AWS = require('aws-sdk');
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#stopInstances-property
exports.handler = (event, context, callback) => {
    console.log(event)
    const { instanceId, instanceRegion } = event;
    const ec2 = new AWS.EC2({ region: instanceRegion });
    Promise.resolve()
        .then(() => ec2.startInstances({ InstanceIds: [instanceId] }).promise())
        .then(() => ec2.waitFor('instanceRunning', { InstanceIds: [instanceId] }).promise())
        
        .then(() => callback(null, `Successfully modified ${event.instanceId} `))
        .catch(err => callback(err));
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

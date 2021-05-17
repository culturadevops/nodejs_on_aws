const AWS = require('aws-sdk');
//Amazon EC2 Changing Instance Type Tutorial
exports.handler = (event, context, callback) => {
    console.log(event)
    const { instanceId, instanceRegion, instanceType } = event;

    const ec2 = new AWS.EC2({ region: instanceRegion });
    
    Promise.resolve()
        .then(() => ec2.stopInstances({ InstanceIds: [instanceId] }).promise())
        .then(() => ec2.waitFor('instanceStopped', { InstanceIds: [instanceId] }).promise())
        .then(() => ec2.modifyInstanceAttribute({InstanceId: instanceId, InstanceType: { Value: instanceType } }).promise())
        .then(() => ec2.startInstances({ InstanceIds: [instanceId] }).promise())
        .then(() => callback(null, `Successfully modified ${event.instanceId} to ${event.instanceType}`))
        .catch(err => callback(err));
    

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

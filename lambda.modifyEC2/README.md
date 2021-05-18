# NODEJS ON AWS
Este ejemplo permite modificar instnacias de ec2 necesita los siguiente 

### video explicativo en youtube
- [Modificar tipo de instancias (video)](https://youtu.be/BGIvZpsFTw4)


## Permisos que necesitas
los permisos que necesitas son, crea un rol he incluye lo siguiente:
"ec2:DescribeInstances",
"ec2:StartInstances",
"ec2:ModifyInstanceAttribute",
"ec2:StopInstances"


## Event
para hacer pruebas necesitas usar la siguiente estructura
```
{
  "instanceId": "i-0c9e4cec48a083f19",
  "instanceRegion": "us-east-1",
  "instanceType": "t3.medium"
}   
```



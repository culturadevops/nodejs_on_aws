# NODEJS ON AWS
Este ejemplo permite modificar instanacias de ec2 con nodejs

### Video explicativo en youtube
- [Modificar tipo de instancias con lambdas con nodejs (video)](https://youtu.be/BGIvZpsFTw4)
- [![Modificar tipo de instancias con lambdas con nodejs (video)](https://img.youtube.com/vi/aia6-eIMe4g/maxresdefault.jpg)](https://youtu.be/aia6-eIMe4g)

## Permisos que necesitas
los permisos que necesitas son, crea un rol he incluye lo siguiente:
```
"ec2:DescribeInstances",
"ec2:StartInstances",
"ec2:ModifyInstanceAttribute",
"ec2:StopInstances"
```

## Event
para hacer pruebas necesitas usar la siguiente estructura
```
{
  "instanceId": "i-0c9e4cec48a083f19",
  "instanceRegion": "us-east-1",
  "instanceType": "t3.medium"
}   
```



# NODEJS ON AWS
Este ejemplo permite apagar y encender instancias de ec2 con nodejs. 

### Video explicativo en youtube
- [Apagar y encender instancias con lambdas y nodejs (video)](https://youtu.be/BGIvZpsFTw4)
[![Apagar y encender instancias con lambdas y nodejs (video)](https://img.youtube.com/vi/BGIvZpsFTw4/maxresdefault.jpg)](https://youtu.be/BGIvZpsFTw4)


## Permisos que necesitas
los permisos que necesitas son, crea un rol he incluye lo siguiente:
```
"ec2:DescribeInstances",
"ec2:StartInstances",
"ec2:StopInstances"
```

## Event
para hacer pruebas necesitas usar la siguiente estructura
```
{
  "instanceId": "i-0c9e4cec48a083f19",
  "instanceRegion": "us-east-1"
}   
```



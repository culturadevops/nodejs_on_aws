# NODEJS ON AWS
Este ejemplo permite apagar y encender instancias de ec2 con nodejs. 

### Video explicativo en youtube
- [Apagar y encender instancias con lambdas y nodejs (video)](https://youtu.be/BGIvZpsFTw4)
<iframe width="560" height="315" src="https://www.youtube.com/embed/aia6-eIMe4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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



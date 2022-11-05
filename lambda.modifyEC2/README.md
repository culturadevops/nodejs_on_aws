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





# Mis Libros:

[![libros futuro es devops ](https://github.com/culturadevops/recursos/blob/master/portada-futuro-es-devops.png)](https://amzn.to/3S8AGG9) [![libros herramientas devops](https://github.com/culturadevops/recursos/blob/master/portada-herramientasdevops.png)](https://amzn.to/3ga1c4E)

# Mi canal de cultura Devops

[![canal de youtube sobre devops ](https://github.com/culturadevops/recursos/blob/master/logo-culturadevops.png)](https://www.youtube.com/channel/UCfJ67eVA7DkKbbIF5ceJDMA?sub_confirmation=1) 

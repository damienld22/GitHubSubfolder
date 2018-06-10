# GitHub Get Subfolder

There are many online tools to get a zip of a subfolder from a GitHub repository.
So all of them create the zip file with the front code.

> Issue : We can't the the generated file with a tool like _curl_

This repository do the same stuff, but the generation of the file is on the back end side.

## How to use it ?

First you need to launch the Spring app (back end part) :

`cd github-get-subfolder && mvn package && java -jar target/github-get-subfolder-0.0.1-SNAPSHOT.jar`

There are 3 properties :

- **owner** : The owner of the repository on GitHub
- **repository** : Name of the repository on GitHub
- **path** (optional) : Path of the subfolder. If the property is missing or is empty, the tool get the entire repository

### From browser

Go to **https://damienld22.github.io/GitHubSubfolder/**

## From _curl_

`curl http://localhost:8080?owner=zetapush&repository=zetapush-tutorials&path=avengersChat --output avengersChat.zip`

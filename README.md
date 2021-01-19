node -v -> v10.23.1
npm -v -> 5.8.0

Install vercel:
apt update && apt install -y nodejs npm
npm i -g vercel

4- vercel -v -> 21.1.0
5- unzip angular.zip
6- git push ou vercel
7- vercel list
8- vercel logs td-vercel-bg5n6bag1.vercel.app
9- vercel inspect td-vercel-bg5n6bag1.vercel.app
-> sert à avoir une vue générale sur un déploiement
10- Les variables d'environnement servent à définir un "cadre d'éxécution" pour l'application
11- vercel env add
12- vercel env ls
13- Les secrets sont des variables d'environnement pour contenir des valeurs secrètes.
On y stocke par exemple des mots de passe.
15- vercel secrets add secret2 secretvalue2
16- Il y a Production Preview, Development.
C'est utile d'en avoir plusieurs pour pouvoir étudier le comportement de l'application sous différentes conditions-
La Production est un environnement réservé au code stable-
18- https://td-vercel-git-master.thisisnotimportant.vercel.app/
19- Une pull request est une requête pour intégrer du code dans une application.
Vercel a automatiquement poussé la pull request sur un nouvel environnement pour voir l'effet d'un merge.
20- Vercel a détecté le merge et a donc poussé le code vers les environnements Production et Preview.
21- La branche master est la branche pour la production.
Les pull requests permettent de ne pas polluer la master avec du mauvais code.
Une feature est développée dans sa propre branche jusqu'à ce qu'elle soit acceptée dans la branche principale.
22- Le serverless permet à une application d'être hébergée sur le Cloud facilement. Une fois la pipeline configurée,
tout est automatique et l'application est déployée "toute seule".


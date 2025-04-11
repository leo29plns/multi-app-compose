# MULTI-APP-COMPOSE

Un docker compose pour Nextcloud et MyCustomApp

# Features

- Un système d'autoconfiguration, ne nécessitant aucune interaction.
- Utilisation de Traefik en reverse proxy pour n'exposer que le port `80`.
  En effet, sont présents des scripts qui se lancent à l'installation de Nextcloud pour configurer les apps Onlyoffice et Whiteboard, et configurer le `trusted_proxy` de nextcloud avec l'ip exacte de Traefik
- Un système de montée en version simple
  Les montées de version peuvent se faire à l'aide de la simple modification de fichiers d'environnement, pour écraser les versions utilisées par défaut. Par exemple, `DOCKER_TRAEFIK_VERSION=v2.2.0`
- Isolation des services avec des networks dédiés
- Gestion des secrets en var d'env plutôt qu'en Docker secrets

# Le fruit d'une collaboration

Thanks to [@Dan Phan Nguyen](https://github.com/danphannguyen) :)

# Project Setup  

## Modifier le fichier `hosts`  

Avant de démarrer le projet, vous devez ajouter des entrées à votre fichier `hosts` pour faire pointer les domaines personnalisés vers `127.0.0.1`.  

Les domaines suivants doivent être ajoutés :  
- `nextcloud.local`  
- `my-custom-app.local`

### Windows  

1. Ouvrez un terminal en tant qu'administrateur (PowerShell ou Invite de commandes).  
2. Exécutez la commande suivante :  

   ```powershell
   Add-Content -Path "C:\Windows\System32\drivers\etc\hosts" -Value "`n127.0.0.1 nextcloud.local" -Force
   Add-Content -Path "C:\Windows\System32\drivers\etc\hosts" -Value "`n127.0.0.1 my-custom-app.local" -Force
   ```

3. Vérifiez que les entrées ont bien été ajoutées en ouvrant le fichier `hosts` dans un éditeur de texte.  
4. Videz le cache DNS :  

   ```powershell
   ipconfig /flushdns
   ```

### macOS/Linux  

1. Ouvrez un terminal.  
2. Exécutez les commandes suivantes :  

   ```bash
   echo "127.0.0.1 nextcloud.local" | sudo tee -a /etc/hosts > /dev/null
   echo "127.0.0.1 my-custom-app.local" | sudo tee -a /etc/hosts > /dev/null
   ```

3. Vérifiez les entrées :  

   ```bash
   cat /etc/hosts
   ```

4. Rafraîchissez le cache DNS (optionnel mais recommandé si vous rencontrez des problèmes de résolution) :  

   ```bash
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```

   > 💡 Sur macOS/Linux, le cache DNS est souvent mis à jour automatiquement, mais dans certains cas (surtout si un navigateur ou un service l’a mis en cache), cette étape peut être nécessaire.

## Configuration du fichier `.env`  

Avant de lancer le projet, vous devez définir les variables d’environnement.  

1. Dupliquez le fichier `.env.example` en `.env` :  

   ```bash
   cp .env.example .env
   ```

2. Ouvrez le fichier `.env` et renseignez les valeurs personnalisées, y compris les identifiants admin de Nextcloud.  

## Lancer Docker Desktop  

Assurez-vous que Docker Desktop est lancé avant de continuer.  

## Démarrer le projet  

Une fois les étapes précédentes complétées, lancez le projet avec :  

```bash
docker compose --env-file=".env" up
```

⚠️ **Remarque :**  
Le démarrage peut prendre un peu de temps. Certaines images sont volumineuses et OnlyOffice peut mettre jusqu'à une minute à s'initialiser complètement.  

## Accéder à Nextcloud et aux apps  

Une fois le projet lancé, ouvrez votre navigateur et accédez à :  

- [http://nextcloud.local](http://nextcloud.local)
- [http://my-custom-app.local](http://my-custom-app.local)

Connectez-vous avec les identifiants définis dans le fichier `.env`.  

# Pour une montée de version avec le moins de downtime

Étant donné que l'on utilise Traefik, il sera aisé de démarrer un conteneur avec les bons labels de configuration pour rediriger le trafique vers un conteneur sain et mis à jour. Une fois ceci fait, il sera possible de supprimer le conteneur plus ancien.

> [Info]
> Pour un minimum de downtime, il est conseillé d'utiliser des outils d'orchestration comme Docker Swarm et K8s afin de ne pas gérer le déploiement manuellement.

# Quelques pistes d'amélioration :

- [ ] Utilisation sur un serveur avec un domaine pointant dessus
- [ ] Utilisations de certificats SSL Let's encrypt 
- [ ] Système de backup, avec Duplication par exemple
- [ ] La gestion du storage avec des buckets, avec Minio par exemple
- [ ] Utilisation d'un système de monitoring, comme Grafana ou UptimeKuma
- [ ] Système de login SSO, par exemple Authentik ou Keycloak
- [ ] Création de docker-compose spécifiques à un env de staging et de prod par exemple
- [ ] Isolation de Traefik, MyCustomApp et Nextcloud dans des docker-compose séparés
- [ ] Utilisation de Watchtower pour être notifié des montées de version des images
- [ ] Utilisation de GitDevOps avec Portainer pour autodéployer depuis un repo Git
- [ ] Utilisation d'une infra Terraform
- [ ] Utilisation de K8s (quoi qu'un peu overkill...)


Avec Anaïs MICHEL et Léo PLANUS.
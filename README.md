# Démarrer le projet  

## Modifier le fichier `hosts`  

Avant de démarrer le projet, vous devez ajouter une entrée dans le fichier `hosts` de votre machine pour faire pointer `nextcloud.local` vers `127.0.0.1`.  

### Windows  

1. Ouvrez un terminal en mode administrateur (PowerShell ou Invite de commandes).  
2. Exécutez la commande suivante :  

   ```powershell
   Add-Content -Path "C:\Windows\System32\drivers\etc\hosts" -Value "`n127.0.0.1 nextcloud.local" -Force
   ```

3. Vérifiez que l'entrée a bien été ajoutée en ouvrant le fichier `C:\Windows\System32\drivers\etc\hosts` avec un éditeur de texte.  

### Mac/Linux  

1. Ouvrez un terminal.  
2. Exécutez la commande suivante :  

   ```bash
   echo "127.0.0.1 nextcloud.local" | sudo tee -a /etc/hosts > /dev/null
   ```

3. Vérifiez que l'entrée a bien été ajoutée en exécutant :  

   ```bash
   cat /etc/hosts
   ```

## Configurer le fichier `.env`  

Avant de lancer le projet, vous devez configurer les variables d'environnement.  

1. Dupliquez le fichier `.env.example` en `.env` :  

   ```bash
   cp .env.example .env
   ```

2. Ouvrez le fichier `.env` dans un éditeur de texte et définissez des valeurs personnalisées selon vos besoins.  

## Lancer Docker Desktop  

Avant de démarrer le projet, assurez-vous que Docker Desktop est bien lancé et en cours d'exécution.  

## Démarrer le projet  

Une fois les étapes précédentes effectuées, vous pouvez démarrer le projet avec la commande suivante :  

```bash
docker compose --env-file=".env" up
```

⚠️ **Attention** :  
Le délai de démarrage peut être long. Certaines images sont volumineuses et le temps de démarrage de OnlyOffice peut prendre jusqu'à une minute.

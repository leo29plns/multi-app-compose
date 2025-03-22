# Project Setup  

## Modify the `hosts` File  

Before starting the project, you need to add an entry to your system's `hosts` file to map `nextcloud.local` to `127.0.0.1`.  

### Windows  

1. Open a terminal as Administrator (PowerShell or Command Prompt).  
2. Run the following command:  

   ```powershell
   Add-Content -Path "C:\Windows\System32\drivers\etc\hosts" -Value "`n127.0.0.1 nextcloud.local" -Force
   ```

3. Verify the entry was added by opening `C:\Windows\System32\drivers\etc\hosts` in a text editor.  

### macOS/Linux  

1. Open a terminal.  
2. Run the following command:  

   ```bash
   echo "127.0.0.1 nextcloud.local" | sudo tee -a /etc/hosts > /dev/null
   ```

3. Verify the entry was added by running:  

   ```bash
   cat /etc/hosts
   ```

## Configure the `.env` File  

Before launching the project, you need to set up the environment variables.  

1. Duplicate the `.env.example` file as `.env`:  

   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file in a text editor and set custom values, including the Nextcloud admin credentials.  

## Start Docker Desktop  

Ensure that Docker Desktop is running before proceeding.  

## Launch the Project  

Once all previous steps are completed, start the project with the following command:  

```bash
docker compose --env-file=".env" up
```

⚠️ **Note:**  
The startup process may take some time. Some images are large, and OnlyOffice may take up to a minute to fully initialize.  

## Access Nextcloud  

Once the project is running, open a browser and navigate to:  

[http://nextcloud.local](http://nextcloud.local)

Log in using the credentials specified in the `.env` file.  

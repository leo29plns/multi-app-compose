php occ --no-warnings config:system:set trusted_domains 2 --value="nextcloud"

php occ --no-warnings app:install onlyoffice
php occ --no-warnings config:system:set onlyoffice DocumentServerUrl --value="/onlyoffice/"
php occ --no-warnings config:system:set onlyoffice DocumentServerInternalUrl --value="http://$ONLYOFFICE_HOST/"
php occ --no-warnings config:system:set onlyoffice StorageUrl --value="http://nextcloud/"
php occ --no-warnings config:system:set onlyoffice jwt_secret --value=$JWT_SECRET

php occ --no-warnings app:install whiteboard
php occ --no-warnings config:app:set whiteboard collabBackendUrl --value="/whiteboard/"
php occ --no-warnings config:app:set whiteboard jwt_secret_key --value=$JWT_SECRET

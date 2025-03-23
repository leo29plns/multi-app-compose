TRAEFIK_IP=$(getent hosts traefik | awk '{ print $1 }')

php occ --no-warnings config:system:set trusted_proxies 0 --value=$TRAEFIK_IP

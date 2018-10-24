#!/usr/bin/env bash
#* Mender Deployment Service: https://github.com/mendersoftware/deployments
#* Mender Device Inventory Service:
#  - https://github.com/mendersoftware/inventory
#  - https://github.com/mendersoftware/deviceadm
#* Mender User Administration Service: https://github.com/mendersoftware/useradm

#wget https://github.com/mendersoftware/inventory/raw/master/docs/management_api.yml -O inventory.yml
#wget https://github.com/mendersoftware/useradm/raw/master/docs/management_api.yml -O useradm.yml
#wget https://github.com/mendersoftware/deviceadm/raw/master/docs/management_api.yml -O deviceadm.yml
#wget https://github.com/mendersoftware/deployments/raw/master/docs/management_api.yml -O deployments.yml
#wget https://github.com/mendersoftware/deviceauth/raw/master/docs/management_api.yml -O deviceauth.yml

# ymlToJson
#curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "@${i}" "https://generator.swagger.io/api/gen/clients/swagger-yaml"

for i in *.yml; do
    name="${i%.yml}"
    swagger-codegen generate -i "${i}" -l swagger && mv swagger.json "${name}.json"
    [ -f "README.md" ] && rm README.md
    swagger-codegen-axios-flow < "${name}.json" > "${name}.js"
done

#for i in *.json; do
#    local name="${i%.json}"
#    swagger-codegen-axios-flow < "${name}.json" > "${name}.js"
#done

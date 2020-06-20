#!/bin/bash
echo 'building for' $ENV 'environment'
rm -rf ./dist/notUser.${TARGET_ROLE}.min.js
rm -rf ./dist/notUser.${TARGET_ROLE}.js
NODE_ENV=$ENV ./node_modules/.bin/eslint ./src/controllers/**.js
NODE_ENV=$ENV ./node_modules/.bin/rollup -c ./rollup/${TARGET_ROLE}.js --environment ENV:$ENV
NODE_ENV=$ENV ./node_modules/.bin/terser --compress --mangle -- dist/notUser.${TARGET_ROLE}.js > ./dist/notUser.${TARGET_ROLE}.min.js
if [[ $ENV == 'test' ]]
then
cp dist/notUser.${TARGET_ROLE}.css test/browser/assets/user
cp dist/notUser.${TARGET_ROLE}.js test/browser/assets/user
cp dist/notUser.${TARGET_ROLE}.min.js test/browser/assets/user
fi

exit 0;

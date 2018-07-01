process.env.PORT              = process.env.PORT              || 8000
process.env.HOST              = process.env.HOST              || "https://localhost"
process.env.NODE_ENV          = process.env.NODE_ENV          || "dev"
process.env.FRAMEWORK_ROOT    = process.env.FRAMEWORK_ROOT    || "/home/viseo-bot-framework"
process.env.BOT_ROOT          = process.env.BOT_ROOT          || "/home/site/wwwroot"
process.env.CONFIG_PATH       = process.env.CONFIG_PATH       || (process.env.BOT_ROOT+"/conf/config.js")
process.env.CREDENTIAL_SECRET = process.env.CREDENTIAL_SECRET || "your secret here"

process.argv.push("-s")
process.argv.push(process.env.FRAMEWORK_ROOT +"/conf/node-red-config.js")

const fs = require('fs')
fs.writeFileSync(process.env.BOT_ROOT+'/debug_jp.txt','Starting red.js')
console.log('Starting red.js');

require(process.env.FRAMEWORK_ROOT+'/node_modules/node-red/red.js')
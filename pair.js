const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Brasho_Kish,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function LEGACY_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Brasho_Kish = Brasho_Kish({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Brasho_Kish.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Brasho_Kish.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Brasho_Kish.ev.on('creds.update', saveCreds)
            Pair_Code_By_Brasho_Kish.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id, { text: '' + b64data });

               let LEGACY_MD_TEXT = `
*_Pair Code for LEGACY-MD Connected_*
*_Made With 𓅃_*
*By Brasho Kish*
______________________________________
╔════◇
║ *『 THANKS FOR CHOOSING LEGACY-MD 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╰═════════════⊷
╔═════◇
║  『••• FOR HELP VISIT•••』
║❒ *Instagram:* _https://instagram.com/Brashokish_
║❒ *Owner:* _https://wa.me/254735905972_
║❒ *Repo:* _https://github.com/Brashokish/Legacy-Md_
╰═════════════⊷ 
_____________________________________

_Don't Forget To Give a Star To My Repo_`
 await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id,{text:LEGACY_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Brasho_Kish.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    LEGACY_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Currently Unavailable"});
         }
        }
    }
    return await LEGACY_MD_PAIR_CODE()
});
module.exports = router

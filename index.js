const mineflayer = require("mineflayer");

const HOST = process.env.MC_HOST || "pokemon-server.aternos.me";
const PORT = Number(process.env.MC_PORT || 25565);
const USERNAME = process.env.MC_USERNAME || "DiDo";

let bot;
let reconectando = false;

function conectar() {
    console.log("=================================");
    console.log("🎮 DiDo Minecraft");
    console.log("=================================");
    console.log(`🌐 Servidor: ${HOST}:${PORT}`);
    console.log(`👤 Jugador: ${USERNAME}`);
    console.log("=================================");

    bot = mineflayer.createBot({
        host: HOST,
        port: PORT,
        username: USERNAME,
        auth: "offline",
        version: "1.21.1",
        checkTimeoutInterval: 60000
    });

    bot.once("spawn", () => {
        console.log("✅ DiDo ha entrado al servidor.");

        setTimeout(() => {
            bot.chat("¡Hola! Soy DiDo 🤖");
        }, 3000);
    });

    bot.on("login", () => {
        console.log("🔑 Login realizado.");
    });

    bot.on("message", (message) => {
        const texto = message.toString();

        if (texto.trim()) {
            console.log(`[CHAT] ${texto}`);
        }
    });

    bot.on("chat", (username, message) => {
        if (username === bot.username) return;

        console.log(`[${username}] ${message}`);

        if (message.toLowerCase().includes("dido")) {
            bot.chat(`¿Qué pasa, ${username}? 😎`);
        }
    });

    bot.on("kicked", (reason) => {
        console.log("❌ DiDo ha sido expulsado:");
        console.log(reason);
    });

    bot.on("error", (error) => {
        console.log("❌ Error de Minecraft:");
        console.log(error);
    });

    bot.on("end", () => {
        console.log("🔌 DiDo se ha desconectado.");

        if (!reconectando) {
            reconectando = true;

            console.log("🔄 Reintentando en 15 segundos...");

            setTimeout(() => {
                reconectando = false;
                conectar();
            }, 15000);
        }
    });
}

process.on("uncaughtException", (error) => {
    console.error("❌ Error inesperado:", error);
});

process.on("unhandledRejection", (error) => {
    console.error("❌ Promesa rechazada:", error);
});

conectar();
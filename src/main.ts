import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const token = process.env.DISCORD_TOKEN;

client.on("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    const isTwitterUrl =
        /https?:\/\/(www\.)?(x\.com|twitter\.com)\/[\w_]+\/status\/\d+/;
    if (
        isTwitterUrl.test(message.content.toLowerCase()) &&
        !message.author.bot
    ) {
        message.suppressEmbeds(true);
        message.reply(
            message.content
                .replaceAll("twitter.com", "vxtwitter.com")
                .replaceAll("x.com", "vxtwitter.com")
        );
    }
});

client.login(token);

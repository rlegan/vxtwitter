This Discord bot automatically transforms `twitter.com` or `X.com` links into `vxtwitter.com` links, which allow real embeds to appear in Discord.

When a user posts a tweet link, the bot will detect it, remove the original user's message's embed and respond with the same link, but using the `vxtwitter.com` domain for better embeds.

# Prerequisites

-   Have node 20+
-   Have discord bot token

# How to use

First you have to install dependencies

```shell
npm i
```

Create a .env file with your discord token such as:

```
DISCORD_TOKEN="abcde"
```

And run the bot with

```
npm run start
```

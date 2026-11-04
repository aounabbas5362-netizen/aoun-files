const { cmd } = require("../command");

// ═══════════════════════════════════════════════════════════
// COMMAND - RANDOM FUN PIC
// ═══════════════════════════════════════════════════════════
cmd(
    {
        pattern: "l",
        desc: "Send a random fun pic.",
        category: "attitude",
        react: "💪",
        filename: __filename,
        use: "",
    },
    async (conn, mek, m, { reply }) => {
        try {
            // Random pic array
            const pics = [
                "https://i.ibb.co/4ZSm9ztB/AOUN-MD.jpg",
                "https://i.ibb.co/s9DLFXPP/AOUN-MD.jpg",
                "https://i.ibb.co/bjNFLtSv/AOUN-MD.jpg",
                "https://i.ibb.co/67xjmC61/AOUN-MD.jpg",
                "https://i.ibb.co/m50G38Vc/AOUN-MD.jpg",
                "https://i.ibb.co/JjzsJ3J2/AOUN-MD.jpg",
                "https://i.ibb.co/F4Z85G9h/AOUN-MD.jpg",
                "https://i.ibb.co/1JZR8Bs1/AOUN-MD.jpg",
                "https://i.ibb.co/JR7HjKnT/AOUN-MD.jpg",
                "https://i.ibb.co/C32c31nw/AOUN-MD.jpg",
                "https://i.ibb.co/SXbvt1Xf/AOUN-MD.jpg",
                "https://i.ibb.co/yc93MF9Z/AOUN-MD.jpg",
                "https://i.ibb.co/svb5zt3D/AOUN-MD.jpg",
                "https://i.ibb.co/YBkPjbjy/AOUN-MD.jpg",
                "https://i.ibb.co/yB8gKbcF/AOUN-MD.jpg",
                "https://i.ibb.co/yFS1FXM3/AOUN-MD.jpg",
                "https://i.ibb.co/YBRd9vcY/AOUN-MD.jpg",
                "https://i.ibb.co/zVym6Lqt/AOUN-MD.jpg",
                "https://i.ibb.co/ZqnJkKf/AOUN-MD.jpg",
                "https://i.ibb.co/mgpsQGG/AOUN-MD.jpg"
            ];

            // Pick random pic
            const randomPic = pics[Math.floor(Math.random() * pics.length)];

            // Send image
            await conn.sendMessage(
                mek.chat,
                { 
                    image: { url: randomPic }, 
                    caption: `> AOUN-MD 🖤` 
                },
                { quoted: mek }
            );

        } catch (error) {
            console.error("❌ Error in .jao command:", error);
            reply("❌ *Error in .jao command:*\n" + error.message);
        }
    }
);

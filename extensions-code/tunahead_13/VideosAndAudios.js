(function (Scratch) {
    const audioBlockIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmI5MTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXZvbHVtZS0yIj48cG9seWdvbiBwb2ludHM9IjExIDUgNiA5IDIgOSAyIDE1IDYgMTUgMTEgMTkgMTEgNSI+PC9wb2x5Z29uPjxwYXRoIGQ9Ik0xOS4wNyA0LjkzYTEwIDEwIDAgMCAxIDAgMTQuMTRNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3Ij48L3BhdGg+PC9zdmc+"
    const videoBlockIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmI5MTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWZpbG0iPjxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjIuMTgiIHJ5PSIyLjE4Ij48L3JlY3Q+PGxpbmUgeDE9IjciIHkxPSIyIiB4Mj0iNyIgeTI9IjIyIj48L2xpbmU+PGxpbmUgeDE9IjE3IiB5MT0iMiIgeDI9IjE3IiB5Mj0iMjIiPjwvbGluZT48bGluZSB4MT0iMiIgeTE9IjEyIiB4Mj0iMjIiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIyIiB5MT0iNyIgeDI9IjciIHkyPSI3Ij48L2xpbmU+PGxpbmUgeDE9IjIiIHkxPSIxNyIgeDI9IjciIHkyPSIxNyI+PC9saW5lPjxsaW5lIHgxPSIxNyIgeTE9IjE3IiB4Mj0iMjIiIHkyPSIxNyI+PC9saW5lPjxsaW5lIHgxPSIxNyIgeTE9IjciIHgyPSIyMiIgeTI9IjciPjwvbGluZT48L3N2Zz4="
    
    class VideosAndAudios {
        getInfo() {
            return {
                id: "tunahead13videosandaudios",
                name: "Videos & Audios",
                color1: "#2e2716",
                color2: "#333332",
                color3: "#ad821d",
                menuIconURI: videoBlockIcon,
                blocks: [
                    {
                        opcode: "importVideo",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "import video from URL/URI [URL] with name [NAME]",
                        blockIconURI: videoBlockIcon,
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                            },
                            NAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "my video",
                            },
                        },
                    },
                    {
                        opcode: "trimVideo",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "trim video with name [VIDEO] from [START] to [END]",
                        blockIconURI: videoBlockIcon,
                        arguments: {
                            VIDEO: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "my video",
                            },
                            START: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 5,
                            },
                            END: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 10,
                            },
                        },
                    },
                ],
            };
        }
    
        trimVideo(args) {
            
        }
    }
    
    Scratch.extensions.register(new VideosAndAudios());
})(Scratch);

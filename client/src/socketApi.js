import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("Sunucya bağlanılıyor");

    socket = io("http://localhost:3001", {
        transports: ["websocket"],

    });

    socket.on("connect", () =>
        console.log("SUNUCUYA BAĞLANTI BAŞARIYLA GERÇEKLEŞTİRİLDİ.")
    );
};

export const send = (color) => {
    socket.emit("newColor", color);
}

export const subscribe = (cb) => {
    socket.on("receive", (color) => {
        console.log(color);
        cb(color);
    });
}
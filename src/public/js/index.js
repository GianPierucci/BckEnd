const serverSocket = io("http://localhost:8080/")

serverSocket.emit("mensaje", "holaa a a")
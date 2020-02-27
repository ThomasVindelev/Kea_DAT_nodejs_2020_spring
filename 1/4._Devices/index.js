const app = require("express")();

let devices = [
    {id: 1, type: "Smartphone"},
    {id: 2, type: "Laptop"}
]

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server")
    }
    console.log("Server running on port", server.address().port)
})

app.get("/", (req, res) => {
    const info = {
        "info": "This API handles information requests about new age technology like personal computers and smartphones",
    }
    return res.send(info)
})

app.get("/device/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id))
    return res.send({ device: device })
})

app.get("/devices", (req, res) => {
    const dvs = Object.assign({}, devices)
    // return res.send(dvs)
    return res.send({ devices: devices })
})
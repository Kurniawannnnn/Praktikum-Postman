const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
 
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
 
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

//PRAKTIKUM 1

// end-point "/persegi" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body
    let sisi = Number(req.body.sisi) //mengamil nilai lebar dari body
    let panjanglebar = Number(req.body.panjanglebar) //mengamil nilai lebar dari body
    let panjangtinggi = Number(req.body.panjangtinggi) //mengamil nilai lebar dari body
    let lebartinggi = Number(req.body.lebartinggi) //mengamil nilai lebar dari body
 
    let luas = 2 * (panjanglebar + panjangtinggi + lebartinggi)
    let volume = panjang * lebar * tinggi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        luaspermukaan: luas,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/persegi" dengan method POST
app.post("/limas", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body
    let alas = Number(req.body.alas) // mengamil nilai lebar dari body
    let sisi = Number(req.body.sisi) //mengamil nilai lebar dari body
    let luasalas = Number(req.body.luasalas) //mengamil nilai lebar dari body
    let jumlah = Number(req.body.jumlah) //mengamil nilai lebar dari body
 
    let luas = luasalas * jumlah
    let volume = 1/3 * luasalas * tinggi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        luaspermukaan: luas,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/persegi" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body
    let alas = Number(req.body.alas) // mengamil nilai lebar dari body
    let sisi = Number(req.body.sisi) //mengamil nilai lebar dari body
    let panjanglebar = Number(req.body.panjanglebar) //mengamil nilai lebar dari body
    let panjangtinggi = Number(req.body.panjangtinggi) //mengamil nilai lebar dari body
    let lebartinggi = Number(req.body.lebartinggi) //mengamil nilai lebar dari body
    let phi = Number(req.body.phi) //mengamil nilai lebar dari body
    let jarijari = Number(req.body.jarijari) //mengamil nilai lebar dari body
 
    let luas = 2 * phi * jarijari * (jarijari * tinggi)
    let volume = phi * jarijari * jarijari * tinggi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        luaspermukaan: luas,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/persegi" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body
    let alas = Number(req.body.alas) // mengamil nilai lebar dari body
    let sisi = Number(req.body.sisi) //mengamil nilai lebar dari body
    let panjanglebar = Number(req.body.panjanglebar) //mengamil nilai lebar dari body
    let panjangtinggi = Number(req.body.panjangtinggi) //mengamil nilai lebar dari body
    let lebartinggi = Number(req.body.lebartinggi) //mengamil nilai lebar dari body
 
    let luas = 2 * panjangtinggi * panjanglebar * lebartinggi
    let volume = sisi * sisi * sisi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        luaspermukaan: luas,
        volume: volume
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//PRAKTIKUM 2

// endpoint "/profil/nama/umur" dengan method GET
app.get("/convert/celcius/:input", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let input = Number(req.params.input) // mengambil nilai pada parameter age
    
    let reamur = 4/5 * input
    let fahrenheit = (input * 9/5) + 32 
    let kelvin = input + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius: input,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin,
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/profil/nama/umur" dengan method GET
app.get("/convert/reamur/:input", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let input = Number(req.params.input) // mengambil nilai pada parameter age
    
    let celcius = 5/4 * input
    let fahrenheit = (9/4 * input) + 32
    let kelvin = (5/4 * input) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        reamur: input,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin,
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/profil/nama/umur" dengan method GET
app.get("/convert/kelvin/:input", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let input = Number(req.params.input) // mengambil nilai pada parameter age
    
    let celcius = input - 273
    let reamur = 4/5 * (input - 273)
    let fahrenheit = (input - 273.15) * 9/5 + 32

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        kelvin: input,
        result: {
            celcius: celcius,
            fahrenheit : fahrenheit,
            reamur: reamur,
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// endpoint "/profil/nama/umur" dengan method GET
app.get("/convert/fahrenheit/:input", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let input = Number(req.params.input) // mengambil nilai pada parameter age
    
    let celcius = 5/9 * (input - 32)
    let reamur = 4/9 * (input - 32)
    let kelvin = (32 - 32) * 5/9 + 273.15 

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        fahrenheit: input,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//PRAKTIKUM 3
app.post("/decimal", (req, res) => {
    let bilangan = Number(req.body.bilangan)
    let biner = bilangan.toString(2)
    let octal = bilangan.toString(8)
    let hexadecimal = bilangan.toString(16)

    let response = {
        decimal: bilangan,
        result: {
            biner: biner,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})

app.post("/biner", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)

    let response = {
        biner: bilangan,
        result: {
            decimal: decimal,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }
    res.json(response)
})

app.post("/octal", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 8)
    let biner = decimal.toString(2)
    let hexadecimal = decimal.toString(16)

    let response = {
        octal: bilangan,
        result: {
            decimal: decimal,
            biner: biner,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})

app.post("/hexadecimal", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 16)
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)

    let response = {
        hexadecimal: bilangan,
        result: {
            decimal: decimal,
            biner: biner,
            octal: octal
        }
    }

    res.json(response)
})


//PRAKTIKUM 4

// endpoint "/test" dengan method GET
app.post("/bmi", (req, res) => {

    let beratBadan = Number(req.body.beratBadan)
    let tinggiBadan = Number(req.body.tinggiBadan)
    let bmi = beratBadan / (tinggiBadan * tinggiBadan)
    let status = ``
        if (bmi < 18.5) {
            status = `kurang gizi`
        } else if (bmi > 18.5 && bmi < 24.9){
            status = `Normal(ideal)`
        }else if (bmi > 25.0 && bmi < 29.9){
            status = `Gemuk`
        }else if (bmi > 30.0){
            status = `Obesitas`
        }

        let response = {
            beratBadan: beratBadan,
            tinggiBadan: tinggiBadan,
            bmi: bmi,
            status: status
        }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
    
})

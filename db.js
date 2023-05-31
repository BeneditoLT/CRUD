import mysql from "mysql"

export const db = mysql.createConnection({

    host: "172.17.0.2",
    user: "root",
    passwort: "lucas123",
    database: "crud"
})
const data = require('./data.json')
const express = require('express')
const app = express()
const fs = require("fs")
const db = require("./db/data.json")



app.get('/', (req, res) => {

    const amountSplitter = (name) => {
        let A = 0
        let B = 0
        let C = 0
        let D = 0
        let E = 0
        let debitor_A = 0
        let debitor_B = 0
        let debitor_C = 0
        let debitor_D = 0
        let debitor_E = 0
        for (let i = 0; i < data.length; i++) {
            if(data[i].Person === name){
                if (name === 'A'){
                    A += data[i].Expense
                    totalPerson = data[i].Split_between.length
                    let contri = data[i].Expense/totalPerson
                    for (const c of data[i].Split_between) {
                        if (c === 'B'){
                            debitor_B += contri
                        }
                        else if (c === 'C'){
                            debitor_C += contri
                        }
                        else if (c === 'D'){
                            debitor_D += contri
                        }
                        else if (c === 'E'){
                            debitor_E += contri
                        }
                    }
                }
                else if (name === 'B'){
                    B += data[i].Expense
                    totalPerson = data[i].Split_between.length
                    let contri = data[i].Expense/totalPerson
                    for (const c of data[i].Split_between) {
                        if (c === 'A'){
                            debitor_A += contri
                        }
                        else if (c === 'C'){
                            debitor_C += contri
                        }
                        else if (c === 'D'){
                            debitor_D += contri
                        }
                        else if (c === 'E'){
                            debitor_E += contri
                        }
                    }
                }
                else if (name === 'C'){
                    C += data[i].Expense
                    totalPerson = data[i].Split_between.length
                    let contri = data[i].Expense/totalPerson
                    for (const c of data[i].Split_between) {
                        if (c === 'B'){
                            debitor_B += contri
                        }
                        else if (c === 'A'){
                            debitor_A += contri
                        }
                        else if (c === 'D'){
                            debitor_D += contri
                        }
                        else if (c === 'E'){
                            debitor_E += contri
                        }
                    }
                }
                else if (name === 'D'){
                    D += data[i].Expense
                    totalPerson = data[i].Split_between.length
                    let contri = data[i].Expense/totalPerson
                    for (const c of data[i].Split_between) {
                        if (c === 'B'){
                            debitor_B += contri
                        }
                        else if (c === 'C'){
                            debitor_C += contri
                        }
                        else if (c === 'A'){
                            debitor_A += contri
                        }
                        else if (c === 'E'){
                            debitor_E += contri
                        }
                    }
                }
                else if (name === 'E'){
                    E += data[i].Expense
                    totalPerson = data[i].Split_between.length
                    let contri = data[i].Expense/totalPerson
                    for (const c of data[i].Split_between) {
                        if (c === 'B'){
                            debitor_B += contri
                        }
                        else if (c === 'C'){
                            debitor_C += contri
                        }
                        else if (c === 'D'){
                            debitor_D += contri
                        }
                        else if (c === 'A'){
                            debitor_A += contri
                        }
                    }
                }
            }
        }
        // console.log('A Total Expense: ', A)
        // console.log('B Total Expense: ', B)
        // console.log('C Total Expense: ', C)
        // console.log('D Total Expense: ', D)
        // console.log('E Total Expense: ', E)
        // console.log('***********************')
        // console.log('***********************')
        // console.log('A Has To Give: ',debitor_A)
        // console.log('B Has To Give: ',debitor_B)
        // console.log('C Has To Give: ',debitor_C)
        // console.log('D Has To Give: ',debitor_D)
        // console.log('E Has To Give: ',debitor_E)
        // console.log('***********************')
        // console.log('***********************')
        return newData = [{
            'A Total Expense': A,
            'B Total Expense': B,
            'C Total Expense': C,
            'D Total Expense': D,
            'E Total Expense': E,
            'A Has To Give': debitor_A,
            'B Has To Give': debitor_B,
            'C Has To Give': debitor_C,
            'D Has To Give': debitor_D,
            'E Has To Give': debitor_E,
        }]
        
    }
    

    let total_friends = 'ABCDE'
    
    for (const name of total_friends){
        amountSplitter(name)
        db.push(newData)
        let json = JSON.stringify(newData);
        fs.writeFile('./db/data.json', json, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Success")
            }
        })
    }
    res.send('done')
})

app.listen('3000', () => {
    console.log('server started')
})
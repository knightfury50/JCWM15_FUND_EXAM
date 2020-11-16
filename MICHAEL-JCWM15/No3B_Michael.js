let data = [
    {
        id : 1,
        username : "alee",
        email : "alee@gmail.com",
        role : "admin"
    },
    {
        id : 2,
        username : "jennie",
        email : "jenniebp@gmail.com",
        role : "user"
    },
    {
        id : 3,
        username : "elsa",
        email : "elsa@disney.com",
        role : "user"
    }
]

class formatdata {
    constructor (id, username, email, role) {
        this.id = id,
        this.username = username,
        this.email = email,
        this.role = role
    }
}

function UsersData (index) {
    let table = document.getElementById("formusers")
    let tbody = table.getElementsByTagName("tbody")[0]
    let tr = ""

    for (let i = 0 ; i < data.length ; i++) {
        if (index === i) {
            tr += `
                <tr>
                    <td> # </td>
                    <td> <input id = "editusername" type = "text" value = "${data[i].username}"> </td>
                    <td> <input id = "editemail" type = "text" value = "${data[i].email}"> </td>
                    <td> 
                        <select id = "editrole">
                        <option value = "user"> user </option>
                        <option value = "admin"> admin </option>
                        </select>
                    </td>
                    <td> 
                       <button onclick="buttonsave(${i})">SAVE</button>
                       <button onclick="buttoncancel(${i})">CANCEL</button>
                        
                    </td>
                </tr>
            `
        } else {
            tr += `
                <tr>
                    <td> ${i+1} </td>
                    <td> ${data[i].username} </td>
                    <td> ${data[i].email} </td>
                    <td> ${data[i].role} </td>
                    <td> 
                        <button onclick="buttonedit(${i})">EDIT</button>
                        <button onclick="buttondelete(${i})">DELETE</button>
                    </td>
                </tr>
            `
        }
    }
    tbody.innerHTML = tr
}
UsersData()

function buttonadd () {
    let input = document.getElementById("addusers")
    let role = document.getElementById('role')
    let username = input["username"].value
    let email = input["email"].value

    if (username==="" || email==="") {
        alert("input masih kosong")
    } else {
        data.push( new formatdata(
            data.length+1,
            input["username"].value,
            input["email"].value,
            role.value
        ))
        UsersData()
        input["username"].value = ""
        input["email"].value = ""
    }
}

function buttonedit (index) {
    UsersData(index)
}

function buttondelete (index) {
    data.splice(index,1)
    UsersData()
}

function buttonsave (index) {
    let editusername = document.getElementById("editusername")
    let editemail = document.getElementById("editemail")
    let editrole = document.getElementById("editrole")

    data[index].username = editusername.value
    data[index].email = editemail.value
    data[index].role = editrole.value
    UsersData()
}

function buttoncancel() {
    UsersData()
}
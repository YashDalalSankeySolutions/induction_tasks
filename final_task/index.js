// const p = document.querySelector("#name");
// console.log(p.innerHTML)

const userId = document.querySelector("#empId");
const userName = document.querySelector("#name");
const userAge = document.querySelector("#age");
const userEmail = document.querySelector("#email");
const userImage = document.querySelector("#image")
const userDesignation = document.querySelector("#designation");
let userGender = "";

let userId_modal = ""
let userName_modal = ""
let userAge_modal = ""
let userEmail_modal = ""
let userImage_modal = ""
let userDesignation_modal = ""


let idbeforeUpdate="";
let usersData=[{
    id:1,
    name:"abc",
    age:45,
    email:"hded@dncjdn.co",
    image:"C:/Users/Admin/Desktop/tasks/final_task/images/profile1.jpg",
    gender:"other",
    designation:"Desiner"
},
{
    id:2,
    name:"xyz",
    age:56,
    email:"ed@ddn.in",
    image:"C:/Users/Admin/Desktop/tasks/final_task/images/profile3.jpg",
    gender:"male",
    designation:"Developer"
}];
// let usersData =[]
let deletedData=[];

function addData(){
    // console.log(typeof(userId.value))
    // console.log(typeof(userName.value))
    // console.log(typeof(userAge.value))
    // console.log(typeof(userEmail.value))
    // console.log(typeof(userImage.value))
    // console.log('gender',typeof(userGender))
    // console.log(typeof(userDesignation.value))
    userGender = document.querySelector("input[name=gender]:checked");
    let data = {
        "id": userId.value,
        "name":userName.value,
        "age":+userAge.value,
        "email":userEmail.value,
        "image":userImage.value,
        "gender":userGender.value,
        "designation":userDesignation.value
    }
    console.log("ppppppppp",typeof(userId.value))
    if(validate(data,"",false)===true){
        usersData.push(data)
    }else{
        console.log("error in adding data")
    }
    // console.log("submit",typeof(userId.value))
    showData()
    // clearData()
    console.log("userdata",usersData)
}
function clearData(){
    userId.value=""
    userName.value=""
    userAge.value=""
    userEmail.value=""
    userImage.value=""
    userDesignation.value=""
    document.getElementById("male").checked=true
}

// validation
function validate(data,initialId,isModal){
    // console.log("validate",typeof(data.id))
        // let value = idValidation(data.id,initialId)
        // console.log('vlaue',value)
        // console.log("idValidation(data.id,initialId)",idValidation(data.id,initialId,false))
        // console.log("nameValidation(data.name,isModal)",nameValidation(data.name,isModal))
        // console.log("ageValidation(data.age,isModal)",ageValidation(data.age,isModal))
    let r = idValidation(data.id,initialId,isModal) && nameValidation(data.name,isModal) && ageValidation(data.age,isModal) && emailValidation(data.email,isModal) && imageValidation(data.image,isModal) && designationValidation(data.designation,isModal);
    console.log("r",r)
    return r;
}
function idValidation(id,initialId,isModal){
    console.log("ismodal",isModal)
    console.log("initialId",initialId)
    let selector = ''
    if(isModal===true){
        selector="#idError_modal"
    }else{
        selector="#idError"
    }
    console.log("selector",selector)
    // empty field check
    // let id = userId.value;
    // console.log("id",typeof(id))
    // console.log("id",id,"init",initialId)
    console.log("curr",id)
    let flag = false
    
    if(id===""){
        document.querySelector(selector).innerHTML="Please enter id";
    }
    else {

        if(id>0){
            if(id!==initialId || initialId===""){
                let result = usersData.find(data=>data.id===id)
                console.log('result',result)
                let deletedResult = deletedData.find(data=> data.id===id)
                console.log('deletedResult',deletedResult)
                if(result===undefined && deletedResult===undefined) {
                    console.log('rr');
                    document.querySelector(selector).innerHTML="";
                    // return true;
                    flag= true
                    console.log('fls',flag)
                }else{
                    flag=false;
                    document.querySelector(selector).innerHTML="Invalid Id";
                }
            }else{
                document.querySelector(selector).innerHTML="";
                    flag= true;
            }
        }
        else{
            flag=false;
            document.querySelector(selector).innerHTML="Invalid Id";
        }
        return flag
    }
}

function nameValidation(name,isModal){
    // let name = userName.value;
    console.log("name",name)
    let selector = isModal?"#nameError_modal":"#nameError"
    if(name!==""){
        console.log("name check")
        let pattern = /^[a-zA-Z ]+$/;
        let res = pattern.test(name)
        console.log("res",res)
        if(res===false){
            
            document.querySelector(selector).innerHTML="Name Should contain only Alphabets"
        }else{
            document.querySelector(selector).innerHTML=""
        }
        return res;
    }
    // console.log("pppp")
    document.querySelector(selector).innerHTML="Please enter Name"
    return false;
}
function ageValidation(age,isModal){
    let flag = false;
    let selector = isModal?"#ageError_modal":"#ageError"
    // let age = userAge.value;
    if(age!=="" && age>=18 && age<=60){
        console.log("age check",age)
        document.querySelector(selector).innerHTML="";
        flag= true;
    }else{
        document.querySelector(selector).innerHTML="Invalid Age";
    }
    // console.log("kkkk")
    
    return flag
}

function emailValidation(email,isModal){
    let selector = isModal?"#emailError_modal":"#emailError"
    // let email = userEmail.value;
    if(email!==''){
        console.log("email check")
        let pattern = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const res = pattern.test(email)
        if(res===false){
            document.querySelector(selector).innerHTML="Invalid Email";
        }else{
            document.querySelector(selector).innerHTML=""
        }
        return res;
    }
    document.querySelector(selector).innerHTML="Please add Email"
    return false;
}
function imageValidation(imageUrl,isModal){
    let selector = isModal?"#imageError_modal":"#imageError"
    console.log("imageurl",imageUrl)
    if(imageUrl!==''){
        console.log("image check")
        document.querySelector(selector).innerHTML=""
        return true
    }
    console.log("ppp")
    document.querySelector(selector).innerHTML="Please add Image Url"
    return false
}
function designationValidation(designation,isModal){
    let selector = isModal?"#designationError_modal":"#designationError"
    if(designation!==''){
        console.log("designation check")
        document.querySelector(selector).innerHTML=""
        return true
    }
    document.querySelector(selector).innerHTML="Please Select Designation"
    return false
}

// show Data
function showData(){
    // console.log("data")
    let element=""
    let headingElement = ""
    let rowElement = ""
    // let viewCode = #00aaee;
    headingElement=`<tr id="table_heading">
    <th>Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>Email</th>
    <th>Gender</th>
    <th>Designation</th>
    <th>Action</th>
    </tr>`

    rowElement=``
    usersData.forEach(user=>{
        // console.log("---",typeof(user.id))
        rowElement+=`<tr class="table_content">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.designation}</td>
            <td> 
                <button class="viewbtn btn" value=${user.id} onclick=view(this)>View</button>    
                <button class="editbtn btn" value=${user.id} onclick=edit(this)>Edit</button>    
                <button class="deletebtn btn" value=${user.id} onclick=deleteUser(this)>Delete</button>    
            </td>
        </tr>
        `
    })
    element += headingElement;
    element += rowElement;
// console.log("element",element)
    document.querySelector("#table").innerHTML = element;
}

function useModal(content){
    let modal = document.querySelector("#myModal");
    modal.style.display = "block"
    
    let modalContent = document.querySelector("#modalContent");
    modalContent.innerHTML = content
    
    let close = document.querySelector("#close")
    close.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event){
        if(event.target=== modal){
            modal.style.display="none"
        }
    }
}

// Actions
function view(btnObject){
    // console.log("userId",typeof(btnObject))
    // console.log("btn",typeof(btnObject.value))
    const user = usersData.find(user => user.id == btnObject.value)
    // console.log("user",user);
    let modalContent = `
    <span id="close">&times;</span>
    <div class="heading_modal">Employee Details</div>
    <div id="profile_modal_container">
        <div id="profile_image_container">
            <img src="${user.image}" alt="profile image" id="profile_image"/>
        </div>
        <div id="profile_details">
            <div>
                <span class="profile_field">Id: </span> 
                <span class="profile_value">${user.id}</span>
            </div>
            <div>
                <span class="profile_field">Name: </span>
                <span class="profile_value"> ${user.name}</span>
            </div>
            <div>
                <span class="profile_field">Age: </span>
                <span class="profile_value">${user.age}</span>
             </div>
            <div>
                <span class="profile_field">Email: </span> 
                <span class="profile_value">${user.email}</span>
            </div>
            <div>
                <span class="profile_field">Gender: </span>
                <span class="profile_value">${user.gender}</span>
             </div>
            <div>
                <span class="profile_field">Designation: </span> 
                <span class="profile_value">${user.designation}</span>
            </div>
        </div>
    </div>
    `
    useModal(modalContent) 
}

function edit(btnObject){
    
    
    
    const user = usersData.find(user => user.id == btnObject.value)
    let content = `
    <span id="close">&times;</span>
    <div class="heading_modal">Update Details</div>
    <div class="formRow">
        <div>
            <label for="empId_modal" class="fieldsLabel">Id</label>
            <input type="number" id="empId_modal" class="fieldsInput" name="empId_modal" value=${user.id}>
            <p id="idError_modal" class="error"></p>
            </div>
        <div>
            <label for="name_modal" class="fieldsLabel">Name:</label>
            <input type="text" id="name_modal" class="fieldsInput" name="name_modal" value="${user.name}">
            <p id="nameError_modal" class="error"></p>
        </div>
    </div>
    <div class="formRow">
        <div>
            <label for="age_modal" class="fieldsLabel">Age</label>
            <input type="number" id="age_modal" class="fieldsInput" name="age_modal" value=${user.age}>
            <p id="ageError_modal" class="error"></p>
        </div>
        <div>
            <label for="email_modal" class="fieldsLabel">EmailId</label>
            <input type="email" id="email_modal" class="fieldsInput" name="email_modal" value="${user.email}">
            <p id="emailError_modal" class="error"></p>
        </div>
    </div>
    <div class="formRow">
        <div>
            <label for="image_modal" class="fieldsLabel">Profile Image Url</label>
            <input type="url" id="image_modal" class="fieldsInput" name="image_modal"  value=${user.image}>
            <p id="imageError_modal" class="error"></p> 
        </div>
        <div id="genderContainer_modal">
            <div id="gender_modal">
                <label for="gender_modal" class="fieldsLabel">Gender</label>
            </div>
            <div>
                <input type="radio" id="male_modal" name="gender_modal" value="male" >
                <label for="male_modal">Male</label><br>
                <input type="radio" id="female_modal" name="gender_modal" value="female">
                <label for="female_modal">Female</label><br>  
                <input type="radio" id="other_modal" name="gender_modal" value="other">
                <label for="other_modal">Other</label>
            </div>
            
        </div>
    </div>
    <div class="formRow">
        <div>
            <label for="designation_modal" class="fieldsLabel">Designation</label>
            <select name="designation_modal" id="designation_modal" class="fieldsInput">
                <option value="Manager" >Manager</option>
                <option value="Tester" >Tester</option>
                <option value="Desiner">Desiner</option>
                <option value="Developer" >Developer</option>
                <option value="Architect">Architect</option>
            </select>
            <p id="designationError_modal" class="error"></p>
        </div>
        <div id="forbtnContainer_modal">
            <button type=submit onClick=updateUser(${user.id}) id="updatebtn" class="formbtn">update</button>
        </div>
    </div>
    `
    console.log("user",typeof(user.id))

    useModal(content)
    const userId_modal_before = document.querySelector("#empId_modal").value;
    console.log(userId_modal_before)
    document.querySelector(`#${user.gender}_modal`).checked =true
    document.querySelector("#designation_modal").value = user.designation

    userId_modal = document.querySelector("#empId_modal");
    userName_modal = document.querySelector("#name_modal");
    userAge_modal = document.querySelector("#age_modal");
    userEmail_modal = document.querySelector("#email_modal");
    userImage_modal = document.querySelector("#image_modal")
    userDesignation_modal = document.querySelector("#designation_modal");
    console.log("id",userId_modal.value)
    idbeforeUpdate=userId_modal.value;

    // Modal event listners
    userId_modal.addEventListener('blur',event=>{
        console.log("idbeforeUpdate",idbeforeUpdate)
        idValidation(+userId_modal.value,idbeforeUpdate,true)
    })
    userName_modal.addEventListener('keyup',event=>{
        nameValidation(userName_modal.value,true)
    })
    userName_modal.addEventListener('blur',event=>{
        nameValidation(userName_modal.value,true)
    })
    userAge_modal.addEventListener('blur',event=>{
        ageValidation(+userAge_modal.value,true)
    })
    userEmail_modal.addEventListener('blur',event=>{
        emailValidation(userEmail_modal.value,true)
    })
    userDesignation_modal.addEventListener("change",event=>{
        designationValidation(userDesignation_modal.value,true)
    })
}

function updateUser(userIdBeforeUpdate){
    idbeforeUpdate = userIdBeforeUpdate
    console.log("idbefore",idbeforeUpdate)
    console.log("kk",userId_modal)
    const userDesignation_modal = document.querySelector("#designation_modal");
    usersData.forEach(user=>{
        // console.log("before",typeof(userIdBeforeUpdate),"id",typeof(user.id))
        if(userIdBeforeUpdate===user.id){
            let data = {
                id: +userId_modal.value,
                name:userName_modal.value,
                age: +userAge_modal.value,
                email:userEmail_modal.value,
                image:userImage_modal.value,
                gender:document.querySelector("input[name=gender_modal]:checked").value,
                designation : userDesignation_modal.value,
            }
            console.log("data",data)
            if(validate(data,userIdBeforeUpdate,true)===true){
                user.id= +userId_modal.value;
                user.name=userName_modal.value;
                user.age= +userAge_modal.value;
                user.email=userEmail_modal.value;
                user.image=userImage_modal.value;
                user.gender = data.gender
                user.designation = userDesignation_modal.value;
                console.log(usersData)
                let modal = document.querySelector("#myModal");
                modal.style.display = "none";
                showData();
            }else{
                console.log("error")
            }
        }
    })
    
    
    
}

function deleteUser(btnObject){
    // console.log("delete",btnObject.value)
    // let userIndex = usersData.indexOf({...,"id":btnObject.value});
    let newData = usersData.filter(user=>{
        if(user.id == btnObject.value){
            deletedData.push(user);
            return false
        }
        return true;
    })
    usersData=newData
    // console.log("index",userIndex)
    console.log("deleteddata",deletedData)
    console.log("usersdata",usersData)
    showData()
}


// event Listeners
window.addEventListener('load', showData, false);
userId.addEventListener('blur',event=>{
    idValidation(+userId.value,"",false)
})
userName.addEventListener('keyup',event=>{
    nameValidation(userName.value,false)
})
userName.addEventListener('blur',event=>{
    nameValidation(userName.value,false)
})
userAge.addEventListener('blur',event=>{
    ageValidation(+userAge.value,false)
})
userEmail.addEventListener('blur',event=>{
    emailValidation(userEmail.value,false)
})
userDesignation.addEventListener("change",event=>{
    designationValidation(userDesignation.value,false)
})





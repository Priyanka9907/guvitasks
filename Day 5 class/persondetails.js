class personDetails{
    constructor(firstname, lastname,dob,qualification,place){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob      = dob;
        this.qualification = qualification;
        this.place = place;
    }
    getFirstandLastname(){
        return {"firstname" : this.firstname ,
            "lastname": this.lastname}
    }
}
const tinkuu = new personDetails("tinku","rosy","12/4/1989","BE","CBE")
console.log(tinkuu.getFirstandLastname())
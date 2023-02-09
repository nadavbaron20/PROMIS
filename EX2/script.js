class GatherInputs {
    firstName;
    lastName;
    city;
    book;
    pet;
    constructor() {
        this.firstName = document.getElementById('firstName').value;
        this.lastName = document.getElementById('lastName').value;
        this.city = document.getElementById('city').value;
        this.book = document.getElementById('book').value;
        this.pet = document.getElementById('pet').value;
    }
}

class LoadAndSave {
    constructor() {}
    load() {
        let formObject = JSON.parse(localStorage.getItem('formObject'));
        if (formObject != null) {
            document.getElementById('firstName').value = formObject.firstName;
            document.getElementById('lastName').value = formObject.lastName;
            document.getElementById('city').value = formObject.city;
            document.getElementById('book').value = formObject.book;
            document.getElementById('pet').value = formObject.pet;
        }
    }
    save(formObject) {
        localStorage.setItem('formObject',JSON.stringify(formObject));
    }
}

let newLoadAndSave = new LoadAndSave();
newLoadAndSave.load();

let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let gatherInformation = new GatherInputs();
    newLoadAndSave.save(gatherInformation);
});
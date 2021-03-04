class User {
    //private fileds drom 2015
    #_username;
    #_email;

    //create getter method
    get UserName(){
        return this.#_username
    }
    get Email (){
        return this.#_email
    }

    //Create setter method
    set UserName (newUserName){
        if(newUserName &&  newUserName.length === 0){
            throw new Error ('User name must be  at least 1 char.')
        }
        this.#_username = newUserName;

    }
    set UserEmail (newUserEmail){
        if(newUserEmail &&  newUserEmail.length === 0){
            throw new Error ('Email must be  at least 1 char.')
        }
        this.#_email= newUserEmail;

    }
}

const userBob = new User();

console.log(userBob.UserName = 'Arman');
console.log(userBob.UserEmail = 'arman@gmail.com');
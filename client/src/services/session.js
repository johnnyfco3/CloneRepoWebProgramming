import router from '../router'

const session = {
    user: null,
    messages: [],
    toRoute: '/feed',
    Login(email,password){
        this.user = {
            FirstName: 'Johnny',
            LastName: email,
            Password: password,
            id: 613,
        } 
        router.push(this.toRoute);
    }
};

export default session;
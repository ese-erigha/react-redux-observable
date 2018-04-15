const auth = {

    isAuthenticated: ()=>{
        return true;
    },
    login: (credentials,cb)=>{

        setTimeout(cb,10);

    },
    logout: (cb)=>{
        setTimeout(cb,10)
    }
}

export default auth;
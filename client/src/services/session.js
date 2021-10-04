const session = {
    user: null,
    messages: [] 
};

export default session;

export function Login(){
    session.user = {
        FirstName: 'Johnny',
        LastName: 'Tejada',
        id: 613,
    }
}
class Validation{
   static number=(number)=>{
        const pattern=/^[0-9]{1,}$/
        return(`${pattern.test(number)}`)
    }
    static email=(email)=>{
        const pattern=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        return(`${pattern.test(email)}`)
    }
}




export default Validation
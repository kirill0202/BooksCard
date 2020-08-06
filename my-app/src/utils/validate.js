export const required = value =>{
    if(value) return null
     return 'Field is required'
}
export const LengthCreator = (Length) => (value) => {
    if(value.length < Length) return `Min length is ${Length} symbols`;
    return null
}
export  const isMatchPassword = (value, props) => {
    console.log(props)
    const {password__repeat, password} = props;
    if(password__repeat !== password){
        return `passwords don't match`
    }
}
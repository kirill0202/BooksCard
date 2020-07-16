export const required = value =>{
    if(value) return null
     return 'Field is required'
}
export const LengthCreator = (Length) => (value) => {
    if(value.length < Length) return `Min length is ${Length} symbols`;
    return null
}
export const convertTime = (time) => {
    const date = new Date(time);
   // date.toLocaleDateString(): This formats the date part of the Date object in a way that's 
   //appropriate for the user's 
    //locale (like "MM/DD/YYYY" or "DD/MM/YYYY").
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return formattedDate;
}

//address.slice(0, 4): This takes the first four characters of the address. 
//For example, if the address is 0x1234567890abcdef, this part would return 0x12
export const shortAddress  = (address) => `${address?.slice(0,4)}...${address?.slice(address.length-4)}`;
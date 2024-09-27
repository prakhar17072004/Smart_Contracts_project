export const convertTime = ()=>{
    const date = new Date(time);
    const fomattedDate = `${date.toLocaleDateString()} ${date.toLocaleDateString()}`;
    return formattedDate;
};
 

export const shortenAddress =(address)=>{
    `${address?.slice(0,4)}...${address?.slice(address.length-4)}`;
}
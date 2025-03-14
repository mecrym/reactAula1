
function Food(){

    //variaveis
    const food1= "Torta";
    const food2= "Yakisoba"
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food
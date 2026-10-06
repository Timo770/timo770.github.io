let hp = 100;

document.querySelector("button").addEventListener("click", function() {
    handleSubmit()
})

function attack(){

    const damage = Math.floor(Math.random() * 16) + 5;
    const chance = Math.random();

    console.log(damage);
    console.log(chance);

    if(chance > 0.9){
        return "The attack missed";
    }else{

        hp = hp - damage;

        console.log(hp);

        if(hp <= 0){
            hp = 0;
            return "It fainted!";
        }else{
            return damage + " damage! HP: " + hp;
        }
    }
}

function handleSubmit(){
    document.querySelector("#result").innerHTML = attack();
    document.querySelector("#hp").innerHTML = "HP: " + hp;
}


// // Hero Moves
// let Slash = {
//     attackPower: 25,
//     accuracy: 100,
//     element: 'none',
//     target: 'single',
//     mpCost: 0,
//     mpRestoration: 10
// };

// let ZeropointSlash = {
//     attackPower: 75,
//     accuracy: 90,
//     element: 'water',
//     target: 'single',
//     mpCost: 20
// };

// let Earthshatter = {
//     attackPower: 200,
//     accuracy: 70,
//     element: 'none',
//     target: 'all',
//     mpCost: 80
// };

// let Restore = {
//     attackPower: 0,
//     accuracy: 100,
//     element: 'none',
//     target: 'single',
//     mpCost: 40
// };

// // Enemies
// let Shaboingboing = {
//     name: 'Shaboingboing',
//     health: 10,
//     element: 'wind',
//     attackPower: 60
// }

// let Slime = {
//     name: 'Slime',
//     health: 80,
//     element: 'water',
//     attackPower: 20
// }

// let Bronkoid = {
//     name: 'Bronkoid',
//     health: 200,
//     element: 'earth',
//     attackPower: 100
// }

// heroMoves = [Slash, ZeropointSlash, Earthshatter, Restore]
// enemiesArray = [Shaboingboing, Slime, Bronkoid]







// function attackCalculations() {
//     //Chooses a random move from the array
//     randomMoveIndex = Math.floor(Math.random() * 3);
//     playerValue = heroMoves[randomMoveIndex].attackPower;

//     //chooses a random enemy from the array
//     randomEnemyIndex = Math.floor(Math.random() * 3);
//     oppValue = enemiesArray[randomEnemyIndex].attackPower;
//     oppName = enemiesArray[randomEnemyIndex].name;
//     oppHealth = enemiesArray[randomEnemyIndex].health;

//     //Sets random numbers for trigger values
//     missTrigger = Math.floor(Math.random() * 100);
//     critTrigger = Math.floor(Math.random() * 100);

//     attackHit = true;
//     attackCrit = false;

//     //Decides if critcal hit
//     if (critTrigger <= 5) {
//         attackCrit = true;
//     }

//     // Decides if attack hits, crits, fails or misses
//     if (missTrigger <= 10) {
//         attackHit = false;
//         console.log(oppName + "'s attack missed!\n");
//         console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
//     }
//     else if (playerValue > oppValue && oppHealth > playerValue) {
//         attackHit = false;
//         console.log(oppName + "'s attack failed! " + (playerValue - oppValue) + " Damage was done to the " + oppName + "!!\n");
//         console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
//     }
//     else if (playerValue > oppValue && oppHealth < playerValue) {
//         attackHit = false;
//         console.log(oppName + "'s attack failed! " + (playerValue - oppValue) + " Damage was done to the " + oppName + " and it fainted!!\n");
//         console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
//     }
//     else if (attackCrit == false && oppValue > playerValue) {
//         console.log(oppName + "'s attack was succesful! Hero lost " + (oppValue - playerValue) + " health!\n");
//         console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
//     }
//     else {
//         console.log("Critcal Hit!! " + oppName + "'s attack was succesful! Hero lost " + oppValue + " health!\n");
//         console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");

//     }
//     return { missTrigger, attackHit, critTrigger }
// }

// //TESTING
// console.log("\n---- TESTING FUNCTIONS || LOOKING FOR 'MISS' FUNCTIONALITY----\n");
// let randomEnemyAttackPower = Math.floor(Math.random() * 100);
// let result = attackCalculations(randomEnemyAttackPower);

// while (result.missTrigger > 10) {
//     randomEnemyAttackPower = Math.floor(Math.random() * 100);
//     result = attackCalculations(randomEnemyAttackPower);
// }

// console.log("\n--- STARTING NEXT TEST || LOOKING FOR 'CRIT' FUNCTIONALITY----\n");

// while (result.critTrigger > 5) {
//     randomEnemyAttackPower = Math.floor(Math.random() * 100);
//     result = attackCalculations(randomEnemyAttackPower);
// }






const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function promptUser() {
    return new Promise((resolve, reject) => {
        rl.question('What is your heroes name?: ', (userInput) => {
            if (userInput.trim() === '') {
                console.log('You must provide a name.');
                resolve(promptUser()); // Call promptUser() recursively and resolve with its result
            } else {
                console.log('You entered:', userInput);
                rl.close();
                resolve(userInput); // Resolve with user input
            }
        });
    });
}

async function main() {
    try {
        const userInput = await promptUser();
        console.log('User input:', userInput);
        // Put your code here that depends on the user input

        // Hero Moves
        let Slash = {
            attackPower: 25,
            accuracy: 100,
            element: 'none',
            target: 'single',
            mpCost: 0,
            mpRestoration: 10
        };

        let ZeropointSlash = {
            attackPower: 75,
            accuracy: 90,
            element: 'water',
            target: 'single',
            mpCost: 20
        };

        let Earthshatter = {
            attackPower: 200,
            accuracy: 70,
            element: 'none',
            target: 'all',
            mpCost: 80
        };

        let Restore = {
            attackPower: 0,
            accuracy: 100,
            element: 'none',
            target: 'single',
            mpCost: 40
        };

        // Enemies
        let Shaboingboing = {
            name: 'Shaboingboing',
            health: 10,
            element: 'wind',
            attackPower: 60
        }

        let Slime = {
            name: 'Slime',
            health: 80,
            element: 'water',
            attackPower: 20
        }

        let Bronkoid = {
            name: 'Bronkoid',
            health: 200,
            element: 'earth',
            attackPower: 100
        }

        heroMoves = [Slash, ZeropointSlash, Earthshatter, Restore]
        enemiesArray = [Shaboingboing, Slime, Bronkoid]







        function attackCalculations() {
            //Chooses a random move from the array
            randomMoveIndex = Math.floor(Math.random() * 3);
            playerValue = heroMoves[randomMoveIndex].attackPower;

            //chooses a random enemy from the array
            randomEnemyIndex = Math.floor(Math.random() * 3);
            oppValue = enemiesArray[randomEnemyIndex].attackPower;
            oppName = enemiesArray[randomEnemyIndex].name;
            oppHealth = enemiesArray[randomEnemyIndex].health;

            //Sets random numbers for trigger values
            missTrigger = Math.floor(Math.random() * 100);
            critTrigger = Math.floor(Math.random() * 100);

            attackHit = true;
            attackCrit = false;

            //Decides if critcal hit
            if (critTrigger <= 5) {
                attackCrit = true;
            }

            // Decides if attack hits, crits, fails or misses
            if (missTrigger <= 10) {
                attackHit = false;
                console.log(oppName + "'s attack missed!\n");
                console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
            }
            else if (playerValue > oppValue && oppHealth > playerValue) {
                attackHit = false;
                console.log(oppName + "'s attack failed! " + (playerValue - oppValue) + " Damage was done to the " + oppName + "!!\n");
                console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
            }
            else if (playerValue > oppValue && oppHealth < playerValue) {
                attackHit = false;
                console.log(oppName + "'s attack failed! " + (playerValue - oppValue) + " Damage was done to the " + oppName + " and it fainted!!\n");
                console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
            }
            else if (attackCrit == false && oppValue > playerValue) {
                console.log(oppName + "'s attack was succesful! " + userInput + " lost " + (oppValue - playerValue) + " health!\n");
                console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");
            }
            else {
                console.log("Critcal Hit!! " + oppName + "'s attack was succesful! " + userInput + " lost " + oppValue + " health!\n");
                console.log("Player attack power: " + playerValue + "\nEnemy attack power: " + oppValue + "\nAccuracy: " + missTrigger + "\nAttack hit: " + attackHit + "\nCrit chance: " + (100 - critTrigger) + "\n---------------------------------------------------");

            }
            return { missTrigger, attackHit, critTrigger }
        }

        //TESTING
        console.log("\n---- TESTING FUNCTIONS || LOOKING FOR 'MISS' FUNCTIONALITY----\n");
        let randomEnemyAttackPower = Math.floor(Math.random() * 100);
        let result = attackCalculations(randomEnemyAttackPower);

        while (result.missTrigger > 10) {
            randomEnemyAttackPower = Math.floor(Math.random() * 100);
            result = attackCalculations(randomEnemyAttackPower);
        }

        console.log("\n--- STARTING NEXT TEST || LOOKING FOR 'CRIT' FUNCTIONALITY----\n");

        while (result.critTrigger > 5) {
            randomEnemyAttackPower = Math.floor(Math.random() * 100);
            result = attackCalculations(randomEnemyAttackPower);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();



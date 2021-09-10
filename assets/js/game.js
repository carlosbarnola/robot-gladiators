//Game States
//"WIN" - Player robot has defeated all enemy-robots
//      *Fight all enemy-robots
//      *Defeat each enemy-robot

//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//console.log(enemyNames.length);
//console.log(enemyNames, enemyAttack, enemyHealth)

var fight = function(enemyNames) {

  while(playerHealth > 0 && enemyHealth > 0) {

    //ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGTH' or 'SKIP' to choose.");

    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
        // if yes (true), leave fight
        if (confirmSkip) {
           
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
     }
 
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      );
    
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
        //award player money for win
        playerMoney = playerMoney + 20;
        //leave while() loop since enemy is dead
        break;
        } else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    
    // remove players's health bu subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //leave while() loop if player is dead
        break;
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }   
};


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName)
  }

  //for(var i = 0; i < enemyNames.length; i++) {
    // debugger; 
    //fight(enemyNames[i]);
//}

//fight();
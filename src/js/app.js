// TODO: write code here

console.log('app.js bundled');

class Character {
  constructor(attack, defence) {
    this.attack = attack;
    this.defence = defence;
    this.level = 0;
    this.health = 100;
  }

  levelUp() {
    this.level += 1;
    this.attack = 1.2 * this.attack;
    this.defence = 1.2 * this.defence;
    if (this.health !== 0) {
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }
}

class Bowerman extends Character {
  constructor() {
    super(25, 25);
  }
}

class Swordsman extends Character {
  constructor() {
    super(40, 10);
  }
}

class Magician extends Character {
  constructor() {
    super(10, 40);
  }
}

class Undead extends Character {
  constructor() {
    super(25, 25);
  }
}

class Zombie extends Character {
  constructor() {
    super(40, 10);
  }
}

class Daemon extends Character {
  constructor() {
    super(10, 40);
  }
}

const bowerman = new Bowerman();
bowerman.levelUp();
console.log(bowerman);

const swordsman = new Swordsman();
console.log(swordsman);

const magician = new Magician();
console.log(magician);

const undead = new Undead();
console.log(undead);

const zombie = new Zombie();
console.log(zombie);

const daemon = new Daemon();
console.log(daemon);

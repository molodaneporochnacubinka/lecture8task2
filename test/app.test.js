import {
  Bowerman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../src/js/app';

test('test Bowerman attack', () => {
  const bowerman = new Bowerman();
  bowerman.levelUp();
  expect(bowerman.attack).toBe(30);
});

test('test Swordsman defence', () => {
  const swordsman = new Swordsman();
  swordsman.levelUp();
  expect(swordsman.defence).toBe(12);
});

test('test Magician health', () => {
  const magician = new Magician();
  magician.health = 50;
  magician.levelUp();
  expect(magician.health).toBe(100);
});

test('test Undead dead', () => {
  const undead = new Undead();
  undead.health = 0;
  function levelUpForDead() {
    undead.levelUp();
  }
  expect(levelUpForDead).toThrowError('нельзя повысить левел умершего');
});

test('test Zombie level', () => {
  const zombie = new Zombie();
  zombie.levelUp();
  expect(zombie.level).toBe(1);
});

test('test Daemon 2 levelUp', () => {
  const daemon = new Daemon();
  daemon.levelUp();
  daemon.levelUp();
  expect(daemon.level).toBe(2);
});

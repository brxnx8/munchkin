import { Card } from "./carta";

export class CartasRepository {
    cartas: Card[];

    tiposPorta: string[];
    tiposTesouro: string[];
    
    constructor() {
        this.cartas = [];
        this.tiposPorta = ["Raça", "Classe", "Maldição", "Monstro"];
        this.tiposTesouro = ["SubirDeNivel", "Equipamento", "Poção"];
    }


    async loadData(path: string) {
        const data = [
            {
                "name": "1000 Gold Pieces",
                "description": "A valuable treasure worth 1000 gold pieces, perfect for bribing or buying your way to victory.",
                "imageCard": "src/assets/images/cardImages/1000GoldPieces.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "3872 Orcs",
                "description": "A massive horde of orcs. Beware of their overwhelming numbers!",
                "imageCard": "src/assets/images/cardImages/3872Orcs.jpeg",
                "tipo": "Monstro",
                "nivel": 10,
                "qtdTesouro": 3
            },
            {
                "name": "Amazon",
                "description": "A fierce warrior who won't hesitate to crush her opponents.",
                "imageCard": "src/assets/images/cardImages/Amazon.jpeg",
                "tipo": "Monstro",
                "nivel": 8,
                "qtdTesouro": 2
            },
            {
                "name": "Bigfoot",
                "description": "The legendary creature with massive strength and a bad temper.",
                "imageCard": "src/assets/images/cardImages/Bigfoot.jpeg",
                "tipo": "Monstro",
                "nivel": 12,
                "qtdTesouro": 3
            },
            {
                "name": "Boil an Anthill",
                "description": "A malicious curse that brings discomfort and chaos.",
                "imageCard": "src/assets/images/cardImages/BoilAnAnthill.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Boots of Butt-Kicking",
                "description": "Stylish boots that enhance your kicking power.",
                "imageCard": "src/assets/images/cardImages/BootsOfButtKicking.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Bribe GM With Food",
                "description": "An underhanded tactic to gain favor with the GM.",
                "imageCard": "src/assets/images/cardImages/BribeGMWithFood.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Buckler of Swashing",
                "description": "A small shield that adds flair to your defense.",
                "imageCard": "src/assets/images/cardImages/BucklerOfSwashing.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Bullrog",
                "description": "A fiery and fearsome monster that blocks your path.",
                "imageCard": "src/assets/images/cardImages/Bullrog.jpeg",
                "tipo": "Monstro",
                "nivel": 18,
                "qtdTesouro": 5
            },
            {
                "name": "Chainsaw of Bloody Dismemberment",
                "description": "An incredibly dangerous weapon that instills fear in enemies.",
                "imageCard": "src/assets/images/cardImages/ChainsawOfBloodyDismemberment.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Cleric 2",
                "description": "A divine spellcaster with healing abilities.",
                "imageCard": "src/assets/images/cardImages/Cleric2.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Cleric 3",
                "description": "A powerful cleric with advanced blessings.",
                "imageCard": "src/assets/images/cardImages/Cleric3.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Convenient Addition Error",
                "description": "A curse that throws off your calculations at the worst time.",
                "imageCard": "src/assets/images/cardImages/ConvenientAdditionError.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Crabs",
                "description": "A pesky infestation that causes inconvenience.",
                "imageCard": "src/assets/images/cardImages/Crabs.jpeg",
                "tipo": "Monstro",
                "nivel": 1,
                "qtdTesouro": 1
            },
            {
                "name": "Drooling Slime",
                "description": "A disgusting slime monster that oozes trouble.",
                "imageCard": "src/assets/images/cardImages/DroolingSlime.jpeg",
                "tipo": "Monstro",
                "nivel": 1,
                "qtdTesouro": 1
            },
            {
                "name": "Duck of Doom",
                "description": "A seemingly harmless duck with catastrophic consequences.",
                "imageCard": "src/assets/images/cardImages/DuckOfDoom.jpeg",
                "tipo": "Maldição",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Dwarf 1",
                "description": "A stout and sturdy adventurer with a knack for treasure.",
                "imageCard": "src/assets/images/cardImages/Dwarf1.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Dwarf 2",
                "description": "Another steadfast dwarf ready for adventure.",
                "imageCard": "src/assets/images/cardImages/Dwarf2.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Dwarf 3",
                "description": "A dwarf with exceptional endurance and strength.",
                "imageCard": "src/assets/images/cardImages/Dwarf3.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Eleven Foot Pole",
                "description": "A versatile tool for poking, prodding, and reaching distant things.",
                "imageCard": "src/assets/images/cardImages/ElevenFootPole.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Elf 1",
                "description": "A nimble and graceful adventurer.",
                "imageCard": "src/assets/images/cardImages/Elf1.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Elf 2",
                "description": "An elf with a keen sense of danger.",
                "imageCard": "src/assets/images/cardImages/Elf2.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Elf 3",
                "description": "A skilled elf with mastery of the bow.",
                "imageCard": "src/assets/images/cardImages/Elf3.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Face Sucker",
                "description": "A terrifying monster that clings to your face.",
                "imageCard": "src/assets/images/cardImages/FaceSucker.jpeg",
                "tipo": "Monstro",
                "nivel": 8,
                "qtdTesouro": 2
            },
            {
                "name": "Flaming Armor",
                "description": "Armor that burns brightly, both as protection and intimidation.",
                "imageCard": "src/assets/images/cardImages/FlamingArmor.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Floating Nose",
                "description": "A strange and unsettling monster.",
                "imageCard": "src/assets/images/cardImages/FloatingNose.jpeg",
                "tipo": "Monstro",
                "nivel": 10,
                "qtdTesouro": 3
            },
            {
                "name": "Flying Frogs",
                "description": "Frogs that defy gravity and common sense.",
                "imageCard": "src/assets/images/cardImages/FlyingFrogs.jpeg",
                "tipo": "Monstro",
                "nivel": 2,
                "qtdTesouro": 1
            },
            {
                "name": "Gazebo",
                "description": "An ominous structure that spells doom for the unwary.",
                "imageCard": "src/assets/images/cardImages/Gazebo.jpeg",
                "tipo": "Monstro",
                "nivel": 8,
                "qtdTesouro": 2
            },
            {
                "name": "Gelatinous Octahedron",
                "description": "A massive, jiggling monster with a taste for adventurers.",
                "imageCard": "src/assets/images/cardImages/GelatinousOctahedron.jpeg",
                "tipo": "Monstro",
                "nivel": 2,
                "qtdTesouro": 1
            },
            {
                "name": "Ghoulfiends",
                "description": "Horrifying undead creatures that hunger for life.",
                "imageCard": "src/assets/images/cardImages/Ghoulfiends.jpeg",
                "tipo": "Monstro",
                "nivel": 8,
                "qtdTesouro": 2
            },
            {
                "name": "Halfling 1",
                "description": "A small but brave adventurer with a big appetite for treasure.",
                "imageCard": "src/assets/images/cardImages/Halfling1.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Halfling2",
                "description": "Uma versão alternativa do Halfling, com habilidades especiais para negociar tesouros.",
                "imageCard": "src/assets/images/cardImages/Halfling2.jpeg",
                "tipo": "Raça",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "HammerOfKneecapping",
                "description": "Um martelo poderoso usado para ataques brutais contra joelhos desprotegidos.",
                "imageCard": "src/assets/images/cardImages/HammerOfKneecapping.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Harpies",
                "description": "Monstros alados com um canto hipnotizante que confunde aventureiros.",
                "imageCard": "src/assets/images/cardImages/Harpies.jpeg",
                "tipo": "Monstro",
                "nivel": 4,
                "qtdTesouro": 2
            },
            {
                "name": "HelmOfCourage",
                "description": "Um elmo que concede coragem inabalável ao seu portador.",
                "imageCard": "src/assets/images/cardImages/HelmOfCourage.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Hippogriff",
                "description": "Uma criatura mítica, metade cavalo e metade águia, feroz em combate.",
                "imageCard": "src/assets/images/cardImages/Hippogriff.jpeg",
                "tipo": "Monstro",
                "nivel": 16,
                "qtdTesouro": 4
            },
            {
                "name": "Hoard",
                "description": "Uma pilha de tesouros acumulados, perfeita para subir de nível.",
                "imageCard": "src/assets/images/cardImages/Hoard.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "HugeRock",
                "description": "Uma pedra gigante que pode esmagar qualquer oponente desavisado.",
                "imageCard": "src/assets/images/cardImages/HugeRock.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "InsuranceSalesman",
                "description": "Um vendedor insistente que tenta empurrar seguros até para monstros.",
                "imageCard": "src/assets/images/cardImages/InsuranceSalesman.jpeg",
                "tipo": "Monstro",
                "nivel": 14,
                "qtdTesouro": 4
            },
            {
                "name": "InvokeObscureRules",
                "description": "Uma maldição que invoca regras obscuras para confundir todos na mesa.",
                "imageCard": "src/assets/images/cardImages/InvokeObscureRules.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "KingTut",
                "description": "Um faraó lendário que retorna dos mortos para proteger suas riquezas.",
                "imageCard": "src/assets/images/cardImages/KingTut.jpeg",
                "tipo": "Monstro",
                "nivel": 16,
                "qtdTesouro": 4
            },
            {
                "name": "LameGoblin",
                "description": "Um goblin fraco e coxo, mas perigoso em grandes números.",
                "imageCard": "src/assets/images/cardImages/LameGoblin.jpeg",
                "tipo": "Monstro",
                "nivel": 1,
                "qtdTesouro": 1
            },
            {
                "name": "LargeAngryChicken",
                "description": "Uma galinha gigante e furiosa que ataca com bicadas ferozes.",
                "imageCard": "src/assets/images/cardImages/LargeAngryChicken.jpeg",
                "tipo": "Monstro",
                "nivel": 2,
                "qtdTesouro": 1
            },
            {
                "name": "Lawyers",
                "description": "Advogados astutos que usam argumentos legais para derrotar seus inimigos.",
                "imageCard": "src/assets/images/cardImages/Lawyers.jpeg",
                "tipo": "Monstro",
                "nivel": 6,
                "qtdTesouro": 2
            },
            {
                "name": "LeatherArmor",
                "description": "Uma armadura de couro simples, mas eficaz para proteção básica.",
                "imageCard": "src/assets/images/cardImages/LeatherArmor.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Leperchaun",
                "description": "Um leprechaun amaldiçoado que rouba tesouros e causa caos.",
                "imageCard": "src/assets/images/cardImages/Leperchaun.jpeg",
                "tipo": "Monstro",
                "nivel": 4,
                "qtdTesouro": 2
            },
            {
                "name": "Lose1BigItem",
                "description": "Uma maldição que faz o jogador perder um item grande.",
                "imageCard": "src/assets/images/cardImages/Lose1BigItem.jpeg",
                "tipo": "Maldição",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Lose1SmallItem1",
                "description": "Uma maldição que faz o jogador perder um item pequeno.",
                "imageCard": "src/assets/images/cardImages/Lose1SmallItem1.jpeg",
                "tipo": "Maldição",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Lose1SmallItem2",
                "description": "Outra maldição que faz o jogador perder um item pequeno.",
                "imageCard": "src/assets/images/cardImages/Lose1SmallItem2.jpeg",
                "tipo": "Maldição",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "LoseALevel1",
                "description": "Uma maldição que faz o jogador perder um nível.",
                "imageCard": "src/assets/images/cardImages/LoseALevel1.jpeg",
                "tipo": "Maldição",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "LoseALevel2",
                "description": "Outra maldição que faz o jogador perder um nível.",
                "imageCard": "src/assets/images/cardImages/LoseALevel2.jpeg",
                "tipo": "Maldição",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "LoseRace",
                "description": "Uma maldição que faz o jogador perder sua raça.",
                "imageCard": "src/assets/images/cardImages/LoseRace.jpeg",
                "tipo": "Maldição",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "MaulRat",
                "description": "Um rato feroz com um gosto por itens brilhantes.",
                "imageCard": "src/assets/images/cardImages/MaulRat.jpeg",
                "tipo": "Monstro",
                "nivel": 1,
                "qtdTesouro": 1
            },
            {
                "name": "MrBones",
                "description": "Um esqueleto amigável, mas perigoso quando provocado.",
                "imageCard": "src/assets/images/cardImages/MrBones.jpeg",
                "tipo": "Monstro",
                "nivel": 2,
                "qtdTesouro": 1
            },
            {
                "name": "NetTroll",
                "description": "Um troll da internet que usa seus memes para atacar.",
                "imageCard": "src/assets/images/cardImages/NetTroll.jpeg",
                "tipo": "Monstro",
                "nivel": 10,
                "qtdTesouro": 3
            },
            {
                "name": "PitBull",
                "description": "Um cão feroz e leal que defende seu dono com unhas e dentes.",
                "imageCard": "src/assets/images/cardImages/PitBull.jpeg",
                "tipo": "Monstro",
                "nivel": 2,
                "qtdTesouro": 1
            },
            {
                "name": "Platycore",
                "description": "Uma criatura híbrida de ornitorrinco e unicórnio, com poderes mágicos.",
                "imageCard": "src/assets/images/cardImages/Platycore.jpeg",
                "tipo": "Monstro",
                "nivel": 6,
                "qtdTesouro": 2
            },
            {
                "name": "PlutoniumDragon",
                "description": "Um dragão radioativo com poderes devastadores.",
                "imageCard": "src/assets/images/cardImages/PlutoniumDragon.jpeg",
                "tipo": "Monstro",
                "nivel": 20,
                "qtdTesouro": 5
            },
            {
                "name": "PotionOfGeneralStudliness",
                "description": "Uma porção que aumenta a habilidade geral do jogador.",
                "imageCard": "src/assets/images/cardImages/PotionOfGeneralStudliness.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "PottedPlant",
                "description": "Uma planta de vaso que surpreendentemente é perigosa.",
                "imageCard": "src/assets/images/cardImages/PottedPlant.jpeg",
                "tipo": "Monstro",
                "nivel": 1,
                "qtdTesouro": 1
            },
            {
                "name": "Pukachu",
                "description": "Uma criatura adorável, mas incrivelmente nojenta.",
                "imageCard": "src/assets/images/cardImages/Pukachu.jpeg",
                "tipo": "Monstro",
                "nivel": 6,
                "qtdTesouro": 2
            },
            {
                "name": "ReallyImpressiveTitle",
                "description": "Um título incrível que impressiona a todos na mesa.",
                "imageCard": "src/assets/images/cardImages/ReallyImpressiveTitle.jpeg",
                "tipo": "SubirDeNivel",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "ShriekingGeek",
                "description": "Um nerd gritando que distrai e confunde seus inimigos.",
                "imageCard": "src/assets/images/cardImages/ShriekingGeek.jpeg",
                "tipo": "Monstro",
                "nivel": 6,
                "qtdTesouro": 2
            },
            {
                "name": "SlimyArmor",
                "description": "Uma armadura escorregadia que protege contra ataques.",
                "imageCard": "src/assets/images/cardImages/SlimyArmor.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "SnailsOnSpeed",
                "description": "Caracóis incrivelmente rápidos que pegam os inimigos de surpresa.",
                "imageCard": "src/assets/images/cardImages/SnailsOnSpeed.jpeg",
                "tipo": "Monstro",
                "nivel": 4,
                "qtdTesouro": 2
            },
            {
                "name": "SneakyBastardSword",
                "description": "Uma espada traiçoeira usada para ataques furtivos.",
                "imageCard": "src/assets/images/cardImages/SneakyBastardSword.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "SpikyKnees",
                "description": "Joelhos pontudos que adicionam um ataque extra ao combate.",
                "imageCard": "src/assets/images/cardImages/SpikyKnees.jpeg",
                "tipo": "Equipamento",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Squidzilla",
                "description": "Um monstro gigante com tentáculos devastadores.",
                "imageCard": "src/assets/images/cardImages/Squidzilla.jpeg",
                "tipo": "Monstro",
                "nivel": 18,
                "qtdTesouro": 4
            },
            {
                "name": "StonedGolem",
                "description": "Um golem de pedra incrivelmente resistente e forte.",
                "imageCard": "src/assets/images/cardImages/StonedGolem.jpeg",
                "tipo": "Monstro",
                "nivel": 14,
                "qtdTesouro": 4
            },
            {
                "name": "Thief2",
                "description": "Uma versão alternativa do ladrão, especialista em roubo.",
                "imageCard": "src/assets/images/cardImages/Thief2.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Thief3",
                "description": "Outra versão do ladrão, com habilidades aprimoradas.",
                "imageCard": "src/assets/images/cardImages/Thief3.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "TongueDemon",
                "description": "Um demônio com uma língua longa e perigosa.",
                "imageCard": "src/assets/images/cardImages/TongueDemon.jpeg",
                "tipo": "Monstro",
                "nivel": 12,
                "qtdTesouro": 3
            },
            {
                "name": "UndeadHorse",
                "description": "A terrifying undead horse that haunts adventurers. Watch out for its ghostly neigh!",
                "imageCard": "src/assets/images/cardImages/UndeadHorse.jpeg",
                "tipo": "Monstro",
                "nivel": 4,
                "qtdTesouro": 2
            },
            {
                "name": "UnspeakablyAwfulIndescribableHorror",
                "description": "A monstrosity that defies description. Beware its overwhelming presence!",
                "imageCard": "src/assets/images/cardImages/UnspeakablyAwfulIndescribableHorror.jpeg",
                "tipo": "Monstro",
                "nivel": 14,
                "qtdTesouro": 4
            },
            {
                "name": "WannabeVampire",
                "description": "This creature dreams of being a real vampire but still packs a dangerous bite.",
                "imageCard": "src/assets/images/cardImages/WannabeVampire.jpeg",
                "tipo": "Monstro",
                "nivel": 12,
                "qtdTesouro": 3
            },
            {
                "name": "Warrior1",
                "description": "A fierce warrior ready to charge into battle with unparalleled bravery.",
                "imageCard": "src/assets/images/cardImages/Warrior1.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Warrior2",
                "description": "An experienced warrior armed to the teeth with combat skills.",
                "imageCard": "src/assets/images/cardImages/Warrior2.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Warrior3",
                "description": "A seasoned warrior known for their unmatched strength and fortitude.",
                "imageCard": "src/assets/images/cardImages/Warrior3.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "WightBrothers",
                "description": "A pair of undead siblings who terrorize adventurers with their eerie synergy.",
                "imageCard": "src/assets/images/cardImages/WightBrothers.jpeg",
                "tipo": "Monstro",
                "nivel": 16,
                "qtdTesouro": 4
            },
            {
                "name": "Wizard1",
                "description": "A novice wizard experimenting with their magical abilities.",
                "imageCard": "src/assets/images/cardImages/Wizard1.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Wizard2",
                "description": "A skilled wizard harnessing the power of the arcane to overcome challenges.",
                "imageCard": "src/assets/images/cardImages/Wizard2.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            },
            {
                "name": "Wizard3",
                "description": "An archmage with mastery over the magical arts, feared and respected.",
                "imageCard": "src/assets/images/cardImages/Wizard3.jpeg",
                "tipo": "Classe",
                "nivel": 0,
                "qtdTesouro": 0
            }
        ]
        data.forEach((element: Card) => {
            this.createCard(element);
        });
    }

    createCard(card: Card) {
        const carta = new Card(
            {
                name: card['name'],
                description: card['description'],
                imageCard: card['imageCard'],
                nivel: card['nivel'],
                qtdTesouro: card['qtdTesouro'],
                tipo: card['tipo']
            });
        this.cartas.push(carta)
    }

    filtraCartas(isPorta: boolean){
        const tipoFiltro = isPorta  ? this.tiposPorta : this.tiposTesouro;
        const cartasFiltradas = this.cartas.filter(element => tipoFiltro.includes(element.tipo))
        return cartasFiltradas;
    }


}

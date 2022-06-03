document.querySelector('button').addEventListener('click', getInfo) 
document.querySelectorAll('li').forEach(elem=> elem.addEventListener('click', showInfo))

const amongUs = {
  godfather: {
    team: 'Impostors',
    description: 'works like a normal Impostor.'
  },
  mafioso: {
    team: 'Impostors',
    description: 'Impostor who cannot kill until the Godfather is dead.'
  },
  janitor: {
    team: 'Impostors',
    description: 'Impostor who cannot kill, but they can hide dead bodies instead'
  },
  morphling: {
    team: 'Impostors',
    description: 'The Morphling is an Impostor which can additionally scan the appearance of a player. After an arbitrary time they can take on that appearance for 10s.',
    note: "They shrink to the size of the Mini when they copy its look. The Hacker sees the new color on the admin table. The color of the footprints changes accordingly (also the ones that were already on the ground). The other Impostor still sees that they are an Impostor (the name remains red). The shield indicator changes accordingly (the Morphling gains or loses the shield indicator). Tracker and Snitch arrows keep working."
  },
  camouflager: {
    team: 'Impostors',
    description: "The Camouflager is an Impostor which can additionally activate a camouflage mode. The camouflage mode lasts for 10s and while it is active, all player names/pets/hats are hidden and all players have the same color.",
    note: "The Mini will look like all the other players. The color of the footprints turns gray (also the ones that were already on the ground). The Hacker sees gray icons on the admin table. The shield is not visible anymore. Tracker and Snitch arrows keep working."
  },
  vampire: {
    team: 'Impostors',
    description: 'The Vampire is an Impostor, that can bite other player. Bitten players die after a configurable amount of time. If the Vampire spawn chance is greater 0 (even if there is no Vampire in the game), all players can place one garlic. If a victim is near a garlic, the "Bite Button" turns into the default "Kill Button" and the Vampire can only perform a normal kill.',
    note: "If a bitten player is still alive when a meeting is being called, they die at the start of the meeting. The cooldown is the same as the default kill cooldown (+ the kill delay if the Vampire bites the target). If there is a Vampire in the game, there can't be a Warlock." 
  },
  eraser: {
    team: 'Impostors',
    description: 'The Eraser is an Impostor that can erase the role of every player. The targeted players will lose their role after the meeting right before a player is exiled. After every erase, the cooldown increases by 10 seconds. The erase will be performed, even if the Eraser or their target die before the next meeting. By default the Eraser can erase everyone but the Spy and other Impostors. Depending on the options they can also erase them (Impostors will lose their special Impostor ability).',
    note: "The Shifter shift will always be triggered before the Erase (hence either the new role of the Shifter will be erased or the Shifter saves the role of their target, depending on whom the Eraser erased). Erasing a Lover automatically erases the other Lover as well (if the second Lover is an ImpLover, they will turn into an Impostor). Erasing a Jackal that has a Sidekick, triggers the Sidekick promotion if it's activated in the settings. As the erase is being triggered before the ejection of a player, erasing and voting out a Lover in the same round, would result in the ex-Lover surviving, as the partnership was erased before. Also a Jester win would not happen, as the erase will be triggered before."
  },
  trickster: {
    team: 'Impostors',
    description: 'The Trickster is an Impostor that can place 3 jack-in-the-boxes that are invisible at first to other players. If the Trickster has placed all of their boxes they will be converted into a vent network usable only by the Trickster themself, but the boxes are revealed to the others. If the boxes are converted to a vent network, the Trickster gains a new ability "Lights out" to limit the visibility of Non-Impostors, that cannot be fixed by other players. Lights are automatically restored after a while.',
    note: "Impostors will get a text indicator at the bottom of the screen to notify them if the lights are out due to the Trickster ability, as there is no sabotage arrows or task to sabotage text to otherwise notify them about it."
  },
  cleaner: {
    team: 'Impostors',
    description: 'The Cleaner is an Impostor who has the ability to clean up dead bodies.',
    note: "The Kill and Clean cooldown are shared, preventing them from immediately cleaning their own kills. If there is a Cleaner in the game, there can't be a Vulture."
  },
  warlock: {
    team: 'Impostors',
    description: "The Warlock is an Impostor, that can curse another player (the cursed player doesn't get notified). If the cursed person stands next to another player, the Warlock is able to kill that player (no matter how far away they are). Performing a kill with the help of a cursed player, will lift the curse and it will result in the Warlock being unable to move for a configurable amount of time. The Warlock can still perform normal kills, but the two buttons share the same cooldown.",
    note: "The Warlock can always kill their Impostor mates (and even themself) using the 'cursed kill.' If there is a Warlock in the game, there can't be a Vampire. Performing a normal kill, doesn't lift the curse"
  },
  bountyhunter: {
    team: 'Impostors',
    description: "The Bounty Hunter is an Impostor, that continuously get bounties (the targeted player doesn't get notified). The target of the Bounty Hunter swaps after every meeting and after a configurable amount of time. If the Bounty Hunter kills their target, their kill cooldown will be a lot less than usual. Killing a player that's not their current target results in an increased kill cooldown. Depending on the options, there'll be an arrow pointing towards the current target.",
    note: "The target won't be an Impostor, a Spy or the Bounty Hunter's Lover. Killing the target resets the timer and a new target will be selected."
  },
  witch: {
    team: 'Impostors',
    description: "The Witch is an Impostor who has the ability to cast a spell on other players. During the next meeting, the spellbound player will be highlighted and they'll die right after the meeting. There are multiple options listed down below with which you can configure to fit your taste. Similar to the Vampire, shields and blanks will be checked twice (at the end of casting the spell on the player and at the end of the meeting, when the spell will be activated). This can result in players being marked as spelled during the meeting, but not dying in the end (when they get a shield or the Witch gets blanked after they were spelled by the Witch). If the Witch dies before the meeting starts or if the Witch is being guessed during the meeting, the spellbound players will be highlighted but they'll survive in any case. Depending on the options you can choose whether voting the Witch out will save all the spellbound players or not.",
    note: "The spellbound players will die before the voted player dies (which might trigger e.g. trigger an Impostor win condition, even if the Witch is the one being voted)"
  },
  ninja: {
    team: 'Impostors',
    description: "The Ninja is an Impostor who has the ability to kill another player all over the map. You can mark a player with your ability and by using the ability again, you jump to the position of the marked player and kill it. Depending on the options you know where your marked player is. If the Ninja uses its ability, it will leave a trace (leaves) for a configurable amount of time where it activated the ability and additionally where it killed the before marked player. When performing a ninja ability kill, the ninja can be invisible for some seconds (depends on options)",
    note: "The Ninja has a 5 second cooldown after marking a player. The trace has a darker (black) or lighter (white) color depending on the players color that will fade into green. The mark on the marked player will reset after a meeting or after using the ability to kill the marked player. Performing a normal kill will NOT reset the mark. If the Ninja tries to kill a shielded player (e.g. Medic shield, Shield last game first kill ), the kill will not be performed. If the Ninja tries to kill the Time Master while the shield is active, the Ninja won't teleport to the players position, but the Time Master shield will still be activated. If the marked target is on a different floor on Submerged, the arrow will always point to the elevator."
  },
  guesser: {
    team: 'Crewmates or Impostors',
    description: "The Guesser can be a Crewmate or an Impostor (depending on the settings). The Guesser can shoot players during the meeting, by guessing its role. If the guess is wrong, the Guesser dies instead. You can select how many players can be shot per game and if multiple players can be shot during a single meeting. The guesses Impostor and Crewmate are only right, if the player is part of the corresponding team and has no special role. You can only shoot during the voting time. Depending on the options, the Guesser can't guess the shielded player and depending on the Medic options the Medic/shielded player might be notified (no one will die, independently of what the Guesser guessed).",
    note: "If a player gets shot, you'll get back your votes. You can't guess the role Nice Mini for obvious reasons. You can't guess the role Lover, you'll have to guess the primary role of one of the Lovers, to kill both of them. Jester wins won't be triggered, if the Guesser shoots the Jester before the Jester gets voted out."
  },
  jester: {
    team: 'Neutral',
    description: 'The Jester does not have any tasks. They win the game as a solo, if they get voted out during a meeting.'
  },
  arsonist: {
    team: 'Neutral',
    description: "The Arsonist does not have any tasks, they have to win the game as a solo. The Arsonist can douse other players by pressing the douse button and remaining next to the player for a few seconds. If the player that the Arsonist douses walks out of range, the cooldown will reset to 0. After dousing everyone alive the Arsonist can ignite all the players which results in an Arsonist win."
  },
  jackal: {
    team: 'Jackal',
    description: "The Jackal is part of an extra team, that tries to eliminate all the other players. The Jackal has no tasks and can kill Impostors, Crewmates and Neutrals. The Jackal (if allowed by the options) can select another player to be their Sidekick. Creating a Sidekick removes all tasks of the Sidekick and adds them to the team Jackal. The Sidekick loses their current role (except if they're a Lover, then they play in two teams). The 'Create Sidekick Action' may only be used once per Jackal or once per game (depending on the options). The Jackal can also promote Impostors to be their Sidekick, but depending on the options the Impostor will either really turn into the Sidekick and leave the team Impostors or they will just look like the Sidekick to the Jackal and remain as they were. Also if a Spy or Impostor gets sidekicked, they still will appear red to the Impostors. The team Jackal enables multiple new outcomes of the game, listing some examples here: The Impostors could be eliminated and then the crew plays against the team Jackal. The Crew could be eliminated, then the Team Jackal fight against the Impostors (The Crew can still make a task win in this scenario)",
    note: "The Jackal (and their Sidekick) may be killed by a Sheriff. A Jackal cannot target the Mini, while it's growing up. After that they can kill it or select it as its Sidekick. The Crew can still win, even if all of their members are dead, if they finish their tasks fast enough (That's why converting the last Crewmate with tasks left into a Sidekick results in a task win for the crew.) If both Impostors and Jackals are in the game, the game continues even if all Crewmates are dead. Crewmates may still win in this case by completing their tasks. Jackal and Impostor have to kill each other."
  },
  sidekick: {
    team: 'Jackal',
    description: "Gets assigned to a player during the game by the 'Create Sidekick Action' of the Jackal and joins the Jackal in their quest to eliminate all other players. Upon the death of the Jackal (depending on the options), they might get promoted to Jackal themself and potentially even assign a Sidekick of their own.",
    note: "A player that converts into a Sidekick loses their previous role and tasks (if they had one). The Sidekick may be killed by a Sheriff. The Sidekick cannot target the Mini, while it's growing up." 
  },
  vulture: {
    team: 'Neutral',
    description: "The Vulture does not have any tasks, they have to win the game as a solo. The Vulture is a neutral role that must eat a specified number of corpses (depending on the options) in order to win. Depending on the options, when a player dies, the Vulture gets an arrow pointing to the corpse. If there is a Vulture in the game, there can't be a Cleaner.",
    note: "If the corpse is on a different floor on Submerged, the arrow will always point to the elevator"
  },
  lawyer: {
    team: 'Neutral',
    description: "The Lawyer is a neutral role that has a client. The client might be an Impostor or Jackal which is no Lover. Depending on the options, the client can also be a Jester. The Lawyer needs their client to win in order to win the game. Their client doesn't know that it is their client. If their client gets voted out, the Lawyer dies with the client. If their client dies, the Lawyer changes their role and becomes the Pursuer, which has a different goal to win the game. How the Lawyer wins: Lawyer dead/alive, client alive and client wins: The Lawyer wins together with the team of the client. If their client is Jester and the Jester gets voted out, the Lawyer wins together with the Jester.",
    note: "If the client disconnects, the Lawyer will also turn into the Pursuer. The Lawyer needs to figure out the role of their client depending on the options."
  },
  pursuer: {
    team: 'Neutral',
    description: "The Pursuer is still a neutral role, but has a different goal to win the game; they have to be alive when the game ends and the Crew wins. In order to achieve this goal, the Pursuer has an ability called 'Blank', where they can fill a killers (this also includes the Sheriff) weapon with a blank. So, if the killer attempts to kill someone, the killer will miss their target, and their cooldowns will be triggered as usual. If the killer fires the 'Blank', shields (e.g. Medic shield or Time Master shield) will not be triggered. The Pursuer has tasks (which can already be done while being a Lawyer), that count towards the task win for the Crewmates. If the Pursuer dies, their tasks won't be counted anymore."
  },
  shifter: {
    team: 'Crewmates',
    description: "The Shifter can take over the role of another Crewmate, the other player will transform into a Crewmate. The Shift will always be performed at the end of the next meeting right before a player is exiled. The target needs to be chosen during the round. Even if the Shifter or the target dies before the meeting, the Shift will still be performed. Swapping roles with an Impostor or Neutral fails and the Shifter commits suicide after the next meeting (there won't be any body). The Shifter aims to save roles from leaving the game, by e.g. taking over a Sheriff or Medic that is known to the Impostors. This works especially well against the Eraser, but also gives the Eraser the possibility to act like a Shifter. The special interactions with the Shifter are noted in the chapters of the respective roles.",
    note: "The Shifter shift will always be triggered before the Erase (hence either the new role of the Shifter will be erased or the Shifter saves the role of their target, depending on whom the Eraser erased). If the Shifter takes over a role, their new cooldowns will start at the maximum cooldown of the ability. One time use abilities (e.g. shielding a player or Engineer sabotage fix) can only used by one player in the game (i.e. the Shifter can only use them, if the previous player did not use them before)."
  },
  mayor: {
    team: 'Crewmates',
    description: "The Mayor leads the Crewmates by having a vote that counts twice. The Mayor can always use their meeting, even if the maximum number of meetings was reached. The Mayor has a portable Meeting Button, depending on the options. The Mayor can see the vote colors after completing a configurable amount of tasks, depending on the options."
  },
  engineer: {
    team: 'Crewmates',
    description: "The Engineer (if alive) can fix a certain amount of sabotages per game from anywhere on the map. The Engineer can use vents. If the Engineer is inside a vent, depending on the options the members of the team Jackal/Impostors will see a blue outline around all vents on the map (in order to warn them). Because of the vents the Engineer might not be able to start some tasks using the 'Use' button, you can double-click on the tasks instead.",
    note: "The kill button of Impostors activates if they stand next to a vent where the Engineer is. They can also kill them there. No other action (e.g. Morphling sample, Shifter shift, ...) can affect players inside vents."
  },
  sheriff: {
    team: 'Crewmates',
    description: "The Sheriff has the ability to kill Impostors. If they try to kill a Crewmate, they die instead.",
    note: "If the Sheriff shoots the person the Medic shielded, the Sheriff and the shielded person both remain unharmed. If the Sheriff shoots a Mini Impostor, the Sheriff dies if the Mini is still growing up. If it's 18, the Mini Impostor dies."
  },
  deputy: {
    team: 'Crewmates',
    description: "The Deputy has the ability to handcuff player. Handcuffs will be hidden until the handcuffed player try to use a disabled button/hotkey. Handcuffs disable: Kill, Abilities, Vent, Report",
    note: "Duration starts after the handcuffs become visible. Deputy can not be in game without Sheriff."
  },
  lighter: {
    team: 'Crewmates',
    description: "The Lighter can turn on their Lighter every now and then, which increases their vision by a customizable amount."
  },
  detective: {
    team: 'Crewmates',
    description: "The Detective can see footprints that other players leave behind. The Detective's other feature shows when they report a corpse: they receive clues about the killer's identity. The type of information they get is based on the time it took them to find the corpse.",
    note: "When people change their colors (because of a morph or camouflage), all the footprints also change their colors (also the ones that were already on the ground). If the effects are over, all footprints switch back to the original color. The Detective does not see footprints of players that sit in vents. More information about the colors." 
  },
  timemaster: {
    team: 'Crewmates',
    description: "The Time Master has a time shield which they can activate. The time shield remains active for a configurable amount of time. If a player tries to kill the Time Master while the time shield is active, the kill won't happen and the time will rewind for a set amount of time. The kill cooldown of the killer won't be reset, so the Time Master has to make sure that the game won't result in the same situation. The Time Master won't be affected by the rewind.",
    note: "Only the movement is affected by the rewind. A Vampire bite will trigger the rewind. If the Time Master misses shielding the bite, they can still shield the kill which happens a few seconds later. If the Time Master was bitten and has their shield active before when a meeting is called, they survive but the time won't be rewound. If the Time Master has a Medic shield, they won't rewind. The shield itself ends immediately when triggered. So the Time Master can be attacked again as soon as the rewind ends."
  },
  medic: {
    team: 'Crewmates',
    description: "The Medic can shield (highlighted by an outline around the player) one player per game, which makes the player unkillable. The shielded player can still be voted out and might also be an Impostor. If set in the options, the shielded player and/or the Medic will get a red flash on their screen if someone (Impostor, Sheriff, ...) tried to murder them. If the Medic dies, the shield disappears with them. The Sheriff will not die if they try to kill a shielded Crewmate and won't perform a kill if they try to kill a shielded Impostor. Depending on the options, guesses from the Guesser will be blocked by the shield and the shielded player/medic might be notified. The Medic's other feature shows when they report a corpse: they will see how long ago the player died.",
    note: "If the shielded player is a Lover and the other Lover dies, they nevertheless kill themselves. If the Shifter has a shield or their target has a Shield, the shielded player switches. Shields set after the next meeting, will be set before a possible shift is being performed."
  },
  swapper: {
    team: 'Crewmates',
    description: "During meetings the Swapper can exchange votes that two people get (i.e. all votes that player A got will be given to player B and vice versa). Because of the Swapper's strength in meetings, they might not start emergency meetings and can't fix lights and comms. The Swapper now has initial swap charges and can recharge those charges after completing a configurable amount of tasks.",
    note: "The remaining charges will be displayed in brackets next to the players role while not in a meeting. In a meeting the charges will appear next to the Confirm Swap button."
  },
  seer: {
    team: 'Crewmates',
    description: "The Seer has two abilities (one can activate one of them or both in the options). The Seer sees the souls of players that died a round earlier, the souls slowly fade away. The Seer gets a blue flash on their screen, if a player dies somewhere on the map."
  },
  hacker: {
    team: 'Crewmates',
    description: "If the Hacker activates the 'Hacker mode', the Hacker gets more information than others from the admin table and vitals for a set duration. Otherwise they see the same information as everyone else. Admin table: The Hacker can see the colors (or color types) of the players on the table. Vitals: The Hacker can see how long dead players have been dead for. The Hacker can access his mobile gadgets (vitals & admin table), with a maximum of charges (uses) and a configurable amount of tasks needed to recharge. While accessing those mobile gadgets, the Hacker is not able to move.",
    note: "If the Morphling morphs or the Camouflager camouflages, the colors on the admin table change accordingly. More information about the colors."
  },
  tracker: {
    team: "Crewmates",
    description: "The Tracker can select one player to track. Depending on the options the Tracker can track a different person after each meeting or the Tracker tracks the same person for the whole game. An arrow points to the last tracked position of the player. The arrow updates its position every few seconds (configurable). Depending on the options, the Tracker has another ability: They can track all corpses on the map for a set amount of time. They will keep tracking corpses, even if they were cleaned or eaten by the Vulture.",
    note: "If the tracked player is on a different floor on Submerged, the arrow will always point to the elevator."
  },
  snitch: {
    team: "Crewmates",
    description: "When the Snitch finishes all the tasks, arrows will appear (only visible to the Snitch) that point to the Impostors (depending on the options also to members of team Jackal). When the Snitch has one task left (configurable) the Snitch will be revealed to the Impostors (depending on the options also to members of team Jackal) with an arrow pointing to the Snitch.",
    note: "If the Impostor(s)/Jackal(s) is/are on a different floor on Submerged when the Snitch finished their tasks, the arrow will always point to the elevator."
  },
  spy: {
    team: "Crewmates",
    description: "The Spy is a Crewmate, which has no special abilities. The Spy looks like an additional Impostor to the Impostors, they can't tell the difference. There are two possibilities (depending on the set options): The Impostors can't kill the Spy (because otherwise their kill button would reveal, who the Spy is). The Impostors can kill the Spy but they can also kill their Impostor partner (if they mistake another Impostor for the Spy) You can set whether the Sheriff can kill the Spy or not (in order to keep the lie alive). ",
    note: "If the Spy gets sidekicked, it still will appear red to the Impostors."
  },
  portalmaker: {
    team: "Crewmates",
    description: "The Portalmaker is a Crewmate that can place two portals on the map. These two portals are connected to each other. Those portals will be visible after the next meeting and can be used by everyone. Additionally to that, the Portalmaker gets information about who used the portals and when in the chat during each meeting, depending on the options.",
    note: "The extra button to use a portal will appear after the Portalmaker set his portals and a meeting/body report was called. While one player uses a portal, it is blocked for any other player until the player got teleported. All ghosts can still use the portals, but won't block any living player from using it and the Portalmaker won't get any information about it in chat. If a morphed person uses a portal it will show the morphed name/color depending on the options. If a camouflaged person uses a portal it will show 'A comouflaged person used the portal'."
  },
  securityguard: {
    team: 'Crewmates',
    description: "The Security Guard is a Crewmate that has a certain number of screws that they can use for either sealing vents or for placing new cameras. Placing a new camera and sealing vents takes a configurable amount of screws. The total number of screws that a Security Guard has can also be configured. The new camera will be visible after the next meeting and accessible by everyone. The vents will be sealed after the next meeting, players can't enter or exit sealed vents, but they can still 'move to them' underground.",
    note: "Trickster boxes can't be sealed. The Security Guard can't place cameras on MiraHQ. The remaining number of screws can be seen above their special button. On Skeld the four cameras will be replaced every 3 seconds (with the next four cameras). You can also navigate manually using the arrow keys. Security Guard can access mobile cameras after placing all screws. While accessing the mobile cameras, the Security Guard is not able to move."
  },
  medium: {
    team: "Crewmates",
    description: "The medium is a crewmate who can ask the souls of dead players for information. Like the Seer, it sees the places where the players have died (after the next meeting) and can question them. It then gets random information about the soul or the killer in the chat. The souls only stay for one round, i.e. until the next meeting. Depending on the options, the souls can only be questioned once and then disappear. Questions: What is your Role? What is your killer's color type? When did you die? What is your killers role?"
  }
}

function getInfo() {
  let role = document.querySelector('input').value.toLowerCase().replace(/ /g,"")
  if(!amongUs.hasOwnProperty(role)) {
    document.querySelector('h2').innerHTML = 'Try again dumbfuck'
    document.querySelector('.description').innerHTML = 'Are you really that "special"?'
    document.querySelector('.note').innerHTML = 'You really are one of a kind...'
  } else {
    document.querySelector('h2').innerHTML = amongUs[role].team
    document.querySelector('.description').innerHTML = amongUs[role].description

    if(amongUs[role].note === undefined) {
      document.querySelector('.note').innerHTML = ''
    } else {
      document.querySelector('.note').innerHTML = `Note: ${amongUs[role].note}`
    }
  }
}

function showInfo(e) {
  let clickedRole = e.target.innerHTML.toLowerCase().replace(/ /g, "")
  document.querySelector('h2').innerHTML = amongUs[clickedRole].team
  document.querySelector('.description').innerHTML = amongUs[clickedRole].description

  if(amongUs[clickedRole].note === undefined) {
    document.querySelector('.note').innerHTML = ''
  } else {
    document.querySelector('.note').innerHTML = `Note: ${amongUs[clickedRole].note}`
  }
}

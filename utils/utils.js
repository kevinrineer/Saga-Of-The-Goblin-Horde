Hooks.on("ready", async () => {
  if(game.modules.get("compendium-folders") == undefined){
    ui.notifications.error("Please download & enable COMPENDIUM FOLDERS module for Saga-Of-The-Goblin-Horde to function properly!")
  } else if(game.modules.get("compendium-folders").active == false){
    ui.notifications.error("Please enable COMPENDIUM FOLDERS modules in this world for Saga-Of-The-Goblin-Horde to work properly!")
  }
  if(game.modules.get("swade-core-rules") == undefined){
    ui.notifications.error("Please download & enable SWADE-Core-Rules module for Saga-Of-The-Goblin-Horde to function optimally!")
  } else if(game.modules.get("compendium-folders").active == false){
    ui.notifications.error("Please enable SWADE-Core-Rules modules in this world for Saga-Of-The-Goblin-Horde to funciton optimally!")
  }

  //Force Building Pack Indexes so Entity Links don't break
  for(let pack of game.packs.contents){
    if(pack.collection.includes("Saga-Of-The-Goblin-Horde"))
    pack.getIndex();
  }
})

const {zokou} =require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("Cette commande est réservée au propriétaire du bot");
  }

  const {exec}=require("child_process") ;

    repondre("* javiel md is restarting💙 ...*");

  exec("pm2 restart all");
  

  



})
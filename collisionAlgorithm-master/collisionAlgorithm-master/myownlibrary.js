function b(target,sprite){
    if (sprite.x - target.x < target.width/2 + sprite.width/2
      && target.x - sprite.x < target.width/2 + sprite.width/2) {
    sprite.velocityX = sprite.velocityX * (-1);
    target.velocityX = target.velocityX * (-1);
  }
  if (sprite.y - target.y < target.height/2 + sprite.height/2
    && target.y - sprite.y < target.height/2 + sprite.height/2){
    sprite.velocityY = sprite.velocityY * (-1);
    target.velocityY = target.velocityY * (-1);
  }
  
  
  }


  function it (target,sprite){


    if (sprite.x - target.x < target.width/2 + sprite.width/2
      && target.x - sprite.x < target.width/2 + sprite.width/2
      && sprite.y - target.y < target.height/2 + sprite.height/2
      && target.y - sprite.y < target.height/2 + sprite.height/2) {
   
  return true
  
  }
  else {return false}
  
  }
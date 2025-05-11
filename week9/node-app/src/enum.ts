enum Direction {
    Up,       // = 0  (by default , unless something is assigned like Up = "up")
    Down,    //  = 1 
    Left,   //   = 2
    Right  //    = 3 
}

function dosmth(keypressed : Direction){
    if(keypressed == Direction.Up){
        //logic
    }
}

dosmth(Direction.Down);
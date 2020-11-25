class Tree {
    constructor(x,y){

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,100,200,options);
        this.width = 750;
        this.height = 900;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }

    display(){

        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
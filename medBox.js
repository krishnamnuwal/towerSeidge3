class medBox extends Box{
    constructor(x,y,width,height,angle){
    super(x,y,width,height);
    this.image=loadImage("mediumbox.png");

    }
    display(){
        super.display();
    }
    score(){
    	if(this.Visibility<0&&this.Visibility>-1005)
    		score++

    }

}
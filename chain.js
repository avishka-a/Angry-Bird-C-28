class Chain{

    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:1
        }
        this.body=Constraint.create(options)
        
        

    }
    display(){
        if(this.body.bodyA!==null){
        line (this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y)
        }


    }

    fly(){
        this.body.bodyA=null 

    }
}


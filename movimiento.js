 public var speed : int = 10;
 public var player_position_x:float;
 public var player_position_y:float;
 public var bullet:GameObject;
 public var ShootObject: GameObject;
 
 function Start(){
 	enemigo();
 
 }
 
 function Update ()
 {
     player_position_x = transform.position.x;
     player_position_y = transform.position.y;
     
		if (Input.GetKey (KeyCode.LeftArrow)) {
			transform.Translate(Vector3(-speed,0,0) * Time.deltaTime);

		}
		
		if (Input.GetKey (KeyCode.RightArrow)) {
			transform.Translate(Vector3(speed,0,0) * Time.deltaTime);

		}
		
		if (Input.GetKey (KeyCode.UpArrow))  {
			transform.Translate(Vector3(0,speed,0) * Time.deltaTime);
		
		}

		if (Input.GetKey (KeyCode.DownArrow)) {
			transform.Translate(Vector3(0,-speed,0) * Time.deltaTime);
		 	
		}
 
     if (Input.GetButtonDown("Jump")) {
        shoot();
     }
 }
 
 function shoot() {
     var bullet_position:Vector3 = transform.position;
     var  spawned_bullet:GameObject = Instantiate(bullet, bullet_position, Quaternion.identity);
     Instantiate (ShootObject,transform.position + Vector3(0,0,0), Quaternion.Euler(0,0,0));
	 GetComponent.<AudioSource>().Play();
     
 }
 
 function enemigo(){

 
 }

#pragma strict

public var utilizar: int=0;
public var bullet:GameObject;
public var ShootObject: GameObject;
var characterInQuicksand: boolean;

function Start () {

}

function Update () {
		if (utilizar==1){
			if (Input.GetButtonDown("Jump")) {
				var bullet_position:Vector3 = transform.position;
				var  spawned_bullet:GameObject = Instantiate(bullet, bullet_position, Quaternion.identity);
				Instantiate (ShootObject,transform.position + Vector3(0,0,0), Quaternion.Euler(0,0,0));
				GetComponent.<AudioSource>().Play();	
				}
			}
		
}

function OnTriggerEnter2D (other : Collider2D) {
		if (other.gameObject.tag=="pistola"){
			characterInQuicksand = true;
			Destroy(other.gameObject);
			utilizar=1;
			}
		}


#pragma strict

var deathTime:float;
var isDying:boolean;

function Update() {
	if (isDying)
		deathTime -= Time.deltaTime;

	if (deathTime <= 0)
		gameObject.collider.enabled = false;

	if (deathTime <= -1)
		Destroy(gameObject);


}

function OnCollisionEnter(other : Collision) {
	if (other.gameObject.CompareTag('ground')) {
		isDying = true;
	}
}
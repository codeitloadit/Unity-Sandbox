#pragma strict

var deathTime:float;
var isDying:boolean;

function Update() {
	if (isDying)
		deathTime -= Time.deltaTime;

	if (deathTime <= 0)
		gameObject.collider.enabled = false;
		// Destroy(gameObject.transform.parent.gameObject);
}

function OnCollisionEnter(other : Collision) {
	if (other.gameObject.CompareTag('ground')) {
		isDying = true;
	}
}
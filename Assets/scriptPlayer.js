#pragma strict

var angle = -1;
var speed = 10;

function Start () {

}

function Update () {
	angle = -1;
	if (Input.GetKey("w") && Input.GetKey("d"))
		angle = 45;
	else if (Input.GetKey("s") && Input.GetKey("d"))
		angle = 315;
	else if (Input.GetKey("a") && Input.GetKey("w"))
		angle = 135;
	else if (Input.GetKey("a") && Input.GetKey("s"))
		angle = 225;
	else if (Input.GetKey("w"))
		angle = 90;
	else if (Input.GetKey("s"))
		angle = 270;
	else if (Input.GetKey("a"))
		angle = 180;
	else if (Input.GetKey("d"))
		angle = 0;

	if (angle >= 0) {
    	transform.position.x += Mathf.Cos(angle * Mathf.Deg2Rad) * speed * Time.deltaTime;
    	transform.position.z += Mathf.Sin(angle * Mathf.Deg2Rad) * speed * Time.deltaTime;
	}

	if (Input.GetKey("2")) {
		GameObject.Find("3D Camera").camera.enabled = false;
		GameObject.Find("2D Camera").camera.enabled = true;
	}

	if (Input.GetKey("3")) {
		GameObject.Find("2D Camera").camera.enabled = false;
		GameObject.Find("3D Camera").camera.enabled = true;
	}
}

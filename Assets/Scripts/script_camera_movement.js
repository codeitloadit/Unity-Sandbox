#pragma strict

function Start () {

}

function Update () {
	transform.position = GameObject.FindWithTag('Player').transform.position + Vector3.forward*10 + Vector3.up*5;

}
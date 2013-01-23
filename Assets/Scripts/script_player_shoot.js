#pragma strict

var prefabBullet:Transform;
var shootForce:float;

function Start() {

}

function Update() {
    if (Input.GetKeyDown('up'))
        Shoot(transform.forward);
    if (Input.GetKeyDown('down'))
        Shoot(-transform.forward);
    if (Input.GetKeyDown('left'))
        Shoot(-transform.right);
    if (Input.GetKeyDown('right'))
        Shoot(transform.right);

    if (Input.GetKey('space'))
        Shoot(-transform.up);
}

function Shoot(direction:Vector3) {
    var instanceBullet = Instantiate(prefabBullet, transform.position+Vector3.up - direction, Quaternion.identity);
    instanceBullet.rigidbody.AddForce((-direction+(Vector3.up/3)) * shootForce);
}
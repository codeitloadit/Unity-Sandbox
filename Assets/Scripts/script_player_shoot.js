#pragma strict

var prefabBullet:Transform;
var shootForce:float;

function Update() {
    if (Input.GetKeyDown('up'))
        Shoot(transform.forward);
    if (Input.GetKeyDown('down'))
        Shoot(-transform.forward);
    if (Input.GetKeyDown('left'))
        Shoot(-transform.right);
    if (Input.GetKeyDown('right'))
        Shoot(transform.right);

    if (Input.GetKeyDown('space')) {
        Shoot(-transform.up);
        Shoot(transform.forward);
        Shoot(-transform.forward);
        Shoot(transform.right);
        Shoot(-transform.right);
    }
}

function Shoot(direction:Vector3) {
    var instanceBullet = Instantiate(prefabBullet, transform.position+Vector3.up - direction, Quaternion.identity);
    instanceBullet.rigidbody.AddForce((-direction+(Vector3.up)) * shootForce);
}
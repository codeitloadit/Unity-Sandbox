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

    if (Input.GetKey('space')) {
        Shoot(-transform.up);
        Shoot(transform.forward);
        Shoot(-transform.forward);
        Shoot(transform.right);
        Shoot(-transform.right);
    }

    if (Input.GetKeyDown('x'))
        MkaeItRain();
}

function Shoot(direction:Vector3) {
    var instanceBullet = Instantiate(prefabBullet, transform.position+Vector3.up - direction, Quaternion.identity);
    instanceBullet.rigidbody.AddForce((-direction) * shootForce);
}

function MkaeItRain() {
    for (var i = 0; i < 100; i++) {
        var position = Vector3(Random.Range(-14, 14), Random.Range(5, 9), Random.Range(-14, 14));
        Instantiate(prefabBullet, position, Quaternion.identity);
    };
}
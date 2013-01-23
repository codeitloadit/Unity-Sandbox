#pragma strict

var speed:float;
var angle:int;
private var x : float;
private var z : float;
private var moveDirection : Vector3 = Vector3.zero;

private var velocity = Vector3(0, 0, 0);

function Start () {

}

function Update () {
    // angle = -1;
    // if (Input.GetKey('w'))
    //     angle = 270;
    // if (Input.GetKey('s'))
    //     angle = 90;
    // if (Input.GetKey('a'))
    //     angle = 0;
    // if (Input.GetKey('d'))
    //     angle = 180;
    // if (Input.GetKey('w') && Input.GetKey('d'))
    //     angle = 225;
    // if (Input.GetKey('w') && Input.GetKey('a'))
    //     angle = 315;
    // if (Input.GetKey('s') && Input.GetKey('d'))
    //     angle = 135;
    // if (Input.GetKey('s') && Input.GetKey('a'))
    //     angle = 45;

    // if (angle >= 0) {
    //     transform.position.x += Mathf.Cos(angle * Mathf.Deg2Rad) * speed * Time.deltaTime;
    //     transform.position.z += Mathf.Sin(angle * Mathf.Deg2Rad) * speed * Time.deltaTime;
    // }
    // velocity.x += Input.GetAxis("Horizontal") * speed;
    // velocity.y += Input.GetAxis("Vertical") * speed;

    x = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
    z = Input.GetAxis("Vertical") * Time.deltaTime * speed;
    transform.Translate(Vector3(x, 0, z));
    // rigidbody.AddForce(Vector3(x, 0, z));


    // moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
    // moveDirection = transform.TransformDirection(moveDirection);
    // moveDirection *= speed * Time.deltaTime;
    // rigidbody.AddForce(moveDirection);

}
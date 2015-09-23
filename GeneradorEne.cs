using UnityEngine;
using System.Collections;

public class GeneradorEne : MonoBehaviour {

	public GameObject[] obj;
	public float tiempoMin = 4f;
	public float tiempoMax = 6f;
	// Use this for initialization
	void Start () {
		Generar ();
	}
	
	// Update is called once per frame
	void Update () {

	}

	void Generar(){
		Instantiate (obj [Random.Range (0, obj.Length)], transform.position, Quaternion.identity);
		Invoke ("Generar", Random.Range (tiempoMin, tiempoMax));
	}
}

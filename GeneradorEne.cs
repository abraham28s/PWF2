using UnityEngine;
using System.Collections;

public class GeneradorEne : MonoBehaviour {

	public GameObject[] obj;
	public float tiempoMin = 1f;
	public float tiempoMax = 2f;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		Instantiate (obj [Random.Range (0, obj.Length)], transform.position, Quaternion.identity);
	}
}

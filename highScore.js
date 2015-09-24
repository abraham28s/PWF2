void StoreHighscore(int newHighscore)
 {
     int oldHighscore = PlayerPrefs.GetInt("highscore", 0);    
     if(newHighscore > oldHighscore)
         PlayerPrefs.SetInt("highscore", newHighscore);
 }

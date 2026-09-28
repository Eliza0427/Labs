      

def main():
  print("Hello learners!")

if __name__=="__main__":
  main()

#from urllib import response

from urllib import response

import requests

def trivia_fetch (num):
       url = f"https://opentdb.com/api.php?amount={num}"
       response = requests.get(url)
       trivia = response.json()
       return trivia["results"]
 

  
def main():
    cantidad = int(input("Cuántas preguntas quieres?: "))
    
     
    trivia = trivia_fetch(cantidad)
    for preguntas in trivia:
        print(preguntas["question"])


    

if __name__=="__main__":
    main()

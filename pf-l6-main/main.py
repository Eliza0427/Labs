def main():
  print("Hello learners!")

if __name__=="__main__":
  main()

def trivia_fetch (num):
    trivias={1: "UNO es un divertido juego de cartas",
            2: "Dos litros de agua al día son necesarios para una buena salud adulta",
            3:  "tres corazones tienen los pulpos" ,
           42:  "42 pulgadas es  la longitud maxima de un bate de baseball",
          1000:  "Las mil y una noches es un cuento "}
    
    trivia={"number":num, 
                 "text":trivias [num] }
    return(trivia)
      
      
def main():
    numero = int(input("Ingresa un número: "))
    
     
    trivia = trivia_fetch(numero)
    
  


    print(trivia)
if __name__=="__main__":
  main()




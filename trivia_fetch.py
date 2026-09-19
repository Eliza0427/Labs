def trivia_fetch (num):
    trivias={1: "UNO es un divertido juego de cartas",
            2: "Dos litros de agua al día son necesarios para una buena salud adulta",
            3:  "tres corazones tienen los pulpos" ,
            4:  "cuatro patas debe tener una silla",
            5:  "cinco son los continentes que existen"}
    
    trivia={"number":num, 
                 "text":trivias [num] }
    return(trivia)
      
      
def main():
    numero = int(input("Ingresa un número del uno al 5: "))
    
     
    trivia = trivia_fetch(numero)
    
  


    print(trivia)
if __name__=="__main__":
  main()





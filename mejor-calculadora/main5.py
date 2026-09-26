import numbers


def main():
  print("Hello learners!")

if __name__=="__main__":
  main()

# `addmultiplenumbers([num, num, ..])

num1=float(input("ingrese unnumero: ")) 
num2 = float(input("ingrese un numero: "))
num3 = float(input("ingrese un numero: "))
print("           ")

def sumamultiplenumbers(num1, num2, num3):
  return num1 + num2 + num3

result = sumamultiplenumbers(num1, num2, num3)
print(f"La suma de los números es: {result}")


def multiplymultiplenumbers(num1, num2, num3):
  return num1 * num2 * num3 

result = multiplymultiplenumbers(num1, num2, num3)
print(f"La multiplicación de los números es: {result}") 
print("           ")
print("           ")


num = float(input("Ingrese un número: "))

def isiteven(num):
  if num % 2 == 0:
    return True
  else:
    return False

result = isiteven(num)
print(f"El número es par: {result}")
print("           ")


def isitaninteger(num):
  if isinstance(num, int):
    return True
  else:
    return False

result = isitaninteger(num)
print(f"El número es un entero: {result}")
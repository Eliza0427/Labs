import numbers


def main():
  print("Hello learners!")

if __name__=="__main__":
  main()


def addmultiplenumbers(numeros):
     total=0
    
     for numero in numeros:
        total = total + numero
     return total

response = addmultiplenumbers([5,7,9])
assert response == 21
  
def multiplecomplicatednumbers(numeros):
 total=1
 for numero in numeros :
    total = total * numero
    response = addmultiplenumbers([5,-7,9.3])
    response = round(response,1)
    assert response == 7.3 

def multiplymultiplednumbers(numeros):
  total = 1 
  for numero in numeros: 
    total= total * numero
  return total
response = multiplymultipledumbers([4,-5,6.7])
response = round(response, 0)
assert response == -134

def isiteven(numero):
  
  response = isiteven(6)
  assert response == True

  def test_is_minus_three_point_eight_even():
    response = isiteven(-3.8)
  assert response == False
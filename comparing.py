def numbers_string(n):
    if n == 1:
        return '1'
    else:
        return numbers_string(n - 1) + ' ' + str(n)
    
print(numbers_string(7))



from collections import 
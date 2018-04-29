def odd_even():
    for i in range (1,2001):
        if i % 2 == 0:
            print "i is even, i is: ", i
        else:
            print "i is odd, i is: ", i
# odd_even()

def multiply(a, num):
    for i in range(0, len(a)):
        a[i] *= num
    # print a
    return a
    # return a

# multiply([2,4,5], 3)

def layered_multiples(arr):
    big_list = []
    for i in range (0, len(arr)):
        new_list = []
        # print "i is: ", i
        # print "arr[i]: ", arr[i]
        for j in range (0, arr[i]):
            # print "j is: ", j
            new_list += "1"
        # print new_list
        big_list.append(new_list)   
    print big_list 
    
layered_multiples(multiply([2,4,5], 3))
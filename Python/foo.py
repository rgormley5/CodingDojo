def is_square(n):
    for j in range (int(n/2+1)):
        if ((j*j) == n):
            return True
        else:
            return False


for i in range (2, 100):
    print i

    # if i is prime number, print "foo"
    if i % i == 0:
        print "i is: ", i
        print "foo"

    # if i is perfect square, print "bar"
    elif is_square(i) == True:
        print "i is: ", i
        print "bar"

    # else print "foobar"
    else:
        print "foobar"
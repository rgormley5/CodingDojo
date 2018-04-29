import random
random_num = random.randint(60, 100)
print random_num

def asdf():
    for i in range (0, 10):
        life = random.randint(60, 100)
        print life

        if life > 59 and life < 69:
            print "score: ", life
            print "Your grade is D"
        if life > 69 and life < 79:
            print "score: ", life
            print "Your grade is C"    
        if life > 79 and life < 89:
            print "score: ", life
            print "Your grade is B"
        if life > 89:
            print "score: ", life
            print "Your grade is A"
            
asdf()

# random_num = random.randint(60, 100)
# print random_num
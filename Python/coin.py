import random

rounded = round(random.random())
# print rounded

h = 0
t = 0
for i in range (1, 11):
    rounded = round(random.random())
    if rounded == 1:
        val = 'heads'
        h += 1

    if rounded == 0:
        val = 'tails'
        t += 1

    print 'Attempt #', i, ': Throwing a coin... Its a', val, ' .. Got', h, 'heads so far and', t, 'tails'    
    

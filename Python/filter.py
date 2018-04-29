def testInt(arg):
    if arg >= 100:
        print "That's a big number!"
    else:
        print "That's a small number"

# print testInt(50)

def testStr(arg):
    if str >= 50:
        print "Long sentence."
    else: 
        print "Short sentence."

# print testStr("lalalalalala")

def testList(arg):
    if len(arg) >= 10:
        print "Big list!"
    elif len(arg) < 10:
        print "Short list."

# print testList([1,2,3,4])

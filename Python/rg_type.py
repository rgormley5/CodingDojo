def test(arg):
    newStr = ""
    total = 0
    for i in range (0, len(arg)):
        if type(arg[i]) == str:
            newStr += arg[i]
        elif type(arg[i]) == int:
            total += arg[i]
        else:
            print "mix"

    print newStr
    print total
            
stuff = ['magical unicorns',19,'hello',98.98,'world']
test(stuff)
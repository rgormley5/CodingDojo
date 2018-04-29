def name():
    greeting = 'hello'
    name = 'dojo'
    print name + greeting

name()

def name1(arr):
    for i in range (0, len(arr)):
        print arr[i]

arr=['Wish', 'Mop', 'Bleet', 'March', 'Jerk']

name1(arr)

def name2(num):
    arr = []
    for i in range (1, 26):
        arr.append(2 * num)
    print arr
name2(3)

def name3(str):
    myStr = ""
    for i in range (len(str)-1, -1, -1):
        myStr += str[i]
    print myStr
name3("cat")

def name4():
    x = 10
    x = x * 7
    y = 30
    z = y + x
    z = z * 3
    z = z - y
    z = z / 27
    x = z + y
    y = 3
    x = x + y

    if x % 10 == 0:
        print "True"
        return True
    else:
        print "False"
        return False
name4()
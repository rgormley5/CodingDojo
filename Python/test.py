
def fun(arr):
    letters = ""
    for i in arr:
        # print i
        # if type(i) == int:
            # print "int: ", i
        if type(i) == str:
            # print "str: ", i
            for j in range (0, len(i)):
                letters += i[0]
                # print "arr[i][0] is: ", i[0]
        print letters

fun([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])




# [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
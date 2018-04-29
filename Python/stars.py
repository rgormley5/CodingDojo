# Part 1

# def draw_stars(arr):
#     stars = "*"
#     for i in range (0, len(arr)):
#         str_len = ""
#         for j in range (0, arr[i]):
#             str_len += stars 
#         print str_len

# draw_stars([4, 6, 1, 3, 5, 7, 25])

# Part 2

def draw_stars(arr):
    stars = "*"
    for i in range (0, len(arr)):
        str_len = ""
        if type(arr[i]) == int:
            for j in range (0, arr[i]):
                    str_len += stars 
                    print str_len
        else:
            for k in range (0, len(arr[i])):
                    str_len += str(arr[k])
                    print str_len 
            
        
        
        # if type(arr[i]) == str:
        #     for k in range (0, len(arr[i])):
        #         print "neat"

        # for j in range (0, arr[i]):
        #     str_len += stars 
        # print str_len

        # letters = ""
        #     if type(arr[i]) == str:
        #         arr[i][0] += letters
        #         print letters
        #     else:    


draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])


            # if type(arr[i]) is str == True:
            #     print "Cool"
            # else:    
            #     str_len += stars 
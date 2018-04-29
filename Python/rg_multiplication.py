for i in range (0, 13):
    str_len = ""
    if i == 0:
        print("x, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12")
    else:        
        for j in range (1, 13):
            str_len += str(i*j)
            str_len += "  "
    print(str_len)